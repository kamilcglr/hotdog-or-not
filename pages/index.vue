<template>
  <v-container>
    <Choice
      v-if="!labelling && !uploading"
      @open-label="labelling = true"
      @open-upload="uploading = true"
    ></Choice>
    <Labelling v-if="labelling" @finish="labelling = false"></Labelling>
    <Upload v-if="uploading" @finish="uploading = false"></Upload>
  </v-container>
</template>

<script>
  import Choice from '~/components/Choice'
  export default {
    name: 'Index',
    components: { Choice },
    data() {
      return {
        labelling: false,
        uploading: false,
      }
    },
  }
</script>

<style scoped></style>
