import { Paper, TextField } from '@material-ui/core';
import { RouteComponentProps } from '@reach/router';
import * as React from 'react';
import styled from 'styled-components';
import { TInputChange } from '../utils/types';

export interface IEditorProps extends RouteComponentProps {
  content: string;
  changeContent: TInputChange;
}

const Container = styled.div`
  height: 100vh;
  padding: 10vh 1rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const EditorRoute: React.SFC<IEditorProps> = props => {
  return (
    <Container>
      <Paper elevation={1} style={{maxWidth: '700px', minWidth: '300px', padding: '1rem', width: 'calc(200px + 30vw)'}}>
        <TextField
          label="Texto em markdown"
          multiline={true}
          fullWidth={true}
          value={props.content}
          onChange={props.changeContent}
          rowsMax="30"
        />
      </Paper>
    </Container>
  )
}

EditorRoute.displayName = 'Editor'

export default EditorRoute;