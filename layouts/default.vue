<template>
  <v-app id="app">
    <v-app-bar app color="#2a2a2a" flat height="80">
      <v-avatar class="ml-3" tile size="60">
        <v-img src="/hotdog-logo.svg" contain width="80"></v-img>
      </v-avatar>
      <span class="ml-6 font-weight-black white--text" style="font-size: 32px">
        Hotdog or not hotdog
      </span>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
        <v-row justify="center">
          <v-col cols="8">
            <v-sheet style='border-radius: 30px' class="mt-6">
              <Nuxt />
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        links: ['Dashboard'],
      }
    },
    mounted() {
      const s3 = new this.$AWS.S3()

      const bucketParams = {
        Bucket: 'hotdog-or-not-6de2bb13-bd0f-4417-9a9b-b2ca06a4da0c',
      }

      s3.listObjects(bucketParams, function (err, data) {
        if (err) {
          console.log('Error', err)
        } else {
          console.log('Success', data)
        }
      })
      // const params = {
      //   Bucket: 'hotdog-or-not-6de2bb13-bd0f-4417-9a9b-b2ca06a4da0c',
      //   Key: 'tata',
      //   Body: fileStream
      // }

      // s3.upload(params, function(err, data) {
      //   if (err) {
      //     console.log('Error', err)
      //   }
      //   if (data) {
      //     console.log('Upload Success', data.Location)
      //   }
      // })
    },
  }
</script>

<style scoped>
  #app >>> {
    font-family: 'Nunito Sans', sans-serif !important;
    background: #f0f1f3;
  }
</style>
