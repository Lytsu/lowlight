let plugin = (hook, vm) => {
    hook.afterEach(function (html, next) {
        var htmlElement = document.createElement('div');
        htmlElement.innerHTML = html;

        htmlElement.querySelectorAll('img[fancy=yep]').forEach((element) => {
            var fancyElement = document.createElement('a');
            fancyElement.setAttribute('data-fancybox','gallery');
            fancyElement.setAttribute('data-caption','gallery');
            fancyElement.setAttribute('href',element.getAttribute('src'));

            var replacement = document.createElement('img');
            replacement.setAttribute('src',element.getAttribute('src'))
            replacement.setAttribute('style','zoom:50%;')

            fancyElement.appendChild(replacement);

            element.parentNode.replaceChild(fancyElement, element);
        });
        next(htmlElement.innerHTML);
    });
}

if (!window.$docsify) {
    window.$docsify = {}
}

window.$docsify.plugins = (window.$docsify.plugins || []).concat(plugin)
