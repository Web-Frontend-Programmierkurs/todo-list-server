import express from 'express'
import cors from 'cors'
import router from './router'

const app = express()
app.use(cors())
app.use(express.json())
app.use(router)

const port = process.env.PORT || 8080
app.listen(port, () => console.info(`Listening on port ${port}`))
