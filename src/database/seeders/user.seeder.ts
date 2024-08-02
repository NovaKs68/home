import { AuthService } from '@services/auth.service';
import { Container } from 'typedi';
import { User } from '@interfaces/users.interface';
import { UserEntity } from '@entities/users.entity';
import * as process from 'node:process';

export class UserSeeder {
  private authService: AuthService = Container.get(AuthService);

  public async run(): Promise<void> {
    const isUserExist: boolean = await UserEntity.existsBy({ email: process.env.CAMERA_EMAIL_1 });

    if (!isUserExist) {
      const register: User = { email: process.env.CAMERA_EMAIL_1, password: process.env.CAMERA_PASSWORD_1 };
      await this.authService.signup(register);
    }
  }
}
