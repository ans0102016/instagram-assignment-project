import React from "react";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

function RelatedAccountItem(props) {
  return (
    <div className="relatedAccountItem__wrapper">
      <Card sx={{minWidth: 250}}>
        <CardContent>
          <Avatar
            className="relatedAccountItem__avatar"
            alt={props.name}
            src={props.image}
            sx={{ width: 50, height: 50 }}
          />
          <h4>{props.tag}</h4>
        </CardContent>
      </Card>
    </div>
  );
}

export default RelatedAccountItem;
