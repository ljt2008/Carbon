//引入useIntersectionObserver 
import { useIntersectionObserver } from '@vueuse/core'
export default {
    install: (app, options) => {
        app.directive('img-lazy', {
            mounted(el, binding) {
                el.src = options.defaultsrc
                const { stop } = useIntersectionObserver(el, ([{ isIntersecting }]) => {
                    if (isIntersecting) {
                        el.src = binding.value;
                        stop()
                    }
                }, {
                    rootMargin: "200px 0px",
                })
            }
        })
    }
}