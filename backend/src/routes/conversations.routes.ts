import Router from 'express';
const route = Router();
import {createConversation, allConversations} from '../controllers/conversations.controllers';
import {auth} from '../middlewares/auth.middlewares';
route.post('/', auth, createConversation);
route.get('/', auth, allConversations);

export default route;
