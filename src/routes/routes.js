import express from 'express'
import { getIndex,
    getDetalhe,
    getCadastro,
    getExcluir,
    postCadastro,
    getEditar,
} from '../controller/CarrosController.js'


export const routes = express.Router()

routes.get("/", getIndex) 
routes.get('/detalhe/:id',getDetalhe)
routes.get('/excluir/:id', getExcluir)

routes.get('/cadastro',getCadastro)
routes.post('/cadastro', postCadastro)

routes.get('/editar',getEditar)
