// https://v3.nuxtjs.org/api/configuration/nuxt.config

import { defineNuxtConfig } from "nuxt3";
const { BASE_URL, API_KEY } = process.env;

export default defineNuxtConfig({
  publicRuntimeConfig: {
    baseURL: BASE_URL,
    apiKey: API_KEY,
  },
});