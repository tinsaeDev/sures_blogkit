import React, { useState } from "react";
import firebase from "firebase/app";
import firebaseConfig from "../services/firebase.config";
import { collection } from "firebase/firestore";

const app = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default function commentForm  () {
    
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const contactsRef = collection(db, "contacts");
    const contact = {
      name,
      email,
    };

    contactsRef.add(contact)
      .then(() => {
        console.log("Document successfully written!");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });

    setName("");
    setEmail("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};


