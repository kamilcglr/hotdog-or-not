<template>
  <v-container class="pa-5">
    <v-row>
      <v-col class="font-weight-black" style="font-size: 32px">Labelling images</v-col>
    </v-row>
    <v-row v-if="loading">
      <v-col class="text-center">
        <v-progress-circular class="my-12" size="100" width="6" indeterminate></v-progress-circular>
      </v-col>
    </v-row>
    <div v-else-if="index < images.length">
      <v-row justify="center">
        <v-col cols="6">
          <v-card
            class="hotdog-image"
            elevation="0"
            :style="`background-image: url(${images[index].src})`"
          ></v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <v-card
            v-ripple
            class="hotdog-card"
            elevation="6"
            height="140"
            @click="nextImage('hotdog')"
          >
            <span class="title-card-choice black--text">Hotdog</span>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card
            v-ripple
            class="not-hotdog-card"
            elevation="6"
            height="140"
            @click="nextImage('not-hotdog')"
          >
            <span class="title-card-choice">Not hotdog</span>
          </v-card>
        </v-col>
      </v-row>
    </div>
    <v-row v-else-if="sending" class="mt-12">
      <v-col class="text-center font-weight-bold" style="font-size: 24px">
        <v-progress-circular class="my-12" size="100" width="6" indeterminate></v-progress-circular>
        <br />
        <span>Sending classification...</span>
      </v-col>
    </v-row>
    <v-row v-else class="mt-12">
      <v-col class="text-center font-weight-bold" style="font-size: 24px">
        Thank you for your help!
      </v-col>
      <v-col cols="12" class="text-center pt-6">
        <v-btn
          color="primary"
          style="font-weight: 600; text-transform: none"
          @click="$emit('finish')"
        >
          Exit
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Labelling',
    data() {
      return {
        loading: true,
        sending: false,
        images: [],
        index: 0,
      }
    },
    mounted() {
      this.getImages()
    },
    methods: {
      getImages() {
        this.loading = true

        const s3 = new this.$AWS.S3()
        const bucketName = 'hotdog-or-not-6de2bb13-bd0f-4417-9a9b-b2ca06a4da0c'
        const bucketParams = { Bucket: bucketName }

        s3.listObjects(bucketParams, (err, data) => {
          if (err) {
            console.error('Error', err)
          } else {
            // Shuffle array
            const shuffled = data.Contents.filter((i) => /^images\/.+$/?.test(i.Key)).sort(
              () => 0.5 - Math.random()
            )
            // Get sub-array of first n elements after shuffled
            this.images = shuffled.slice(0, 4).map((img) => {
              return {
                name: img.Key.split('/')[1],
                src: `https://${bucketName}.s3.amazonaws.com/${img.Key}`,
                label: null,
              }
            })

            this.loading = false
          }
        })
      },
      nextImage(choice) {
        this.images[this.index].label = choice
        this.index++
        if (this.index === this.images.length) {
          this.sending = true
          this.sendLabels()
        }
      },
      sendLabels() {
        const s3 = new this.$AWS.S3()
        const bucketName = 'hotdog-or-not-6de2bb13-bd0f-4417-9a9b-b2ca06a4da0c'
        const params = { Bucket: bucketName, Key: 'labels.json' }
        s3.getObject(params, (err, data) => {
          if (err) {
            console.error('Error', err)
          } else {
            const labels = JSON.parse(data.Body.toString())
            for (const img of this.images) {
              if (!labels[img.name]) {
                labels[img.name] = {
                  hotdog: 0,
                  not_hotdog: 0,
                }
              }
              if (img.label === 'hotdog') {
                labels[img.name].hotdog = +labels[img.name].hotdog + 1
              } else {
                labels[img.name].not_hotdog = +labels[img.name].not_hotdog + 1
              }
            }

            s3.putObject({ ...params, Body: Buffer.from(JSON.stringify(labels)) }, (err, data) => {
              if (err) {
                console.error('Error', err)
              } else {
                this.sending = false
              }
            })
          }
        })
      },
    },
  }
</script>

<style scoped>
  .icon-card {
    position: absolute;
    top: 20px;
    right: 20px;
  }
  .title-card-choice {
    position: absolute;
    bottom: 15px;
    left: 20px;
    font-size: 32px;
    font-weight: 800;
    color: #f5f5f5;
    outline: none;
  }
  .hotdog-image {
    border-radius: 20px;
    padding-bottom: 100%;
    background-position: center;
    background-size: 105%;
  }
  .hotdog-card {
    border-radius: 20px;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    background-image: url('/hotdog.svg');
    background-position: top;
    background-size: 102%;
  }
  .not-hotdog-card {
    border-radius: 20px;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    background-image: url('/not-hotdog.svg');
    background-position: top;
    background-size: 102%;
  }
</style>
