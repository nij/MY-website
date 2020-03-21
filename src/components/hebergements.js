import React from "react"
import heberImg from "../images/my007.jpg"
import PangoFour from "../images/pangolin4.png"

const HebergementsPage = () => (
  <section className="contentPart">
    <div className="content hebergements">
      <div className="image">
        <img src={heberImg} alt="Marina & Yann" />
        <img src={PangoFour} class="pangolin" alt="pangolin" />
      </div>
      <div className="text">
        <h3>L'hébergement :</h3>
        <p>
          Pour la nuit du samedi au dimanche, ou plus si affinité, plusieurs
          options sont possibles :
        </p>
        <p>
          <strong>le VVF : </strong>
          Sans doute la solution a privilégier, situé assez prêt du lieux de la
          cérémonie / soirée, vous pourrez rejoindre votre lit douillet en à
          peine 10 minutes de marche. Les gites proposés vont de 4 à 8
          personnes, n’hésitez donc pas à vous organiser pour réserver à
          plusieurs.
          <span className="infoLink">
            <a
              href="https://www.vvf-villages.fr/location-vacances/vacances-ile-de-groix-vvf-villages.html"
              target="blank"
            >
              Le site du VVF de Groix
            </a>
          </span>
          <span className="infoLink">
            <a
              href="https://drive.google.com/file/d/1wZ1jcA-jryOAoKsrlZjsZw-2EGafyVCW/view?usp=sharing"
              target="blank"
            >
              La brochure tarifaire du VVF
            </a>
          </span>
          <strong>Attention : </strong>il semblerait que l'île va connaitre un
          débarquement d'enkiltés pour un festival précisement durant ce
          weekend. Nous ne saurions que trop vous conseiller de réserver votre
          hébergement début septembre au plus tard pour éviter toutes mauvaises
          surprises.
        </p>
        <p>
          <strong>Les hôtels : </strong>
          Autre solution, l’île dispose de plusieurs hotels, mais
          majoritairement situés prêt du port, soit à 40 bonnes minutes de
          marche du lieu de la soirée. Considérez ça davantage comme une
          solution de repli donc. Malheureusement les campings ne seront pas
          encore ouverts, donc sauf option camping sauvage, inutile d’envisager
          la tente… et puis on sera en avril.. et en Bretagne… après les
          aventuriers font comme ils veulent :) Enfin, vous trouverez des
          hébergement sur Airbnb. Si cette option devait vous intéresser,
          n’oubliez pas de prendre en compte le trajet retour le samedi soir
          après la soirée
          <span className="infoLink">
            <a href="https://goo.gl/maps/YMb68xD1WSatpXuJ8" target="blank">
              Le lieu de la cérémonie sur Google maps
            </a>
          </span>
        </p>
      </div>
    </div>
  </section>
)

export default HebergementsPage
