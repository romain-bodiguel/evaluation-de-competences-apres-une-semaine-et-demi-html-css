var exos = [
  {id: 'exo1', nav: '#1', title: 'Exo 01'},
  {id: 'exo2', nav: '#2', title: 'Exo 02'},
  {id: 'exo3', nav: '#3', title: 'Exo 03'},
  {id: 'exo4', nav: '#4', title: 'Exo 04'},
  {id: 'exo5', nav: '#5', title: 'Exo 05'},
  {id: 'exo6', nav: '#6', title: 'Exo 06'},
];

var app = {
  init: function () {
    var target = $('#nav');
    $('<a href="index.html">Home</a>').appendTo(target);
    $.each(exos, function(index) {
      var uri = 'exo'+(index+1)+'.html';
      $('<a>', {
        href: uri,
        text: exos[index].nav || 'Exo'+(index+1),
      }).appendTo(target);
      if ($('.exo').length) {
        var link = $('<a>', {
          href: exos[index].file || uri,
          class: 'lien-epreuve',
          text: exos[index].title || 'Lancer l\'exercice',
        });
        $('.exo').eq(index).append(link);
      }
    });

    //active
    var url = window.location.pathname;
    var filename = url.substring(url.lastIndexOf('/')+1);
    $('#nav a').each(function(i,e) {
      var cur = $(e);
      if (cur.attr('href') === filename) cur.addClass('active');
    });
    $('.demo img').on('click', function(){
      $(this).toggleClass('fs')

    })

  },
};


$(app.init);
