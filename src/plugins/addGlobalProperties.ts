import { App } from "vue";

type Filter = {
  format:<T extends any>(str:string) => string
}

declare module '@vue/runtime-core'{
  export interface componentCustomProperties{
    $filters:Filter
  }
}

export function setupGlobalProperties(app: App) {
  app.config.globalProperties.$filters = {
    format<T>(str: string): string {
      return `demo${str}`;
    },
  };
}
