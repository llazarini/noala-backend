import { HttpService } from '@nestjs/axios';
import { InjectRepository } from '@nestjs/typeorm';
import { Command, CommandRunner } from 'nest-commander';
import { Image } from '../entities/image.entity';
import { Repository } from 'typeorm';

@Command({ name: 'images-seed', description: 'Images seeder with mocked data.' })
export class ImagesSeed extends CommandRunner {
    constructor(
        @InjectRepository(Image)
        private imageRepository: Repository<Image>,
        private httpService: HttpService
    ) {
        super()
    }

    async run(): Promise<void> {
        const responses = await this.fetchDogsImages();

        // Filter and treat data
        const dogs = responses
            .filter(response => response.status === 'fulfilled')
            .map((response: any) => {
                return {
                    name: response.value.message.substring(response.value.message.lastIndexOf('/') + 1),
                    url: response.value.message
                }
            })

        // Save data into the respository
        await this.imageRepository.save(dogs)
    }


    async fetchDogsImages(): Promise<PromiseSettledResult<any>[]> {
        const promises = []
        for (let i = 0; i < 50; i++) {
            promises.push(new Promise(async (resolve, reject) => {
                const response = await this.httpService.axiosRef.get(`${process.env.DOG_API}/breeds/image/random`)
                if (response.data.status !== 'success') {
                    reject()
                }
                resolve(response.data)
            }))
        }
        return await Promise.allSettled(promises);
    }
}