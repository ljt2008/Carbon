import { ref, watchEffect } from 'vue'
const LOCAL_RATE = '__pagerate__';
const LOCAL_THEME = '__theme__';
const rate = ref(Number(localStorage.getItem(LOCAL_RATE)) || 100)
const theme = ref(localStorage.getItem(LOCAL_THEME) || 'light');
function rateAdd() {
    rate.value = rate.value < 200 ? rate.value + 10 : rate.value
}
function rateSub() {
    rate.value = rate.value > 50 ? rate.value - 10 : rate.value
}

watchEffect(() => {
    localStorage.setItem(LOCAL_RATE, rate.value);
})

watchEffect(() => {
    document.documentElement.dataset.theme = theme.value;
    localStorage.setItem(LOCAL_THEME, theme.value);
})
export default function usecomichelp() {
    return {
        theme,
        rate,
        rateSub,
        rateAdd
    }
}