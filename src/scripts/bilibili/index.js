// 让视频的快捷键在整个页面上都生效，不局限于只能点击视频区域才能使用
function attachVideoShortcutKeysInPage() {
  // jsc-player:formatted 约 37833、38867 行，事件疑似经过 M.event 3023 行包装
  // 关键在于把 containerFocus 设为 true
  // 或调用 seekFromArrowLeft 等函数
  // fix: click 会在切换视频后失效，不知道为什么就是很奇怪😮，用 keydown 替代
  window.addEventListener('keydown', () => {
    const selectors = [
      '.bilibili-player-video-wrap', // 视频
      '.bpx-player-sending-area', // 番剧
    ]

    // 用第一种方式简单点
    unsafeWindow.$(selectors.join()).trigger('click.bilibiliplayer')
  }, true)
}

attachVideoShortcutKeysInPage()
