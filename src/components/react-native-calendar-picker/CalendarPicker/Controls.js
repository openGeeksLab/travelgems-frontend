import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Controls({
  styles,
  textStyles,
  label,
  onPressControl,
}) {
  return (
    <TouchableOpacity onPress={() => onPressControl()} style={styles.controls}>
      {/* <Text style={[styles, textStyles]}>
        { label }
			</Text> */}
      <Icon name={label} size={20} color="#ffffff" />
    </TouchableOpacity>
  );
}

Controls.propTypes = {
  styles: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
  onPressControl: PropTypes.func.isRequired,
};
