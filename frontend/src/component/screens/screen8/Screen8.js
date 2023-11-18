import React from "react";
import "./Screen8.css";
import cross from "../../../images/cross.png";
import elipse from "../../../images/Ellipse 22.png";

const Screen8 = () => {
  return (
    <div className="main__Screen__8">
      <div className="top__right">
        <img src={cross} className="cross__image" alt="" />
      </div>

      <div className="center__image">
        <img src={elipse} alt="" />
      </div>

      <div className="screen8__bottom__Text">
        <h1 className="bottom__Screen8__heading">Règles du Jeu</h1>

        <p className="bottom__screen8__Text">
          Bienvenue à Toulouse, la "Ville Rose", où l'histoire et la modernité
          se côtoient en parfaite harmonie. Vous venez d'être embauché.e en tant
          que comptable dans une entreprise locale en pleine croissance.
          Monsieur Doufé a ouvert une boutique de chaussures dit éthique il y a
          maintenant quelques années. Vous vous joignez à une équipe dynamique
          et avez pour tâche de gérer les finances de l'entreprise, notamment au
          niveau de la comptabilité générale. En cliquant sur “Document
          Comptables”, vous accéderez à l’ensemble des opérations à saisir :
          Achats, Ventes, Banque et Opérations Diverses. N’hésitez pas à
          consulter les Ressources Pédagogiques disponibles sur la page
          d’accueil ! Prêt pour le défi ? ​
        </p>
      </div>
    </div>
  );
};

export default Screen8;
