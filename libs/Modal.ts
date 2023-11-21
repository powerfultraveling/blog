import type { Pinia } from 'pinia'
import type { Router } from 'vue-router'

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

  // close(){

  // }

  get $route() {
    return this.router.currentRoute
  }

  appendQuery(name: string) {
    this.router.replace({ ...this.$route.value.query, [this.queryString]: name })
  }

  //   removeQuery(name) {}
}
