import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Measure } from '../entity/Measure';

export const listMeasures = async (req: Request, res: Response) => {
  const { customerCode } = req.params;
  const measureType = req.query.measure_type?.toString().toUpperCase();

  const measureRepo = getRepository(Measure);

  let measures;
  if (measureType) {
    measures = await measureRepo.find({
      where: {
        customerCode,
        measureType
      }
    });
  } else {
    measures = await measureRepo.find({
      where: {
        customerCode
      }
    });
  }

  res.json(measures);
};
