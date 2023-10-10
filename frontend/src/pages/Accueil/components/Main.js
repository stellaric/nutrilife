import React from "react";
import img_intro from '../../../media/img/intro_img.png'
import img_faq from '../../../media/img/faq.png'


export default function Main() {
  return (
    <main className="main_accueil">
{/*section 1 : intro : qu'est ce que nutrilife api ? */}
      <section className="intro">
        <h2>Qu’est-ce que NutriLife API ? </h2>

        <div className="intro_content">
          <div className="intro_video">
            ceci est une video 
          </div>
        <div className="intro_txt">
          <p>NutriLife API est une interface de programmation qui permet d'accéder à des informations sur la nutrition et les valeurs nutritives des aliments. Elle peut être utilisée pour développer des applications liées à la santé et la nutrition.</p>
         <img src={img_intro} alt="img_intro" />
        </div>
        </div>
      </section>
{/*section 2 :faq */}
      <section className="faq">
      <h2>A quoi sert NutriLife API ? </h2>
      <div className="faq_content">
        <p>Avec NutriLife API, vous pouvez récupérer des informations nutritionnelles détaillées sur les aliments, qui peuvent être utilisées pour développer des applications liées à la santé et la nutrition, telles que des outils d'analyse de la nutrition et des applications de suivi de régime alimentaire.</p>
      
      </div>
      <img src={img_faq} alt="img_intro" />
        </section>
{/*section 3 : documentation  */}
      <section className="documentation">
      <h2>Documentation </h2>
        <div className="documentation_content">
        <div className="documentation_crud">  7 get </div>
        <div  className="documentation_crud">2 put </div>
        </div>
         <div className="documentation_content">
         <div  className="documentation_crud"> 3 post</div>
         <div  className="documentation_crud">4 delete</div>
         </div>
        </section>
        {/*section 4 : nexsletter  */}
      <section className="newsletter">
      <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 1440 274" fill="none">
<path d="M0 273.175L120 234.15C240 195.125 480 117.075 720 117.075C960 117.075 1200 195.125 1320 234.15L1440 273.175V0L1320 0C1200 0 960 0 720 0C480 0 240 0 120 0L0 0V273.175Z" fill="#63B057" />
</svg>
      </section>
    </main>
  );
}
