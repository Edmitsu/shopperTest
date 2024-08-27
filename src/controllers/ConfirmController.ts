
import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Measure } from '../entity/Measure';

export const confirmMeasure = async (req: Request, res: Response) => {
  const { measure_uuid, confirmed_value } = req.body;

  const measureRepo = getRepository(Measure);

  const measure = await measureRepo.findOne(measure_uuid);

  if (!measure) {
    return res.status(404).json({ error: 'Measure not found' });
  }

  if (measure.value !== confirmed_value) {
    measure.value = confirmed_value;
    await measureRepo.save(measure);
    res.json({ message: 'OK' });
  } else {
    res.json({ message: 'No change' });
  }
};
