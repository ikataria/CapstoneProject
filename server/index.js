const express = require('express');
const mongoose = require('mongoose');
const {ApolloServer} = require('apollo-server-express')

const User = require('./model/user');

// require('./dump')();

const app = express();
app.use(express.static('./public'));
const PORT = 7700;

// MongoDb Connection Config
mongoose.connect('mongodb+srv://admin:admin@cluster0.gxzxfor.mongodb.net/driverkioskcapstone?retryWrites=true&w=majority');
mongoose.connection.on("connected", function(err, connected){
    if(err) console.log('Error in connection with the Database');
    else console.log("Connected to Database");
})

const typeDefs = `
    type user {
        _id: ID,
        id: Int,
        userName: String,
        password: String,
        userType: String,
        firstName: String,
        lastName: String,
        appointmentId: String,
        appointmentDate: String,
        appointmentTime: String,
        age: Int,
        dob: String,
        licenseNumber: String,
        registrationDate: String,
        make: String,
        model: String,
        year: Int,
        plateNumber: String
        comment: String
        isPassed: Boolean
    }

    type Query {
        userDirectory: [user],
        getUserByUserName(userName:String):user
    }

    type Mutation {
        registerUser(userName: String!, password: String!, userType: String!) : user,
        addUser(userName: String!, password: String!, userType: String!, firstName: String, lastName:String, appointmentId: String, age: Int, licenseNumber: String, dob: String, registrationDate: String, make: String, model: String, year: Int, plateNumber: String) : user,
        addUserDetails(userName: String!, firstName: String, lastName:String, licenseNumber: String, age: Int, make: String, model: String, plateNumber: String, year: Int) : user,
        createAppoinment(appointmentDate: String!, appointmentTime: String!) : user,
    }
`;


const resolvers = {
    Query: {
        userDirectory,
        getUserByUserName
    },

    Mutation: {
        registerUser,
        addUser,
        addUserDetails,
        // createAppointment
    }
}


async function userDirectory(){
    let usersList = (await User.find());
    // console.log(`user directotry called on line 70`, JSON.stringify(usersList));
    return usersList;
}



async function getUserByUserName(_,{userName}){
    let uDaya = (await User.findOne({userName}));
    // console.log(`uDaya>>`, uDaya);
    return uDaya

}

async function registerUser(_,{userName, password, userType}){

    let userObj = {
        userName, 
        password, 
        userType
    }

    return await (User(userObj).save());
   
}

async function addUser(_,{userName, password, userType, firstName, lastName, appointmentId, age, licenseNumber, dob, registrationDate, make, model, year, plateNumber}){

    let userObj = {
        userName, 
        password, 
        userType, 
        firstName, 
        lastName, 
        appointmentId, 
        age, 
        licenseNumber, 
        dob, 
        registrationDate, 
        make, 
        model, 
        year, 
        plateNumber
    }

    let cnt = await (User.find().count());
    userObj.id = cnt + 1;
    return await (User.create(userObj));
}

// addUserDetails(userName: String!, firstName: String, lastName:String, age: Int, licenseNumber: String,  make: String, model: String, year: Int, plateNumber: String) : user,

async function addUserDetails(_,{userName, firstName, lastName, age, licenseNumber, make, model, year, plateNumber}){

    let userObj = {
        firstName, 
        lastName,
        age,
        licenseNumber,
        // carDetails:{
            make, 
            model, 
            year,
            plateNumber
        // }

    }

    // console.log(`>Index.js>>userObj130`, userObj);
    return await (User.findOneAndUpdate({userName}, userObj));   
}

const server = new ApolloServer({
    typeDefs, 
    resolvers 
});

server.start()
   .then(()=>{
       server.applyMiddleware({app, path: '/graphql', cors: true});
   })

app.get('/', (req, res) => {
   res.render('index.html');
});
   
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));