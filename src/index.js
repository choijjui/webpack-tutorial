import _ from "lodash";
import './style.css';
import Icon from './webpack.png';
import Data from './data.xml';

function component() {
    var element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add("hello");

    var webpackIcon = new Image();
    webpackIcon.src = Icon;

    element.appendChild(webpackIcon);

    console.log(Data);
  
    return element;
  }
  
  document.body.appendChild(component());