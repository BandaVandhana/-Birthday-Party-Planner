document.querySelectorAll('.js-add')
    .forEach((button)=>{
        button.addEventListener('click',()=>{
               const productName=button.dataset.prName;
               const productprice=button.dataset.prPrice;
               cart.push({
                productName: productName,
                productprice: productprice,

               })
               saveToStorage();
               console.log(cart);
               alert("added to cart")
               var bufferTime=1000;
               setTimeout(function(){
               window.location.href ="recipt.html";
               },bufferTime);
        })
            

    })