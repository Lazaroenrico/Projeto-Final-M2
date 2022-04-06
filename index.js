import express from 'express'
import { routes } from './src/routes/routes.js'
import  path  from 'path'
import dotenv from 'dotenv'

dotenv.config()

const port = process.env.PORT || 4900
const __dirname = path.resolve(path.dirname(''))

const app = express()
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))
app.use(routes)


app.listen(port, (req, res) =>{
    console.log(`Rodando na ${port}`)
})


