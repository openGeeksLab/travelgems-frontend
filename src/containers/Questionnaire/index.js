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

// const fourthAnswer = ['1', '2', '3', '4', '5'];

class QuestionnaireContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 1,
      allPages: R.length(this.getGroupQAarray()),
      selectedStartDate: null,
      selectedEndDate: null,
      sliderValue: 1,
      textVal: '',
      // thirdAnswers: thirdAnswers,
      // fourthAnswer: fourthAnswer,
      activeIndex: null,
      progress: 0,
      allAnswers: {},
      // groupQAarray: {},
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

    // const data = {
    //   [currentPage]: {
    //     index: index + 1,
    //     answer: textVal,
    //   },
    // };

    // this.setState({
    //   allAnswers: { ...data },
    // });

    // this.setState({
    //   thirdAnswers: data,
    // });

    // console.warn('data', data);
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

  onSliderChangeValueHandle = (value) => {
    // console.warn(value);
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

  // getGroupQAarray = () => {
  //   const { questions, qa_map, answers } = this.props;

  //   const groupQAarray = {};

  //   questions.map((q, i) => {
  //     let index = i + 1;
  //     qa_map[index].map((key, index) => {
  //       // console.warn('key', key);
  //     });

  //     if (q.group_id.length !== 0) {
  //       groupQAarray[q.group_id] = groupQAarray[q.group_id]
  //         ? groupQAarray[q.group_id]
  //         : [];
  // 			groupQAarray[q.group_id].push(q);
  // 			console.warn('q', groupQAarray[q.group_id]);
  //     } else {
  //       groupQAarray['other'] = groupQAarray['other']
  //         ? groupQAarray['other']
  //         : [];
  //       groupQAarray['other'].push(q);
  //     }
  //   });

  //   // console.warn(JSON.stringify(groupQAarray, null, 2));
  //   return groupQAarray;
  // };

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
      // thirdAnswers,
      // fourthAnswer,
      progress,
      activeIndex,
      sliderValue,
    } = this.state;

    // const { questions, answers, qa_map } = this.props;

    return (
      <Questionnaire
        onCheckedHandle={this.onCheckedHandle}
        isChecked={isChecked}
        // questions={questions}
        // answers={answers}
        // qa_map={qa_map}
        getGroupQAarray={this.getGroupQAarray}
        currentPage={currentPage}
        sliderValue={sliderValue}
        // groupQAarray={this.state.groupQAarray}
        onDateChangeHandle={this.onDateChangeHandle}
        onCheckMultiHandle={this.onCheckMultiHandle}
        onSliderChangeValueHandle={this.onSliderChangeValueHandle}
        // thirdAnswers={thirdAnswers}
        // fourthAnswer={fourthAnswer}
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
