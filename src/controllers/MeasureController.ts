import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Measure } from '../entity/Measure';

export const getMeasures = async (req: Request, res: Response) => {
  const { customerCode, measureType, createdAt } = req.query;

  try {
    // Construa o objeto de filtros dinamicamente
    const filters: any = {
      customerCode,
      measureType,
      createdAt: createdAt ? new Date(createdAt as string) : undefined,
    };

    // Remova propriedades com valores undefined
    Object.keys(filters).forEach(key => filters[key] === undefined && delete filters[key]);

    const measures = await getRepository(Measure).find({
      where: filters,
    });
    res.json(measures);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar medidas' });
  }
};

// Supondo que você deseje adicionar uma função `uploadMeasure`
export const uploadMeasure = async (req: Request, res: Response) => {
  try {
    const { customerCode, measureType, createdAt } = req.body;
    // Adiciona uma nova medida
    const measure = new Measure();
    measure.customerCode = customerCode;
    measure.measureType = measureType;
    measure.createdAt = new Date(createdAt);

    await getRepository(Measure).save(measure);
    res.status(201).json({ message: 'Medida adicionada com sucesso' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao adicionar medida' });
  }
};
