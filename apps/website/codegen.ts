import type { CodegenConfig } from '@graphql-codegen/cli';
 
const config: CodegenConfig = {
  // ...
  generates: {
    'generated/graphql.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
      config: {
        withHooks: true
      },
    },
  },
};
export default config;