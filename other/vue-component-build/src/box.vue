<template>
    <div class="box">
        <WxaView>msg={{msg}}</WxaView>
        <slot></slot>
    </div>
</template>

<script>
import * as util from './util.js';
import WxaView from './view.vue';
export default {
    name: 'Box',
    props: ['msg'],
    data() {
        util.log('你好 box');
        return {};
    },
    components: {
        WxaView
    }
}
</script>


<style lang="less">
    .box{
        color: red;

        .wxa-view{
            background: blue;
        }
    }
</style>
