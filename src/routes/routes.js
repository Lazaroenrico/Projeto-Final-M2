import express from 'express'
import { getIndex, } from '../controller/CarrosController.js'


export const routes = express.Router()

routes.get("/", getIndex) 