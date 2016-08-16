// Backend Logic

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Frontend Logic

$(document).ready(function() {

  $('#eyehurt').on('click', function (event) {
    $("#suggestion-eyehurt").show();
    $("#suggestion-frontend-warning").hide();
    document.body.style.background = "#5EFF01";
    event.preventDefault();
  });

  $('#goback').on('click', function (event) {
    $("#suggestion-eyehurt").hide();
    $("#suggestion-frontend-warning").show();
    document.body.style.backgroundImage = "url(img/css.jpg)";
    event.preventDefault();
  });

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

    var inputName = $("input#name").val();
    var name = capitalizeFirstLetter(inputName);
    var computer = $("input:radio[name=computer]:checked").val();
    var front = $("#front-vs-back").val();
    var job = $("#job").val();
    var math = $("#math").val();
    var color = $("input:radio[name=color]:checked").val();

    var frontend = 0;
    var php = 0;
    var net = 0;

    if (computer === "linux") {
      php += 2;
    } else if (computer === "windows") {
      net += 3;
    } else {
      frontend += 2;
      php += 1;
    }

    if (front === "front-end") {
      frontend += 3;
    } else if (front === "back-end") {
      php += 3;
      net += 3;
    } else {
      frontend += 1;
      php += 1;
      net += 1;
    }

    if (job === "c-net") {
      net += 2;
      php += 1;
    } else if  (job === "agency"){
      php += 2;
      frontend += 1;
    } else {
      frontend += 2;
      php += 1;
    }

    if (math === "love"){
      php += 3;
      net += 1;
    } else if (math === "hate") {
      php -= 3;
      net -= 2;
    } else {
      php += 1;
      net += 1;
      frontend +=1;
    }

    if (color === "good") {
      frontend += 2;
    } else {
      frontend -= 2;
    }

    if (frontend >= php && frontend >= net && color === "bad") {
      $("#main-container").hide();
      $("#suggestion-frontend-warning").show();
      document.body.style.backgroundImage = "url(img/css.jpg)";
      $(".display-name").text(name);
    } else if (frontend >= php && frontend >= net) {
      $("#main-container").hide();
      $("#suggestion-frontend").show();
      document.body.style.backgroundImage = "url(img/css.jpg)";
      $(".display-name").text(name);
    } else if (php >= frontend && php >= net){
      $("#main-container").hide();
      $("#suggestion-php").show();
      document.body.style.backgroundImage = "url(img/php.png)";
      $(".display-name").text(name);
    } else {
      $("#main-container").hide();
      $("#suggestion-net").show();
      document.body.style.backgroundImage = "url(img/csharp.jpg)";
      $(".display-name").text(name);
    }

  event.preventDefault();

  });

});
