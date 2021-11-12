# Hotdog or not hotdog web app
                                
## What is it ? 

This project is a web app which allows you to label images, or to upload your own image.
<br/>
Each image should represent a hotdog, or not. 
<br/>
These images could be used as a dataset for a machine learning model in order to train this model to recognize hotdogs.

## Demonstration 

Demonstration shows how to label images, and how labels are stored in S3 bucket.
It also shows how to upload an image and where it is stored.

[See the video demonstration](https://youtu.be/TqaHy4akZpo)

## Architecture

This app is an universal app built with NuxtJS.
<br/>
NuxtJS is an open source framework to quickly create and organize a
VueJS project. It comes with multiple features out-of-the-box like
server-side rendering.
<br/>
The server is hosted on an EC2 from AWS.

*(Server-side rendering (SSR) is the ability of an application to contribute
by displaying the web-page on the server instead of rendering it in the browser.
Server-side sends a fully rendered page to the client; the client's JavaScript
bundle takes over which then allows the Vue.js app to hydrate)*

This app uses AWS S3 with the aws-sdk package from npm to interact with AWS S3.

### How we store images ?

Images are stored in an S3 bucket from AWS. It gives your image with a nano ID `nano-id.jpg` or another file extension.

[Nano ID npm package](https://www.npmjs.com/package/nanoid)

### How we store labels (hotdog or not hotdog) ?

A `labels.json` file is also stored on S3. 
<br/>
Everytime a user ends the labeling process, this file is retrieved from S3 bucket and updated with the according inputs of the user. 
<br/>
Each object in the json is an image identified by its name, and the value is the count of `hotdog` and `not_hotdog`.
<br/>
We chose this format because it is easier in javascript to work with JSON.

Here is an example of the JSON file : 

```json5
{
  "V1StGXR8_Z5jdHi6B-myT": { 
    "hotdog":  1, 
    "not_hotdog":  32
  },
  "b4hf56sk5gGBT5Y4NIi6B": { 
    "hotdog":  23, 
    "not_hotdog":  0
  }
}
```


## Build Setup

### Enhancement                                                                               
                                                                                             
This app is for demonstration purpose only. For a production grade deployment you have 
to place the nuxt app behind a reverse proxy like nginx.     
This will also permit you to use an SSL certificate in order to encrypt communications.       

### Prerequisites

You need nodeJS (v>=14) and npm to run the project.

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






