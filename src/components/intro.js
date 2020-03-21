import React from "react"
import introImg from "../images/my001.jpg"
import PangoTwo from "../images/pangolin2.png"

const IntroPage = () => (
  <section className="contentPart">
    <div className="content intro">
      <div className="image">
        <img src={introImg} alt="Marina & Yann" />
        <img src={PangoTwo} class="pangolin" alt="pangolin" />
      </div>
      <div className="text">
        <p class="adentum">Mise à jour COVID 19</p>
        <h3>Chers vous,</h3>
        <p>
          Vous l’aurez surement compris au regard de la situation actuelle, mais il est impossible pour nous de maintenir notre mariage ce 11 avril… <br>
Voilà quelques jours que cette évidence s’est imposée à nous, mais il nous fallait le temps de gérer quelques urgences avant de revenir vers vous.<br>
On aimerait pouvoir vous donner une autre date, mais pour l’instant - et pour citer un grand philosophe - “on y voit pas plus loin qu’à l’aveuglette”.. donc difficile de vous en dire plus.
        </p>
        <p>
          On est forcément (très) déçu, un peu (beaucoup) triste, désolé aussi d’annuler alors que vous aviez pris du temps pour venir fêter ça avec nous jusque sur une petite île bretonne.<br>
On espère aussi que cette annulation ne sera pas trop compliquée à gérer pour chacun, vu l’organisation et les moyens engagés.
        </p>
 <p>
  Mais le plus important est encore que vous passiez cette drôle de période en bonne santé, vous et vos proches. 
  </p>
        <p>
          Et soyez assurés que l’on reviendra vers vous quand nous aurons trouvé ou et quand célébrer notre mariage, toujours à venir et toujours avec vous.<br>
C’était important pour nous de le vivre avec les gens qui comptent, ça le sera d’autant plus quand tout ça sera terminé.
        </p>
<p>On vous embrasse fort<br>Marina et Yann</p>
      </div>
    </div>
  </section>
)

export default IntroPage
