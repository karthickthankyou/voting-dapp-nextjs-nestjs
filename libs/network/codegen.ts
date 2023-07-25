import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: '../../apps/api/src/schema.gql',
  watch: true,
  generates: {
    './src/generated/index.tsx': {
      documents: './src/**/*.gql.tsx',
      plugins: [
        'typescript',
        'typescript-operations',
        'named-operations-object',
        'typescript-react-apollo',
      ],
      config: {
        avoidOptionals: false,
        exposeQueryKeys: true,
        fetcher: {
          endpoint: 'http://localhost:3000/graphql',
        },
        pureMagicComment: true,
      },
    },
    '../../apps/api/prisma/seed/generated/': {
      documents: '../../apps/api/**/*.gql.tsx',
      preset: 'client',
      plugins: [],
    },
  },
}

export default config
