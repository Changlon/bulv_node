const env = process.env.NODE_ENV  
const {DEV,PRO} = require("../config/db.config") 
const {Sequelize} = require("sequelize")  
let sequelize = null 

if( "production" != env) {  
    sequelize = new Sequelize(DEV.database,DEV.user,DEV.password,{
        host:DEV.host,
        dialect:"mysql",
        define: {
            freezeTableName: true,
            underscored: true,
            timestamps:true ,
        }
    }) 
}else{
    sequelize = new Sequelize(PRO.database,PRO.user,PRO.password,{
        host:PRO.host,
        dialect:"mysql",
        define: {
            freezeTableName: true,
            underscored: true,
            timestamps:true ,
        }
    }) 

}

module.exports = sequelize 








