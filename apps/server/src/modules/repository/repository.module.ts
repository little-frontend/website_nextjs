import { Module } from '@nestjs/common';

import { RepositoryResolver } from './repository.resolver';
import { RepositoryService } from './repository.service';

@Module({
  providers: [RepositoryService, RepositoryResolver],
})
export class RepositoryModule {}