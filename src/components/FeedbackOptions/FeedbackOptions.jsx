import PropTypes from 'prop-types';
import { WrapBtn, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <WrapBtn>
    {options.map(option => (
      <Button
        type="button"
        key={option}
        color={option}
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </Button>
    ))}
  </WrapBtn>
);

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.string),
};
