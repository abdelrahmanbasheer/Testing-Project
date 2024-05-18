const { defineConfig } = require("cypress");

const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const preprocessor = require('@badeball/cypress-cucumber-preprocessor');
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild');

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin.default(config)],
      });
      
      on('file:preprocessor', bundler);
      await preprocessor.addCucumberPreprocessorPlugin(on, config);
      
      return config;
    },
    viewportHeight:1080,
    viewportWidth:1920,
    watchForFileChanges:false,
    chromeWebSecurity:false,
    specPattern: 'cypress/e2e/**/*.feature',
    supportFile: false,
  },
});
