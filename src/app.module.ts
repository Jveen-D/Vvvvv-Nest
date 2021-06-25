import { Module, NestModule, MiddlewareConsumer,RequestMethod } from '@nestjs/common';
import { LoggerMiddleware } from './common/middleware/logger.middleware';

import {CatsController} from './cats/cats.controller';
import {CatsService} from './cats/cats.service';
import {CatsModule} from './cats/cats.module';

import {DogsController} from './dogs/dogs.controller'
import {DogsService} from './dogs/dogs.service'
import {DogsModule} from './dogs/dogs.module';

import { ConfigModule } from './config/config.module';


@Module({
    imports: [CatsModule, DogsModule,ConfigModule.register({ folder: './config' })],
    controllers: [CatsController,DogsController],
    providers: [CatsService,DogsService],
})
export class AppModule implements NestModule{
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(LoggerMiddleware)
            .forRoutes({ path: '/dogs/delete', method: RequestMethod.GET });
    }
}