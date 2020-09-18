navigator.geolocation.getCurrentPosition(
    function (position) {
        document.write("You were last spoted at (" + position.coords.latitude + ", " + position.coords.longitude + ")");
    }
);