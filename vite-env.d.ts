/// <reference types="vite/client" />
import router from '@/router'
declare module 'vue' {
  interface ComponentCustomProperties {
    $router: typeof router
  }
}

declare module 'vue-router' {
  interface RouteMeta {
    breadcrumb?: {
      title?: string
    }
  }
}
