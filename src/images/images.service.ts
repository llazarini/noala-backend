import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Image } from '../entities/image.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ImagesService {
    constructor(
        @InjectRepository(Image)
        private imageRepository: Repository<Image>,
    ) {}

    findRandom(): Promise<Image[]> {
        return this.imageRepository
            .createQueryBuilder('image')
            .select()
            .orderBy('RAND()')
            .take(5)
            .getMany();
    }
}
