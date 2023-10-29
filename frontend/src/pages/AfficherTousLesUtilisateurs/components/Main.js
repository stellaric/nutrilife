import React, { useEffect, useState } from "react";
import { getAlllUsers } from "../../../services/user";
import axios from "axios";
import "./AfficherTousLesUtilisateur.css";
import { ToastContainer, toast } from "react-toastify";

const Main = () => {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    // const rep = await getAlllUsers();
    const rep = await axios.get("http://localhost:5004/api/user/all");
    setUsers(rep?.data?.users);
  };
  const deleteUser = async (id) => {
    console.log("id", id);
    const userDeleted = await axios.delete(
      `http://localhost:5004/api/user/${id}`
    );
    console.log("delete", userDeleted);
    if(userDeleted.data.status===201){
      setTimeout(() => {
        toast.success(`👍 la supression s'est bien passée`, {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
    }
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div className="containertab">
      <ToastContainer />
      <table>
        <tr>
          <th>Nom</th>
          <th>Prenom</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
        {users?.map((user, index) => (
          <tr key={index}>
            <td>{user.lastName}</td>
            <td>{user.firstName}</td>
            <td>{user.email}</td>
            <td>
              <button onClick={() => deleteUser(user._id)}>Suprimer</button>
              <button>Modifier</button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Main;
