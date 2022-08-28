const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pwd1=document.getElementById("result1");
let pwd2=document.getElementById("result2");
let length=document.getElementById("input")

function generatePass()
{
    var str1=""
    var str2=""
    for(var i=0;i<Number(length.value);i++)
    {
        var index1=Math.floor(Math.random()*characters.length);
        str1+=characters[index1];
        var index2=Math.floor(Math.random()*characters.length);
        str2+=characters[index1];
    }
    pwd1.innerText=str1;
    pwd2.innerText=str2;       
}


