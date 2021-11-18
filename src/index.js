import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Benz from './trail/benz';
import Paragraphbutton from './trail/paragraphbutton';
import Containerimage from './trail/containerimage';
import Footer from './trail/footer';
import App from './App';
import Searchbar from './trail/searchbar';
import Description from './trail/Description';
import Pictureheader from './trail/pictureheader';
import Picture from  './trail/picturecontainer';
import Navigation from './trail/navigation';
import Slideshow from './trail/slideshow';


// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* <Benz/> */}
   <Navigation/>
   <Slideshow/>
    <Searchbar/>
    <Paragraphbutton/>
    <Containerimage/>
    <Pictureheader/>
    <Picture/>
    <Description/>
    
    <Footer/>,
    </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
