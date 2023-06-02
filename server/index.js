const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.static('./public'));
const PORT = 7000;

// MongoDb Connection Config
mongoose.connect('mongodb+srv://admin:admin@cluster0.gxzxfor.mongodb.net/driverkioskcapstone?retryWrites=true&w=majority');
mongoose.connection.on("connected", function(err, connected){
    if(err) console.log('Error in connection with the Database');
    else console.log("Connected to Database");
})

app.get('/', (req, res) => {
   res.render('index.html');
});
   
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));