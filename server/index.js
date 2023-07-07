const express = require('express');
const mongoose = require('mongoose');
const {ApolloServer} = require('apollo-server-express')

const User = require('./model/user');

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
        UserName: String,
        Password: String,
        UserType: String,
        FirstName: String,
        LastName: String,
        AppointmentId: String,
        Age: Int,
        LicenseNumber: String,
        Dob: String,
        RegistrationDate: String,
        Make: String,
        Model: String,
        PlateNumber: String
    }

    type Query {
        userDirectory: [user],
        getUserByUserName(UserName: String): user
    }

    type Mutation {
        addUser(userName: String!, password: String!, userType: String!, firstName: String, lastName:String, appointmentId: String, age: Int, licenseNumber: String, dob: String, registrationDate: String, make: String, model: String, year: Int, plateNumber: String) : user,

        addUserDetails(userName: String!, firstName: String, lastName:String, licenseNumber: String, dob: String, make: String, model: String, plateNumber: String) : user,
    }
`;


const resolvers = {
    Query: {
        userDirectory,
        getUserByUserName
    },

    Mutation: {
        addUser,
        addUserDetails
    }
}


async function userDirectory(){
    return (await User.find());
}

async function getUserByUserName(_,{userName}){
    return (await User.findOne({userName}));
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

async function addUserDetails(_,{userName,firstName, lastName, dob, licenseNumber, make, model, year, plateNumber}){

    let userObj = {
        firstName, 
        lastName, 
        licenseNumber, 
        dob, 
        make, 
        model, 
        plateNumber
    }

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