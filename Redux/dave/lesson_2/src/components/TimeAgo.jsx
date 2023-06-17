import { parseISO, formatDistanceToNow } from "date-fns";

const TimeAgo = ({ timestamp }) => {
  let timeAgo = "";
  if (timestamp) {
    const date = parseISO(timestamp);
    const timePeriod = formatDistanceToNow(date);
    timeAgo = `${timePeriod}`;
  }

  return (
    <span title={timestamp}>
      &nbsp; <i>{timeAgo} ago</i>
    </span>
  );
};
export default TimeAgo;