(function() {
    var display = document.getElementById("display");
    var config = {
        watchEvent: "all",
        dataPath: "scripts/js/model.json",
        // dataPathExternal: "https://www.reddit.com/r/Fruits/.json",
        options: {
            ignored: /[\/\\]\./,
            persistent: true
        },
        event: handleEvent,
        ajax: (function() {return new XMLHttpRequest();})()
    }

    function handleEvent(event, path) {
        console.log(event, path);
        updateView(display);
    }

    function updateView(d) {
        config.ajax.open('GET', encodeURI(config.dataPathExternal ? config.dataPathExternal : config.dataPath));
        config.ajax.onload = onload;
        config.ajax.send();

        function onload() {
            if (config.ajax.status === 200) {
                d.innerHTML = "";
                var data = JSON.parse(config.ajax.responseText);
                console.log(data)
                d.appendChild(document.createTextNode(config.ajax.responseText));
            } else {
            	d.appendChild(document.createTextNode(config.ajax.status));
                alert('Request failed.  Returned status of ' + config.ajax.status);
            }
        };
    }
    require('chokidar').watch("./_APP/Component2/" + config.dataPath, config.options).on(config.watchEvent, config.event);
})()