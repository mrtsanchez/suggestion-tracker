
$(document).ready(function() {


  $('#next1').on('click', function (event) {
    $("#question-block-2").show();
    $("#question-block-1").hide();
    event.preventDefault();
  });

  $('#next2').on('click', function (event) {
    $("#question-block-3").show();
    $("#question-block-2").hide();
    event.preventDefault();
  });


  $("form").submit(function(event) {

    var name = $("input#name").val();
    var computer = $("input:radio[name=computer]:checked").val();
    var math = $("#math").val();

    alert(name + computer + math);

    $("#question-block-3").hide();
    $("#suggestion").show();

    $(".display-name").text(name);

  event.preventDefault();

  });

});
