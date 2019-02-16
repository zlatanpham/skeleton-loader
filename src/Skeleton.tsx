import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: red;
`;

export class Skeleton extends React.Component {
  render() {
    return <Container>Hello</Container>;
  }
}
