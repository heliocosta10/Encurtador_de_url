importar expresso de 'expresso'
import { URLController } de './controller/URLController'
import { MongoConnection } de './database/MongoConnection'

const api = express()
api.use(express.json())

banco de dados const = new MongoConnection()
banco de dados.connect()

const urlController = new URLController()
api.post('/shorten', urlController.shorten)
api.get('/:hash', urlController.redirect)

api.listen(5000, () => console.log('Express listening'))
