const bcrypt = require("bcryptjs")

const data = {
    users:[
        {
            name:"kaushik",
            password:bcrypt.hashSync("kaushik@12",8),
            isAdmin:true,
            email:"kaushikvaghasiya12@gmail.com",
        },
        {
            name:"kaushik1",
            password:bcrypt.hashSync("kaushik@123",8),
            isAdmin:true,
            email:"kaushikvaghasiya605@gmail.com",
        },
    ]
}

module.exports=data