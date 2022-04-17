
const express = require ('express');
const {connect} = require ('mongoose')
const indexRoutes = require ('./routes/index.routes')
const morgan = require ('morgan')
const path = require ('path')
const methodOverride = require('method-override');


const app = express();
const port = process.env.port || 3000;


// Parametros de conexion
const USER = "monkeyMind";
const PASSWORD = "%40Morti.mer00";
const DATA_BASE = "controlCamara";
// Preparando cadena de conexion
const CONECTOR = `mongodb+srv://${USER}:${PASSWORD}@Cluster0.jwnnw.mongodb.net/${DATA_BASE}?retryWrites=true&w=majority`;
const OPTIONS = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};
module.exports = {USER, PASSWORD, DATA_BASE,CONECTOR, OPTIONS}

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));
app.use(methodOverride('_method'));


// settings
app.use(indexRoutes);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// static files
app.use(express.static(path.join(__dirname, "public")));






connect(CONECTOR, OPTIONS)
    // si algo sale mal mostramos el error
    .then(() => {
        console.log("MONGO CONECTION OPEN!!!")
    })
    .catch (err => {
        console.log("OH NO, MONGO CONECTION ERROR!!!")
        console.log (err)
    });



app.listen(port, () => {
    console.log('Connected to port', port);
});


