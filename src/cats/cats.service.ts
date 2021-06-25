import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';
@Injectable()
export class CatsService {
    private readonly cats: Cat[] = [];
    create(cat: Cat):string {
        this.cats.push(cat);
        return 'cat is created！'
    }

    findAll(): Cat[] {
        return this.cats;
    }

    deleteAll():string{
        this.cats.length = 0
        return 'delete all cats.'
    }
}
