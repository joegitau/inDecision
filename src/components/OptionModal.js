import React from "react";
import Modal from "react-modal";

const OptionModal = props => (
  <Modal
    isOpen={!!props.selectedOption}
    onRequestClose={props.handleCloseModal}
    contentLabel="Selected Option"
    ariaHideApp={false}
    closeTimeoutMS={500}
    className="modal"
  >
    <h3>Selected Option</h3>
    {props.selectedOption && <p>{props.selectedOption}</p>}
    <button className="button" onClick={props.handleCloseModal}>
      Okay
    </button>
  </Modal>
);

export default OptionModal;
