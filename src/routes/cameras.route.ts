import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import { CameraController } from '@controllers/camera.controller';
import { ValidationMiddleware } from '@middlewares/validation.middleware';
import { CreateCameraPictureDto } from '@dtos/camera-picture.dto';
import { AuthMiddleware } from '@middlewares/auth.middleware';

export class CameraRoute implements Routes {
  public path = '/cameras';
  public router = Router();
  public camera = new CameraController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}/upload`, AuthMiddleware, ValidationMiddleware(CreateCameraPictureDto), this.camera.uploadPicture);
  }
}
