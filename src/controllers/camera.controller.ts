import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';
import { CameraService } from '@services/camera.service';
import { CameraPicture } from '@interfaces/camera-picture.interface';

export class CameraController {
  public user: CameraService = Container.get(CameraService);

  public uploadPicture = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const cameraPicture: CameraPicture = req.body;
      await this.user.uploadPicture(cameraPicture);

      res.status(201);
    } catch (error) {
      next(error);
    }
  };
}
