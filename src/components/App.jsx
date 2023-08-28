import { Section } from './Section/Section.styled';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Statistics } from './Statistics/Statistics';
import { useState } from 'react';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    return countTotalFeedback > 0
      ? Math.round((good / countTotalFeedback) * 100)
      : 0;
  };

  const options = { good, neutral, bad };

  const handleX = option => {
    switch (option) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        return;
    }
  };

  return (
    <Section title="Feedback">
      <b> Please leave feedback</b>
      <FeedbackOptions
        options={Object.keys(options)}
        onLeaveFeedback={handleX}
      />
      <b>Statistics</b>
      {countTotalFeedback > 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      ) : (
        <Notification message="There is no feedback" />
      )}
    </Section>
  );
};
