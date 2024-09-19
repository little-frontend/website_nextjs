import {Query, Resolver } from '@nestjs/graphql';

import { Repository } from '../../generated/graphql';
import { RepositoryService } from './repository.service';


@Resolver('Repository')
export class RepositoryResolver {
  constructor(private readonly repositoryService: RepositoryService) {}

  @Query('repository')
  async repository(): Promise<Repository> {
    return {
        description: 'Hello world!'
    }
    return this.repositoryService.get();
  }
}