import { Controller,Get } from '@nestjs/common';

import {CatsService} from 'src/cats/cats.service'
@Controller('dogs')
export class DogsController {
    constructor(private readonly catsService: CatsService) {}

    @Get('delete')
    async deleteAll():Promise<string>{
        return this.catsService.deleteAll()
    }
}
