const db = require('../config/connection');
const { User } = require('../models');

db.once('open', async() => {
    await User.deleteMany({});
});

const users = [{ email: 'reed@youremploymentsolutions.com', password: 'Mikaela1'},
{ email: 'eric@youremploymentsolutions.com', password: 'Yes2022!' }, 
{ email: 'pon@youremploymentsolutions.com', password: 'Killinit1!' },
{ email: 'gordonrileysmith@gmail.com', password: 'G3tfucked1!' }];

const createdUsers = await User.collection.insertMany(users);

console.log('all done');
process.exit(0);