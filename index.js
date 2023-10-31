import express from "express";
import bodyParser from 'body-parser';

import usersRoutes from './routes/users.js'
const app = express();
const PORT = 'https://dibakarbera01.github.io/CRUD_APP_REST_API';

app.use(bodyParser.json());

app.use('/users', usersRoutes);
app.get('/', (req,res)=>{
    
    res.send('Hello from Homepage');
});

app.listen(PORT, ()=>console.log(`server running on port : http://localhost:${PORT}`));

