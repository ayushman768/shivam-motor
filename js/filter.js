 function Myfunction() {
     var input, filter, i, txtValue, div;
     input = document.getElementById('input');
     filter = input.value.toUpperCase();
     div = document.querySelectorAll('.new-vichal-shivam-motor');


     for (i = 0; i < div.length; i++) {
         img_p = div[i].querySelector('.new-vichal-shivam-motor>p');
         if (img_p) {
             txtValue = img_p.textContent;
             if (txtValue.toUpperCase().indexOf(filter) > -1) {
                 div[i].style.display = "";
             } else {
                 div[i].style.display = "none";

             }
         }
     }
 }