const express=require('express');
const routes=require('./routes/index.route');

const app=express();
const port=3030;
const path = require('path');

app.set('view engine','ejs');

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/public/', express.static('./public'));

app.use(routes);

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});