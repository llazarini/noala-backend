import { Controller, Get } from '@nestjs/common';
import { ImagesService } from './images.service';

@Controller('images')
export class ImagesController {
    constructor(private service: ImagesService) { }

    @Get('random')
    findRandom() {
        return this.service.findRandom();
    }
}
