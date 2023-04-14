import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ImagesController } from './images/images.controller';
import { ImagesModule } from './images/images.module';
import { SequelizeModule } from '@nestjs/sequelize';
import databaseConfig from './configs/database';

@Module({
    imports: [
        SequelizeModule.forRoot(databaseConfig),
        ImagesModule
    ],
    controllers: [AppController, ImagesController],
    providers: [AppService],
})
export class AppModule {}
