import type { CodegenConfig } from '@graphql-codegen/cli';
 
const config: CodegenConfig = {
  schema: ['src/apollo/graphql/client.graphql', 'http://localhost:4000/graphql'],
  documents: ['src/apollo/graphql/queries/**/*.graphql'],
  generates: {
    'generated/graphql.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
      config: {
      },
    },
  },
};
export default config;