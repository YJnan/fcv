$(document).ready(function(){
    $("#od1").bind("click",function(){
        $("#oda1").fadeIn(3000);
        $("#oda2").fadeIn(4000);
        $("#oda3").fadeIn(5000);
    })
})

$(document).ready(function(){
    $("#oda").bind("click",function(){
        $("#oda1").fadeOut(300);
        $("#oda2").fadeOut(300);
        $("#oda3").fadeOut(300);

        $("#odb1").fadeToggle(3000);
        $("#odb2").fadeToggle(3000);
        $("#odb3").fadeToggle(4000);
        $("#odb4").fadeToggle(4000);
        $("#odb5").fadeToggle(5000);
        $("#odb6").fadeToggle(5000);
    })
})

$(document).ready(function(){
    $("#odb").bind("click",function(){
        $("#odb1").fadeOut();
        $("#odb2").fadeOut();
        $("#odb3").fadeOut();
        $("#odb4").fadeOut();
        $("#odb5").fadeOut();
        $("#odb6").fadeOut();

        $("#odc1").fadeToggle(3000);
        $("#odc2").fadeToggle(3000);
    })
})

$(document).ready(function(){
    $("#odc").bind("click",function(){
        $("#odc1").fadeOut();
        $("#odc2").fadeOut();

        $("#odd").fadeToggle(2000);
    })
})
