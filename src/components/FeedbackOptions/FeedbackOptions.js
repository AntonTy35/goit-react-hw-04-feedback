import { Button, Wrapper } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Wrapper>
      {options.map(option => (
        <Button
          type="button"
          key={option}
          onClick={() => onLeaveFeedback(`${option}`)}
        >
          {option}
        </Button>
      ))}
    </Wrapper>
  );
};
