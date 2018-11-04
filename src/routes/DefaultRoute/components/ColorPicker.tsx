import * as React from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import { TChangeThemeProp } from 'src/utils/types';
import { ChromePicker, ColorResult } from 'react-color';

export interface IColorPickerProps {
  title: string;
  id: string;
  value: string;
  changeThemeProperty: TChangeThemeProp;
}

export interface IColorPickerState {
  isPickerOpen: boolean;
}

const Wrapper = styled.div`
  flex-basis: 100%;
  margin: 1rem 0;
  display: flex;
  flex-wrap: wrap;
  aside {
    flex-grow: 1;
    align-self: center;
  }
`;

const grey = '#f2f2f2';

const InputWrapper = styled.div`
  display: inline-flex;
  border: 1px solid ${grey};
  border-radius: 0.3rem;
`;

const Input = styled.input`
  font-size: inherit;
  font-family: inherit;
  padding: 0.5rem 0.35rem;
  border: none;
  color: #555;
  max-width: 100px;
`;

const ColorButton = styled.button`
  cursor: pointer;
  width: 40px;
  border: none;
  border-radius: 0 0.3rem 0.3rem 0;
  background: ${(props: { color: string }) => props.color};
`;

const PickerWrapper = styled.aside`
  ${(props: { isOpen: boolean }) => `
    display: ${props.isOpen ? 'block' : 'none'};
  `};
`;

const PickerModal = styled.div``;

export class ColorPicker extends React.Component<
  IColorPickerProps,
  IColorPickerState
> {
  public state = {
    isPickerOpen: false,
  };

  public togglePicker = () => {
    this.setState(prev => ({
      isPickerOpen: !prev.isPickerOpen,
    }));
  };

  public handleColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.props.changeThemeProperty(
      `colors.${this.props.id}`,
      e.currentTarget.value
    );
  };

  public handlePicker = (e: ColorResult) => {
    this.props.changeThemeProperty(`colors.${this.props.id}`, e.hex);
  };

  public render() {
    return (
      <Wrapper>
        <Typography variant="body2">{this.props.title}</Typography>
        <InputWrapper>
          <Input value={this.props.value} onChange={this.handleColor} />
          <ColorButton onClick={this.togglePicker} color={this.props.value} />
        </InputWrapper>
        <PickerWrapper isOpen={this.state.isPickerOpen}>
          <PickerModal>
            <ChromePicker
              color={this.props.value}
              onChange={this.handlePicker}
            />
          </PickerModal>
        </PickerWrapper>
      </Wrapper>
    );
  }
}

export default ColorPicker;
