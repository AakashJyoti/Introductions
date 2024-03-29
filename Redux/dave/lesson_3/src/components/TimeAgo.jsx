import { parseISO, formatDistanceToNow } from "date-fns";
import PropTypes from "prop-types";

export default function TimeAgo({ timestamp }) {
  const date = parseISO(timestamp);
  const timePeriod = formatDistanceToNow(date);
  let timeAgo = `${timePeriod} ago`;

  return (
    <span title={timestamp}>
      &nbsp; <i>{timeAgo}</i>
    </span>
  );
}

TimeAgo.propTypes = {
  timestamp: PropTypes.string,
};
