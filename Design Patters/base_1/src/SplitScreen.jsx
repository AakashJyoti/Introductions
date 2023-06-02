import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  display: flex;
`;

const Pane = styled.div`
  flex: ${(props) => props.weight};
`;

const SplitScreen = ({ children, leftWeight = 1, rightWeight = 1 }) => {
  const [left, right] = children;
  return (
    <Container>
      <Pane weight={leftWeight}>{left}</Pane>
      <Pane weight={rightWeight}>{right}</Pane>
    </Container>
  );
};

SplitScreen.propTypes = {
  leftWeight: PropTypes.number,
  rightWeight: PropTypes.number,
};

export default SplitScreen;
