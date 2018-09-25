import { Button } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/SaveRounded";
import { RouteComponentProps } from "@reach/router";
import * as React from "react";
import Frame, { FrameContextConsumer } from "react-frame-component";
import styled, { StyleSheetManager } from "styled-components";
import { ExportDialog } from "../../components/ExportDialog";
import { IUserTheme } from "../../RootContainer";
import { GlobalUserStyles } from "../../styles/userTheme";
import { DisplayContainer } from "../ResultRoute";
import { ExportedBasic } from "./ExportedBasic";
import { ExportedHeadings } from "./ExportedHeadings";

export interface IExportRouteProps extends RouteComponentProps {
  userTheme: IUserTheme;
}

export interface IExportRouteState {
  isExportDialogOpen: boolean;
}

const Wrapper = styled.main`
  flex-grow: 1;
  min-height: 80vh;
  ${(props: { maxWidth: number }) => `
    max-width: ${props.maxWidth}px;
  `};
  > iframe {
    width: 100%;
    height: 100%;
    border: none;
    overflow: visible auto;
  }
`;

export class ExportRoute extends React.Component<
  IExportRouteProps,
  IExportRouteState
> {
  public state = {
    isExportDialogOpen: false
  };

  public toggleDialog = () => {
    this.setState(prevState => ({
      ...prevState,
      isExportDialogOpen: !prevState.isExportDialogOpen
    }));
  };

  public render() {
    const { userTheme: theme } = this.props;
    return (
      <DisplayContainer>
        <ExportDialog
          isOpen={this.state.isExportDialogOpen}
          theme={theme}
          closeDialog={this.toggleDialog}
        />
        <Wrapper maxWidth={theme.body.maxWidth}>
          <Frame>
            <FrameContextConsumer>
              {(frameContext: any) => (
                <StyleSheetManager target={frameContext.document.head}>
                  <>
                    <h1>Configurações exportadas</h1>
                    <GlobalUserStyles theme={theme} />
                    <ExportedBasic theme={theme} />
                    <ExportedHeadings theme={theme} />
                  </>
                </StyleSheetManager>
              )}
            </FrameContextConsumer>
          </Frame>
        </Wrapper>
        <Button
          variant="fab"
          onClick={this.toggleDialog}
          style={{ position: "fixed", bottom: "2rem", right: "2rem" }}
          color="secondary"
        >
          <SaveIcon />
        </Button>
      </DisplayContainer>
    );
  }
}

export default ExportRoute;
