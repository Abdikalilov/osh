import React from 'react';
import "./CardPartners.scss";
import librarypartnersicon from "../../shared/libraryimg/librarypartnersicon.png";

export function CardPartners() {
  return (
    <div className="card-partners">
      <h2>ПАРТНЕРЫ</h2>
      <div className="row">
        <div className="card-partners__card">
          <img src={librarypartnersicon} alt="Партнеры" className="card-partners__image" />
        </div>
      </div>
    </div>
  );
}
