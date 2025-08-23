import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

export function setupVuetify() {
  const vuetifyInstance = createVuetify({
    components: {
      ...components,
    },
    directives,
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: { mdi },
    },
    theme: {
      defaultTheme: 'system',
      themes: {
        light: {
          colors: {
            primary: '#1867C0',
            secondary: '#5CBBF6',
            error: '#FF5252',
            success: '#4CAF50',
            warning: '#FFC107',
          },
        },
        dark: {
          colors: {
            primary: '#1E88E5',
            secondary: '#90CAF9',
            error: '#FF5252',
            success: '#4CAF50',
            warning: '#FFC107',
          },
        },
      },
    },
    defaults: {
      global: {
        ripple: true,
      },
      VBtn: {
        variant: 'flat',
        height: '44px',
        rounded: 'lg',
        class: 'text-none',
      },
      VTextField: {
        variant: 'outlined',
        density: 'comfortable',
      },
      VTimePicker: {
        color: 'primary',
      },
      VNumberInput: {
        variant: 'outlined',
      },
    },
  })

  const install = (app: any) => {
    app.use(vuetifyInstance)
  }

  return {
    vuetify: vuetifyInstance,
    install,
  }
}

// Создаем и экспортируем готовый экземпляр
// export const vuetify = setupVuetify() {
//   return {
//     vuetify: vuetifyInstance,
//     install,
//     getRenderers: () => vuetifyRenderers,
//   }
// }

// Создаем и экспортируем готовый экземпляр
export const vuetify = setupVuetify()
