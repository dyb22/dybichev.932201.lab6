var sec5 = document.getElementById('sec5');
var sec4 = document.getElementById('sec4');


// var new3contain = document.getElementById('new3contain');


// function On1click(){     
//     new1contain.style.display = 'flex';   
// }

// function On2click(){     
//    new2contain.style.display = 'flex';      
// }

// function On3click(){   
//     new3contain.style.display = 'flex';       
// }




 document.getElementById('sec1').addEventListener('click', (e) => {
   if (e.target === document.getElementById('sec1')) {  
      sec4.style.zIndex = '1000';
      sec5.style.zIndex = '999';
      document.getElementById('cat').style.display = 'block';

      sec4.style.width = '95%';
      document.querySelector('.sec4 img').style.width = '80%';
      sec5.style.width = '95%';
     document.querySelector('.sec5 img').style.width = '80%';
      
 

    }
});

document.getElementById('sec3').addEventListener('click', (e) => {
  if (e.target === document.getElementById('sec3')) {  
     sec4.style.zIndex = '999';
     sec5.style.zIndex = '1000';
     document.getElementById('cat').style.display = 'none';

     
     sec4.style.width = '95%';
     document.querySelector('.sec4 img').style.width = '80%';
     sec5.style.width = '95%';
     document.querySelector('.sec5 img').style.width = '80%';
     
   }
});

document.getElementById('sec2').addEventListener('click', (e) => {
  if (e.target === document.getElementById('sec2')) {  
     sec4.style.zIndex = '999';
     sec5.style.zIndex = '1000';
     document.getElementById('cat').style.display = 'block';
     sec4.style.width = '50%';
     sec5.style.width = '50%';
     document.querySelector('.sec4 img').style.width = '100%';
     document.querySelector('.sec5 img').style.width = '100%';

   }
});