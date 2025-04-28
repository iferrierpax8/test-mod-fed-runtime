import { init, loadRemote } from '@module-federation/enhanced/runtime';
import { createApp } from 'vue'
import App from './App.vue'

init({
  name: 'vue-cli-host',
  remotes: [
    {
      name: "vite_remote",
      entry: "http://localhost:2001/mf-manifest.json",
      alias: "vite_remote"
    },
    {
      name: "rspack_remote",
      entry: "http://localhost:2000/mf-manifest.json",
      alias: "rspack_remote"
    },
    {
      name: "vue_cli_remote",
      entry: "http://localhost:2002/remoteEntry.js",
      alias: "vue-cli-remote"
    },
  ],
});

export const mfes = {
  vite_remote: loadRemote("vite_remote/ViteMFE").then((md) => md),
  rspack_remote: loadRemote("rspack_remote/RspackMFE").then((md) => md),
  vue_cli_remote: loadRemote("vue_cli_remote/VueCliMFE").then((md) => md),
  vue_cli_remote_horizontal: loadRemote("vue_cli_remote/HorizontalVueCli").then((md) => md),
}

createApp(App).mount('#app')
