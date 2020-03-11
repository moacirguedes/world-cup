import React from 'react';
import './styles.scss';

const Modal = ({ show }) => {

  if (show) {
    return (
      <div className="Modal">
        <h3 className="Modal__Title">New Team</h3>

        <div className="Modal__Content">
          <label for="teamName">Team Name</label><br></br>
          <input className="Content__Input" id="teamName" />

          <div className="Content_Radios">
            <input
              className="Content__Radio"
              type="radio"
              id="groupA"
              name="group"
              value="a"
            />
            <label for="groupA">Group A</label>

            <input
              className="Content__Radio"
              type="radio"
              id="groupB"
              name="group"
              value="b"
            />
            <label for="groupB">Group B</label>

            <input
              className="Content__Radio"
              type="radio"
              id="groupC"
              name="group"
              value="c"
            />
            <label for="groupC">Group C</label>

            <input
              className="Content__Radio"
              type="radio"
              id="groupD"
              name="group"
              value="d"
            />
            <label for="groupD">Group D</label>
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
