import { Repository } from 'typeorm';
import { Service } from 'typedi';
import { CameraPictureEntity } from '@entities/camera-picture.entity';
import { CameraPicture } from '@interfaces/camera-picture.interface';
import { FileService } from '@services/file.service';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

const uploadDirectory = path.join(__dirname, '../uploads');

@Service()
export class CameraService extends Repository<CameraPictureEntity> {
  public async uploadPicture(picture: CameraPicture): Promise<void> {
    const pictureId = uuidv4();
    const filename = `takeAt_${this.formatDate(picture.createdAt)}--saveAt_${this.formatDate(new Date())}--id_${pictureId}.png`;
    // Save image
    await FileService.saveBase64Image(picture.pictureBase64, filename, uploadDirectory);

    picture.id = pictureId;
    picture.pictureName = filename;
    await CameraPictureEntity.create({ ...picture }).save();
  }

  private formatDate(date: Date): string {
    const pad = (n: number): string => (n < 10 ? '0' + n : n.toString());

    const day = pad(date.getDate());
    const month = pad(date.getMonth() + 1); // Month start at 0
    const year = date.getFullYear();

    const hours = pad(date.getHours());
    const minutes = pad(date.getMinutes());
    const seconds = pad(date.getSeconds());

    return `${day}-${month}-${year}_${hours}-${minutes}-${seconds}`;
  }
}
