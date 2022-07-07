// tab
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
// slider


































// // carousel slider
// var left=1;
// var right=5;
// function show()
// {
//   for(i=left;i<=right;i++)
//   {
//     document.getElementById("c"+i).style.display="inline-block";
//   }

// }
// function moveLeft()
// {
//   if(left<=3 && right<=7){
//       document.getElementById("c"+left).style.display="none";
//       left+=1;
//       right+=1;

//       for(i=left;i<=right;i++)
//       {
//         document.getElementById("c"+i).style.display="inline-block";
//       }
//     }
//     else
//     return;
// }
// function moveRight()
// {
//   if(left>=2 && right>=6){
//       document.getElementById("c2"+right).style.display="none";
//       left-=1;
//       right-=1;

//       for(i=left;i<=right;i++)
//       {
//         document.getElementById("c2"+i).style.display="inline-block";
//       }
//     }
//     else
//     return; 
// }