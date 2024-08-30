import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
const { v4: uuidv4 } = require('uuid');

@Entity()
export class Measure {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  customerCode: string;

  @Column()
  measureType: string;

  @Column({ type: 'float', precision: 10, scale: 2 })
  value: number;

  @Column()
  imagePath: string; // New field to store the image path

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  constructor(
    id?: string,
    customerCode?: string,
    measureType?: string,
    value?: number,
    imagePath?: string,
    createdAt?: Date,
    updatedAt?: Date
  ) {
    this.id = id ?? uuidv4()
    this.customerCode = customerCode ?? '';
    this.measureType = measureType ?? '';
    this.value = value ?? 0.0;
    this.imagePath = imagePath ?? '';
    this.createdAt = createdAt ?? new Date();
    this.updatedAt = updatedAt ?? new Date();
  }
}