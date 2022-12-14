const mongoose= require('mongoose')
const Od = require('./od')
const uri = 'mongodb+srv://fadmin:cNtq5yCoasrwm40V@cluster0.5vccnjw.mongodb.net/?retryWrites=true&w=majority'
try {
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log("connected")
  ) 
} catch (error) {
    console.log(error)
} 
async function daod(uame,umes,urice,umail,uddress,uuthor,utate,uontent){
    try{
        const od = await Od.create({
            name: uame,
            mes: umes,
            tprice: urice,
            email: umail,
            address: uddress,
            author:uuthor,
            tt: utate,
            cont:uontent,
            t:2
    })
    }
    catch(e){
        var dt = Date.now()
        console.log(e.message)
        fs = require('fs');
        fs.writeFile('erme', `${dt} +++++ ${e.message} +++++ ${e}\n`, { flag: 'a' },()=>{
    })
}}
module.exports={daod,Od}
