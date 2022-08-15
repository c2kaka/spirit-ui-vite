import { App } from 'vue'

import SButton from './button/index'
import "uno.css";

export { SButton }

export default {
    install(app: App): void {
        app.component(SButton.name, SButton)
    }
}