<template>
  <v-container class="pa-5">
    <v-row>
      <v-col class="font-weight-black" style="font-size: 32px">Upload a photo</v-col>
    </v-row>
    <div v-if="!uploading && !done">
      <v-row>
        <v-col>
          <v-form ref="form" v-model="isFormValid" method="post">
            <v-row class="mt-3" justify="center">
              <v-col cols="12">
                <v-file-input
                  v-model="photoToUpload"
                  label="Select a photo"
                  color="secondary"
                  prepend-icon="mdi-upload"
                  :rules="rules.concat(requiredRule)"
                  accept="image/png, image/jpeg, image/jpg, image/bmp"
                  outlined
                ></v-file-input>
              </v-col>
            </v-row>
          </v-form>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="text-center">
          <v-btn
            :disabled="!isFormValid"
            color="primary"
            class="px-4"
            style="text-transform: none"
            @click="uploadImage"
          >
            Upload
          </v-btn>
        </v-col>
      </v-row>
    </div>

    <v-row v-else-if="uploading" class="mt-12">
      <v-col class="text-center font-weight-bold" style="font-size: 24px">
        <v-progress-circular class="my-12" size="100" width="6" indeterminate></v-progress-circular>
        <br />
        <span>Uploading photo...</span>
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
  import { nanoid } from 'nanoid'

  export default {
    name: 'Upload',
    data() {
      return {
        uploading: false,
        done: false,
        photoToUpload: null,
        isFormValid: false,
        rules: [(value) => !value || value.size < 10e6 || 'Photo size should be less than 10 MB!'],
        requiredRule: [(v) => !!v || 'Required'],
      }
    },
    methods: {
      uploadImage() {
        this.uploading = true
        const s3 = new this.$AWS.S3()
        const bucketName = 'hotdog-or-not-6de2bb13-bd0f-4417-9a9b-b2ca06a4da0c'

        const uniqueKey = `images/${nanoid()}.${this.photoToUpload.type.split('/')[1]}`
        const params = {
          Bucket: bucketName,
          Key: uniqueKey,
          Body: this.photoToUpload,
          ACL: 'public-read-write',
        }
        s3.upload(params, {}, (err) => {
          if (err) {
            console.error('Error', err)
          } else {
            this.uploading = false
            this.done = true
          }
        })
      },
    },
  }
</script>

<style scoped>
  >>> .v-text-field > .v-input__control > .v-input__slot {
    cursor: pointer;
  }
</style>
