const userModel = require ('../models/user');

// obtener todos
const getAll =(req,res)=>{
userModel.find((err,users)=>{
  if(err) return res.status(500).json({message:"something went wrong with the server"});
  if(users){
      res.status(200).json({message:"We've  obtained  users satisfactory ",users_:users})

  }
  else{
      res.status(404).json({message:"User not found "})
  }  
})
}
// obtener uno

const getById=(req,res)=>{
    let id= req.params.id;
    userModel.findById(id,(err,users)=>{
      if(err) return res.status(500).json({message:"something went wrong with the server"});
      if(users){
          res.status(200).json({message:"We've  obtained  users satisfactory ",users_:users})
    
      }
      else{
        res.status(404).json({message:"User not found "})
    }  
    })
    }

    //Crear
    /**
     * *
     * *BODY: {
     *     username: String,
     *     email: String,
     *     password: String
     * }
     */
    const createUser = (req, res) =>{
        let new_user = new userModel(req.body);
        new_user.save((err) =>{
            if(err) return res.status(500).json({message: "Cagadation"})
            res.status(200).json({message: "Success"});
        });
    }

    // actualizar 
    const updateUser= (req,res)=>{
        let user=req.body;
        if(!user._id){
            return res.status(400).json({message:"id is required"})
        }
        userModel.update({id: user._id},user).then(value=>{
            res.status(200).json({message:"update was successful",user_:user}).catch((err)=>{
                res.status(500).json({message:"Something went wrong"});
            });
        });

    };

    //Eliminar
    const deleteUser= (req,res)=>{
        let user=req.body;
        if(!user._id){
            return res.status(400).json({message:"id is required"})
        }
        userModel.deleteOne({id: user._id},user).then(value=>{
            res.status(200).json({message:"deleted",user_:user}).catch((err)=>{
                res.status(500).json({message:"Something went wrong"});
            });
        });

    };
    module.exports = {
        getAll,
        getById,
        createUser,
        updateUser,
        deleteUser
    }
