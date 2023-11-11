import { createToast } from "mosha-vue-toastify";
export const showToast = (message, type, bg = null) => {
    createToast(message,{
        position: "top-center",
        toastBackgroundColor: bg,
        transition: "bounce",
        type,
        showIcon: "true",
        timeout: 3500,
    });
};