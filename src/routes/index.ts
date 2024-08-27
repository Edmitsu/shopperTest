import { Router } from 'express';
import { uploadMeasure } from '../controllers/MeasureController';
import { confirmMeasure } from '../controllers/ConfirmController';
import { listMeasures } from '../controllers/ListController';

const router = Router();

router.post('/upload', uploadMeasure);
router.patch('/confirm', confirmMeasure);
router.get('/:customerCode/list', listMeasures);

export default router;
