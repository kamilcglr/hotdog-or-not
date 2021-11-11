<template>
  <v-app id='app'>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>


export default {
  data() {
    return {
      drawer: false
    }
  },
  mounted() {

    const s3 = new this.$AWS.S3()

    const bucketParams = {
      Bucket: 'hotdog-or-not-6de2bb13-bd0f-4417-9a9b-b2ca06a4da0c'
    }

    s3.listObjects(bucketParams, function(err, data) {
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
  fetch() {

    const s3 = new this.$AWS.S3()
    const bucketParams = {
      Bucket: 'hotdog-or-not-6de2bb13-bd0f-4417-9a9b-b2ca06a4da0c'
    }

    s3.listObjects(bucketParams, function(err, data) {
      if (err) {
        console.log('Error', err)
      } else {
        console.log('Success', data)
      }
    })


  },
  methods: {}
}
</script>

<style scoped>
#app {
  font-family: 'Nunito Sans', sans-serif;
  background: #f0f1f3;
}
</style>
