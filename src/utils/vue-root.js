function getVueRoot(rootContainer) {
  if (isVue2(rootContainer)) return getVue2Instance(rootContainer)
  if (isVue3(rootContainer)) return getVue3Instance(rootContainer)
  return {}
}

function isVue2(rootContainer) {
  return '__vue__' in rootContainer
}

function isVue3(rootContainer) {
  // https://github.com/vuejs/vue-next/blob/a66e53a24f445b688eef6812ecb872dc53cf2702/packages/runtime-core/src/apiCreateApp.ts#L252
  return '__vue_app__' in rootContainer
}

function getVue2Instance(rootContainer) {
  return {
    instance: rootContainer.__vue__,
  }
}

function getVue3Instance(rootContainer) {
  return {
    app: rootContainer.__vue_app__,
    // dev mode下组件el有__vueParentComponent __vnode属性
    // https://github.com/vuejs/vue-next/blob/3867bb4c14131ef94098a62bffba97a5b7d1fe66/packages/runtime-core/src/renderer.ts#L767
    // https://github.com/vuejs/vue-next/blob/3867bb4c14131ef94098a62bffba97a5b7d1fe66/packages/runtime-core/src/renderer.ts#L763

    // _vnode.component.proxy获取实例，应该就是app.mount返回的
    // https://github.com/vuejs/vue-next/blob/a66e53a24f445b688eef6812ecb872dc53cf2702/packages/runtime-core/src/apiCreateApp.ts#L258
    // https://github.com/vuejs/vue-next/blob/3867bb4c14131ef94098a62bffba97a5b7d1fe66/packages/runtime-core/src/renderer.ts#L2198
    instance: rootContainer._vnode.component.proxy,
  }
}

export {
  getVueRoot,
}
