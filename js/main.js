// I can write jquery code here!!!
$(document).ready(function () {
  // document.getElementById("test-div").c;
    $('#try-btn').click(function () {
        $('#para').css('display', 'block');
   }) 
    
    
  $("#slide-up-btn").click(function () {
    $("#test-div").slideUp(3000);
  });

  $("#slide-down-btn").click(function () {
    $("#test-div").slideDown();
  });
    $(".articles").hover(function () {
        $(this).toggleClass("fademe");
        $("#"+ this.id+ " .test-btn").toggleClass("showMe");
  })
    
});
