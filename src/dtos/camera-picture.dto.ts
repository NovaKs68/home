import { IsDate, IsNotEmpty, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateCameraPictureDto {
  @IsString()
  @IsNotEmpty()
  public pictureBase64: string;

  @IsString()
  @IsNotEmpty()
  public serviceId: string;

  @IsString()
  @IsNotEmpty()
  public cameraId: string;

  @IsDate()
  @IsNotEmpty()
  @Type(() => Date)
  public takedAt: Date;
}
