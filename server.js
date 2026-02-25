const express = require('express');
// jib framwork express
const app = express();
// hto f variable
app.use(express.json());
// bach n9raw json

const userRoutes =require('./routes/userRoutes');

app.use('/users', userRoutes);
//  hna rbtna routes dyal user b server ay ha bdat b /users dkhlha l USERRoutes

app.listen(3000 , () => {
    console.log('server dans port 3000');
})
//  /user hiya base route