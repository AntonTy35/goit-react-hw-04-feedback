import { Component } from 'react';
import { Section } from './Section/Section.styled';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  // state = {
  // good: 0,
  // neutral: 0,
  // bad: 0
  // }

  handleX = type => {
    this.setState(prevState => {
      return {
        [type]: prevState[type] + 1,
      };
    });
  };

  // countTotalFeedback = () => {
  //   const { good, neutral, bad } = this.state;
  //   return (good + neutral + bad);
  // };

  // countPositiveFeedbackPercentage() {
  //   const totalFeedback = this.countTotalFeedback();
  //   return totalFeedback > 0
  //     ? Math.round((this.state.good / totalFeedback) * 100)
  //     : 0;
  // }

  render() {
    return (
      <Section title="Feedback">
        <b> Please leave feedback</b>
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.handleX}
        />
        <b>Statistics</b>
        {this.countTotalFeedback() > 0 ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    );
  }
}
