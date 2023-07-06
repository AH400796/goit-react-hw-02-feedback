import PropTypes from 'prop-types';
import { FeedbackList, FeedbackListItem } from './Statistics.styled';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  const totalFeedbacks = total();
  const percentageOfPositiveFeedback = positivePercentage();
  return (
    <FeedbackList>
      <FeedbackListItem>Good: {good}</FeedbackListItem>
      <FeedbackListItem>Neutral: {neutral}</FeedbackListItem>
      <FeedbackListItem>Bad: {bad}</FeedbackListItem>
      <FeedbackListItem>Total: {totalFeedbacks}</FeedbackListItem>
      <FeedbackListItem>
        Positive feedback: {percentageOfPositiveFeedback}%
      </FeedbackListItem>
    </FeedbackList>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
