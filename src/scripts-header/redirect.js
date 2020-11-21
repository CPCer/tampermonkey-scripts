module.exports = isProd =>
`// ==UserScript==
// @name         redirect 自动跳转到目标链接
// @version      1.1.0
// @description  自动跳转(重定向)到目标链接，免去点击步骤。适配了简书、知乎、微博、QQ邮箱
// @author       sakura-flutter
// @namespace    https://github.com/sakura-flutter/tampermonkey-scripts/commits/master/src/scripts/redirect
// @license      GPL-3.0
// @compatible   chrome >= Latest
// @compatible   firefox >= Latest
// @run-at       document-start
// @match        *://www.jianshu.com/go-wild*
// @match        *://link.zhihu.com/*
// @match        *://t.cn/*
// @match        *://mail.qq.com/cgi-bin/*
// ==/UserScript==
`