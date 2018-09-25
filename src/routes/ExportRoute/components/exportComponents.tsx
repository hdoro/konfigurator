import * as React from 'react';
import styled from 'styled-components';

export const CategoryWrapper = styled.section`
  padding: 0.5rem 0;
  border-bottom: 2px solid #f1f1f1;
`;

export const PropertyWrapper = styled.div`
  margin: 0 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
`;

export const ExportedList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ColorDisplay = styled.span`
  display: inline-block;
  background: ${(props: { color: string }) => props.color};
  border-radius: 50%;
  font-size: 1.5rem;
  padding: 0.35em 0.5em;
  margin: 0 0.5rem 0 1rem;
  vertical-align: middle;
  height: 1em;
  width: 1em;
`;

export const ExportedListItem: React.SFC<{ name: string }> = ({
  name,
  children,
}) => (
  <li>
    <strong>{name}</strong>: {children}
  </li>
);
