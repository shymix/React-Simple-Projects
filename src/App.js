import React from 'react';
import "./App.css";
import Accordian from "./components/accordian";

import ImageSlider from "./components/image-slider";

import LoadMoreData from "./components/load-more-data";

import ScrollToTopAndBottom from "./components/scroll-to-top-and-bottom";
import ScrollToSection from "./components/scroll-to-top-and-bottom/scroll-to-section";

import StarRating from "./components/star-rating";
import TicTacToe from "./components/tic-tact-toe";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";

import UseFetchHookTest from "./components/use-fetch/test";
import UseWindowResizeTest from "./components/use-window-resize/test";

function App() {
  return (
    <div className="App">
      {/* Accordian component */}
      {/* <Accordian/> */}

      {/* Star rating component */}
      {/* <StarRating noOfStars={10}/> */}

      {/* Image slider component */}
      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      /> */}

      {/* Load more products component */}
      {/* <LoadMoreData/> */}

      {/* Tree view component/menu UI component / recursive navigation menu */}
      {/* <TreeView menus={menus} /> */}

      {/* Tic tac toe */}
      {/* <TicTacToe/> */}

      {/* useFetch - Custom Hook Test*/}
      {/* <UseFetchHookTest/> */}

      {/* Use Window Resize Hook Test */}
      {/* <UseWindowResizeTest/> */}

      {/* Scroll to Top and Bottom */}
      {/* <ScrollToTopAndBottom/> */}

      {/* Scroll to a Particular Section */}
      <ScrollToSection/>
    </div>
  );
}

export default App;
