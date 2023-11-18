import React from "react";
import "./ReglesDeJeu.css";
import newImag from "../images/NEwImage.png";

const ReglesDeJeu = ({ onClose }) => {
  return (
    <div>
      <div className="regle-du-jeu__MainContainer">
        <div className="regle-du-jeu__Topbar">
          <div></div>
          <div className="regle-du-jeu__Icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="54"
              height="54"
              viewBox="0 0 54 54"
              fill="none"
              onClick={onClose}
            >
              <mask
                id="mask0_273_5181"
                maskUnits="userSpaceOnUse"
                x="2"
                y="2"
                width="50"
                height="50"
              >
                <path
                  d="M26.76 49.06C39.0763 49.06 49.06 39.0763 49.06 26.76C49.06 14.4437 39.0763 4.45996 26.76 4.45996C14.4437 4.45996 4.45996 14.4437 4.45996 26.76C4.45996 39.0763 14.4437 49.06 26.76 49.06Z"
                  fill="white"
                  stroke="white"
                  stroke-width="4.46"
                  stroke-linejoin="round"
                />
                <path
                  d="M33.0673 20.4524L20.4521 33.0675M20.4521 20.4524L33.0673 33.0675"
                  stroke="black"
                  stroke-width="4.46"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </mask>
              <g mask="url(#mask0_273_5181)">
                <path d="M0 0H53.52V53.52H0V0Z" fill="#73D896" />
              </g>
            </svg>
          </div>
        </div>

        <div className="regle-du-jeu__CenterContainer">
          <div className="regle-du-jeu__CenterImage">
            <img src={newImag} className="regle-du-jeu__Image" alt="" />
          </div>

          <div className="Règles-du-Jeu__CenterHeading">
            <span className="Règles-du-Jeu__TextHEading">Règles du Jeu</span>
          </div>

          <div className="Règles-du-Jeu__BottomContainer">
            <span className="Règles-du-Jeu__BotmText">
              Bienvenue à Toulouse, la "Ville Rose", où l'histoire et la
              modernité se côtoient en parfaite harmonie. Vous venez d'être
              embauché.e en tant que comptable dans une entreprise locale en
              pleine croissance. Monsieur Doufé a ouvert une boutique de
              chaussures dit éthique il y a maintenant quelques années.
              <br />
            </span>
            <span className="Règles-du-Jeu__BotmSecond">
              Vous vous joignez à une équipe dynamique et avez pour tâche de
              gérer les finances de l'entreprise, notamment au niveau de la
              comptabilité générale. <br />
              <span className="Règles-du-Jeu____Last">
                En cliquant sur “Document Comptables”, vous accéderez à
                l’ensemble des opérations à saisir : Achats, Ventes, Banque et
                Opérations Diverses. N’hésitez pas à consulter les Ressources
                Pédagogiques disponibles sur la page d’accueil !
              </span>
            </span>

            <span className="Règles-du-Jeu__BotmThird">
              Prêt pour le défi ? ​
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReglesDeJeu;
