import { $ } from '@/utils/selector'
import { warn } from '@/utils/log'

export const doc360 = () => {
  $('#artContent').addEventListener('click', event => {
    const { target } = event
    const { href } = target
    warn(target)
    if (target.nodeName !== 'A') return
    if (!href) return
    // 是否本站
    if (new RegExp(location.host).test(new URL(href).host)) return

    event.stopPropagation()
    window.open(href)
  }, true)

  return {}
}
