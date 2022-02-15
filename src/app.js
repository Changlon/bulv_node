const Koa = require("koa") 
const app = new Koa()  

app.use(async (ctx,next)=>{
    ctx.body = {
        status:"ok",
        createtime:new Date()
    }
})

app.listen(3000,()=>{
    console.log("监听端口",3000)
})

