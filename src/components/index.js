import Carbonswiper from './carbonbanner/index.vue'
export const componentPlugin = {
    install(app) {
        app.component('CarbonSwiper', Carbonswiper)
    }
}