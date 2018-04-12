import React, { Component } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import Slider from '../../../components/MySlider/Slider';
import styles from './styles';
import RulerElements from './RulerElements';

class RadioQuestionsField extends Component {
  static defaultProps = {
    // onRadioSelect: () => {},
    // index: 1,
  };

  constructor(props) {
    super(props);

    this.state = {
      // sliderValue: props.value
    };
  }

  // renderArray = () => {
  //   const { item } = this.props;

  //   let start = item.range_min;
  //   const arr = [];

  //   while (start <= item.range_max) {
  //     arr.push(start++);
  //   }

  //   return arr;
  // };

  render() {
    const {
      item,
      onSliderChangeValue,
      sliderValue,
      // onRadioSelect,
      // activeIndex,
    } = this.props;

    return (
      <View style={styles.questionsContainer}>
        <RulerElements style={{ marginBottom: 2 }} />
        {/* <View style={styles.itemContainer}>
          {this.renderArray().map((el, index) => {
            let i = index + 1;
            return (
              <TouchableOpacity
                onPress={() => onRadioSelect(i)}
                key={i}
                style={[
                  styles.radioBoxContainer,
                  i === 1 && { marginLeft: 0 },
                  activeIndex === i && {
                    backgroundColor: COLOR_TURQUOISE,
                  },
                ]}
              >
                <Text style={styles.textStyle}>{i}</Text>
              </TouchableOpacity>
            );
          })}
				</View> */}
        <View style={styles.sliderContainer}>
          <Slider
            value={sliderValue}
            step={1}
            minimumValue={item.range_min}
            maximumValue={item.range_max}
            onValueChange={(sliderValue) => onSliderChangeValue(sliderValue)}
            trackStyle={styles.trackStyle}
            thumbStyle={styles.thumbStyle}
            // minimumTrackTintColor="red"
            minimumTrackTintColor="transparent"
            customComponent={
              <View style={styles.customComponent}>
                <Text style={styles.customComponentText}>{sliderValue}</Text>
              </View>
            }
          />
        </View>
        <RulerElements />
        <View style={styles.containerRange}>
          <Text style={styles.rangeText}>{item.range_min_text}</Text>
          <Text style={styles.rangeText}>{item.range_max_text}</Text>
        </View>
      </View>
    );
  }
}

RadioQuestionsField.propTypes = {
  // onRadioSelect: PropTypes.func,
  onSliderChangeValue: PropTypes.func,
  sliderValue: PropTypes.number,
  item: PropTypes.string,
  // activeIndex: PropTypes.numberm,
  index: PropTypes.number,
};

export default RadioQuestionsField;
