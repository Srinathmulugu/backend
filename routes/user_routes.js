import express from 'express';

const route = express.Router();

import { Delete, GetUsers, Register } from '../controllers/controllers.js';

route.get('/', GetUsers);
route.post('/register',Register);
route.delete('/:id', Delete);
export  default route;