import React from 'react';

const Modal = ({ content }) => {
  return (
    <div className="modal-dialog modal-lg modal-dialog-scrollable">
      <div className="modal-content modal-style">
        <div className="modal-header">
          <h5 className="modal-title text-primary" id='validParenthesesLabel'>JavaScript Code</h5>
        </div>
        <div className="modal-body dark-text" >
          {content()}
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
