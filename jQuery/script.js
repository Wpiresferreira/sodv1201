$("document").ready(function(){
    
    $("#hide-button").click(function(){
        $("#test").hide();
    });

    $("#show-button").click(function(){
        $("p").show();
    });

    $("#toggle-button").click(function(){
        $("p").toggle();
    });

    $("p").click(function(){
        $(this).hide();
    });

    $("p").hover(function(){
        $(this).hide();
    }, function(){
        $(this).show();
    });
    
    $("input").focus(function(){
        $(this).css("background-color", "yellow")
    });

    $("input").blur(function(){
        $(this).css("background-color", "green")
    });

    $("#move").click(function(){
        $("#animated").animate({left:'250px'})
    });

    $("h1").hover(function(){
        $("h1").hide("slow")
    });

    $("#show-text").click(function(){
        $("#output").text("Text: " + $("#view").text())
    });

    $("#show-HTML").click(function(){
        $("#output").html("<p>Plus1</p><p>Plus2</p>")
    });



});