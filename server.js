
const express = require('express')
const PORT = 8080
const HOST = '0.0.0.0'

const app = express()
app.set('view-engine','ejs')
app.use(express.urlencoded({extended:false}))
//set directories up
app.use(express.static(__dirname + '/public'));
app.use('/css',express.static(__dirname+'public/css'))
app.use('/js',express.static(__dirname+'public/js'))

app.use('/',express.static(__dirname+'/views'))

app.get('/',(req,res)=> res.render('index.ejs'))
app.get('/stream',(req,res)=>res.render('stream.ejs'))
app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
  });
  