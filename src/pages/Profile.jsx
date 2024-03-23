import Navbar from "../components/Navbar";
import styles from "./Profile.module.css";

import { useContext, useEffect, useState } from "react";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { auth, db, storage } from "../firebase";
import { getAuth, updateEmail, updatePassword } from "firebase/auth";

import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";

const inputs = [
  {
    id: "displayName",
    label: "Nom d'utilisateur",
    type: "text",
    placeholder: "fares gabsi",
  },
  {
    id: "email",
    label: "Email",
    type: "mail",
    placeholder: "fares@gmail.com",
  },
  {
    id: "phone",
    label: "Phone",
    type: "text",
    placeholder: "56428954",
  },
  {
    id: "password",
    label: "Password",
    type: "password",
  },
];

function Profile() {
  const [file, setFile] = useState("");
  const [data, setData] = useState({});
  const [per, setPerc] = useState(null);
  const { currentUser, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  console.log(currentUser);
  const auth = getAuth();
  useEffect(() => {
    const uploadFile = () => {
      const name = new Date().getTime() + file.name;

      console.log(name);
      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setPerc(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setData((prev) => ({ ...prev, img: downloadURL }));
          });
        }
      );
    };

    file && uploadFile();
  }, [file]);

  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setData({ ...data, [id]: value });
  };

  const handleAdd = async (e) => {
    console.log(currentUser.uid);
    e.preventDefault();

    try {
      await setDoc(doc(db, "users", currentUser.uid), {
        ...data,
        timeStamp: serverTimestamp(),
      });
      console.log(data);
      dispatch({ type: "UPDATE_USER", payload: data });
      localStorage.setItem("user", JSON.stringify(data));
      console.log(data.email);
      const auth = getAuth();
      console.log(auth.currentUser);
      updateEmail(auth.currentUser, data.email)
        .then(() => {
          console.log("doneee");
          // ...
        })
        .catch((error) => {
          console.log("ni");
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <Navbar />
      </div>
      <div className={styles.mainContent}>
        <div className={styles.newContainer}>
          <div className={styles.top}>Modifier profile</div>
          <div className={styles.bottom}>
            <div className={styles.left}>
              <img
                src={file ? URL.createObjectURL(file) : "/assets/s1.jpg"}
                alt=""
              />
            </div>
            <div className={styles.right}>
              <form onSubmit={handleAdd}>
                {inputs.map((input) => (
                  <div className={styles.formInput} key={input.id}>
                    <label>{input.label}</label>
                    <input
                      id={input.id}
                      type={input.type}
                      placeholder={input.placeholder}
                      onChange={handleInput}
                    />
                  </div>
                ))}
                <div className={styles.formInput}>
                  <label htmlFor="file">Changer photo :</label>
                  <input
                    type="file"
                    id="file"
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </div>
                <button disabled={per !== null && per < 100} type="submit">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
