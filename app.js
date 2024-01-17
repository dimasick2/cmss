const express = require('express')

const multer  = require("multer");

const authRouter=require('./routs/auth')
const orderRouter=require('./routs/order')
const categoryRouter = require('./routs/category')
const positionRouter = require('./routs/position')
const historyRouter = require('./routs/history')
const atcategoryRouter = require('./routs/atcategory')


const confige = require('./confige/confige')
const  mongoose  = require('mongoose')
const app = express()
app.set("view engine", "hbs");
app.use(express.static(__dirname + "/style"));
app.use(express.json())

app.use(multer({dest:"uploads"}).single("filedata"));
app.post("/upload", function (req, res, next) {
   
    let filedata = req.file;
    console.log(filedata);
    if(!filedata)
        res.send("Ошибка при загрузке файла");
    else
        res.send("Файл загружен");
});

mongoose.connect(confige.mongoUrl)
    .then(()=>{
        console.log('Подключелись')
    })
     .catch(()=>{
        console.log('Ошибка')
     })



// app.use('/api/auth',authRouter)
app.use('/api/auth',authRouter)
app.use('/api/order',orderRouter)
app.use('/api/category',categoryRouter)
app.use('/api/atcategory',atcategoryRouter)
app.use('/api/position',positionRouter)
app.use('/api/history',historyRouter)
app.get('/',function(req,res){
    res.render('app.hbs')

})
app.get('/index',function(req,res){
    res.render('index.hbs')

})

app.get('/avtorisation',function(req,res){
    res.render('avtorisation.hbs')
})
app.get("/registor",function(req,res){
    res.render('registor.hbs')
})
app.get('/srm',function(req,res){
    res.render('srm.hbs')
})
app.get('/atcategory',function(req,res){
    res.render('atcategory.hbs')
})
app.get('/categories',function(req,res){
    // const currentUser=await Category.findOne({category:req.body.category});

    res.render('categories.hbs')
})
app.get('/order',function(req,res){
    res.render('order.hbs')
})
app.get('/history',function(req,res){
    res.render('history.hbs')
})
app.get('/append',function(req,res){
    res.render('append.hbs')
})
app.listen(3000, function(){
    console.log('Сервер запущен')
})










// Я нажимаю на ссылку где сейчас в ней написано напитки и перехожу в /api/position/{{this.id}} в файл srm.hbs
//  <div class="table">.
//                  <form action="">
//                  {{#each category}}

//                  <div class="tr"><a href="/api/position/{{this.id}}">{{this.category}}</a><a method="DELETE" href="{{this._id}}" class="a1">Удалить</a>
//                  </div>    
//                  </form>         
//              {{/each}}.
//              </div> 
            
            
// _id
//  6565dbc5e1d1d0328bfdefbf
//  category
//  "Напитки"
//  __v
//  0
//  _id
//   6569c74f4d6b81e25d9ebe7d
//  category
//  "Пиццы"
//  __v
//  0
//   в адресной строке написано /api/position/6565dbc5e1d1d0328bfdefbf
//  <div class="table">
//                 <form action="">
//                  {{#each category}}

//                  <div class="tr"><a href="/api/position/{{this.id}}">{{this.category}}</a><a method="DELETE" href="{{this._id}}" class="a1">Удалить</a>
//                <div class="delite">Удалить</div> 
//                 </div>    
//                  </form>         
//             </div>    
//             Я добавил эти позиции в mongodb  
// _id
// 6572d9b250a56f7b31690701
// position
// "Sprite "
// price
// "5$"
// idCategory
// "6565dbc5e1d1d0328bfdefbf"
// И  отображаю их 
//  <div class="table">
// {{#each position}}
//  <form action="">
//      <div class="tr">
//         <a href="/api/order">{{this.position}} {{this.price}}</a>
//         <a method="DELETE" href="{{this._id}}" class="a1">Удалить</a>
//     </div>
//  </form>
//  {{/each}}
//  </div>  
// Но если я нажму на другую ссылку то он перейдёт также в файл srm.hbs /api/position/6569c74f4d6b81e25d9ebe7d
// сдесь теперь другой id .
// И я хочу чтобы теперь эти позиции не отображались