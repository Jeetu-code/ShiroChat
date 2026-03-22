import Router from 'express';
const route = Router();
import {addFriends, allFriends} from '../controllers/friendRqst.controllers';
import {auth} from '../middlewares/auth.middlewares';

route.post('/add', auth, addFriends);
route.get('/', auth, allFriends);

export default route;
