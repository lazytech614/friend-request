var btn = $(".btn");
var heading = $("h1");
var check = 0;
btn.click(function(){
    if(check == 0){
        heading.html("Friend :)")
        heading.css("color","green");
        btn.text("Remove Friend");
        btn.css("backgroundColor","white");
        btn.fadeIn(60).fadeOut(60).fadeIn(60);
        check = 1;
    }else{
        heading.html("Stranger :(")
        heading.css("color","red");
        btn.text("Add Friend");
        btn.css("backgroundColor","aqua");
        btn.fadeIn(60).fadeOut(60).fadeIn(60);
        check = 0;
    }
})