var musicPlayer = musicPlayer || {};


musicPlayer.wavs = ['after', 'better', 'do_it', 'ever', 'faster', 'harder', 'hour', 'make_it', 'makes_us', 'more_than', 'never', 'our', 'over', 'stronger', 'work_is', 'work_it'];


musicPlayer.arrangePlayers = function() {
  $.each(musicPlayer.wavs, function(i, wav) {
    $('#player').append('<div id=' + wav + ' class="control_button"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Your_Icon" x="0px" y="0px" width="130px" height="130px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve"><circle class="initial_transition resting ' + wav + '_35" cx="35" cy="20" r="3"/><circle class="initial_transition resting ' + wav + '_35" cx="35" cy="30" r="3"/><circle class="initial_transition resting ' + wav + '_35" cx="35" cy="40" r="3"/><circle class="initial_transition resting ' + wav + '_35" cx="35" cy="50" r="3"/><circle class="initial_transition resting ' + wav + '_35" cx="35" cy="60" r="3"/><circle class="initial_transition resting ' + wav + '_35" cx="35" cy="70" r="3"/><circle class="initial_transition resting ' + wav + '_35" cx="35" cy="80" r="3"/><circle class="initial_transition resting ' + wav + '_45" cx="45" cy="40" r="3"/><circle class="initial_transition resting ' + wav + '_45" cx="45" cy="50" r="3"/><circle class="initial_transition resting ' + wav + '_45" cx="45" cy="60" r="3"/><circle class="initial_transition resting ' + wav + '_45" cx="45" cy="30" r="3"/><circle class="initial_transition resting ' + wav + '_45" cx="45" cy="70" r="3"/><circle class="initial_transition resting ' + wav + '_55" cx="55" cy="40" r="3"/><circle class="initial_transition resting ' + wav + '_55" cx="55" cy="50" r="3"/><circle class="initial_transition resting ' + wav + '_55" cx="55" cy="60" r="3"/><circle class="initial_transition resting ' + wav + '_65" cx="65" cy="50" r="3"/></svg></div>');

    musicPlayer.setup(wav);
  });
};

musicPlayer.setup = function(wav) {
  $('#' + wav).data('state', 'stopped').click(musicPlayer.play(wav));
};

musicPlayer.play = function(wav) {
  return function (){
    var $playButton = $('#' + wav);
    var mySound = soundManager.createSound({
      id: wav,
      url: '/wavs/' + wav + '.wav'
    });
    mySound.play();
    $('#title').addClass('bulge_title');
    $('.' + wav + '_35').attr('class', 'playing_fade ' + wav + '_35');
    setTimeout(function() {
      $('.' + wav + '_35').attr('class', 'resting ' + wav + '_35');
      $('#title').removeClass('bulge_title');
    }, 350);

    // var startLight = 100;

    // for (i = 45; i <= 65; i += 10) {
    //   console.log(startLight);
    //   console.log('.' + wav + '_' + i);
    //   setTimeout(function() {
    //     $('.' + wav + '_' + i).attr('class', 'playing_fade ' + wav + '_' + i);
    //     setTimeout(function() {
    //       $('.' + wav + '_' + i).attr('class', 'resting ' + wav + '_' + i);
    //     }, 500);
    //   }, startLight);
    //   startLight += 100;
    // }

    setTimeout(function() {
      $('.' + wav + '_45').attr('class', 'playing_fade ' + wav + '_45');
      setTimeout(function() {
        $('.' + wav + '_45').attr('class', 'resting ' + wav + '_45');
      }, 350);
    }, 100);

    setTimeout(function() {
      $('.' + wav + '_55').attr('class', 'playing_fade ' + wav + '_55');
      setTimeout(function() {
        $('.' + wav + '_55').attr('class', 'resting ' + wav + '_55');
      }, 400);
    }, 200);

    setTimeout(function() {
      $('.' + wav + '_65').attr('class', 'playing_fade ' + wav + '_65');
      setTimeout(function() {
        $('.' + wav + '_65').attr('class', 'resting ' + wav + '_65');
      }, 350);
    }, 300);

  }
};


$(document).ready(function() {
    soundManager.setup({
    url: '/swf/',
    preferFlash: true,
    onready: musicPlayer.arrangePlayers
    }); // End call to soundManager.setup
  } // End document.ready function
); 








