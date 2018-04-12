import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';
import { COLOR_TURQUOISE } from '../../../constants/Styles';
import styles from './styles';

const QuestionItem = ({ text, currentPage }) => (
  <View style={styles.titleContainer}>
    <Text style={styles.titleNumber}>{currentPage}</Text>
    <Icon size={14} name="md-arrow-round-forward" color={COLOR_TURQUOISE} />
    <Text style={styles.titleText}>{text}</Text>
  </View>
);

QuestionItem.propTypes = {
  text: PropTypes.string,
  currentPage: PropTypes.number,
};

export default QuestionItem;
