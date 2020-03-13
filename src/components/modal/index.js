import React from 'react';
import './styles.scss';

const Modal = ({ show, title, children }) => {

  if (show) {
    return (
      <div className="Modal">
        <h3 className="Modal__Title">{title}</h3>

        <div className="Modal__Content">
          {children}
        </div>

        <div className="Modal__Footer">
          <button className="Footer__Button">Confirm</button>
        </div>
      </div>
    );
  }
  else {
    return null;
  }
}

export default Modal;
