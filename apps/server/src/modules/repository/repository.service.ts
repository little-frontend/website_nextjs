import { Injectable } from '@nestjs/common';
import { Repository } from '../../generated/graphql';

@Injectable()
export class RepositoryService {
  private readonly repository: Repository = {};

  get(): Repository {
    return {
        description: 'Hello world!'
    }
  }
}