import express from 'express'
import { routes } from './src/routes/routes.js'
import  path  from 'path'

const app = express()
const port = 4900
const __dirname = path.resolve(path.dirname(''))

app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))
app.use(routes)
app.listen(port, (req, res) =>{
    console.log(`Rodando na ${port}`)
})


