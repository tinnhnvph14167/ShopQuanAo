import express from 'express';
import { getAll ,remove, activeUser, updateUser} from '../controllers/user';
const router = express.Router();
router.get('/users', getAll);
router.delete('/users/:id', remove);
router.get('/users/:id', activeUser);
router.put('/users/:id', updateUser);

export default router;
