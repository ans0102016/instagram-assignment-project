import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Input from "@mui/material/Input";

import "./UserLogin.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #fff",
  borderRadius: 5,
  boxShadow: 24,
  p: 4,
};

const UserSignin = () => {
  const [open, setOpen] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password).catch((error) =>
      alert(error.message)
    );
    setOpen(false);
  };

  return (
    <div className="userLogin_wrapper">
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box sx={style}>
          <center>
            <img
              className="userLogin__image"
              src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
              alt="Instagram Original Logo"
            />
          </center>
          <form className="userLogin__form">
            <Input
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" onClick={handleLogin}>
              Login
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default UserSignin;
