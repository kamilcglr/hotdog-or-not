import Vue from 'vue'

const AWS = require('aws-sdk')

export default ({ $config }, inject) => {
  AWS.config.accessKeyId = 'ASIA4NOC5OTVHKW2K574'
  AWS.config.secretAccessKey = 'CHU8BK8sQJFCcI6cYzrhbrAv9aWoN5MouqaHzXN0'
  AWS.config.sessionToken = 'FwoGZXIvYXdzEHEaDD1ybeLwR15kEGsADiK3ARHqD8pfMQlUI7BQT8YXX5+1m0TFqPR0rsyw2gdvccTq0UHy8pfzoyMHUJ/0aSx6z6bWV4mguVuqw5SbI4ZzAjjdjaz7m1J3jEk23zI6oDfQHk/0eT/7PGt3PqH99V1A4Pc2yP1jHD93f/10LJPZgGSAOfJNSOn4Ees1gmNQvTJUTZp4uAIk0E54e/Y5DTkP1F/jFKgNy7rqsRv4b7Z+jULCIxT9hHVv322eULLQrAGwWEyaiUo32ija7rSMBjIt0ZEyR5wXQln1wlXZj1d5K9oR82//jXd/YZkrdD9mrQwQ9gasXYqHXlEZVs7h'
  Vue.prototype.$AWS = AWS
}
