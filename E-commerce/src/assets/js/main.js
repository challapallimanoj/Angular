

document.getElementById('discount-form').addEventListener('submit', function(e) {

   
   document.getElementById('results').style.display = 'none';

   document.getElementById('loader').style.display = 'block';


   setTimeout(calculateDiscount, 2000);

   e.preventDefault();
});


function calculateDiscount() {

   const actualPrice = document.getElementById('price');
   const discount = document.getElementById('discount');
   let discountedResult = document.getElementById('discounted-price');


   const priceInput = parseFloat(actualPrice.value);
   const discountInput = parseFloat(discount.value);


   const x = priceInput * (discountInput / 100);
   
   const discountedPrice = priceInput - x;
   if(isFinite(discountedPrice)) {
       discountedResult.value = discountedPrice.toFixed(2);

       document.getElementById('results').style.display = 'block';

       document.getElementById('loader').style.display = 'none';
      
   } else {
      
       showError('Please check your numbers');

       
   }

 
}




function showError(error) {

      
           document.getElementById('results').style.display = 'none';


           document.getElementById('loader').style.display = 'none';

   const errorDiv = document.createElement('div');


   const card = document.querySelector('.card');
   const heading = document.querySelector('.heading');

   errorDiv.className = 'alert alert-danger';
   
   errorDiv.appendChild(document.createTextNode(error));

  
   card.insertBefore(errorDiv, heading);

   setTimeout(clearError, 3000);
}



function clearError() {
   document.querySelector('.alert').remove();
}