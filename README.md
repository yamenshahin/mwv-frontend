# front-end

> My marvelous Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ npm run install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# deploy
eb deploy Front-end-HelloVans-Stage
eb deploy Front-end-HelloVans-Live

# generate static project
$ npm run generate
$ aws s3 cp dist s3://hellovans.com --recursive
$ aws s3 cp dist s3://manvanstage.com --recursive
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
