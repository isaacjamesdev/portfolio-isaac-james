const app = require('./config/custom-express');
const port = 80;


app.listen(port, ()=>{
    console.log('listening port '+ port)
})