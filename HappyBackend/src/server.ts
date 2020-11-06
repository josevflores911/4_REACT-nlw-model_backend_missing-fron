import express from 'express';
import path from 'path';
import cors from 'cors';
import 'express-async-errors';

import './database/connection';


import routes from './routes';
import errorHandler from './errors/handler';


const app = express();


app.use(cors());
app.use(express.json());

app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);



app.listen(3333);










//Rota =conjunto
//Recurso = usuario
//Metodos HTTP = GET, POST, PUT, DELETE
//Parametros

//GET = Buscar uma informacao (lista,item)
//POST = Criando uma Informacao
//PUT = Editando uma informacao
//DELETE = Eliminando uma informacao

//Query: http:/localhost:333/users?search=diego
//Route Param: http://localhost:3333/users/1 (identificar un recurso)
//Body: http://localhost:3333/users/1 (identificar un recurso)



//sqlite3.query('SELECT * FROM users')



	//return response.send('Hello World');
	//console.log(request.query);
	//console.log(request.params);
	//console.log(request.body);	


//knex('users').select('*').where('name','Diego')
//SELECT * FROM USERS where Name 

//Driver nativo, Query builder, ORM
//Object Relational Mapping

//REQ / RES
//localhost:3333

//users
//user

//3 users
// user user user
