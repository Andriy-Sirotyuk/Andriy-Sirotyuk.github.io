import React from "react";
import Header from "../../Header/Header";
import ListNews from "../../Main_List_News/ListNews";
import ListHeroes from "../../Main_List_Heroes/ListHeroes";
import FreePlay from "../../Main_List_FreePlay/FreePlay";

function Home() {
  return (
    <>
      <Header />
      <ListNews />
      <ListHeroes/>
      <FreePlay/>
    </>
  );
}

export default Home;
