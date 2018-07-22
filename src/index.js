async function getDocument() {
    /*return import('lodash').then(_ => {
        var element = document.createElement('div');
        var _ = _.default;

        element.innerHTML = _.join(['Hello', 'webpack'], ' ');

        return element;
    }).catch(error => 'An error occurred while loading the component')*/

    var element = document.createElement('div');
    const _ = await import ('lodash');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;

}

getDocument().then(component => {
    document.body.appendChild(component);
})