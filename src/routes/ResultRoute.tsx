import { Button } from "@material-ui/core";
import LaptopIcon from "@material-ui/icons/LaptopRounded";
import PhoneIcon from "@material-ui/icons/PhoneIphoneRounded";
import { RouteComponentProps } from "@reach/router";
import * as React from "react";
import Frame, { FrameContextConsumer } from "react-frame-component";
import * as Markdown from "react-markdown";
import styled, { StyleSheetManager } from "styled-components";
import { IUserTheme } from "../RootContainer";
import { GlobalUserStyles } from "../styles/userTheme";

export interface IResultsDisplayProps extends RouteComponentProps {
  content: string;
  userTheme: IUserTheme;
}

interface IResultsDisplayState {
  isMobile: boolean;
}

export const DisplayContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 64px 1rem 0;
`;

const Wrapper = styled.main`
  flex-grow: 1;
  min-height: 80vh;
  ${(props: { isMobile: boolean; maxWidth: number }) => `
    max-width: ${props.isMobile ? "320px" : `${props.maxWidth}px`};
    height: ${props.isMobile ? "568px" : "auto"};
    align-self: ${props.isMobile ? "center" : "stretch"};
  `};
  > iframe {
    width: 100%;
    height: 100%;
    border: none;
    overflow: visible auto;
  }
`;

export class ResultRoute extends React.Component<
  IResultsDisplayProps,
  IResultsDisplayState
> {
  public state = {
    isMobile: false
  };

  public toggleMobile = () => {
    this.setState(prevState => ({
      isMobile: !prevState.isMobile
    }));
  };

  public render() {
    const {
      props,
      state: { isMobile }
    } = this;
    return (
      <DisplayContainer>
        <Wrapper isMobile={isMobile} maxWidth={props.userTheme.body.maxWidth}>
          <Frame>
            <FrameContextConsumer>
              {(frameContext: any) => (
                <StyleSheetManager target={frameContext.document.head}>
                  <>
                    <Markdown source={props.content} />
                    <GlobalUserStyles theme={props.userTheme} />
                  </>
                </StyleSheetManager>
              )}
            </FrameContextConsumer>
          </Frame>
        </Wrapper>
        <Button
          variant="fab"
          onClick={this.toggleMobile}
          style={{ position: "fixed", bottom: "2rem", right: "2rem", zIndex: 2000 }}
          color="secondary"
        >
          {isMobile ? <LaptopIcon /> : <PhoneIcon />}
        </Button>
      </DisplayContainer>
    );
  }
}

export default ResultRoute;
