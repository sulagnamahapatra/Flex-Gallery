$(".panel").click(function(event){
    var element = event.currentTarget;
    $(element).toggleClass("open");
    var para1 = $(element).children("p")[0];
    $(para1).toggleClass("first-child");
    var para3 = $(element).children("p")[2];
    $(para3).toggleClass("last-child");
})