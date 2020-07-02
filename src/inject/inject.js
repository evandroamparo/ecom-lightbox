function init() {
  if (window.jQuery) {
    var $links = $("a[href^='download.php'][target='_blank']").filter(function(index) {
      return ($(this).text().match(/.*jp[e]?g|png|gif|bmp/i) != null)
    });
    $links
      .attr('rel', 'ecom-gallery')
      .fancybox({
        type: "image",
        beforeLoad: function() {
            this.title = '<a href="' + this.href + '">Baixar</a> ' + $(this.element).text();
        },
        loop: true,
        padding: 0,
        helpers : {
          title : {
            type: 'inside'
          },
          thumbs  : {
            width : 50,
            height  : 50
          },
          buttons : {}
        }
      });
  }
}

document.addEventListener("DOMNodeInserted", function (ev) {
  init();
}, false);