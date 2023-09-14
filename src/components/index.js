import Carbonswiper from './carbonbanner/index.vue'
import Authority from './Authority/index.vue'
export const componentPlugin = {
    install(app) {
        app.component('CarbonSwiper', Carbonswiper)
        app.component('Authority', Authority)
    }
}