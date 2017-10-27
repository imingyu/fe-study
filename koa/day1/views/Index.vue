<template>
    <Master>
        <template slot="title">首页</template>
        <h1>Index</h1>
        <ul>
            <li>
                <a href="./add-user">添加用户</a>
            </li>
        </ul>
        
        <h3>userList</h3>
        {{userList}}

        <template v-if="error">
            <h3>error</h3>
            {{error}}
        </template>
    </Master>
</template>
