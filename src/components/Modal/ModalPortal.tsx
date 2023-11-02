import { useState } from 'react';
import { createPortal } from 'react-dom';
import ModalContent from './ModalContent.tsx';

export default function ModalPortal() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        className="my-4 mx-auto py-2 px-4 flex justify-center flex-row border-2 border-green-600 rounded-full cursor-pointer hover:bg-green-400 duration-200 w-72 font-medium text-xl"
        onClick={() => setShowModal(true)}
      >
        Mostrar modal con uso de portal
      </button>
      {showModal &&
        createPortal(
          <ModalContent onClose={() => setShowModal(false)} />,
          document.body
        )}
    </>
  );
}
