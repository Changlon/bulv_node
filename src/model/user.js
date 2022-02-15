const {DataTypes } = require("sequelize") 
const sequelize = require("../db") 

  const User = module.exports = sequelize.define("user",{

    id:{
        type:DataTypes.BIGINT,
        allowNull:false,
        unique:true, 
        primaryKey:true,
        autoIncrement:true   
    },

    // 用户小程序端的 openid
    openid:{
        type:DataTypes.CHAR(50),
        allowNull:false,
        unique:true, 
    }, 

    //用户微信平台的unionid 
    unionid:{ 
        type:DataTypes.CHAR(50),
        allowNull:true,
        unique:true, 
    }, 

    //用户昵称
    nickname:{
        type:DataTypes.CHAR(100),
        allowNull:true,
        defaultValue:"bulv" 
    },

    //用户头像
    avatarUrl:{   
        type:DataTypes.CHAR(100),
        allowNull:true,
        defaultValue:""  
   }, 

   //性别
   sex:{
        type:DataTypes.INTEGER,
        allowNull:true
   }, 

   //语言
   language:{
        type:DataTypes.CHAR(20),
        allowNull:true
   },

   //城市
   city:{
        type:DataTypes.CHAR(20),
        allowNull:true
   },

   //国家
   country:{
        type:DataTypes.CHAR(20),
        allowNull:true
   },

    //省份
    province:{
        type:DataTypes.CHAR(20),
        allowNull:true
    },
       
    
    isDel:{
        type:DataTypes.INTEGER,
        defaultValue:0 
    }
    

})


User.sync({alter:true}) 
