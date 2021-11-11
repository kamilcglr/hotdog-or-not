# hotdog-or-not

## WIP

## Architecture
This app is an universal app built with NuxtJS. NuxtJS is an open source framework to quickly create and organize a 
VueJS project. It comes with multiple features out-of-the-box like server-side rendering*.

All images are hosted in a S3 bucket.

How we store labels (hotdog or not hotdog) ? 

A labels.json file is also stored on S3. Everytime an user ends the labeling process, we retrieve this file from S3 
and update the corresponding field according to the inputs of the user. Each object in the json is an image identified by its
name, and the value is the count of "hotdog" and "not_hotdog".

We chose this format because it is easier in javascript to work with JSON. 

_*(Server-side rendering (SSR), 
is the ability of an application to contribute by displaying the web-page on the server instead of rendering it in the 
browser. Server-side sends a fully rendered page to the client; the client's JavaScript bundle takes over which then 
allows the Vue.js app to hydrate)_
This app uses AWS S3 with the aws-sdk package from npm.

## Build Setup

### Prerequisites
- node (v>=14) & npm 

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Enhancement

This app is for demonstration purpose only. For a production grade deployment you have to place the nuxt app behind a reverse proxy like nginx.
This will also permit you to use a SSL certificate in order to encrypt communications.

