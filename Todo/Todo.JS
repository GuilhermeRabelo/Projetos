$("input[type='text']").on("keypress", function(event){
    if(event.which === 13) {
        var todoText = $(this).val();
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> "+ todoText + "</li>");   
        $("input").val("");
    }
})
                                        
$("ul").on("click", "li", function (){ //listen when li is click inside the ul
    $(this).toggleClass("done");
})

//adding event listeners to the elements that exist when page loads so that we can account for elements that aren't there yet

$("ul").on("click", "span", function(event){                             
    $(this).parent().fadeOut(600,function(){
        $(this).remove();
    });
    event.stopPropagation();
})

$(".fa-plus").on("click", function(){
    $("input[type='text']").fadeToggle(500);
})