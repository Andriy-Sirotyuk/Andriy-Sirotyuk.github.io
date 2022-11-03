import React from "react";
import SliderComponentSix from "../../components/SliderComponentSix";
import "./AboutGame.scss";

function AboutGame() {
  return (
    <>
      <div className="help-oll-game">
        <div className="game-main-container">
          <h1 className="game-big-text">Про гру</h1>
          <div className="oll-first-container">
            <ol>
              <li className="game-one-li">
                <div>
                  <a href="#izi-lines" className="game-a">
                    Легка лінія
                  </a>
                </div>
              </li>
              <li className="game-two-li">
                <a href="#mid-lines" className="game-a">
                  Центр
                </a>
              </li>
              <li className="game-three-li">
                <a href="#hard-lines" className="game-a">
                  Важка лінія
                </a>
              </li>
              <li className="game-fore-li">
                <a href="#roumer-lines" className="game-a">
                  Ровмер
                </a>
              </li>
              <li className="game-five-li">
                <a href="#suport-lines" className="game-a">
                  Підмога
                </a>
              </li>
            </ol>
            <div className="game-slider">
              <div className="game-map">
                <div className="map-hover-text">
                  <p className="game-p-one">Легка лінія</p>
                  <p className="game-p-two">Центр</p>
                  <p className="game-p-three">Важка лінія</p>
                  <p className="game-p-fore">Ровмер</p>
                  <p className="game-p-five">Підмога</p>
                </div>
              </div>
            </div>
          </div>
          <div className="tugezer-game">
            <div className="oll-list-game">
              <div className="izi-line">
                <h2 id="izi-lines" className="second-big-text-game">
                  Легка лінія
                </h2>
                <div className="oll-box-insait">
                  <p className="litle-text-game">
                    1 позиція – Керрі. По суті це основна ударна сила в команді.
                    Саме керрі більшу частину пошкоджень завдає суперникам. Йому
                    повільно вдається заробляти досвід на старті гри, а тому
                    протягом 15-20 хвилин йому потрібна підтримка та прикриття з
                    боку партнерів. Його здібності розкриваються повною мірою,
                    якщо вдається шукати добрі артефакти.
                  </p>
                </div>
              </div>
              <div className="mid-line">
                <h2 id="mid-lines" className="second-big-text-game">
                  Центр
                </h2>
                <div className="oll-box-insait">
                  <p className="litle-text-game">
                    2 позиція - тут знаходиться гравець центральної лінії
                    (соломід) Вже виходячи з назви можна зробити висновок, що
                    основну частину часу він проводить поодинці. Він досить
                    швидко набирає досвіду. Мідер добре підходить для бійок на
                    старті гри. Залежно від ситуації у грі, 1 та 2 позиції
                    можуть між собою змінюватися.
                  </p>
                </div>
              </div>
              <div className="hard-line">
                <h2 id="hard-lines" className="second-big-text-game">
                  Важка лінія
                </h2>
                <div className="oll-box-insait">
                  <p className="litle-text-game">
                    3 позиція – офлейнер. До його основних завдань належать:
                    початок боїв, придбання артефактів та відволікання на себе
                    уваги з боку суперників. По суті саме визначає результат
                    карти. Йому потрібно якнайшвидше включитися в гру. Сьогодні
                    на допомогу хардлейнер часто приходить так званий герой
                    підтримки.
                  </p>
                </div>
              </div>
              <div className="roumer-line">
                <h2 id="roumer-lines" className="second-big-text-game">
                  Ровмер
                </h2>
                <div className="oll-box-insait">
                  <p className="litle-text-game">
                    4 позиція – семи-саппорт. Це і є герой підтримки. Вони
                    зайняті тим, що в міру своїх можливостей ускладнюють ворогам
                    життя. Крім того, вони створюють комфортні умови у грі для
                    партнерів по команді, які на 3 попередніх позиціях
                    знаходяться. Саппортам доводиться багато пересуватися
                    картою. У ролі сапортів задіяні 2 гравці в одній команді.
                    Найбільш ефективна ця позиція під завісу гри.
                  </p>
                </div>
              </div>
              <div className="suport-line">
                <h2 id="suport-lines" className="second-big-text-game">
                  Підмога
                </h2>
                <div className="oll-box-insait">
                  <p className="litle-text-game">
                    5 позиція – фул-саппорт. Вони вважаються найбіднішими
                    героями. Мають прив'язку до певної лінії. Зайняті вони
                    переважно тим, що оберігають свого героя від ворожих
                    нападів. На п'ятірку ставляться герої, яким не потрібно
                    збирати золото та різні предмети. Як правило, саме на
                    п'ятірках грають капітани.
                  </p>
                </div>
              </div>
            </div>
            <a href="http://localhost:3000/heroes">
            <div className="oll-line-game-blak">
              <SliderComponentSix />
            </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutGame;
