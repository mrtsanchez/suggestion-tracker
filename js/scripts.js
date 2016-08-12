
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
    var front = $("#front-vs-back").val();
    var job = $("#job").val();
    var math = $("#math").val();
    var color = $("input:radio[name=color]:checked").val();


    alert(name + computer + front + job + math + color);

    $("#question-block-3").hide();

    $(".display-name").text(name);


    $("#suggestion-frontend").show();




  event.preventDefault();

  });

});
