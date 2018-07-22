import _ from "lodash";

function component() {
    var element = document.createElement("div");
    var button = document.createElement("button");
    var br = document.createElement("br");

    button.innerHTML = "Click";

    element.innerHTML = _.join(['Hello', 'Webpack'], ' ');

    element.appendChild(br);
    element.appendChild(button);

    button.onclick = e => import('./print').then(module => {
       var print = module.default;

       print();
    });

    return element;
}

document.body.appendChild(component());