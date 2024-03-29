import { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const ModalBackground = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalBody = styled.div`
  background-color: white;
  margin: 10% auto;
  padding: 20px;
  width: 50%;
  border-radius: 1rem;
`;

export default function Modal({ children }) {
  const [shouldShow, setShouldShow] = useState(false);

  return (
    <>
      <button onClick={() => setShouldShow(true)}>Show</button>
      {shouldShow && (
        <ModalBackground onClick={() => setShouldShow(false)}>
          <ModalBody onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setShouldShow(false)}>close</button>
            {children}
          </ModalBody>
        </ModalBackground>
      )}
    </>
  );
}

Modal.propTypes = {
  children: PropTypes.object,
};
