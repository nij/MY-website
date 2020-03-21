import React from "react"
import infoImg from "../images/my008.jpg"
import PangoThree from "../images/pangolin5.png"

const InfosPage = () => (
  <section className="contentPart">
    <div className="content info">
      <div className="image">
        <img src={infoImg} alt="Marina & Yann" />
        <img src={PangoThree} class="pangolin" alt="pangolin" />
      </div>
      <div className="text">
        <h3>Les enfants</h3>
        <p>
          Soyez en sûr, on aime les enfants.. enfin, en tout cas, on aime sans
          nul doute les vôtres !
          <br />
          Cependant, pour des raisons d’organisation, de praticité, de sécurité
          (falaises, océan, menhirs, korrigans et iliens grognons), nous avons
          finalement opté pour un mariage sans enfant.
        </p>
        <p>
          Cela permettra d’assurer la tranquillité des adultes plus ou moins
          responsables que nous sommes, et comme c'est Pâques, ce sera
          l’occasion pour vos chères têtes blondes de chasser les oeufs chez
          papi, mami, tata, ou tout autre ascendant qui aurait votre confiance.
        </p>
        <p>
          Bien évidemment, pour ceux et celles qui souhaiteraient profiter de
          l’occasion pour passer une semaine de vacances sous les tropiques
          groisillons avec leurs bout-de-choux, des solutions seront envisagées
          et envisageables.. cependant, la soirée restera adult only..
          <br />
          On espère que vous comprendrez :)
        </p>
      </div>
      <br />
      <div className="text">
        <h3>Les photos</h3>
        <p>
          Soyez en sûr, on aime les photos… enfin, en tout cas, on aimera celles
          qui seront réalisées par la photographe professionnelle qui sera
          présente sur place. Vous êtes donc cordialement invités, autant que
          possible, à profiter du moment sans vos petits appareils ou téléphones
          portables.
          <br /> Le marié étant très à cheval sur la question, durant la
          cérémonie, au premier flash, c’est un invité ou un appareil qui passe
          à l’océan :)
        </p>
        <p>
          Sachez évidemment, pour tous ceux qui voudraient garder trace de cette
          journée, pas d’inquiétude, Chloé (
          <a
            href="http://chloevollmerlo.net/photo/mariage-wedding/"
            target="blank"
          >
            voir son site
          </a>
          ) saura faire ce qu’il faut.. et nous vous enverrons après le mariage
          une large sélection de photo pour vos fonds d’écrans et déco de
          toilettes.
        </p>
      </div>
    </div>
  </section>
)

export default InfosPage
