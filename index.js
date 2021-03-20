
$(document).ready(function(){    

    $(".hide-description").click(function(){
        $(".hide-description").show();
        $(".desc").hide();
        $(this).next().show();
        $(this).hide();
    });

    $(".desc").click(function(){
        $(".hide-description").show();
        $(this).hide();
    });
    
});
