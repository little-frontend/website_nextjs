import type { NextPage } from 'next'
import createApolloClient from "../apollo";
import { RepositoryDocument, RepositoryQuery } from '../../generated/graphql';


const Home: NextPage<RepositoryQuery> = ({repository}) => {

  return (
    <p>{repository?.description}</p>
  )
}

export async function getStaticProps() {
  const client = createApolloClient();
  const { data } = await client.query<RepositoryQuery>({
    query: RepositoryDocument,
  });

  return {
    props: {
      repository: data?.repository,
    },
  };
}

export default Home
