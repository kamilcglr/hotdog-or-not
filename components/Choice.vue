<template>
  <v-container class="pa-5">
    <v-row>
      <v-col class="font-weight-black" style="font-size: 32px">What do you want to do ?</v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card
          v-ripple
          min-height="35vh"
          class="label-card"
          elevation="6"
          style="border-radius: 20px; overflow: hidden; position: relative; cursor: pointer"
          @click="$emit('open-label')"
        >
          <v-icon color="#f5f5f5" size="150" class="icon-card">mdi-tag-text</v-icon>
          <span class="title-card">Label</span>
          <span class="description-card">
            Get 4 random images and choose if it is hotdog or not
          </span>
        </v-card>
      </v-col>
      <v-col>
        <v-card
          v-ripple
          min-height="35vh"
          class="upload-card"
          elevation="6"
          style="border-radius: 20px; overflow: hidden; position: relative; cursor: pointer"
          @click="$emit('open-upload')"
        >
          <v-icon color="#f5f5f5" size="150" class="icon-card">mdi-cloud-upload</v-icon>
          <span class="title-card">Upload</span>
          <span class="description-card">
            Contribute by uploading your hotdog or not-hotdog image
          </span>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Choice',
  }
</script>

<style scoped>
  .icon-card {
    position: absolute;
    top: 20px;
    right: 20px;
  }
  .title-card {
    position: absolute;
    bottom: 60px;
    left: 20px;
    font-size: 44px;
    font-weight: 900;
    color: #f5f5f5;
    outline: none;
  }
  .description-card {
    position: absolute;
    bottom: 15px;
    left: 20px;
    font-size: 16px;
    font-weight: 600;
    color: #f5f5f5;
    outline: none;
  }
  .label-card {
    background: rgb(10, 71, 113);
    background: -moz-linear-gradient(196deg, rgba(10, 71, 113, 1) 0%, rgba(0, 126, 213, 1) 100%);
    background: -webkit-linear-gradient(196deg, rgba(10, 71, 113, 1) 0%, rgba(0, 126, 213, 1) 100%);
    background: linear-gradient(196deg, rgba(10, 71, 113, 1) 0%, rgba(0, 126, 213, 1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#0a4771",endColorstr="#007ed5",GradientType=1);
  }
  .upload-card {
    background: rgb(216, 17, 89);
    background: -moz-linear-gradient(346deg, rgba(216, 17, 89, 1) 0%, rgba(117, 22, 56, 1) 100%);
    background: -webkit-linear-gradient(346deg, rgba(216, 17, 89, 1) 0%, rgba(117, 22, 56, 1) 100%);
    background: linear-gradient(346deg, rgba(216, 17, 89, 1) 0%, rgba(117, 22, 56, 1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#d81159",endColorstr="#751638",GradientType=1);
  }
</style>
