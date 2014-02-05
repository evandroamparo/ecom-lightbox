function init() {
  if (window.jQuery) {
    var $links = $("a[href^='download.php'][target='_blank']").filter(function(index) {
      return ($(this).text().match(/.*jpg|png|gif|bmp/i) != null)
    });
    $links
      .attr('rel', 'ecom-gallery')
      .fancybox({
        type: "image",
        beforeLoad: function() {
            this.title = $(this.element).text();
        }
      });
  }
}

document.addEventListener("DOMNodeInserted", function (ev) {
  init();
}, false);