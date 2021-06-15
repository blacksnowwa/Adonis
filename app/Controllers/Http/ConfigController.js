'use strict'
const Config = use('App/Models/Config')
const Items = use('App/Models/Item')

class ConfigController {
    async createConfig({ request, view, response, auth }){
       var item = request.all()
       var username = item[0].username

       await Config.query().where('username', username ).delete()
       

       var i = 0
       for(i in item){
        await Config.create({
            username:item[i].username,
            itemId:item[i].itemId,
        })
       }

       return await Config.all()

    }
    async getConfig({ params}){
        let tableData = await Config.query().where('username', params.username )

        // var obj = tableData.map(x=>{
        //     // var y = await Items.query().where('id',tableData[0].itemId).first()
        //     x.name = 'y.Name'
       
        // })
        var obj = tableData
        var i = 0
        for (i in obj){
            var y = await Items.query().where('id',tableData[i].itemId).first()
            obj[i].name = y.Name
            obj[i].send = 0
            obj[i].recive = 0
            obj[i].out = 0
            
        }

        return obj
    }
}

module.exports = ConfigController
