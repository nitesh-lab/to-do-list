var a=" ";

$("input").on("keydown",function(event){

    if(event.key==="Enter"){
       listadd(a);
        return;
    }
    a+=event.key;
});

function listadd(a)
{

$("#pad").remove();

var b=$("<p>"+a+"</p>").addClass("new");
$(".task").append(b);

str=" ";

}

