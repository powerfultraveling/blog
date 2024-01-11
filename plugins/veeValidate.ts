import { defineRule } from 'vee-validate'
import { required, email, min, max, length, numeric, confirmed } from '@vee-validate/rules'

export default defineNuxtPlugin(() => {
  defineRule('required', required)
  defineRule('email', email)
  defineRule('length', length)
  defineRule('min', min)
  defineRule('max', max)
  defineRule('numeric', numeric)
  defineRule('confirmed', confirmed)
})
