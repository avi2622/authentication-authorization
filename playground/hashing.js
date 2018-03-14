const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

var data = {
    id : 4 
};

var token = jwt.sign(data, 'abc123');
console.log(`THE token : ${token}`);

var decoded = jwt.verify(token,'abc123');
console.log('the verify token is : ',decoded);

// var message = 'I am user number  3';
// var hash = SHA256(message).toString();

// console.log(`My message is : ${message}`);
// console.log(`Hashed user : ${hash}`);

// var data = {
//     id: 4
// };

// var token = {
//     data,
//     hash : SHA256(JSON.stringify(data) + 'somesecret').toString()
// };

// var resultHash = SHA256(JSON.stringify(data) + 'somesecret').toString();

// if(resultHash === token.hash){
//     console.log('data is correct');
// }else{
//     console.log('data is not valid');
// }