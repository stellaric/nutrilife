import React, { useCallback, useState } from "react";
import "../Authentification.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { register } from "../../../services/user";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logMe } from "../../../redux/authSlice";

function Inscription() {
  const [activeTab, setActiveTab] = useState("inscription"); // Default to the "Inscription" tab
  const [newUser, setNewUser] = useState({});
  const [loginUser, setLoginUser] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  //function of register
  const handleSubmit = async (e) => {
    console.log("e", e);
    e.preventDefault();
    const resp = await register(newUser);
    if (resp.status === 201) {
      setTimeout(() => {
        toast.success(`👍 l'enregistement s'est bien passé`, {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
      handleTabClick("connexion");
    }
  };

  //function of login
  const handleSubmitLongin = useCallback(
    (e) => {
      e.preventDefault();
      (async () => {
        await dispatch(logMe(loginUser));
        navigate("/");
      })();
    },
    [dispatch, loginUser.email, loginUser.password]
  );
  // async (e) => {
  //   e.preventDefault();
  //   const resp = await login(loginUser?.email, loginUser?.password);
  //   console.log("resp", resp);
  // };

  // fonction pour récupere la saisie de l'utilisateur
  const handleInput = (e) => {
    const { name, value } = e.target;
    // on fait une copie de ce que l'utilisateur a saisit
    const newUserCopy = { ...newUser };
    // on met l'objet copier icic et on lui donne la valeur ddu champs
    newUserCopy[name] = value;
    setNewUser(newUserCopy);
  };

  const handleLogin = (e) => {
    const { name, value } = e.target;
    const LoginCopy = { ...loginUser };
    LoginCopy[name] = value;
    setLoginUser(LoginCopy);
  };
  console.log("loginuser", loginUser);

  return (
    <main className="main_auth">
    <div className="form-with-tabs">
      <ToastContainer />
      <div className="form-container">
        <div className="tab">
          <button
            className={
              activeTab === "inscription"
                ? "tablinks active btnconnexion"
                : "tablinks"
            }
            onClick={() => handleTabClick("inscription")}
          >
            Inscription
          </button>

          <button
            className={
              activeTab === "connexion"
                ? "tablinks active  btnconnexion"
                : "tablinks"
            }
            onClick={() => handleTabClick("connexion")}
          >
            Connexion
          </button>
        </div>

        {activeTab === "inscription" && (
          <div className="form-wrapper">
            {/* formulaire inscription */}
            <form
              className={
                activeTab === "inscription"
                  ? "tabcontent active myform"
                  : "tabcontent myform"
              }
              onSubmit={handleSubmit}
            >
              <div className="mesinputs">
                <div>
                  <input
                    type="radio"
                    id="monsieur"
                    name="civility"
                    onChange={handleInput}
                  />
                  <label htmlFor="monsieur">M.</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="madame"
                    name="civility"
                    onChange={handleInput}
                  />
                  <label htmlFor="madame">Mme</label>
                </div>
              </div>

              <div className="form-groupe">
                <div className="item-form-prenom">
                  <label htmlFor="nom">Nom</label>
                  <input
                    type="text"
                    id="nom"
                    name="lastName"
                    onChange={handleInput}
                    className="inputs"
                  />
                </div>
                <div className="item-form-prenom">
                  <label htmlFor="prenom">Prénom</label>
                  <input
                    type="text"
                    id="prenom"
                    name="firstName"
                    onChange={handleInput}
                    className="inputs"
                  />
                </div>
              </div>

              <div className="form-groupe">
                <div className="item-form">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    onChange={handleInput}
                    className="inputs"
                  />
                </div>
              </div>

              <div className="form-groupe">
                <div className="item-form">
                  <label htmlFor="password">Mot de passe</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    onChange={handleInput}
                    className="inputs"
                  />
                </div>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="accepter_conditions"
                  // onChange={handleInput}
                />
                <label htmlFor="accepter_conditions">
                  J'accepte la politique de confidentialité
                </label>
              </div>

              <button type="submit" className="btn_send">
                S'inscrire
              </button>
            </form>

            {/* formulaire connexion */}
          </div>
        )}

        {/* formulaire connexion */}
        {activeTab === "connexion" && (
          <div className="form-wrapper">
            <form
              className={
                activeTab === "connexion"
                  ? "tabcontent active myform"
                  : "tabcontent myform"
              }
              onSubmit={handleSubmitLongin}
            >
              <div className="form-groupe">
                <div className="item-form">
                  <label htmlFor="emailConnexion">Email</label>
                  <input
                    type="text"
                    name="email"
                    id="emailConnexion"
                    onChange={handleLogin}
                    className="inputs"
                  />
                </div>
              </div>

              <div className="form-groupe">
                <div className="item-form">
                  <label htmlFor="passwordConnexion">Mot de passe</label>
                  <input
                    type="password"
                    name="password"
                    id="passwordConnexion"
                    onChange={handleLogin}
                    className="inputs"
                  />
                </div>
              </div>

              <button type="submit" className="btn_send">
                Se connecter
              </button>
            </form>
          </div>
        )}

        {activeTab === "inscription" && (
          <p>
            <button
              className="Dejamembre"
              onClick={() => handleTabClick("connexion")}
            >
              Déjà membre? Connectez-vous ici
            </button>
          </p>
        )}
      </div>
    </div>
    </main>
  );
}

export default Inscription;

// import React, { useState } from "react";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import { login } from "../../../services/user";

// export default function Main() {
//     const [activeTab, setActiveTab] = useState("inscription"); // Default to the "Inscription" tab
//     const [ConfirmPassWord, setConfirmPassWord] = useState();
//     const [newUser, setNewUser] = useState({});
//     const [loginUser,setLoginUser]=useState({});

//     const handleTabClick = (tab) => {
//         setActiveTab(tab);
//       };

//       const handleSubmit = async (e) => {
//         e.preventDefault();
//         const resp = await axios.post("http://localhost:5001/api/user/register", {
//           ...newUser,
//         });
//         console.log(resp?.data?.message);
//         if (resp.status === 201) {
//           setTimeout(() => {
//             toast.success(`👍 ${resp?.data?.message}`, {
//               position: "top-left",
//               autoClose: 5000,
//               hideProgressBar: false,
//               closeOnClick: true,
//               pauseOnHover: true,
//               draggable: true,
//               progress: undefined,
//             });
//           });
//           // setTimeout(() => { navigate("/login") }, 3000);
//         }

//         // Add your logic for submitting the registration or login form here, e.g., API request or client-side validation.
//       };

//       // fonction pour récupere la saisie de l'utilisateur
//       const handleInput = (e) => {
//         const { name, value } = e.target;
//         // on fait une copie de ce que l'utilisateur a saisit
//         const newUserCopy = { ...newUser };
//         // on met l'objet copier icic et on lui donne la valeur ddu champs
//         newUserCopy[name] = value;
//         setNewUser(newUserCopy);
//       };
//       console.log(newUser)
//       const handleLogin = (e) => {
//         const {name,value} = e.target
//         const LoginCopy ={ ...loginUser}
//        LoginCopy[name] = value
//         setLoginUser(LoginCopy)
//       }

//      const handleSubmitLogin = async (e) =>{
//       e.preventDefault()
//      const resultat = await login(loginUser.email,loginUser.password)
//      console.log(resultat)
//      }

//   return (
//     <main className="main_auth">
//          <ToastContainer />
//      <div className="form_auth">
//         <div className="tab">
//           <button
//             className={
//               activeTab === "inscription" ? "tablinks active" : "tablinks"
//             }
//             onClick={() => handleTabClick("inscription")}
//           >
//             Inscription
//           </button>

//           <button
//             className={
//               activeTab === "connexion" ? "tablinks active" : "tablinks"
//             }
//             onClick={() => handleTabClick("connexion")}
//           >
//             Connexion
//           </button>
//         </div>
//         <div className="form-wrapper">
//           {/* formulaire inscription */}
//           <form
//             className={
//               activeTab === "inscription" ? "tabcontent active" : "tabcontent"
//             }
//             onSubmit={handleSubmit}
//           >
//             <div className="genre">
//             <label htmlFor="genre">Genre</label>
//               <div>
//                 <input
//                   type="radio"
//                   id="monsieur"
//                   name="civilite"
//                   onChange={handleInput}
//                 />
//                 <label htmlFor="monsieur">M.</label>
//               </div>
//               <div>
//                 <input
//                   type="radio"
//                   id="madame"
//                   name="civilite"
//                   onChange={handleInput}
//                 />
//                 <label htmlFor="madame">Mme</label>
//               </div>
//             </div>

//             <div>
//               <div>
//                 <label htmlFor="nom">Nom</label>
//                 <input
//                   type="text"
//                   id="nom"
//                   name="lastname"
//                   onChange={handleInput}
//                 />
//               </div>
//               <div>
//                 <label htmlFor="prenom">Prénom</label>
//                 <input
//                   type="text"
//                   id="prenom"
//                   name="firstname"
//                   onChange={handleInput}
//                 />
//               </div>
//             </div>

//             <div>
//               <div>
//                 <label htmlFor="email">Email</label>
//                 <input
//                   type="email"
//                   name="email"
//                   id="email"
//                   onChange={handleInput}
//                 />
//               </div>
//             </div>

//             <div>
//               <div>
//                 <label htmlFor="password">Mot de passe</label>
//                 <input
//                   type="password"
//                   name="password"
//                   id="password"
//                   onChange={handleInput}
//                 />
//               </div>
//             </div>

//             <div>
//               <div>
//                 <div>
//                 <label htmlFor="password">Confirmation de Mot de passe</label>
//                 <input
//                   type="password"
//                   name="password"
//                   id="password"
//                   onChange={handleInput}
//                 />
//               </div>
//               </div>
//             </div>

//             <div>
//               <input
//                 type="checkbox"
//                 id="accepter_conditions"
//                 onChange={handleInput}
//               />
//               <label htmlFor="accepter_conditions">
//                 J'accepte la politique de confidentialité
//               </label>
//             </div>

//             <button type="submit">S'inscrire</button>
//           </form>

//           {/* formulaire connexion */}
//         </div>

//         {/* formulaire connexion */}
//         {activeTab === "connexion" && (
//           <div className="form-wrapper">
//             <form
//               className={
//                 activeTab === "connexion" ? "tabcontent active" : "tabcontent"
//               }
//               onSubmit={handleSubmitLogin}
//             >
//               <div>
//                 <div>
//                   <label htmlFor="emailConnexion">Email</label>
//                   <input
//                     type="text"
//                     name="email"
//                     id="emailConnexion"
//                     onChange={handleLogin}
//                   />
//                 </div>
//               </div>

//               <div>
//                 <div>
//                   <label htmlFor="passwordConnexion">Mot de passe</label>
//                   <input
//                     type="password"
//                     name="password"
//                     id="passwordConnexion"
//                     onChange={handleLogin}
//                   />
//                 </div>
//               </div>

//               <button type="submit">Se connecter</button>
//             </form>
//           </div>
//         )}

//         {activeTab === "connexion" && (
//           <p>
//             Déjà membre? <a href="#">Connectez-vous ici</a>
//           </p>
//         )}
//       </div>

//     </main>
//   )
// }
