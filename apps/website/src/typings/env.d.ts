declare namespace env {
	namespace NodeJS {
		interface ProcessEnv {
			NODE_ENV: 'development' | 'testing' | 'staging' | 'production';
            SERVER_GRAPHQL_URL: string
        }
    }
}