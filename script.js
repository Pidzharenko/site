// JavaScript Document
window.addEventListener("load", function(){
var check = document.querySelectorAll(".checkbox");

var k;
var s = 0;
for(let i = 0; i < 6; i++){
check[i].addEventListener("click",function(){
	   k = i + 1;
	   s++;
	   document.querySelector(".courses_block" + k).classList.add("courses_blockClose","courses_blockEffect");
	   
	   setTimeout(function(){
       document.querySelector(".courses_block" + k).style.display='none';
	   if(s == 6){
		   document.querySelector(".finish").style.visibility = "visible";
		   }
       }, 1000);
	   
	   
	   
	});
	 
	 } 
});


