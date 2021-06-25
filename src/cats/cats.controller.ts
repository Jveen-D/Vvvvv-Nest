import {Controller, Get, Post, Redirect, Param, Body,HttpException,HttpStatus} from '@nestjs/common';
import {CreateCatDto} from './cat.dto';

@Controller('cats')
export class CatsController {
    @Get()
    async findAll1(): Promise<string> {
        return 'this is cats.get1';
    }

    @Get('v*')
    @Redirect('http://localhost:3000/cats/gu')
    findAll(): string {
        return 'this is cats.get';
    }

    @Get('g*:id')
    gu(@Param('id') id): string {
        return `this is receive params:${id}`;
    }

    @Post()
    async pMeth(@Body() createCatDto: CreateCatDto): Promise<string> {
        let {name, age, breed} = createCatDto;
        console.log(createCatDto);
        return `the cat info : name is ${name}
        age is ${age}
        breed is ${breed}
        `;
    }

    @Get('err')
    async getErr(){
        // throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
        throw new HttpException({
            status: HttpStatus.FORBIDDEN,
            data: 'error!error!error!',
        }, HttpStatus.FORBIDDEN);
    }
}
