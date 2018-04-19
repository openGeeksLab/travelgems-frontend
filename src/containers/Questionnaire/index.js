import React, { Component } from 'react';
import Questionnaire from './Questionnaire';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import R from 'ramda';
import PropTypes from 'prop-types';

class QuestionnaireContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 1,
      allPages: R.length(this.getGroupQAarray()),
      selectedStartDate: null,
      selectedEndDate: null,
      sliderValue: 1,
      activeIndex: null,
      progress: 0,
      allAnswers: {},
      disabled: true,
    };
  }

  onSingleChoice = (text, index, currentPage) => {
    this.setState({
      activeIndex: index,
    });
  };

  onMultipleChoice = (text, index) => {
    // console.warn('text', text);
  };

  onDateChoice = (date, type) => {
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

    // console.warn('selectedStartDate', this.state.selectedStartDate);
    // console.warn('selectedEndDate', this.state.selectedEndDate);
  };

  onSliderChoice = (value) => {
    this.setState({
      sliderValue: value,
    });
  };

  onNextStepHandle = () => {
    const res = this.state.currentPage * 100 / this.state.allPages;

    if (this.state.currentPage <= this.state.allPages) {
      this.setState({
        currentPage: this.state.currentPage + 1,
        progress: res,
        disabled: false,
      });
    } else {
      this.setState({
        currentPage: 1,
        progress: 0,
        disabled: true,
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
        disabled: false,
      });
    } else {
      this.setState({
        currentPage: 1,
        progress: 0,
        disabled: true,
      });
    }
  };

  getGroupQAarray = () => {
    const { questions, qa_map, answers } = this.props;

    let groupQAarray = [];
    const groupIndexes = {};

    questions.map((q, i) => {
      let index = i + 1;
      const qAnswers = [];
      R.uniq(qa_map[index]).map((key) => {
        qAnswers.push(answers[key]);
      });
      if (q.group_id.length !== 0) {
        if (groupIndexes[q.group_id] === undefined) {
          groupQAarray[index] = [];
          groupIndexes[q.group_id] = index;
        }
        const groupIndex = groupIndexes[q.group_id];
        groupQAarray[groupIndex].push({
          ...q,
          answers: qAnswers,
        });
      } else {
        groupQAarray[index] = { ...q, answers: qAnswers };
      }
    });

    return groupQAarray.filter((u) => u && u);
  };

  render() {
    const {
      isChecked,
      currentPage,
      progress,
      activeIndex,
      sliderValue,
      disabled,
    } = this.state;

    return (
      <Questionnaire
        onSingleChoice={this.onSingleChoice}
        onMultipleChoice={this.onMultipleChoice}
        onDateChoice={this.onDateChoice}
        onSliderChoice={this.onSliderChoice}
        isChecked={isChecked}
        getGroupQAarray={this.getGroupQAarray}
        currentPage={currentPage}
        disabled={disabled}
        sliderValue={sliderValue}
        onNextStepHandle={this.onNextStepHandle}
        onPrevStepHandle={this.onPrevStepHandle}
        activeIndex={activeIndex}
        progress={progress}
      />
    );
  }
}

QuestionnaireContainer.propTypes = {
  questions: PropTypes.array,
  qa_map: PropTypes.object,
  answers: PropTypes.object,
};

export default compose(
  connect(
    (state) => ({
      questions: state.content.poll.questions,
      qa_map: state.content.poll.qa_map,
      answers: state.content.poll.answers,
    }),
    {},
  ),
)(QuestionnaireContainer);
