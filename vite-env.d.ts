/// <reference types="vite/client" />
// import router from '@/router'
// declare module 'vue' {
//   interface ComponentCustomProperties {
//     $router: typeof router
//   }
// }
interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare module 'vue-router' {
  interface RouteMeta {
    breadcrumb?: {
      title?: string
    }
  }
}
