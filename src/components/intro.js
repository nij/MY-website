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
          Vous l’aurez surement compris au regard de la situation actuelle, mais
          il est impossible pour nous de maintenir notre mariage ce 11 avril…
          Voilà quelques jours que cette évidence s’est imposée à nous, mais il
          nous fallait le temps de gérer quelques urgences avant de revenir vers
          vous. On aimerait pouvoir vous donner une autre date, mais pour
          l’instant - et pour citer un grand philosophe - “on y voit pas plus
          loin qu’à l’aveuglette”
        </p>
        <p>
          On est forcément déçu, un peu triste, désolé aussi d’annuler alors que
          vous aviez pris du temps pour venir fêter ça avec nous jusque sur une
          petite île bretonne. Mais le plus important est encore que vous
          passiez cette drôle de période en bonne santé, vous et vos proches.
        </p>
        <p>
          Et soyez assuré que l’on reviendra vers vous quand nous aurons trouvé
          ou et quand célébrer notre mariage - toujours à venir - avec vous.
        </p>
      </div>
    </div>
  </section>
)

export default IntroPage
