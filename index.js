const containerel=document.querySelector(".container");
const arr=["CYCLIST","ARTIST","POLITICIAN"];
let index=0;
let cindex=0;
text();
function text(){
    cindex++;
    containerel.innerHTML=`<h1>I AM AN ${arr[index].slice(0,cindex)}${"|"}<h1>`;
    if(cindex===arr[index].length){
        index++;
        cindex=0;
    }
    if(index===arr.length){
        index=0;
        cindex=0;
    }
    setTimeout(text,250);
}