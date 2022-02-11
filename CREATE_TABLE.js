const {Sequelize,Model} = require("sequelize")  

const sequelize = new Sequelize("bulv_dev","bulv_dev","xi2KSYy48cLbDYEi",{
        host:"49.232.16.133",
        dialect:"mysql"
    }) 


   const User = sequelize.define('user', {
        // attributes
        firstName: {
            type: Sequelize.STRING,
            allowNull: false
        },
        lastName: {
            type: Sequelize.STRING
            // allowNull defaults to true
        }
        }, {
        // options
    }) 

     User.sync({force:true}).then(()=>{
        let res =  User.create({
            firstName:'changlon',
            lastName:'xxx'
        })
        console.log(res)
    })

    





