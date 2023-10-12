import React, { useState } from "react";

export default function Main() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [sujetError, setSujetError] = useState("");
  const [messageError, setMessageError] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault(); // Empêche le comportement de soumission par défaut

    // Réinitialiser les messages d'erreur
    setEmailError("");
    setSujetError("");
    setMessageError("");

    // Récupérer les valeurs des champs
    const email = e.target.email.value;
    const sujet = e.target.sujet.value;
    const message = e.target.message.value;

    // Regex pour validation d'e-mail
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    let isValid = true;

    if (!emailRegex.test(email)) {
      setEmailError("Veuillez entrer une adresse email valide");
      isValid = false;
    }

    if (sujet.trim() === "") {
      setSujetError("Veuillez entrer un sujet");
      isValid = false;
    }

    if (message.trim() === "") {
      setMessageError("Veuillez entrer un message");
      isValid = false;
    }

    if (isValid) {
      // Traitez ici votre logique d'envoi de message, si nécessaire

      // Ouvre la fenêtre modale une fois que le formulaire a été soumis avec succès
      setIsModalOpen(true);
    }
  };

  return (
    <main className="main_contact">
      <div className="form_contact">
       <h2>Contact</h2>
        <div className="form_contact_content">
          <form name="contact" method="GET" className="contact_form" onSubmit={handleSubmit}>
                   
<div className={`name ${emailError ? 'error' : ''}`}>
    <label htmlFor="email">Email: </label>
 <input type="email" name="email" placeholder="Entrez votre email..." required />
 {emailError && <span className="error-message">{emailError}</span>}
 </div>

<div className={`sujet ${sujetError ? 'error' : ''}`}>    
    <label htmlFor="sujet">Sujet: </label>
 <input type="text" name="sujet" placeholder="Entrez votre email..." required />
 {sujetError && <span className="error-message">{sujetError}</span>}
 </div>


 <div className={`message ${messageError ? 'error' : ''}`}>
                    <label htmlFor="message">Message: </label>
  <textarea  name="message" placeholder="Entrez votre message..." required />
     {messageError && <span className="error-message">{messageError}</span>}
   </div>
      
      

 <button type="submit" className="btn_send">Envoyer </button>
  </form>
  </div>
      </div>

       {/* <div className="coordonnee_contact">
      <h2>Nos Coordonnées</h2>
<div className="coordonnee_content">
<div className="email_nutrilife">email</div>
<div className="tel_nutrilife">tel</div>
</div>
      </div>
      Fenêtre modale de contact */}
  {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-news">
            <div className="modal-content_news">
              <h3>Message envoyé</h3>
              <p>Votre message a été envoyé au service client NutriLife.</p>
              <button onClick={() => setIsModalOpen(false)}>Fermer</button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
