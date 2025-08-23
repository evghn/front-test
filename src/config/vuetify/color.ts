/**
 * Все стандартные цвета Vuetify + кастомные
 * @see https://vuetifyjs.com/en/styles/colors/
 */

type BaseVuetifyColor =
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'success'
  | 'error'
  | 'warning'
  | 'info'
  | 'red'
  | 'pink'
  | 'purple'
  | 'deep-purple'
  | 'indigo'
  | 'blue'
  | 'light-blue'
  | 'cyan'
  | 'teal'
  | 'green'
  | 'light-green'
  | 'lime'
  | 'yellow'
  | 'amber'
  | 'orange'
  | 'deep-orange'
  | 'brown'
  | 'grey'
  | 'blue-grey'
  | 'black'
  | 'white'
  | 'transparent'
  | `shades-${'black' | 'white'}`
  | `${string}-${'lighten' | 'darken' | 'accent'}-${1 | 2 | 3 | 4 | 5}`

export type VuetifyColor =
  | BaseVuetifyColor
  | `${string}-${'lighten' | 'darken' | 'accent'}-${1 | 2 | 3 | 4 | 5}`
  | `on-${BaseVuetifyColor}` // Для текста на цветном фоне
  | (string & {}) // Fallback для кастомных цветов
