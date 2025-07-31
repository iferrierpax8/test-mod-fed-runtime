import type { ModuleFederationRuntimePlugin } from '@module-federation/enhanced/runtime';

const runtimePlugin: () => ModuleFederationRuntimePlugin = function () {
  return {
    name: 'my-runtime-plugin',
    beforeInit(args) {
      console.log('beforeInit: ', args);
      return args;
    },
    init(args) {
      console.log('init: ', args);
      return args;
    },
    beforeInitContainer(args) {
      console.log('beforeInitContainer: ', args);
      return args;
    },
    beforeRequest(args) {
      console.log('beforeRequest: ', args);
      return args;
    },
    beforeRegisterRemote(args) {
      console.log('beforeRegisterRemote: ', args);
      return args;
    },
    registerRemote(args) {  
      console.log('registerRemote: ', args);
      return args;
    },
    async initContainer(args) {
      console.log('initContainer: ', args);
      return args;
    },
    loadEntry(args) {
      console.log('loadEntry: ', args);

      debugger;

      // @ts-ignore
      args.remoteEntryExports = {}
      // @ts-ignore
      args.remoteEntryExports.get = window.vue_cli_remote.get;

      return args;
    },
    afterResolve(args) {
      try {
        console.log('afterResolve', args);

        // @ts-ignore
        args.remoteEntryExports = {}
        // @ts-ignore
        args.remoteEntryExports.get = window.vue_cli_remote.get;
        

        return args;
      } catch (error) {
        console.error('afterResolve error: ', error);
        return args;
      }
    },
    onLoad(args) {
      try {
        console.log('onLoad: ', args);
        return args;
      } catch (error) {
        console.error('onLoad error: ', error);
        return args;
      }
    },
    handlePreloadModule(args) {
      console.log('handlePreloadModule: ', args);
      return args;
    },
    async errorLoadRemote(args) {
      console.log('errorLoadRemote: ', args);
      return args.options;
    },
    async beforeLoadShare(args) {
      console.log('beforeLoadShare: ', args);
      return args;
    },
    async loadShare(args) {
      console.log('loadShare:', args);
    },
    resolveShare(args) {
      console.log('resolveShare: ', args);
      return args;
    },
    async beforePreloadRemote(args) {
      console.log('beforePreloadRemote: ', args);
      return args;
    },
    preloadRemote(args) {
      console.log('preloadRemote: ', args);
      return args;
    },
    async generatePreloadAssets(args) {
      console.log('generatePreloadAssets: ', args);
      return args;
    },
    loaderHook(args) {
      console.log('loaderHook: ', args);
      return args;
    },
    createScript(args) {
      console.log('createScript: ', args);
      return args;
    },
  };
};
export default runtimePlugin;