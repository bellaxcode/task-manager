const express = require('express');
const Task = require('./models/task')
const taskRoutes = require('./routes/tasks')
const app = express()
const mongoose = require('mongoose')


app.set('view engine' , 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
const dburl = 'mongodb+srv://mohamedbella235:zBag2QfuadJmYv6S@neoxrbot.xxdeinp.mongodb.net/?retryWrites=true&w=majority&appName=neoxrbot'
mongoose.connect(dburl  , {
    useNewUrlParser : true,
    useUnifiedTopology: true
})
    .then(result => {
    console.log(" ✅ connected to database")
        app.listen(3000)
    })
    .catch(err => {
        console.log(err)
    })
    
// Public Routes
app.get('/' , (req,res) => {
    res.redirect('/task')
})
app.use('/task' , taskRoutes)
