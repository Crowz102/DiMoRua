// Xử lí sự kiện button
$(".btn").click(function(){
    $(".input").toggleClass("active").focus;
    $(this).toggleClass("animate");
    $(".input").val("");
});
