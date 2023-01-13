import React from "react";
import Avatar from "@mui/material/Avatar";

import "./RelatedAccountItem.css";

const RelatedAccountItem = (props) => {
  return (
    <div className="relatedAccountItem__wrapper">
      <div className="relatedAccountItem__card">
        <div className="relatedAccountItem__cardContent">
          <div className="relatedAccountItem__closeCard">
            <button>X</button>
          </div>
          <div className="relatedAccountItem__avatarWrapper">
            <Avatar
              alt={props.name}
              src={props.image}
              sx={{ width: 50, height: 50 }}
            />
          </div>
          <div className="relatedAccountItem__tagName">
            <strong>{props.tag}</strong>
            <img
              className="relatedAccountItem__verifiedBadge"
              src="https://static.xx.fbcdn.net/assets/?revision=596358518918542&name=ig-verifiedbadge-shared&density=1"
              alt=""
            />
          </div>
          <div className="relatedAccountItem__name">{props.name}</div>
          <div className="relatedAccountItem__buttonWrapper">
            <button className="relatedAccountItem__button">Follow</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RelatedAccountItem;
