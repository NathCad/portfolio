import React from "react";
import "./contactResultModal.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { LinkedInLink } from "../SocialLinks";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const SuccessContent = () => {
  return (
    <>
      <h1>Envoi réussi</h1>
      <FontAwesomeIcon icon={faThumbsUp} className="success fa-4x" />
      <p>Merci pour votre message, j'y répondrai dès que possible.</p>
    </>
  );
};

const ErrorContent = () => {
  return (
    <>
      <h1>Envoi en erreur</h1>
      <FontAwesomeIcon icon={faCircleXmark} className="error fa-4x" />
      <div className="error-text">
        <p>
          Oups ! Une erreur est survenue, si le problème persiste contactez moi
          sur LinkedIn.
        </p>
        <LinkedInLink />
      </div>
    </>
  );
};

type ContactResultModalProps = {
  isSuccess: boolean, 
  closeModal: () => void
}

const ContactResultModal = ({ isSuccess, closeModal }: ContactResultModalProps) => {
  return (
    <div className="contact-result-modal">
      <div className="modal-content">
        {isSuccess ? <SuccessContent /> : <ErrorContent />}
        <button onClick={closeModal}>
          <FontAwesomeIcon icon={faCheck} />
          Ok
        </button>
      </div>
    </div>
  );
};

export default ContactResultModal;
