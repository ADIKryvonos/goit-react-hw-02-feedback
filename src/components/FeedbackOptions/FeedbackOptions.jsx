import PropTypes from 'prop-types';
import { WrapBtn, Button } from './FeedbackOptions.styled';
import {
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from 'react-icons/bs';

export const FeedbackOptions = ({ onGoodBtn, onNeutralBtn, onBadBtn }) => (
  <WrapBtn>
    <Button type="button" color="good" onClick={onGoodBtn}>
      Good <BsFillEmojiSmileFill />
    </Button>
    <Button type="button" color="neutral" onClick={onNeutralBtn}>
      Neutral <BsFillEmojiNeutralFill />
    </Button>
    <Button type="button" color="bad" onClick={onBadBtn}>
      Bad <BsFillEmojiFrownFill />
    </Button>
  </WrapBtn>
);

FeedbackOptions.propTypes = {
  onGoodBtnd: PropTypes.func,
  onGonNeutralBtnoodBtnd: PropTypes.func,
  onBadBtn: PropTypes.func,
};
