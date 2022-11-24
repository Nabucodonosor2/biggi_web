var dragging = false;
var clientY = 0;

$(document).ready(function(event) {
  $(".scrollable").each(function() {
    var viewportHeight = $(".scrollable").outerHeight();
    var totalHeight = $(".scrollable").prop("scrollHeight");

    var scrollUnitHeight = (viewportHeight / totalHeight) * viewportHeight;

    $(".scrollable .scroll span").height(scrollUnitHeight);
  });

  $(document).on('mousewheel', '.scrollable', function(event) {
    var scrollLocation = $(this).find(".scroll span").position().top;
    moveScrollTo($(this), scrollLocation - (event.deltaY * 10));

    event.preventDefault();
    return false;
  });

  $(window).on("mouseup", function(event) {
    if (dragging) {
      dragging = false;
      $(".scrolling").removeClass("scrolling");

      event.preventDefault();
      return false;
    }
  });

  $(".scrollable .scroll span").on("mousedown", function(event) {
    clientY = event.clientY - $(this).position().top;
    dragging = true;
    $(this).parents(".scrollable").addClass("scrolling");

    event.preventDefault();
    return false;
  });

  $(document).on("click", ".scroll", function(event) {
    if ($(event.target).is("span")) {
      return;
    }

    var scrollPosition = event.clientY - 15;
    moveScrollTo($(this).parents(".scrollable"), scrollPosition);
  });

  $(window).on("mousemove", function(event) {
    if (dragging) {
      var scrollPosition = event.clientY - clientY;
      moveScrollTo($(".scrolling"), scrollPosition);

      event.preventDefault();
    }
  });
});

function moveScrollTo(parent, scrollPosition) {
  if (parent.length > 0) {
    var viewportHeight = parent.outerHeight();
    var limitedViewportHeight = viewportHeight - parent.find(".scroll span").height();

    var totalHeight = parent.prop("scrollHeight");

    if (scrollPosition < 0) {
      scrollPosition = 0;
    }

    var scrollSpanPosition = scrollPosition;

    if (scrollSpanPosition > viewportHeight - parent.find(".scroll span").height()) {
      scrollSpanPosition = viewportHeight - parent.find(".scroll span").height();
    }

    if (scrollPosition > viewportHeight) {
      scrollPosition = viewportHeight;
    }

    parent.find(".scroll span").css("top", scrollSpanPosition);

    parent.find(".scroll").css("top", (scrollSpanPosition / viewportHeight) * totalHeight);

    parent.scrollTop((scrollSpanPosition / viewportHeight) * totalHeight);
  }
}