import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';
import { CameraService } from '@services/camera.service';
import { CreateCameraPictureDto } from '@dtos/camera-picture.dto';

export class CameraController {
  public user: CameraService = Container.get(CameraService);

  public uploadPicture = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const cameraPicture: CreateCameraPictureDto = req.body;
      await this.user.uploadPicture(cameraPicture);
      res.status(201).json({ data: {}, message: 'uploadPicture' });
    } catch (error) {
      next(error);
    }
  };
}
