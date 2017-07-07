import Box from './box.vue';
import WxaView from './view.vue';

if (typeof window === 'object' && window.window === window && window.Vue) {
    window.Vue.component(Box.name, Box);
    window.Vue.component(WxaView.name, WxaView);
}

export {
    Box,
    WxaView
}