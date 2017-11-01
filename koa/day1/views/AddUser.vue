<template>
    <Master>
        <template slot="title">添加用户</template>
        <style>
            label{
                display:block;
            }
        </style>
        <h1>添加用户</h1>
        <div id="app" v-pre>
            <form @submit.prevent="save">
                <label>
                    用户名：<input type="text" v-model="model.username">
                </label>
                <label>
                    密码：<input type="password" v-model="model.password">
                </label>
                <label>
                    生日：<input type="text" v-model="model.birthday">
                </label>
                <label>
                    头像地址：<input type="text" v-model="model.avatar">
                </label>
                <label>
                    姓名：<input type="text" v-model="model.name">
                </label>
                <input type="submit" value="保存">
            </form>
        </div>

        <template slot="bottom">
        </template>
    </Master>
</template>

<script data-client>
console.log(`<span>123</span>`);
var vm = new Vue({
    el: '#app',
    data: {
        model: {
            username: '',
            password: '',
            birthday: '',
            avatar: '',
            name: ''
        }
    },
    methods: {
        save() {
            $.ajax({
                type: 'POST',
                url: '/add-user',
                data: this.model
            }).done(data => {
                console.log(data);
                alert('success')
            }).fail(() => {
                alert('error')
            })
        }
    }
});
</script>