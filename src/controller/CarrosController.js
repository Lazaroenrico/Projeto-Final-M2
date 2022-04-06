import { carros} from "../model/CarrosModel.js"

export const getIndex = async (req, res) =>{
    try{
        const conect = await carros.findAll()
        res.status(200).render('index.ejs',{conect})

    }
    catch(err){
       res.status().sed({ err: err.message  })
    }
}

export const getDetalhe = async (req,res)=>{
    try{
        const carro = await carros.findByPk(req.params.id)
        console.log(carro)
        res.status(200).render('detalhe.ejs',{carro})
    }
    catch(err){
        res.status().sed({ err: err.message  })
    }
}


export const getExcluir = async (req,res)=>{
    try{
        await carros.destroy({
            where: {
                id: req.params.id
            }
        })
        res.redirect('/')
    }

    catch(err){
        res.status().sed({ err: err.message  })
    }
    
}

export const getCadastro = (req,res)=>{
    res.status(200).render('cadastro.ejs')
}

export const postCadastro = async (req,res)=>{
    try{
        const { img, modelo, ano, tanque, autonomia, fabricante} = req.body
        await carros.create({
            img, modelo, ano, tanque, autonomia, fabricante
        })
        res.status(200).redirect('/')
    }
    catch(err){
        res.send(err.message)
    }
    
}

export const getEditar = async (req,res)=>{
    const carro = await carros.findByPk(req.params.id)
    res.status(200).render('editar.ejs',{carro})
}

export const postEditar = async (req,res)=>{
    const {img, modelo, ano, tanque, autonomia, fabricante } = req.body

    try{
        await carros.update({
            img: img, 
            modelo: modelo,
            ano: ano,
            tanque: tanque,
            autonomia: autonomia,
            fabricante: fabricante },
            {
                where: {
                    id: req.params.id
                }
            } )
        res.redirect('/')
    }
    catch(err){
        res.status(500).send(err.message)
    }
}