import type { Pinia } from 'pinia'
import type { Router } from 'vue-router'

import _ from 'lodash'

// TODO: have to complete the logic in the future
export default class Modal {
  private pinia: Pinia
  private router: Router
  private queryString: string

  constructor(router: Router, pinia: Pinia, queryString: string) {
    this.router = router
    this.pinia = pinia
    this.queryString = queryString
  }

  open(name: string) {
    this.appendQuery(name)
  }

  close() {
    this.removeQuery()
  }

  get $route() {
    return this.router.currentRoute.value
  }

  appendQuery(name: string) {
    this.router.replace({ ...this.$route.query, [this.queryString]: name })
  }

  removeQuery() {
    if (!_.has(this.$route.query, this.queryString)) {
      return
    }

    const query = _.omit(this.$route, this.queryString)

    this.router.replace({ query })
  }
}
