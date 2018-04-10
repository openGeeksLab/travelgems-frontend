import React, { Component } from 'react';
import { View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';
import R from 'ramda';
import styles from './styles';
import { questionnaireScreen, COLOR_TURQUOISE } from '../../constants/Styles';
import QuestionsField from '../../components/Questionnaire/QuestionsField/QuestionsField';
import MultiQuestionsField from '../../components/Questionnaire/MultiQuestionsField/MultiQuestionsField';
import RadioQuestionsField from '../../components/Questionnaire/RadioQuestionsField/RadioQuestionsField';
import RulerElements from '../../components/Questionnaire/RadioQuestionsField/RulerElements';
import QCalendar from '../../components/Questionnaire/QuestionnaireCalendar/Calendar';
import QuestionnaireFooter from '../../components/Questionnaire/QuestionnaireFooter/QuestionnaireFooter';
import AnswerItem from '../../components/Questionnaire/AnswerItem/AnswerItem';

class Questionnaire extends Component {
  // renderTitle = () => {
  //   const { currentPage, questions } = this.props;

  //   switch (questions.type) {
  //     case 'single':
  //       return (
  //         <View style={styles.titleContainer}>
  //           <Text style={styles.titleNumber}>{currentPage}</Text>
  //           <Icon
  //             size={14}
  //             name="md-arrow-round-forward"
  //             color={COLOR_TURQUOISE}
  //             style={styles.titleIcon}
  //           />
  //           <Text style={styles.titleText}>Key reason of your tip</Text>
  //         </View>
  //       );
  //     case 'date':
  //       return (
  //         <View style={styles.titleContainer}>
  //           <Text style={styles.titleNumber}>{currentPage}</Text>
  //           <Icon
  //             size={14}
  //             name="md-arrow-round-forward"
  //             color={COLOR_TURQUOISE}
  //             style={styles.titleIcon}
  //           />
  //           <Text style={styles.titleText}>Arrival and departure dates:</Text>
  //         </View>
  //       );
  //     case 'multiple':
  //       return (
  //         <View style={styles.titleContainer}>
  //           <Text style={styles.titleNumber}>{currentPage}</Text>
  //           <Icon
  //             size={14}
  //             name="md-arrow-round-forward"
  //             color={COLOR_TURQUOISE}
  //             style={styles.titleIcon}
  //           />
  //           <Text style={styles.titleText}>
  //             Your favorite activities have to do with:
  //           </Text>
  //         </View>
  //       );
  //     case 'range':
  //       return (
  //         <View style={styles.titleContainer}>
  //           <Text style={styles.titleNumber}>{currentPage}</Text>
  //           <Icon
  //             size={14}
  //             name="md-arrow-round-forward"
  //             color={COLOR_TURQUOISE}
  //             style={styles.titleIcon}
  //           />
  //           <Text style={styles.titleText}>Your kind of beach is</Text>
  //         </View>
  //       );
  //     default:
  //       return null;
  //   }
  // };
  // renderContent = () => {
  //   const {
  //     onCheckedHandle,
  //     currentPage,
  //     onDateChangeHandle,
  //     onCheckMultiHandle,
  //     thirdAnswers,
  //     fourthAnswer,
  //     onRadioSelectHandle,
  //     activeIndex,
  //   } = this.props;

  //   switch (currentPage) {
  //     case 1:
  //       return (
  //         <View style={styles.questionsContainer}>
  //           <QuestionsField
  //             text="Lorem"
  //             iconText="A"
  //             onToggle={(value) => onCheckedHandle(value)}
  //           />
  //           <QuestionsField
  //             text="Ipsum"
  //             iconText="B"
  //             onToggle={(value) => onCheckedHandle(value)}
  //           />
  //           <QuestionsField
  //             text="Dolor"
  //             iconText="C"
  //             onToggle={(value) => onCheckedHandle(value)}
  //           />
  //           <QuestionsField
  //             text="Elit"
  //             iconText="D"
  //             onToggle={(value) => onCheckedHandle(value)}
  //           />
  //         </View>
  //       );
  //     case 2:
  //       return (
  //         <View>
  //           <QCalendar onDateChange={onDateChangeHandle} />
  //         </View>
  //       );
  //     case 3:
  //       return (
  //         <View style={styles.questionsContainer}>
  //           {thirdAnswers.map((item, index) => (
  //             <MultiQuestionsField
  //               text={item.value}
  //               key={index}
  //               onToggle={() => onCheckMultiHandle(index)}
  //             />
  //           ))}
  //         </View>
  //       );
  //     case 4:
  //       return (
  //         <View style={styles.questionsContainer}>
  //           <RulerElements />
  //           <View style={styles.fourthContainer}>
  //             {fourthAnswer.map((item, index) => (
  //               <RadioQuestionsField
  //                 item={item}
  //                 index={index}
  //                 key={index}
  //                 selected={index === activeIndex}
  //                 onRadioSelect={() => onRadioSelectHandle(index)}
  //               />
  //             ))}
  //           </View>
  //           <View style={styles.containerRange}>
  //             <Text style={styles.rangeText}>TextLeft</Text>
  //             <Text style={styles.rangeText}>TextRight</Text>
  //           </View>
  //         </View>
  //       );
  //     default:
  //       return <Text>The end</Text>;
  //   }
  // };

  // asd = (i) => {
  //   if (this.props.qa_map[i].length === 0) {
  //     console.warn('dfgdfgdfg');
  //   }
  // };

  render() {
    const {
      onNextStepHandle,
      progress,
      onPrevStepHandle,
      questions,
      currentPage,
      activeIndex,
      answers,
      qa_map,
      onCheckMultiHandle,
      onCheckedHandle,
      onRadioSelectHandle,
      onDateChangeHandle,
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
          {questions.map((question, qIndex) => {
            let i = qIndex + 1;

            if (i === currentPage) {
              console.warn('q', question.group_id);
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
                    <Text style={styles.titleText}>{question.text}</Text>
                  </View>
                  <View style={styles.questionsContainer}>
                    {/* {this.asd(i)} */}
                    {R.uniq(qa_map[i]).map((key, aIndex) => {
                      const answ = answers[key];

                      return (
                        <AnswerItem
                          item={answ}
                          type={question.type}
                          key={aIndex}
                          currentPage={currentPage}
                          activeIndex={activeIndex}
                          onCheckedHandle={(text) =>
                            onCheckedHandle(text, aIndex, i)
                          }
                          onDateChangeHandle={onDateChangeHandle}
                          onCheckMultiHandle={onCheckMultiHandle}
                          onRadioSelectHandle={onRadioSelectHandle}
                        />
                      );
                    })}
                    {/* <QCalendar onDateChange={onDateChangeHandle} /> */}
                  </View>
                </View>
              );
            }
            return null;
          })}
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

Questionnaire.defaultProps = {
  onCheckedHandle: () => {},
  currentPage: 1,
  onPrevStepHandle: () => {},
  progress: 0,
  onNextStepHandle: () => {},
  answers: {},
  qa_map: {},
};

Questionnaire.propTypes = {
  onCheckedHandle: PropTypes.func,
  currentPage: PropTypes.number,
  progress: PropTypes.number,
  onNextStepHandle: PropTypes.func,
  onPrevStepHandle: PropTypes.func,
  answers: PropTypes.object,
  qa_map: PropTypes.object,
};

export default Questionnaire;
