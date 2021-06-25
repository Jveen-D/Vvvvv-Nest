import {Controller, Get, Post, Body} from '@nestjs/common';
import {CreateCatDto} from './dto/cat.dto';
import {CatsService} from './cats.service'
import {Cat} from './interfaces/cat.interface'


@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: CatsService) {}

    @Post()
    async create(@Body() createCatDto: CreateCatDto):Promise<string>{
        return this.catsService.create(createCatDto)
    }

    @Get()
    async findAll():Promise<Cat[]>{
        return this.catsService.findAll()
    }

    @Get('delete')
    async delete():Promise<string>{
        return this.catsService.deleteAll()
    }
}
