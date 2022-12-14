var dap4 = require('./daod')

app.post('/order',(req, res) => {
            let jgkj12 = req.body.sname
            let jgkj13 = req.body.smes
            let jgkj14 = req.body.sprice
            let jgkj16 = req.body.smail
            let jgkj18 = req.body.saddress
            let jgkj19 = "pending"
            const usiden4775 = req.cookies["udjw"]
dap.User.exists({erwrid: usiden4775}).then(exists => {if (exists) {
            dap.User.find({erwrid: usiden4775},(err,doc23)=>{
                console.log(err,doc23)
                let rer = doc23[0]['id']
                let rer1 = doc24[0]['cart']
dap4.daoj(jgkj12,jgkj13,jgkj14,jgkj16,jgkj18,rer,jgkj19,rer1)

            })}else{res.redirect('/')}})
        
        })
