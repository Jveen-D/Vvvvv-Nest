import {Module} from '@nestjs/common';
import {CatsController} from './cats/cats.controller';
import {CatsService} from './cats/cats.service';
import {CatsModule} from './cats/cats.module';

import {DogsController} from './dogs/dogs.controller'
import {DogsService} from './dogs/dogs.service'
import {DogsModule} from './dogs/dogs.module';

@Module({
    imports: [CatsModule, DogsModule],
    controllers: [CatsController,DogsController],
    providers: [CatsService,DogsService],
})
export class AppModule {
}