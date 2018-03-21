// @flow
import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

type Props = {};

function Project({ data: { project, loading, error } }: Props) {
  if (loading) {
    return <div>Loading</div>;
  }

  if (error) {
    console.log(error);
    return <div>An unexpected error occurred</div>;
  }

  return (
    <div>
      <div>Project: {project.title}</div>
      <div>status: {project.status}</div>
      <div>description: {project.description}</div>
      <div>client: {project.client.name}</div>
    </div>
  );
}

const ProjectQuery = gql`
  query ProjectQuery($id: Int!) {
    project(id: $id) {
      id
      status
      platforms
      title
      description
      privacy_url
      client {
        name
      }
    }
  }
`;

const ProjectWithQuery = graphql(ProjectQuery, {
  options: (ownProps) => ({
    variables: {
      id: ownProps.projectId,
    },
  }),
})(Project);

export default ProjectWithQuery;
