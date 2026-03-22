import {Router} from 'express';
const route = Router();
import {signup, signin} from '../controllers/auth.controllers';

route.post('/signup', signup);
route.post('/signin', signin);

export default route;
