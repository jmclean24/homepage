/* Switches between multiple images */
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/average_targets_time_interval_epoch_3.png') {
      myImage.setAttribute ('src','images/average_targets_time_interval_epoch_1.png');
    } else {
      myImage.setAttribute ('src','images/average_targets_time_interval_epoch_3.png');
    }
}