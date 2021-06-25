import { Module } from '@nestjs/common';
import { CatsController } from './cats/cats.controller';
import { CatsService } from './cats/cats.service';
import { CatsModule } from './cats/cats.module';
import { TestModule } from './test/test.module';
import { TestController } from './test/test.controller';
import { TestModule } from './test/test.module';

@Module({
  imports: [CatsModule, TestModule],
  controllers: [CatsController, TestController],
  providers: [CatsService],
})
export class AppModule {}