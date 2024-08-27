import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class Measure {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  customerCode: string;

  @Column()
  measureType: string;

  @Column('float') // Ou 'decimal', dependendo do seu caso
  value: number;

  @CreateDateColumn()
  createdAt: Date;

  constructor(
    id?: number,
    customerCode?: string,
    measureType?: string,
    value?: number,
    createdAt?: Date
  ) {
    this.id = id ?? 0;
    this.customerCode = customerCode ?? '';
    this.measureType = measureType ?? '';
    this.value = value ?? 0;
    this.createdAt = createdAt ?? new Date();
  }
}
