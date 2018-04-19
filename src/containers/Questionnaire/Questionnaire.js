import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';
import R from 'ramda';
import styles from './styles';
import { questionnaireScreen } from '../../constants/Styles';
import StepsItem from '../../components/Questionnaire/StepsItem/StepsItem';
import AnswerItem from '../../components/Questionnaire/AnswerItem/AnswerItem';
import QuestionItem from '../../components/Questionnaire/QuestionItem/QuestionItem';
// import QCalendar from '../../components/Questionnaire/QuestionnaireCalendar/Calendar';

class Questionnaire extends Component {
  render() {
    const {
      onNextStepHandle,
      progress,
      onPrevStepHandle,
      currentPage,
      activeIndex,
      onSingleChoice,
      onMultipleChoice,
      onSliderChoice,
      onDateChoice,
      sliderValue,
      getGroupQAarray,
      disabled,
    } = this.props;
    return (
      <LinearGradient
        // start={{ x: 0.1, y: 0.0 }}
        // end={{ x: 0.9, y: 0.0 }}
        // locations={[0.9, 0.1]}
        colors={[
          questionnaireScreen.bgGradientOne,
          questionnaireScreen.bgGradientTwo,
        ]}
        style={{ flex: 1 }}
      >
        <View style={styles.container}>
          {getGroupQAarray().map((item, i) => {
            let index = i + 1;
            if (index === currentPage) {
              if (R.type(item) === 'Object') {
                return (
                  <View style={{ paddingHorizontal: 27.5 }}>
                    <QuestionItem text={item.text} currentPage={currentPage} />
                    <View style={styles.questionsContainer}>
                      {item.answers.map((aItem, aIndex) => {
                        return (
                          <AnswerItem
                            item={aItem}
                            type={item.type}
                            key={aIndex}
                            currentPage={currentPage}
                            activeIndex={activeIndex}
                            sliderValue={sliderValue}
                            itemIndex={aIndex}
                            onSingleChoice={(text) =>
                              onSingleChoice(text, aIndex, i)
                            }
                            onDateChoice={onDateChoice}
                            onMultipleChoice={(text) =>
                              onMultipleChoice(text, aIndex)
                            }
                            onSliderChoice={onSliderChoice}
                          />
                        );
                      })}
                    </View>
                  </View>
                );
              }

              return (
                <ScrollView style={styles.scrollView}>
                  <View style={styles.groupContainer}>
                    <QuestionItem
                      text={item[0].group_name}
                      currentPage={currentPage}
                    />
                    <View style={styles.questionsContainer}>
                      {item.map((qItem, qIndex) => {
                        return (
                          <AnswerItem
                            item={qItem.answers[0]}
                            type={qItem.answers[0].type}
                            key={qIndex}
                            currentPage={currentPage}
                            sliderValue={sliderValue}
                            activeIndex={activeIndex}
                            itemIndex={qIndex}
                            onSingleChoice={(text) =>
                              onSingleChoice(text, qIndex, i)
                            }
                            onDateChoice={onDateChoice}
                            onMultipleChoice={(text) =>
                              onMultipleChoice(text, aIndex)
                            }
                            onSliderChoice={onSliderChoice}
                          />
                        );
                      })}
                    </View>
                  </View>
                </ScrollView>
              );
            }
          })}
          <StepsItem
            onNextStep={onNextStepHandle}
            onPrevStep={onPrevStepHandle}
            progress={progress}
            disabled={disabled}
          />
        </View>
      </LinearGradient>
    );
  }
}

Questionnaire.propTypes = {
  sliderValue: PropTypes.number,
  disabled: PropTypes.bool,
  currentPage: PropTypes.number,
  onSingleChoice: PropTypes.func,
  onMultipleChoice: PropTypes.func,
  onSliderChoice: PropTypes.func,
  onDateChoice: PropTypes.func,
  progress: PropTypes.number,
  getGroupQAarray: PropTypes.func,
  onNextStepHandle: PropTypes.func,
  onPrevStepHandle: PropTypes.func,
  activeIndex: PropTypes.number,
};

export default Questionnaire;
