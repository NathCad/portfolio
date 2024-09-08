import React from "react";

import "./contact.scss";
import SocialLinks from "./SocialLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";

const Contact = () => {
  return (
    <section id="contact">
      <h2 className="text display-text extrabold">
        Contactez&nbsp;<span className="regular">Moi</span>
      </h2>
      <div className="content">
        <form>
          <label className="paragraph-p1 thin">
            Nom
            <input type="text" placeholder="Votre nom" />
          </label>
          <label className="paragraph-p1 thin">
            Email
            <input type="email" placeholder="Votre email" />
          </label>
          <label className="paragraph-p1 thin">
            Site web / Nom de l'entreprise
            <input
              type="email"
              placeholder="Adresse de votre site ou de votre entreprise"
            />
          </label>
          <label className="paragraph-p1 thin">
            Message
            <textarea rows="10" placeholder="Que puis-je pour vous ?" />
          </label>
          <div className="form-inputs">
            <button className="button-text">Envoyer<FontAwesomeIcon icon={faPaperPlane} /></button>
            <SocialLinks />
          </div>
        </form>
        <section className="contact-text">
          <h3 className="display-text extrabold">
            Je suis à <span className="outlined extrabold">votre </span>
            écoute
          </h3>
          <p className="paragraph-p1">
            Vous pouvez m'envoyer un petit message, pour toute demande comme par
            exemple une offre d'emploi ou un projet à développer.
          </p>
          <p className="paragraph-p1">
            Je me ferais un plaisir de vous répondre.
          </p>
        </section>
      </div>
    </section>
  );
};

export default Contact;
