import express from 'express';

import {
  create,
  get,
  getAll,
  deleteCate,
  updateCate,
} from '../controllers/category';
const router = express.Router();
router.get('/categories', getAll);
router.get('/categories/:id', get);
router.put('/categories/:id', updateCate);
router.post('/categories', create);
router.delete('/categories/:id', deleteCate);

export default router;
