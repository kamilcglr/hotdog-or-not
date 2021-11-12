import Vue from 'vue'

const AWS = require('aws-sdk')

export default ({ $config }, inject) => {
  AWS.config.accessKeyId = 'YOUR_AWS_ACCESS_KEY_ID'
  AWS.config.secretAccessKey = 'YOUR_AWS_SECRET_KEY_ID'
  AWS.config.sessionToken = 'YOUR_AWS_SESSION_TOKEN'
  Vue.prototype.$AWS = AWS
}
