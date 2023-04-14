import { Module } from '@nestjs/common';
import { ImagesService } from './images.service';
import { Image } from 'src/models/image.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
    imports: [
        SequelizeModule.forFeature([Image]),
    ],
    providers: [ImagesService],
})
export class ImagesModule {}
