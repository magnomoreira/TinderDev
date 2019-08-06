const Dev = require ('../model/Dev')
module.exports={
    async store(req, res){
       
        const { user } = req.headers ;
        const { devId } = req.params ;

        const loggedDev = await Dev.findById(user) ;
        const targetDev = await Dev.findById(DevId) ;

        if (!targetDev){
            return res.status(400).json({error: 'Dev not exists'});
        }

        if (targetDev.likes.incluides(loggedDev._id)){
            console.log('deu meti')
        }

        loggedDev.likes.push(targetDev._id);
        await loggedDev.save();

        return res.json(loggedDev);
    }
}
