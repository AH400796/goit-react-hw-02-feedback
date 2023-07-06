import PropTypes from 'prop-types';
import { FeedbackBtn, List, ListItem } from './FeedbackOptions.styled';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <List>
      {options.map(option => {
        const optionCapitalize =
          option.charAt(0).toUpperCase() + option.slice(1);
        return (
          <ListItem key={option}>
            <FeedbackBtn type="button" onClick={() => onLeaveFeedback(option)}>
              {optionCapitalize}
            </FeedbackBtn>
          </ListItem>
        );
      })}
    </List>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
