<template>
    <Master>
        <template slot="title">添加用户</template>
        <style>
            label{
                display:block;
            }
        </style>
        <h1>添加用户</h1>
        <div id="app" v-html="form">
        </div>

        <template slot="bottom">
            <script v-html="`
            var vm=new Vue({
                    el:'#app',
                    data:{
                        model:{
                            username:'',
                            password:'',
                            birthday:'',
                            avatar:'',
                            name:''
                        }
                    },
                    methods:{
                        save(){
                            $.ajax({
                                type:'POST',
                                url:'/add-user',
                                data:this.model
                            }).done(data => {
                                console.log(data);
                                alert('success')
                            }).fail(() => {
                                alert('error')
                            })
                        }
                    }
                });
            `">
                
            </script>
        </template>
    </Master>
</template>
