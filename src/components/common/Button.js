//@flow
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
const Button = ({ text, disabled, isSelect, onPress, style }: Object) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.button,
        style,
        {
          backgroundColor: isSelect ? '#15ABC2' : 'white',
          borderColor: 'rgba(107, 107, 107, 1)',
          borderWidth: 0.2,
        },
      ]}
    >
      <Text
        style={[
          styles.text,
          { color: !isSelect ? 'rgba(0, 0, 0, .58)' : 'white' },
        ]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 3,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 19,
    alignSelf: 'stretch',
  },
  text: {
    fontSize: 14,
  },
});

export default Button;
