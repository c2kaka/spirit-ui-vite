import { App } from 'vue'
import SFCButton from './button/SButton.vue'
import JSXButton from './button/JSXButton'

export { SFCButton, JSXButton }

export default {
    install(app: App): void {
        app.component(SFCButton.name, SFCButton)
        app.component(JSXButton.name, JSXButton)
    }
}