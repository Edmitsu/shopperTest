import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';

dotenv.config();

const genAI = new GoogleGenerativeAI(`${process.env.GEMINI_API_KEY}`);

export async function extractValueFromImage(base64Image: string) {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

    const prompt = "What is the numerical value in this image?";

    const imagePart = {
        inlineData: {
            data: base64Image,
            mimeType: "image/jpeg"
        },
    };

    const result = await model.generateContent([prompt, imagePart]);
    const response = await result.response;
    const text = response.text();

    // Extrair o valor numérico do texto da resposta (implementar lógica específica)
    // Por exemplo, utilizando expressões regulares ou bibliotecas de NLP
    /* const numericalValue = extractNumericalValueFromText(text); */

    return 2; //numericalValue;
}

// Função auxiliar para extrair o valor numérico do texto (a ser implementada)
/* function extractNumericalValueFromText(text: string): number {
    // Implemente aqui a lógica para extrair o valor numérico do texto
    // Por exemplo, utilizando expressões regulares ou bibliotecas de NLP
} */