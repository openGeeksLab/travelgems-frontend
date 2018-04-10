import React, { Component } from 'react';
import Questionnaire from './Questionnaire';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import R from 'ramda';
import PropTypes from 'prop-types';

// const thirdAnswers = [
//   { value: 'firstValue', isSelected: false },
//   { value: 'secondValue', isSelected: false },
//   { value: 'thirdValue', isSelected: false },
//   { value: 'fourthValue', isSelected: false },
// ];

const fourthAnswer = ['1', '2', '3', '4', '5'];

class QuestionnaireContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 1,
      allPages: R.length(props.questions),
      selectedStartDate: null,
      selectedEndDate: null,
      textVal: '',
      // thirdAnswers: thirdAnswers,
      fourthAnswer: fourthAnswer,
      activeIndex: null,
      progress: 0,
      allAnswers: {},
    };
  }

  onCheckedHandle = (textVal, index, currentPage) => {
    // console.warn('text', textVal);
    // console.warn('index', index);
    this.setState({
      textVal,
    });

    const data = {
      [currentPage]: {
        index: index + 1,
        answer: textVal,
      },
    };

    this.setState(
      {
        allAnswers: { ...data },
      },
      () => console.warn('allAnswers', this.state.allAnswers),
    );
  };

  onCheckMultiHandle = (index, text) => {
    // const data = this.state.thirdAnswers;

    console.warn('index', index);

    // data.map((item, num) => {
    //   if (index === num) {
    //     item.isSelected = !item.isSelected;
    //     return item;
    //   }
    //   return item;
    // });

    const data = {
      [currentPage]: {
        index: index + 1,
        answer: textVal,
      },
    };

    this.setState({
      allAnswers: { ...data },
    });

    // this.setState({
    //   thirdAnswers: data,
    // });

    console.warn('data', data);
  };

  onDateChangeHandle = (date, type) => {
    if (type === 'END_DATE') {
      this.setState({
        selectedEndDate: date,
      });
    } else {
      this.setState({
        selectedStartDate: date,
        selectedEndDate: null,
      });
    }

    // console.warn('date', date);
    console.warn('selectedStartDate', this.state.selectedStartDate);
    console.warn('selectedEndDate', this.state.selectedEndDate);
  };

  onRadioSelectHandle = (index) => {
    this.setState({
      activeIndex: index,
    });
  };

  onNextStepHandle = () => {
    const res = this.state.currentPage * 100 / this.state.allPages;

    if (this.state.currentPage <= this.state.allPages) {
      this.setState({
        currentPage: this.state.currentPage + 1,
        progress: res,
      });
    } else {
      this.setState({
        currentPage: 1,
        progress: 0,
      });
    }
  };

  onPrevStepHandle = () => {
    let page = this.state.currentPage;
    let res;

    if (page > 1) {
      page -= 1;
      res = page * 100 / this.state.allPages;

      this.setState({
        currentPage: page,
        progress: res,
      });
    } else {
      this.setState({
        currentPage: 1,
        progress: res,
      });
    }
  };

  render() {
    const {
      isChecked,
      currentPage,
      thirdAnswers,
      progress,
      fourthAnswer,
      activeIndex,
    } = this.state;

    const { questions, answers, qa_map } = this.props;

    return (
      <Questionnaire
        onCheckedHandle={this.onCheckedHandle}
        questions={questions}
        isChecked={isChecked}
        answers={answers}
        qa_map={qa_map}
        currentPage={currentPage}
        onDateChangeHandle={this.onDateChangeHandle}
        onCheckMultiHandle={this.onCheckMultiHandle}
        onRadioSelectHandle={this.onRadioSelectHandle}
        thirdAnswers={thirdAnswers}
        fourthAnswer={fourthAnswer}
        onNextStepHandle={this.onNextStepHandle}
        onPrevStepHandle={this.onPrevStepHandle}
        activeIndex={activeIndex}
        progress={progress}
      />
    );
  }
}

QuestionnaireContainer.defaultProps = {
  questions: [],
  qa_map: {},
  answers: {},
};

QuestionnaireContainer.propTypes = {
  questions: PropTypes.array,
  qa_map: PropTypes.object,
  answers: PropTypes.object,
};

export default compose(
  connect(
    (state) => ({
      questionnaire: state.content.poll,
      questions: state.content.poll.questions,
      qa_map: state.content.poll.qa_map,
      answers: state.content.poll.answers,
    }),
    {},
  ),
)(QuestionnaireContainer);
