import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Image } from 'src/models/image.model';

@Injectable()
export class ImagesService {
    constructor(
        @InjectModel(Image)
        private image: typeof Image,
    ) {}
    
    async findAll(): Promise<Image[]> {
        return this.image.findAll();
    }
}
