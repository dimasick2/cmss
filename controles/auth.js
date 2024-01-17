//controller

const User=require('../modul/registor')

module.exports.login=async  function(req,res){
    const Authorization = {
        email:req.body.email,
        password: req.body.password,
    }
    
    const polzovatel = await User.findOne({email:req.body.email},{password:req.body.password} );
    console.log(polzovatel);
    if(polzovatel){
     console.log('Вход разрещен');
    res.json({"message":"true"})

    }else{
    console.log('Неверный логин или пароль');
    res.json({"message":"false"})

    }

}

module.exports.registry=async function(req,res){
    const user = new User({
        email: req.body.email,
        password: req.body.password,
    })
    const currentUser=await User.findOne({email:req.body.email});
    console.log(currentUser);
    if(currentUser){
        console.log('Пользователь уже существует');
        res.json({"message":"false"})
    }else{
        user.save().then(()=>{
            res.json({"message":"true"})
        })
    }
    
    // .catch(()=>{
    //     console.log('Ошибка')

    // })
}
