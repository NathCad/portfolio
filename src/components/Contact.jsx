import React, { useState } from "react";

import "./contact.scss";
import SocialLinks from "./SocialLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [webSite, setWebSite] = useState("");
  const [message, setMessage] = useState("");

  return (
    <section id="contact">
      <h2 className="text display-text extrabold">
        Contactez&nbsp;<span className="regular">Moi</span>
      </h2>
      <div className="content">
        <form>
          <label className="paragraph-p1 thin">
            <span className="required">Nom</span>
            <input
              type="text"
              placeholder="Votre nom"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label className="paragraph-p1 thin">
            <span className="required">Email</span>
            <input
              type="email"
              placeholder="Votre email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label className="paragraph-p1 thin">
            Site web / Nom de l'entreprise
            <input
              type="text"
              placeholder="Adresse de votre site ou de votre entreprise"
              name="webSite"
              value={webSite}
              onChange={(e) => setWebSite(e.target.value)}
            />
          </label>
          <label className="paragraph-p1 thin">
            <span className="required">Message</span>
            <textarea
              rows="10"
              placeholder="Que puis-je pour vous ?"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </label>
          <p className="paragraph-p1 thin">
            les champs marqués d'un <span className="asterisk">*</span> sont
            obligatoires
          </p>
          <div className="form-inputs">
            <button className="button-text">
              Envoyer
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
            <SocialLinks />
          </div>
        </form>
        <section className="contact-text">
          <h3 className="display-text extrabold">
            Je suis à <span className="outlined extrabold">votre </span>
            écoute
          </h3>
          <p className="paragraph-p1">
            Vous pouvez m'envoyer un petit message pour toute demande, comme par
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
