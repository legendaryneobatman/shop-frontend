import {Api} from '@@/api/generated/api'

type SecurityData = {
  accessToken: string
}
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp
  const api = new Api<SecurityData>({
    securityWorker: (securityData) => {
      if (!securityData?.accessToken) return

      return {
        headers: {
          Authorization: securityData.accessToken
        }
      }
    }
  })

  return {
    provide: {
      api
    }
  }
})
