# Debbie Cawdron

Portfolio website for Deborah Cawdron

[![Netlify Status](https://api.netlify.com/api/v1/badges/ccc3c0ba-b5ec-47df-bf4d-5a76eb6da2ee/deploy-status)](https://app.netlify.com/sites/debbie-cawdron/deploys)

## Install

Make sure that you have the Gatsby CLI program installed:

```sh
npm install --global gatsby-cli
```

### Configuration

We use dotenv to store sensitive information such as API keys, we can then create these on the build servers configuration or system environment. This means that when building the application we can pull in data from external sources without having to expose any API credentials in the final output.

When developing locally you can create a file at the root of the project called `.env`. Even easier you can copy `.env.template` to `.env` and alter these values.

### Running

Then you can run it by:

```sh
yarn develop
