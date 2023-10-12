import React from 'react'
import img_doc from '../../../media/img/img_doc.png'
export default function Main() {
  return (
    <main className="main_doc">

      <section className="intro_doc">
        <h2>A quoi sert la documentation ?</h2>
        <p>La documentation de l'API NutriLife est un ensemble de ressources qui permettent aux développeurs d'intégrer facilement les fonctionnalités de l'API dans leurs applications.</p>
<p> Elle  est conçue pour aider les développeurs à comprendre comment utiliser l'API NutriLife de manière efficace et à intégrer ses fonctionnalités dans leurs applications. Elle est régulièrement mise à jour pour refléter les dernières fonctionnalités et améliorations de l'API.</p>
      </section>


      <section className="utilisation_doc">
      <h2>Comment utliser  l’API NutriLife  ?</h2>
      <div className="utilisation_content">
        <div className="img_doc">
          <img src={img_doc} alt="img_doc" />
        </div>
        <div className="video_doc">
<span> </span>
        </div>
      </div>
      </section>


      <section className="content_doc">

        <div className="tab_doc">
          <button id='crud'>CRUD</button>
          <div className="button_doc">
            <button>GET</button>
            <button>POST</button>
            <button>PUT</button>
            <button>DELETE</button>
          </div>
        </div>
      </section>


      <section className="doc_txt">
<div className="get">
  <h3>Get</h3>
  <ul>
  <li>Users</li>
  <div className="code_doc">
    <p>Information concernant un utilisateur</p>
    <code>http://localhost:PORT/api/user/me/id </code>
  </div>
  <div className="code_doc">
    <p>Afficher tout les utilisateur</p>
    <code>http://localhost:PORT/api/user/all </code>
  </div>
  <li>Recettes</li>
  <div className="code_doc">
    <p>La commande find() permet de trouver un utilisateur pécis</p>
    <code>Delete/User/id </code>
  </div>
  <div className="code_doc">
    <p>La commande find() permet de trouver un utilisateur pécis</p>
    <code>Get/Users </code>
  </div>
  <div className="code_doc">
    <p>La commande find() permet de trouver un utilisateur pécis</p>
    <code>Get/Me </code>
  </div>
  </ul>
</div>
<div className="post">
<h3>Post</h3>
<ul>
  <li>Users</li>
  
  <div className="code_doc">
    <p>Inscrire un utilisateur</p>
    <code>http://localhost:PORT/api/user/register </code>
  </div>
  <div className="code_doc">
    <p>Connexion</p>
    <code>http://localhost:PORT/api/user/login</code>
  </div>
  
  </ul>
  </div>
<div className="put">
 <h3>Put</h3>
 <ul>
  <li>Users</li>
  <div className="code_doc">
    <p>Modifier un utilisateur </p>
    <code>http://localhost:PORT/api/user/id</code>
  </div>
  <div className="code_doc">
    <p>La commande find() permet de trouver un utilisateur pécis</p>
    <code>cecie est un code </code>
  </div>
  <li>Recettes</li>
  <div className="code_doc">
    <p>La commande find() permet de trouver un utilisateur pécis</p>
    <code>cecie est un code </code>
  </div>
  
  </ul>
  </div>
<div className="delete">
<h3>Delete</h3>

<ul>
  <li>Users</li>
  <div className="code_doc">
    <p>La commande find() permet de trouver un utilisateur pécis</p>
    <code>cecie est un code </code>
  </div>
  <div className="code_doc">
    <p>La commande find() permet de trouver un utilisateur pécis</p>
    <code>cecie est un code </code>
  </div>
  <li>Recettes</li>
  <div className="code_doc">
    <p>La commande find() permet de trouver un utilisateur pécis</p>
    <code>cecie est un code </code>
  </div>
  <div className="code_doc">
    <p>La commande find() permet de trouver un utilisateur pécis</p>
    <code>cecie est un code </code>
  </div>
  </ul>
  </div>

      </section>
    </main>
  )
}
