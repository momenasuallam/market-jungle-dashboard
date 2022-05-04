$("#showfilter").click(function () {
  $("#exampleModal").modal("show");
});

$(".dropdown1 dt a").on("click", function () {
  $(".dropdown1 dd ul").slideToggle("fast");
});

$(".dropdown1 dd ul li a").on("click", function () {
  $(".dropdown1 dd ul").hide();
});

function getSelectedValue(id) {
  return $("#" + id)
    .find("dt a span.value")
    .html();
}

$(document).bind("click", function (e) {
  var $clicked = $(e.target);
  if (!$clicked.parents().hasClass("dropdown1")) $(".dropdown1 dd ul").hide();
});

$('.mutliSelect1 input[type="checkbox"]').on("click", function () {
  var title = $(this)
      .closest(".mutliSelect1")
      .find('input[type="checkbox"]')
      .val(),
    title = $(this).val() + ",";

  if ($(this).is(":checked")) {
    var html = '<span title="' + title + '">' + title + "</span>";
    $(".multiSel1").append(html);
    $(".hida1").hide();
  } else {
    $('span[title="' + title + '"]').remove();
    var ret = $(".hida1");
    $(".dropdown1 dt a").append(ret);
  }
});

$(".dropdown2 dt a").on("click", function () {
  $(".dropdown2 dd ul").slideToggle("fast");
});

$(".dropdown2 dd ul li a").on("click", function () {
  $(".dropdown2 dd ul").hide();
});

function getSelectedValue(id) {
  return $("#" + id)
    .find("dt a span.value")
    .html();
}

$(document).bind("click", function (e) {
  var $clicked = $(e.target);
  if (!$clicked.parents().hasClass("dropdown2")) $(".dropdown2 dd ul").hide();
});

$('.mutliSelect2 input[type="checkbox"]').on("click", function () {
  var title = $(this)
      .closest(".mutliSelect2")
      .find('input[type="checkbox"]')
      .val(),
    title = $(this).val() + ",";

  if ($(this).is(":checked")) {
    var html = '<span title="' + title + '">' + title + "</span>";
    $(".multiSel2").append(html);
    $(".hida2").hide();
  } else {
    $('span[title="' + title + '"]').remove();
    var ret = $(".hida2");
    $(".dropdown2 dt a").append(ret);
  }
});

// Tagging Suppoort
$(".js-example-tags").select2({
  tags: true,
});

   $("#toggle").click(function () {
     $(this).toggleClass("on");
     $("#menu").slideToggle();
   });


   $('input[type="file"]').each(function () {
     // Refs
     var $file = $(this),
       $label = $file.next("label"),
       $labelText = $label.find("span"),
       labelDefault = $labelText.text();

     // When a new file is selected
     $file.on("change", function (event) {
       var fileName = $file.val().split("\\").pop(),
         tmppath = URL.createObjectURL(event.target.files[0]);
       //Check successfully selection
       if (fileName) {
         $label
           .addClass("file-ok")
           .css("background-image", "url(" + tmppath + ")");
         $labelText.text(fileName);
       } else {
         $label.removeClass("file-ok");
         $labelText.text(labelDefault);
       }
     });

     // End loop of file input elements
   });
