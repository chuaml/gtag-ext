window.dataLayer = window.dataLayer || [];
function gtagAsync() {
    return new Promise(resolve => {
        if (arguments[0] === 'event') {
            if (arguments.length < 3) arguments[2] = {};
            arguments[2].event_callback = resolve;
        }
        else if (arguments[0] === 'get') {
            arguments[3] = resolve;
        }
        dataLayer.push(arguments);
    });
}
