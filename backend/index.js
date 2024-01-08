const express = require ('express');
const cors = require ('cors');
const mongoose = require ('mongoose');
const DB_URL = ""
const app = express();
app.use(express.jason());
app.use(cors());
mongoose.connect(DB_URL).then (() => {console.log("Connected To Data Base")}).catch((e) => {console.log(e)});
const poetryRoutes = require ('./routes/poetryRoutes');
app.use('/api/v1', poetryRoutes);

app.listen(5000, () => {console.log ('Server Is Listning At Port 5000')})