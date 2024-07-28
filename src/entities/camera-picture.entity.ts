import { IsNotEmpty } from 'class-validator';
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class CameraPictureEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @IsNotEmpty()
  serviceId: string;

  @Column()
  @IsNotEmpty()
  cameraId: string;

  @Column()
  @IsNotEmpty()
  pictureName: string;

  @Column()
  @IsNotEmpty()
  createdAt: Date;

  @Column()
  @CreateDateColumn()
  syncAt: Date;
}
