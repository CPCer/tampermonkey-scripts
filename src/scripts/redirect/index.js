import * as readyState from '@/utils/ready-state'
import { $ } from '@/utils/selector'
import { table as logTable } from '@/utils/log'
import sites from './sites'

class App {
  #sites = []
  constructor(sites) {
    this.#sites = sites
  }

  boot() {
    const briefURL = location.origin + location.pathname

    this.#sites.forEach(async site => {
      const { name, test, use } = site
      const some = [].concat(test).some(item => {
        if (item instanceof RegExp) return item.test(briefURL)
        if (typeof item === 'boolean') return item

        return false
      })
      if (some === false) return

      const config = use()
      const { readyState: state } = config
      if (state) await readyState[state]()

      let redirection = null
      const { link, selector } = config
      if (link) {
        redirection = link
      } else if (selector) {
        redirection = $(selector)?.innerText.trim()
      }

      logTable({ name, briefURL, redirection })
      redirection && location.replace(redirection)
    })
  }
}

new App(sites).boot()