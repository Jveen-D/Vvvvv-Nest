import { Module } from '@nestjs/common';
import { DogsController } from './dogs.controller';
import { DogsService } from './dogs.service';
import { CatsModule} from 'src/cats/cats.module'
@Module({
  imports:[CatsModule],
  controllers: [DogsController],
  providers: [DogsService]
})
export class DogsModule {}
