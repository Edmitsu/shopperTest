import express from 'express';
import { validateUploadData } from '../utils/validation';
import { extractValueFromImage } from '../utils/gemini';
const { v4: uuidv4 } = require('uuid');

const router = express.Router();

router.post('/', async (req, res) => {
    const { error, message } = validateUploadData(req.body);

    if (error) {
        return res.status(400).json({ error: message });
    }

    // Verificar se já existe uma leitura no mês (implementar lógica para consulta ao banco de dados)

    
    //const measure_value = await extractValueFromImage(req.body.image);

    // Gerar UUID e URL temporária

    res.status(200).json({
      image_url: 'image.jpeg', // Substituir por URL gerada
      measure_value: 2,
      measure_uuid: uuidv4(), // Substituir por UUID gerado
    });
});

export default router;