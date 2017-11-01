var path = require('path')
var Koa = require('koa')
var Router = require('koa-router')
var bodyParser = require('koa-bodyparser')

require('mongoose').connect('mongodb://127.0.0.1:27017/fe-study', {
    useMongoClient: true
})
var UserLogic = require('./logic/user.js')

var app = new Koa()

app.use(bodyParser())

app.use(
    require('koa-vue-view')(Vue => {
        return {
            methodName: 'renderVue',
            components: {
                Master: path.resolve(__dirname, './views/Master.vue')
            }
        }
    })
)

var router = new Router()
router.get('/', async (ctx, next) => {
    ctx.state.userList = await UserLogic.findAll()
    await ctx.renderVue({
        path: path.resolve(__dirname, './views/Index.vue')
    })
    //await next()
})

router.get('/add-user', async (ctx, next) => {
    await ctx.renderVue({
        path: path.resolve(__dirname, './views/AddUser.vue'),
        data: {
            form: `
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
                `
        }
    })
    //await next()
})
router.post('/add-user', async (ctx, next) => {
    console.log(ctx.request.body)
    ctx.type = 'application/json'
    ctx.body = {
        success: true
    }
    //await next()
})
app.use(router.routes())
app.use(router.allowedMethods())
app.listen(3300)
