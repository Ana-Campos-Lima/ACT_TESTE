const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    env: {
      API_KEY: '53f140864ffe3f832c3f006782378780',
      API_TOKEN: 'seu-token-aqui',
    },
    baseUrl: "https://api.trello.com/1/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
