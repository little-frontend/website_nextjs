import { join } from 'path';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageDisabled } from '@apollo/server/plugin/disabled';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { RepositoryModule } from './modules/repository/repository.module';


@Module({
  imports: [
    RepositoryModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
        driver: ApolloDriver,
        typePaths: ['./**/*.graphql'],
        // use apollo-server landing page plugin, so this playground option is false
        playground: false,
        plugins: [ process.env.NODE_ENV === 'development' ? ApolloServerPluginLandingPageLocalDefault() : ApolloServerPluginLandingPageDisabled() ],
        definitions: {
          path: join(process.cwd(), 'src/generated/graphql.ts'),
          outputAs: 'class',
        },
      }),
  ],
})
export class AppModule {}