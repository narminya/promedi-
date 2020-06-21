function initMap() {} // now it IS a function and it is in global

$(() => {
  initMap = function() {
    // your code like...
    var map = new google.maps.Map(document.getElementById('map'), {/*your code*/});
    // and other stuff...
  }
})