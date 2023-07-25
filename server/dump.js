const User = require('./model/user');

module.exports = async () => {
    console.log(`start`);

    await new User({
    // "id": 3,
    "userName": "nishant",
    "password": "nishant",
    "userType": "driver",
    "firstName": "Nishant",
    "lastName": "Singh",
    "age": 28,
    "licenseNumber": "NS9876d43210987",
    "make": "Mahindra",
    "model": "Thar",
    "plateNumber": "NISH",
    "year": 2015,
    "isPassed": true,
    "comment": "Drive slow",
    "appointmentDate": "2023-07-30T22:49:31.861Z",
    "appointmentTime": "2023-07-30T22:49:31.861Z"
  }).save()

  console.log(`data saved`);

}