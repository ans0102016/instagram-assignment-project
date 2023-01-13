import React from "react";

import "./UserInfo.css";
import UserParameters from "./UserParameters";
import UserDetails from "./UserDetails";

import Avatar from "@mui/material/Avatar";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';


function UserInfo() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="userInfo">
      <div className="userInfo__info">
        <Avatar
          className="userInfo__avatar"
          alt=""
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxECLob6feS_8bxAaYk-0u571lK_F7hiF6uSP-C4BMig&s"
          sx={{ width: 150, height: 150 }}
        />
        <div className="userInfo__username">
          virat.kohli
          <img
            className="userInfo__verifiedBadge"
            src="https://static.xx.fbcdn.net/assets/?revision=596358518918542&name=ig-verifiedbadge-shared&density=1"
            alt=""
          />
          <button className="userInfo__button">Follow</button>
          <button className="userInfo__button">Message</button>
          <MoreHorizIcon
            className="userInfo__moreHorizon"
            onClick={handleOpen}
          ></MoreHorizIcon>
          <Modal
            open={open}
            onClose={handleClose}
          >
            <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                bgcolor: 'background.paper',
                height: 250,
                width: 400,
                backgroundColor: "white",
                border:0,
                borderRadius: 5}}>
                  <div className="userInfo_modalWrapper">
                    <div className="userInfo__modalElement">
                      Embed
                    </div>
                    <div className="userInfo__modalElement">
                      Account Info
                    </div>
                    <div className="userInfo__modalElement" onClick={handleClose}>
                      Cancel
                    </div>
                  </div>
            </Box>
          </Modal>
        </div>
      </div>
      <UserParameters />
      <UserDetails />
    </div>
  );
}

export default UserInfo;
