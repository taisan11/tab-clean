import { defineConfig } from 'wxt';

// See https://wxt.dev/api/config.html
export default defineConfig({
  modules: ['@wxt-dev/module-react'],
  // manifestVersion:2,
  manifest:{
    permissions:["<all_urls>","tabs","storage"],
    name:"tab clean",
    description:"tab clean",
  },
  zip:{
    name:"tab-clean",
  }
});
