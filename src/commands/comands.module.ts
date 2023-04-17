import { Module } from '@nestjs/common';
import { ImagesSeed } from './images-seed.command';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Image } from '../entities/image.entity';

@Module({
    providers: [ImagesSeed],
    imports: [
        TypeOrmModule.forFeature([Image]),
        HttpModule,
    ]
})
export class CommandsModule {}
