import type { Pinia } from 'pinia'
import type { Router } from 'vue-router'

import _ from 'lodash'
import { useModalStore } from '~/store/modal'

// TODO: have to complete the logic in the future
export default class Modal {
  private pinia: Pinia
  private router: Router
  private queryString: string

  constructor(router: Router, pinia: Pinia, queryString = 'modal') {
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

  // TODO: check why did i have to do this?
  get $store() {
    return useModalStore(this.pinia)
  }

  appendQuery(name: string) {
    const query = { ...this.$route.query, [this.queryString]: name }

    this.router.replace({ query })
  }

  removeQuery() {
    if (!_.has(this.$route.query, this.queryString)) {
      return
    }

    const query = _.omit(this.$route.query, this.queryString)

    this.router.replace({ query })
  }

  // FIXME:  這邊 type 是不是可在優化
  syncStore() {
    const modal = this.$route.query.modal

    const INITIAL_OPENED_LIST: [] = []

    if (!modal) {
      this.$store.setOpenedList(INITIAL_OPENED_LIST)
      return
    }

    this.$store.setOpenedList([modal as string])
  }
}
