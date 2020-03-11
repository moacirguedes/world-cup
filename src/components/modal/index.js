import React from 'react';
import './styles.scss';
import Radio from '../radio';

const Modal = ({ show }) => {

  if (show) {
    return (
      <div className="Modal">
        <h3 className="Modal__Title">New Team</h3>

        <div className="Modal__Content">
          <label for="teamName">Team Name</label><br></br>
          <input className="Content__Input" id="teamName" />

          <div>
            <Radio
              id="groupA"
              name="group"
              value="a"
              text="Group A"
            />

            <Radio
              id="groupB"
              name="group"
              value="b"
              text="Group B"
            />

            <Radio
              id="groupC"
              name="group"
              value="c"
              text="Group C"
            />

            <Radio
              id="groupD"
              name="group"
              value="d"
              text="Group D"
            />
          </div>
        </div>

        <div className="Modal__Footer">
          <button className="Footer__Button">Add</button>
        </div>
      </div>
    );
  }
  else {
    return null;
  }
}

export default Modal;
