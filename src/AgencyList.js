// @flow
import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

type Client = {
  id: number,
  name: string,
};

type Agency = {
  id: number,
  name: string,
  client: Client,
};

type Props = {
  data: {
    agencies: Array<Agency>,
  },
};

function AgencyList({ data: { agencies, loading, error } }: Props) {
  if (loading) {
    return <div>Loading</div>;
  }

  if (error) {
    console.log(error);
    return <div>An unexpected error occurred</div>;
  }

  return agencies.map((agency) => (
    <div key={agency.id}>
      <div>{agency.name}</div>
      <div>
        {agency.clients.map((client) => (
          <div key={client.id}>Client: {client.name}</div>
        ))}
      </div>
    </div>
  ));
}

export default graphql(gql`
  query AgencyListQuery {
    agencies {
      id
      name
      clients {
        id
        name
      }
    }
  }
`)(AgencyList);
