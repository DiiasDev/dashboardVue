/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes:{
      ligth:{
        colors:{
          primary: '#61850d',
          secondary: '#850d0d'
        },
      },
      dark:{
        colors:{
          primary: '#b4edb5',
          secondary: '#850d0d'
        },
      },
    },
  },
})
