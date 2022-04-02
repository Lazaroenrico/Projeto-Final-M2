import { carros } from "../model/carros.js"

export const getIndex = async (req, res) =>{
    try{
        const conect = await carros.findAll()
        res.render('index.ejs',{conect})

    }
    catch(err){
        console.log(err.message)
    }
}



