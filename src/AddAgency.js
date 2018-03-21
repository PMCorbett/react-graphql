// @flow
import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

type Props = {};
type State = {};

class AddAgency extends Component<Props, State> {
  state = {
    agencyName: '',
  };

  updateAgencyName = (event) => {
    this.setState({
      agencyName: event.target.value,
    });
  };

  makeItSo = () => {
    const { agencyName } = this.state;

    this.props.mutate({
      variables: {
        name: agencyName,
      },
    });
  };

  render() {
    return (
      <div>
        <div>Add Agency</div>
        <div>
          <input
            type="text"
            value={this.state.agencyName}
            onChange={this.updateAgencyName}
          />
        </div>
        <div>
          <button onClick={this.makeItSo}>Add</button>
        </div>
      </div>
    );
  }
}

const createAgencyMutation = gql`
  mutation addAgency($name: String!) {
    addAgency(name: $name) {
      id
      name
    }
  }
`;

const AddAgencyWithMutation = graphql(createAgencyMutation)(AddAgency);

export default AddAgencyWithMutation;
