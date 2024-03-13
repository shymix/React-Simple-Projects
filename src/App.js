import React from 'react';
import "./App.css";
import Accordian from "./components/accordian";

import ImageSlider from "./components/image-slider";

import LoadMoreData from "./components/load-more-data";

import ScrollToTopAndBottom from "./components/scroll-to-top-and-bottom";
import ScrollToSection from "./components/scroll-to-top-and-bottom/scroll-to-section";

import UseFetchHookTest from "./components/use-fetch/test";

function App() {
  return (
    <div className="App">
      {/* Accordian component */}
      {/* <Accordian/> */}

      {/* Image slider component */}
      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      /> */}

      {/* Load more products component */}
      {/* <LoadMoreData/> */}

      {/* useFetch - Custom Hook Test*/}
      {/* <UseFetchHookTest/> */}

      {/* Scroll to Top and Bottom */}
      {/* <ScrollToTopAndBottom/> */}

      {/* Scroll to a Particular Section */}
      <ScrollToSection/>
    </div>
  );
}

export default App;
