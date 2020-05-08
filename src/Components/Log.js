import React from "react";
import styled from "styled-components";
import Modal from "react-modal";

const Log = ({ props }) => {
  const { date, weight, calories, activity, description } = props;
  const [modalOpen, setModal] = React.useState(false);

  function handleModalClick() {
    setModal(!modalOpen);
  }
  return (
    <LogContainer>
      <SubContainer>
        <Text onClick={handleModalClick}>{date}</Text>
        <Text>Weight: {weight}</Text>
        <Text>Calories: {calories}</Text>
        <Modal isOpen={modalOpen} style={modalStyle}>
          <SubContainer style={modalSubContainerStyle}>
            <h onClick={handleModalClick}>{date}</h>
            <ModalText>Weight: {weight}</ModalText>
            <ModalText>Calories: {calories}</ModalText>
            <ModalText>Activity: {activity ? "Yes" : "None"}</ModalText>
            <ModalText>Description: {description}</ModalText>
            <button onClick={handleModalClick}>Close</button>
          </SubContainer>
        </Modal>
      </SubContainer>
    </LogContainer>
  );
};
export default Log;

const modalStyle = {
  overlay: {
    backgroundColor: "#00aeef", //! update this
  },
  content: {
    display: "flex",
    justifyContent: "center",
    width: "50%",
    height: "50%",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const modalSubContainerStyle = {
  flexDirection: "column",
  justifyContent: "center",
  borderBottom: "none",
};

const LogContainer = styled.div`
  width: 100vw;
  height: 50px;
  display: flex;
  justify-content: center;

  //   border: 1px solid black;
  margin: 10px 0 10px 0;
`;
const SubContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid grey;

  @media (max-width: 768px) {
    width: 95%;
  }
`;

const Text = styled.p`
  @media (max-width: 768px) {
    font-size: 0.9em;
  }
`;

const ModalText = styled(Text)`
  color: black;
`

/**
 * Name button as View Notes
 */
