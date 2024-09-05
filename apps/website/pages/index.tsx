import type { NextPage } from 'next'
import { gql } from "@apollo/client";
import createApolloClient from "../apollo";


const Home: NextPage<{
  repo: {
    description: string;
  };
}> = ({repo}) => {

  return (
    <p>{repo.description}</p>
  )
}

export async function getStaticProps() {
  const client = createApolloClient();
  const { data } = await client.query({
    query: gql`
      query Repo {
        repo {
          description
        }
      }
    `,
  });

  return {
    props: {
      repo: data.repo,
    },
  };
}

export default Home
