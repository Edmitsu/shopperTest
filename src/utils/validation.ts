import Joi from 'joi';

interface UploadData {
    image: string;
    customer_code: string;
    measure_datetime: string; 
    measure_type: 'WATER' | 'GAS';
}

// Esquema de validação para os dados de entrada
const uploadSchema = Joi.object<UploadData>({
    image: Joi.string().base64().required(),
    customer_code: Joi.string().required(),
    measure_datetime: Joi.date().iso().required(),
    measure_type: Joi.string().valid('WATER', 'GAS').required()
});

export function validateUploadData(data: UploadData) {
    //console.log('Validating data:', data); // Log de dados de entrada
    
    const { error } = uploadSchema.validate(data, { abortEarly: false });
    
    if (error) {
        console.error('Validation error:', error.details); // Log detalhado de erro
        return {
            error: true,
            message: error.details.map((detail) => detail.message).join(', ')
        };
    }

    return { error: false };
}
