import fs from 'fs';
import path from 'path';

export class FileService {
  static async moveFile(tempPath: string, destinationDir: string): Promise<string> {
    return new Promise((resolve, reject) => {
      const fileName = path.basename(tempPath);
      const destinationPath = path.join(destinationDir, fileName);

      fs.rename(tempPath, destinationPath, (err) => {
        if (err) {
          return reject(err);
        }
        resolve(destinationPath);
      });
    });
  }

  static async saveBase64Image(base64Data: string, fileName: string, uploadDir: string): Promise<string> {
    return new Promise((resolve, reject) => {
      // Créer le répertoire de téléchargement s'il n'existe pas
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
      }

      // Décoder les données Base64
      const buffer = Buffer.from(base64Data, 'base64');
      const filePath = path.join(uploadDir, fileName);

      // Sauvegarder le fichier
      fs.writeFile(filePath, buffer, (err) => {
        if (err) {
          return reject(err);
        }
        resolve(filePath);
      });
    });
  }
}
