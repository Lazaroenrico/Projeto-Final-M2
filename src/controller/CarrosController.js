import { carro2} from "../model/CarrosModel.js"

export const getIndex = async (req, res) =>{
    try{
        const conect = await carro2.findAll()
        res.render('index.ejs',{conect})

    }
    catch(err){
        console.log(err.message)
    }
}



