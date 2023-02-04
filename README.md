# Erin Kelsey

Resume project hosted at https://erinkelsey.io

The contact form is implemented with Emjinx, check out https://emjinx.com for more details.

The project is based off the example by Brittany Chiang: https://github.com/bchiang7/v4

## Setup

        $ npm install

Stop Dropbox from syncing node_modules:

        $ xattr -w com.dropbox.ignored 1 node_modules/

Create a .env file in the root directory with the following environment variables:

        GATSBY_EMJINX_API_URL=https://api.emjinx.com/rest/
        GATSBY_EMJINX_API_KEY=your-emjinx-api-key
        GATSBY_GTAG_ID=your-google-gtag-id

## Run

        $ gatsby develop

Location: http://localhost:8000

GraphiQL: http://localhost:8000/\_\_\_graphql

Note: Google Analytics will only work in production mode, so to see if your Google GTag is working run the Build and Deploy commands

## Build

        $ gatsby build

## Deploy

Locally:

        $ gatsby serve
