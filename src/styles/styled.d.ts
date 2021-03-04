import 'styled-components'
import 'react-notifications-component'

declare module 'style-components' {
  export interface DefaultTheme {
    title: string

    colors: {
      primary: string
      secondary: string
      img: string
      background: string
      text: string
      menuHover: string
      inputTxtColor: string
      inputBackground: string
      inputBorderColor: string
      labelColor: string
      inputIn: string
    }
  }
}
