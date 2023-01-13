import React from "react";
import { signOut } from "firebase/auth";
import HomeIcon from '@mui/icons-material/Home';
import MessageIcon from '@mui/icons-material/Message';
import AddBoxIcon from '@mui/icons-material/AddBox';
import ExploreIcon from '@mui/icons-material/Explore';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LogoutIcon from '@mui/icons-material/Logout';

import { auth } from "../../firebase";

const UserLoggedIn = () => {

  return (
    <div className="userLoggedIn">
      <HomeIcon sx={{fontSize: 30, padding: 2}}></HomeIcon>
      <MessageIcon sx={{fontSize: 30, padding: 2}}></MessageIcon>
      <AddBoxIcon sx={{fontSize: 30, padding: 2}}></AddBoxIcon>
      <ExploreIcon sx={{fontSize: 30, padding: 2}}></ExploreIcon>
      <FavoriteBorderIcon sx={{fontSize: 30, padding: 2}}></FavoriteBorderIcon>
      <LogoutIcon sx={{fontSize: 30, padding: 2}} onClick={() => signOut(auth)}></LogoutIcon>
    </div>
  );
}

export default UserLoggedIn;
