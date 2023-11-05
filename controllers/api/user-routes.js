const router = require('express').Router();
const { User } = require('../../models');

router.post('/', async (req, res)=>{
    try{
        const newUserData = await User.create({
            username: req.body.username,
            password: req.body.password,
        });

        req.session.save(()=>{
            req.session.loggedIn =true;

            res.status(200).json(newUserData);
        });
    }catch (err){
        res.status(500).json(err);
    }
});

router.post('/login', async (req,res)=>{
    try{
        const newUserData = await User.findOne({
            where:{
                username: req.body.username,
            },
        });

        if(!newUserData){
            res.status(400).json({
                message: 'Incorrect password, please try again.'
            });
            return;
        }

        const validPW = await newUserData.checkPassword(req.body.password);

        if (!validPW){
            res.status(400).json({
                message:'Incorrect password, please try again.'
            });
            return;
        }

        req.session.save(()=>{
            req.session.loggedIn = true;

            res.status(200).json({
                user: newUserData,
                message: 'Log In Successful!'
            });
        });

    }catch(err){
        res.status(500).json(err);
    }
});

router.post('/logout', (req,res)=>{
if(req.session.loggedIn){
    req.session.destroy(()=>{
        res.status(204).end();
    });
}else{
    res.status(404).end();
}
});

module.exports = router;