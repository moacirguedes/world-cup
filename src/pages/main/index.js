import React, { useState } from 'react';
import './styles.scss';
import Modal from '../../components/modal';

const Main = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setShowModal(!showModal);
        }}
      >
        Modal
      </button>

      <Modal show={showModal} />
    </>
  );
}

export default Main;
