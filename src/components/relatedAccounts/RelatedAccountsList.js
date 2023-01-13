import React from 'react';

import RelatedAccountItem from "./RelatedAccountItem";

import "./RelatedAccountsList.css";

function RelatedAccountsList(props) {
  return (
    <div className="relatedAccountsList__wrapper">
      {props.relatedAccounts.map((relatedAccount) => (
        <RelatedAccountItem
          key={relatedAccount.id}
          image={relatedAccount.imageUrl}
          name={relatedAccount.name}
          tag={relatedAccount.tag}
          />
      ))}
      
    </div>
  )
}

export default RelatedAccountsList;