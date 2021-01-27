module.exports = isProd =>
`// ==UserScript==
// @name         View UI文档辅助
// @version      1.0.3
// @description  (原iView)隐藏文档中菜单项：Pro、物料
// @author       sakura-flutter
// @namespace    https://github.com/sakura-flutter/tampermonkey-scripts
// @license      GPL-3.0
// @compatible   chrome Latest
// @compatible   firefox Latest
// @compatible   edge Latest
// @match        https://www.iviewui.com/*
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_addValueChangeListener
// @grant        GM_removeValueChangeListener
// @require      https://cdn.jsdelivr.net/npm/vue@3/dist/vue.runtime.global${isProd ? '.prod' : ''}.js
// ==/UserScript==
`
