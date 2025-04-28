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
  ],
});

createApp(App).mount('#app')

// Load using alias
loadRemote("vite_remote/ViteMFE").then((md)=>{
  console.log(md);
});

loadRemote("rspack_remote/RspackMFE").then((md)=>{
  console.log(md);
});
