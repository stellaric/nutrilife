import React from 'react'

export default function Main() {
  return (
    <main className="main_profil">
     <div className="gauche"> </div>
     <div className="droite">
       <h2>Profil</h2>
      
<div className="profil_content">
        <div className="label_profil">
            <p>Nom:</p>
        </div>
        <div className="label_profil">
        <p>Prenom:</p>
        </div>
        <div className="label_profil">
        <p>Email:</p>
        </div>
        <div className="label_api">
        <p>Votre clé API:</p>
        <code>laphrasenapasdesensetcecinestpasvraimentunecle </code>
        </div>
       </div>
        </div>
    </main>
  )
}
