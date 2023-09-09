var a=" ";
var i=1;
var id=1;
$("input").on("keydown",function(event){

    if(event.key==="Enter"){
       listadd(a);
        return;
    }
    if(((event.key.charCodeAt(0)>=97 && event.key.charCodeAt(0)<=122) || (event.key.charCodeAt(0)>=65 && event.key.charCodeAt(0)<=90)) && (event.key!="Backspace" && event.key!="CapsLock"))
    {
    
    a+=event.key;
    }
});

function listadd(ab)
{
$("#pad").remove();

var b=$("<p>"+i+") "+ab+"</p>").addClass("new").attr("id","a"+i);
i++; //important to understand why remove() work.
$(".task").append(b);
$("#inp").val(" ");
a=" ";
}

$("#btn-1").on("click",function(){

listadd(a);
});

$("#btn-2").on("click",function(){

  listremove();
});

function listremove(){
     if(id!=i){
        var c="#a"+id;
        id++;
     }
    $(c).remove();
   
}

