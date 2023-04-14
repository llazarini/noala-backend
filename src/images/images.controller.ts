import { Controller, Get } from '@nestjs/common';
import { ImagesService } from './images.service';

@Controller('images')
export class ImagesController {
    constructor(private service: ImagesService) { }

    @Get('index')
    findAll() {
        return this.service.findAll();
    }
}
