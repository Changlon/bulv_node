
/**
 *  创建数据库表
 *  @author  Changlon <changlong.a2@gmail.com>
 *  @github  https://github.com/Changlon
 *  @date    2022-02-15 20:49:19 
 */

const User = require("../src/model/user") 
User.sync({force:true}) 


