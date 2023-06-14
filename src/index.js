import express from 'express';
import { engine } from 'express-handlebars';
import router from './routes/index.js';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
dotenv.config()

const app = express()
const port = process.env.PORT;

app.use(express.static('src/public'));

//req.body
app.use(express.json());


//extname duoi cua file (.handlebars -> .hbs)
app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', './src/views');


//get lay du lieu va yeu cau du lieu
//post upload va update du lieu 

app.get('/', (req, res) => {
    res.send('hello world');
})

//get handlebars 
app.get('/handle', (req, res) => {
    res.render('new', {
        //isShow: true,false la invisible
        //helpers 
        isShow: false,
        helpers: {
            message() { return 'thang!'; },
            notied() { return 'thong bao!'; }
        }
    });
})

//connect to mongodb
mongoose.connect(process.env.MONGO_DB).then(() => {
    console.log('ket noi toi mongo thanh cong')
}).catch((err) => {
    console.log(err)
})

router(app);

app.listen(port, () => {
    console.log("Server is running in port: ", port);
})

//get('/user/:id') : lay so thu tu 1 co the tao ra nhieu trang theo cach id++;  
// app.get('/user/:id', (req, res) => {
//     res.send('wellcome to the new demo');
// })