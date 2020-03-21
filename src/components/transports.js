import React from "react"
import transportImg from "../images/my004.jpg"
import PangoThree from "../images/pangolin3.png"

const TransportsPage = () => (
  <section className="contentPart">
    <div className="content transports">
      <div className="image">
        <img src={transportImg} alt="Marina & Yann" />
        <img src={PangoThree} class="pangolin" alt="pangolin" />
      </div>
      <div className="text">
        <h3>Les transports :</h3>
        <p>
          Groix étant une île, une vrai, la route qui vous mènera à elle passera
          obligatoirement par Lorient pour prendre le bateau.
        </p>
        <p>
          Pour vous rendre à Lorient, plusieurs solutions s’offrent à vous :
          <br />
          <br />
          <strong>- la voiture</strong> évidemment (pensez covoiturage pour ceux
          qui viendraient de Bordeaux). Vous trouverez un parking gratuit juste
          à côté de l’embarcadère, on y trouve toujours de la place hors-saison,
          mais weekend de Pâques oblige il faudra peut-être ne pas arriver trop
          tard le samedi.
          <span className="infoLink">
            <a href="https://goo.gl/maps/nq84RpTECQLDcJFbA" target="blank">
              Voir le parking sur Google maps
            </a>
          </span>
          <br />
          Faire passer votre voiture du l’île est possible, cependant les tarifs
          sont assez élevés. Rassurez-vous toutefois, l’île est petite et les
          quelques personnes motorisés pourront faire la navette entre le port
          et le lieux du mariage pour les moins sportifs. <br />
          <br />
          <strong>- le train</strong> est une bonne alternative, notamment
          depuis Paris. A noter que le bus de la gare vers l’embarcadère est
          gratuit pour tout détenteur d’un billet pour une traversée le jour
          même.
          <br />
          <br />
          <strong>- l’hélicoptère</strong> sera le troisième choix pour les
          milliardaires parmi vous.
        </p>
        <p>
          Enfin, une fois à Lorient, une petite croisière de trois quart d’heure
          s’offrira à vous pour rejoindre l’île. N’hésitez pas d’ailleurs à
          réserver vos billet un peu à l’avance et à calculer vos déplacement
          sur la base de votre horaire de traversée.
          <span className="infoLink">
            <a href="https://www.compagnie-oceane.fr/" target="blank">
              Le site de la compagnie Oceane
            </a>
          </span>
          <strong>Attention : </strong>Hors saison oblige, il y a assez peu de
          traversées de programmées par jour. Entre le weekend de Pâques - et un
          éventuel festival de kilt sur Groix, il sera préférable de réserver
          vos billets de bateau dès que possible. Nous vous enverrons une alerte
          quand ce sera le cas.
        </p>
      </div>
    </div>
  </section>
)

export default TransportsPage
