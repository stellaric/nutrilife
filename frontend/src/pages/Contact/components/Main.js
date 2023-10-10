import React from "react";

export default function Main() {
  return (
    <main className="main_contact">
      <div className="form_contact">
       <h2>Contact</h2>
        <div className="form_contact_content">
    <div className="name">
    <label htmlFor="email">Email: </label>
 <input type="email" name="email" placeholder="Entrez votre email..." required />
    </div>
    <div className="sujet">
    <label htmlFor="sujet">Sujet: </label>
 <input type="text" name="email" placeholder="Entrez votre email..." required />
    </div>
    <div className="message">
    <label htmlFor="message">Message: </label>
  <textarea  name="message" placeholder="Entrez votre message..." required />
    </div>
    <button type="submit" className="btn_send">Envoyer </button>
        </div>


      </div>

      <div className="coordonnee_contact">
      <h2>Nos Coordonnées</h2>
<div className="coordonnee_content">
<div className="email_nutrilife">email</div>
<div className="tel_nutrilife">tel</div>
</div>
      </div>
    </main>
  );
}
