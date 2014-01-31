function init() {
  if (window.jQuery) {
    var $links = $("a[href^='download.php'][target='_blank']").filter(function(index) {
      return ($(this).text().match(/.*jpg|png|gif|bmp/i) != null)
    });
    $links.each(function(i, val) {
        $(val).attr('data-lightbox', 'ecom');
        $(val).attr('title', $(val).text());
    });
  }
}

document.addEventListener("DOMNodeInserted", function (ev) {
  init();
}, false);