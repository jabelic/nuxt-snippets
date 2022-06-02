import { Context } from '@nuxt/types'

export default function (context: Context) {
  console.debug('middleware dir', context.route.fullPath)
}
