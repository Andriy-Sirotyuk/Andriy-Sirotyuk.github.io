import React from "react";
import "./List_news.scss";
import Button from "../components/Button";
import DragonsBlood from "../pages/News/pages/DragonsBlood/DragonsBlood";
import { Link } from "react-router-dom";

function ListNews() {
  return (
    <div className="main-list-news">
      <div className="list-three-last-news">
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
      </div>
      <h2 className="list-news-h2">
        <p className="first-h2">ПРИЄДНАЙТЕСЬ ДО</p>
        <p className="second-h2">БИТВИ ДРЕВНІХ</p>
      </h2>
      <div className="line line-second"></div>
      <p className="list-news-text">
        Щодня мільйони гравців у всьому світі вступають у командну битву 5 на 5
        у ролі одного з більш ніж сотні героїв. Dota — найглибша розрахована на
        багато користувачів стратегія всіх часів, в якій завжди знайдеться місце
        нової стратегії або тактики. Вона абсолютно безкоштовна, і це не
        зміниться – починайте захищати свого Стародавнього вже зараз.
      </p>
      <div className="button-help-center">
        <a href="http://localhost:3000/news">
          <Button title={"ЩО НОВОГО"}></Button>
        </a>
      </div>
    </div>
  );
}

export default ListNews;
