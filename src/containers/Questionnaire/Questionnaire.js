import React, { Component } from 'react';
import { View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';
import styles from './styles';
import { questionnaireScreen, COLOR_TURQUOISE } from '../../constants/Styles';
import QuestionsField from '../../components/QuestionsField/QuestionsField';
import MultiQuestionsField from '../../components/MultiQuestionsField/MultiQuestionsField';
import RadioQuestionsField from '../../components/RadioQuestionsField/RadioQuestionsField';
import RulerElements from '../../components/RadioQuestionsField/RulerElements';
import QCalendar from '../../components/QuestionnaireCalendar/Calendar';
import QuestionnaireFooter from '../../components/QuestionnaireFooter/QuestionnaireFooter';

class QuestionnaireFirst extends Component {
  renderTitle = () => {
    const { currentPage, questions } = this.props;

    // switch (questions.type) {
    //   case 'single':
    //     return (
    //       <View style={styles.titleContainer}>
    //         <Text style={styles.titleNumber}>{currentPage}</Text>
    //         <Icon
    //           size={14}
    //           name="md-arrow-round-forward"
    //           color={COLOR_TURQUOISE}
    //           style={styles.titleIcon}
    //         />
    //         <Text style={styles.titleText}>Key reason of your tip</Text>
    //       </View>
    //     );
    //   case 'date':
    //     return (
    //       <View style={styles.titleContainer}>
    //         <Text style={styles.titleNumber}>{currentPage}</Text>
    //         <Icon
    //           size={14}
    //           name="md-arrow-round-forward"
    //           color={COLOR_TURQUOISE}
    //           style={styles.titleIcon}
    //         />
    //         <Text style={styles.titleText}>Arrival and departure dates:</Text>
    //       </View>
    //     );
    //   case 'multiple':
    //     return (
    //       <View style={styles.titleContainer}>
    //         <Text style={styles.titleNumber}>{currentPage}</Text>
    //         <Icon
    //           size={14}
    //           name="md-arrow-round-forward"
    //           color={COLOR_TURQUOISE}
    //           style={styles.titleIcon}
    //         />
    //         <Text style={styles.titleText}>
    //           Your favorite activities have to do with:
    //         </Text>
    //       </View>
    //     );
    //   case 'range':
    //     return (
    //       <View style={styles.titleContainer}>
    //         <Text style={styles.titleNumber}>{currentPage}</Text>
    //         <Icon
    //           size={14}
    //           name="md-arrow-round-forward"
    //           color={COLOR_TURQUOISE}
    //           style={styles.titleIcon}
    //         />
    //         <Text style={styles.titleText}>Your kind of beach is</Text>
    //       </View>
    //     );
    //   default:
    //     return null;
    // }
  };
  renderContent = () => {
    const {
      onCheckedHandle,
      currentPage,
      onDateChangeHandle,
      onCheckMultiHandle,
      thirdAnswers,
      fourthAnswer,
      onRadioSelectHandle,
      activeIndex,
    } = this.props;

    switch (currentPage) {
      case 1:
        return (
          <View style={styles.questionsContainer}>
            <QuestionsField
              text="Lorem"
              iconText="A"
              onToggle={(value) => onCheckedHandle(value)}
            />
            <QuestionsField
              text="Ipsum"
              iconText="B"
              onToggle={(value) => onCheckedHandle(value)}
            />
            <QuestionsField
              text="Dolor"
              iconText="C"
              onToggle={(value) => onCheckedHandle(value)}
            />
            <QuestionsField
              text="Elit"
              iconText="D"
              onToggle={(value) => onCheckedHandle(value)}
            />
          </View>
        );
      case 2:
        return (
          <View>
            <QCalendar onDateChange={onDateChangeHandle} />
          </View>
        );
      case 3:
        return (
          <View style={styles.questionsContainer}>
            {thirdAnswers.map((item, index) => (
              <MultiQuestionsField
                text={item.value}
                onToggle={() => onCheckMultiHandle(index)}
              />
            ))}
          </View>
        );
      case 4:
        return (
          <View style={styles.questionsContainer}>
            <RulerElements />
            <View style={styles.fourthContainer}>
              {fourthAnswer.map((item, index) => (
                <RadioQuestionsField
                  item={item}
                  index={index}
                  key={index}
                  selected={index === activeIndex}
                  onRadioSelect={() => onRadioSelectHandle(index)}
                />
              ))}
            </View>
            <View style={styles.containerRange}>
              <Text style={styles.rangeText}>TextLeft</Text>
              <Text style={styles.rangeText}>TextRight</Text>
            </View>
          </View>
        );
      default:
        return <Text>The end</Text>;
    }
  };

  render() {
    const {
      onNextStepHandle,
      progress,
      onPrevStepHandle,
      questions,
      currentPage,
      answers,
      aKey,
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
          {questions.map((q, index) => {
            if (index + 1 === currentPage) {
              return (
                <View>
                  <View style={styles.titleContainer}>
                    <Text style={styles.titleNumber}>{currentPage}</Text>
                    <Icon
                      size={14}
                      name="md-arrow-round-forward"
                      color={COLOR_TURQUOISE}
                      style={styles.titleIcon}
                    />
                    <Text style={styles.titleText}>{q.text}</Text>
                  </View>
                </View>
              );
            }
            return <View />;
          })}
          {this.renderContent()}
          <QuestionnaireFooter
            onNextStep={onNextStepHandle}
            onPrevStep={onPrevStepHandle}
            progress={progress}
          />
        </View>
      </LinearGradient>
    );
  }
}

QuestionnaireFirst.defaultProps = {
  onCheckedHandle: () => {},
  currentPage: 1,
  onPrevStepHandle: () => {},
  progress: 0,
  onNextStepHandle: () => {},
};

QuestionnaireFirst.propTypes = {
  onCheckedHandle: PropTypes.func,
  currentPage: PropTypes.number,
  progress: PropTypes.number,
  onNextStepHandle: PropTypes.func,
  onPrevStepHandle: PropTypes.func,
};

export default QuestionnaireFirst;
