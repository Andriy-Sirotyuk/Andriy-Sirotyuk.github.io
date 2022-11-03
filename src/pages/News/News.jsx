import React from "react";
import { Link } from "react-router-dom";
import "./News.scss";


function News() {
  return (
    <>
      <div className="news-oll-box">
        <p className="first-text-news-p">11 серпня 2022 Р.</p>
        <h2 className="second-text-news-h2">
          DOTA: Dragon's Blood Season 3 Released
        </h2>
      </div>
      <div className="container-news-oll">
        <div className="main-conteyner-news one-news">
          <Link to="/DragonsBlood" className="oll-text-insaid">
            <p>11 СЕРПНЯ 2022 Р.</p>
            <h2 className="oll-text-insaid-h2">
              DOTA: Dragon's Blood Season 3 Released
            </h2>
            <p className="oll-text-insaid-p">
              Станьте свідком завершення битви за всесвіт Dota у третьому сезоні
              DOTA: Dragon's Blood, що вже транслюється на Netflix.
            </p>
          </Link>
        </div>
        <div className="main-conteyner-news two-news">
          <Link to="/ArlingtonMajor" className="oll-text-insaid">
            <p>4 СЕРПНЯ 2022 Р.</p>
            <h2 className="oll-text-insaid-h2">
              The Arlington Major The Road to the International
            </h2>
            <p className="oll-text-insaid-p">
              Літня частина професійного сезону наближається до завершення й
              великий турнір в Арлінґтоні дасть найкращим командам у світі
              останній шанс заробити очки професійного сезону перед...
            </p>
          </Link>
        </div>
        <div className="main-conteyner-news three-news">
          <Link to="/ShortFilm" className="oll-text-insaid">
            <p>25 ЧЕРВНЯ 2022 Р.</p>
            <h2 className="oll-text-insaid-h2">Dota 2 Short Film Contest</h2>
            <p className="oll-text-insaid-p">
              Ми радо оголошуємо відкриття цьогорічного конкурсу короткометражок
              Dota 2. Щоби ваша робота потрапила на розгляд, надсилайте свої
              короткометражні фільми тривалістю до 90 секунд в...
            </p>
          </Link>
        </div>
        <div className="main-conteyner-news fore-news">
          <Link to="/ChestEndless" className="oll-text-insaid">
            <p>22 ЧЕРВНЯ 2022 Р.</p>
            <h2 className="oll-text-insaid-h2">Chest of Endless Days</h2>
            <p className="oll-text-insaid-p">
              У сьогоднішньому оновленні ми додаємо скарбницю нескінченних днів
              — тринадцять абсолютно нових наборів предметів.
            </p>
          </Link>
        </div>
        <div className="main-conteyner-news five-news">
          <Link to="/WorkshopCall" className="oll-text-insaid">
            <p>21 ЧЕРВНЯ 2022 Р.</p>
            <h2 className="oll-text-insaid-h2">
              Summer 2022 Workshop Call to Arms
            </h2>
            <p className="oll-text-insaid-p">
              Літо вже розпочалося, і після виходу оновлення з бойовим звітом
              наші погляди спрямовані на майбутній вміст. І якщо ми вже згадали
              про новий вміст, команда Dota запрошує всіх...
            </p>
          </Link>
        </div>
        <div className="main-conteyner-news six-news">
          <Link to="/ArlingtonMajor" className="oll-text-insaid">
            <p>11 ЧЕРВНЯ 2022 Р.</p>
            <h2 className="oll-text-insaid-h2">
              The International 2022 Live Event Broadcast RFP and Broadcast
              License Requests
            </h2>
            <p className="oll-text-insaid-p">
              Preparations are well underway for The International 2022, which
              will take place live in Singapore in October.
            </p>
          </Link>
        </div>
        <div className="main-conteyner-news seven-news">
          <Link to="/BattleReportr" className="oll-text-insaid">
            <p>9 ЧЕРВНЯ 2022 Р.</p>
            <h2 className="oll-text-insaid-h2">The Battle Report Update</h2>
            <p className="oll-text-insaid-p">
              Сьогоднішнє оновлення привносить до гри нові й оновлені функції на
              додачу до свіжого сезону Dota Plus. Зануртеся в подробиці вашої
              гри за допомогою бойового звіту, насолоджуйтеся...
            </p>
          </Link>
        </div>
        <div className="main-conteyner-news eight-news">
          <Link to="/International" className="oll-text-insaid">
            <p>1 ЧЕРВНЯ 2022 Р.</p>
            <h2 className="oll-text-insaid-h2">The International 2022</h2>
            <p className="oll-text-insaid-p">
              На великому турнірі в Стокгольмі ми з радістю оголосили, що The
              International відбудеться в Сінгапурі. Таким чином, коронна
              кіберспортивна подія вперше пройде в Південно-Східній...
            </p>
          </Link>
        </div>
        <div className="main-conteyner-news nine-news">
          <Link to="/StockholmMajor" className="oll-text-insaid">
            <p>24 ТРАВНЯ 2022 Р.</p>
            <h2 className="oll-text-insaid-h2">
              The Stockholm Major Champions
            </h2>
            <p className="oll-text-insaid-p">
              Великий турнір у Стокгольмі завершився й після десяти днів
              напруженої Dota перемогу здобули OG. Вітаємо Ammar, Ceb, bzm,
              Yuragi та Taiga з їхнім дивовижним виступом.
            </p>
          </Link>
        </div>
        <div className="main-conteyner-news ten-news">
          <Link to="/SpringCleaning" className="oll-text-insaid">
            <p>25 БЕРЕЗНЯ 2022 Р.</p>
            <h2 className="oll-text-insaid-h2">Spring Cleaning Update 2022</h2>
            <p className="oll-text-insaid-p">
              Найбільше у світі кріпи люблять ті миті, коли можуть відкласти
              мечі й прибратися швабрами у своїх казармах. На щастя для нас це
              означає, що настав час скористатися їхнім...
            </p>
          </Link>
        </div>
        <div className="main-conteyner-news eleven-news">
          <Link to="/SpringTour" className="oll-text-insaid">
            <p>12 БЕРЕЗНЯ 2022 Р.</p>
            <h2 className="oll-text-insaid-h2">
              DPC Spring Tour Fantasy Kickoff
            </h2>
            <p className="oll-text-insaid-p">
              Протягом короткої перерви після регіональних фіналів останнього
              сезону світ побачив Первісного Звіра Primal Beast й оновлення
              ігроладу 7.31, і поки гравці все ще вивчають новий...
            </p>
          </Link>
        </div>
        <div className="main-conteyner-news twelve-news">
          <Link to="/DotaPlus" className="oll-text-insaid">
            <p>2 БЕРЕЗНЯ 2022 Р.</p>
            <h2 className="oll-text-insaid-h2">
              Dota Plus Update — Spring 2022
            </h2>
            <p className="oll-text-insaid-p">
              Весняні вітри вже проганяють люту зиму, тому час зустрічати нове
              сезонне оновлення Dota Plus — на вас чекають безліч нових функцій
              Plus, які з’явилися після останньої бойової...
            </p>
          </Link>
        </div>
        <div className="main-conteyner-news thirteen-news">
          <Link to="/GameplayUpdate" className="oll-text-insaid">
            <p>1 БЕРЕЗНЯ 2022 Р.</p>
            <h2 className="oll-text-insaid-h2">7.31b Gameplay Update</h2>
            <p className="oll-text-insaid-p">
              Тепер зменшення витрати мани посилюється частково. Бандитський
              клинок Brigand's Blade: тепер додаткова шкода за одиницю здоров‘я
              є фізичною...
            </p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default News;
