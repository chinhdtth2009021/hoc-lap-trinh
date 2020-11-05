// // // var arrayotp =document.getElementsByTagName( qualifiedName,'p');
// // //  for (var i = 0; i< arrayotp.length; i++){
// // //
// // //  }
// alert('hello word');
// // //var logo = document.getElementById( element 'logo');
// // var queryRows = document.querySelectorAll( selector:'.row');
// // for (var i = 0; i < queryRows.length; i++){
// //     console.log(queryRows[i]);
// // }
// console.log('-------------------------------------');
//
// var produccts = document.querySelectorAll(selectors:'[style*="color:red"]');
// console.log(produccts[0]);
// console.log(produccts[0].style.fontSize);
// console.log(produccts[0].innerHTML);
// console.log(produccts[0].innerText);
// produccts[0].style.fontSize = "50px";
// produccts[0].style.color = "pink";
// produccts[0].innerHTML = "<strong>Hello, i am trump!</strong>";
var btnAddcarts = document.querySelectorAll( seletor:'.button-add-cart');
for (var i = 0; i < btnAddcarts.length; i++){
    btnAddcarts[i].onclick = function (){
        alert('Hello js');
    };
}