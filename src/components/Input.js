import React from 'react';
import { useWindowDimensions } from 'react-native';
import styled from 'styled-components/native';
import propTypes from 'prop-types';

const StyledInput = styled.TextInput`
  border: 1px solid ${({ theme }) => theme.gray};
  border-radius: 10px;
  width: ${({ width }) => width - 55}px;
  height: 40px;
  font-size: 18px;
  padding: 5px 10px;
`;

const Input = ({ placeholder, value, onChangeText, onSubmitEditing }) => {
  const width = useWindowDimensions().width;
  return (
    <StyledInput
      width={width}
      placeholder={placeholder}
      value={value}
      autoCapitalize="none"
      autoCorrect={false}
      onChangeText={onChangeText}
      onSubmitEditing={onSubmitEditing}
      blurOnSubmit={false}
    />
  );
};

Input.propTypes = {
  placeholder: propTypes.string,
  value: propTypes.string.isRequired,
  onChangeText: propTypes.func.isRequired,
  onSubmitEditing: propTypes.func.isRequired,
};

export default Input;