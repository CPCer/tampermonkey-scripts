/**
 * 兼容性检查
 * @param {object} param0 & param1 版本, notify
 * @return {boolean} 是否通过
 */
export function checker({
  firefox = 75,
  edge = 80,
  chrome = 80,
  safari = 14,
  notify = true,
} = {}) {
  const { userAgent } = window.navigator
  const firefoxVersion = userAgent.match(/Firefox\/(\d+)/)?.[1]
  const edgeVersion = userAgent.match(/Edg\/(\d+)/)?.[1]
  const chromeVersion = userAgent.match(/Chrome\/(\d+)/)?.[1]
  const safariVersion = userAgent.match(/Version\/(\d+).*Safari/)?.[1] // 不保证兼容

  let pass = false
  if (
    (firefoxVersion && firefoxVersion >= firefox) ||
    (edgeVersion && edgeVersion >= edge) ||
    (chromeVersion && chromeVersion >= chrome) ||
    (safariVersion && safariVersion >= safari)
  ) {
    pass = true
  }

  if (!pass) {
    notify && window.Toast && Toast.error(`哎呀！遇到错误：不支持的浏览器版本(需要Chrome${chrome}或Firefox${firefox}以上~)，请更新浏览器版本 o(╥﹏╥)o`, 0)
  }
  return pass
}
