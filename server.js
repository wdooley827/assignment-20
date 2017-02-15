const express = require('express');
const ejs = require('ejs')
const axios = require('axios')

const PORT = process.env.PORT || 3000;
const app = express();

//SET PORT
app.set('port', PORT)

//SET VIEW ENGINE
app.set('views', './dist');
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');

//Serve from
app.use( express.static(`${__dirname}/dist/`));


//Router
let appRouter = express.Router()

appRouter.get('/proxy', (req,res)=>{
	axios.get(`${req.query.api}`).then((serverRes)=>{
		return res.json(serverRes.data).status(200)
	})		
})

appRouter.get('/', (req, res)=>{
	res.render('index')
})

app.use(appRouter)

app.listen(PORT, ()=>{
	console.log(`Listening for requests on http://localhost:${PORT}`)
})

