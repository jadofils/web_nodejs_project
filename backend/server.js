const dotenv = require('dotenv');
const users = require('./expenceTracker/routes/users');
const budget = require('./expenceTracker/routes/budget');
const expense = require('./expenceTracker/routes/expenses');
const register=require('../registerDataDb');

dotenv.config();

let port = process.env.PORT || 3005;
//const app = express();
//users ports
users.listen(port, (err) => {
    if (err) throw err;
    console.log(`Server is running on: http://localhost:${port}`);
});
//budgets ports
budget.listen(port+5, (err) => {
    if (err) throw err;
    console.log(`Server is running on: http://localhost:${port}`);
});
//available expense on the port
expense.listen(3700, (err) => {
    if (err) throw err;
    console.log(`Server is running on: http://localhost:3700`);
});



//Start the server (optional, depending on your setup)
register.listen(process.env.PORT || 3008, () => {
    console.log(`Server is running on port:http://localhost:${process.env.PORT||3008}/register`);
});
