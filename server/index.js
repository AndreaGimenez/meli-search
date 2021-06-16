const express = require('express');
const app = express();
var cors = require('cors');
const port = 3001 ;

app.use(cors());
app.set('json spaces', 4);
app.set('port', process.env.PORT || port);

app.use(express.json());
app.use(express.urlencoded({extended:true}));

//routes
app.use(require('./routes/index'));

app.listen(port, () => console.log(`LISTENING ON PORT ${port}`));
