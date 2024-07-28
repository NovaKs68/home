export interface CameraPicture {
  id?: string;
  pictureBase64: string;
  serviceId: string;
  cameraId: string;
  pictureName: string;
  createdAt: Date;
  syncAt: Date;
}
