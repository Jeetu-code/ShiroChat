import Router from 'express';
const route = Router();
import {createConversation,convId, allConversations,allmessages} from '../controllers/conversations.controllers';
import {auth} from '../middlewares/auth.middlewares';
route.post('/', auth, createConversation);
route.get('/', auth, allConversations);
route.get("/messages/:id",auth,allmessages);
route.post("/convId",auth,convId);
export default route;
