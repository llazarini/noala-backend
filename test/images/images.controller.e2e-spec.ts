import { Test, TestingModule } from '@nestjs/testing';
import { ImagesController } from '../../src/images/images.controller';
import { ImagesService } from '../../src/images/images.service';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { ImagesModule } from '../../src/images/images.module';

describe('ImagesController', () => {
    let app: INestApplication;
    const service: any = { findRandom: () => ['test'] };

    beforeAll(async () => {
        const moduleRef = await Test.createTestingModule({
            imports: [ImagesModule],
        })
        .overrideProvider(ImagesService)
        .useValue(service)
        .compile();

        app = moduleRef.createNestApplication();
        await app.init();
    });

    it(`/GET random`, () => {
        return request(app.getHttpServer())
        .get('/images/random')
        .expect(200)
        .expect({
            data: service.findRandom(),
        });
    });

    afterAll(async () => {
        await app.close();
    });

});