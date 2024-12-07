import { IoMdClose } from "react-icons/io";

import styles from "./Modal.module.css";

function Modal({ selectedCurrency, setModalOpen }) {
  console.log(selectedCurrency);

  function closeModalHandler() {
    setModalOpen(false);
  }

  return (
    <>
      <span className={styles.close} onClick={closeModalHandler}>
        <IoMdClose />
      </span>
      <div className={styles.modal}>
        <h3>{selectedCurrency.name}</h3>
      </div>
      <div className={styles.overlay} onClick={closeModalHandler}></div>
    </>
  );
}

export default Modal;
