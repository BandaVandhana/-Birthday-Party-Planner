let cartSummaryHTML=`
<tr class="tabletitle">
<td class="item"><h2>Item</h2></td>
<td class="Hours"><h2></h2></td>
<td class="Rate"><h2>Sub Total</h2></td>
</tr>

`;
let totalPrice=0;
cart.forEach((cartItem) =>{
  const productname=cartItem.productName;
  const productPrice=Number(cartItem.productprice);
  totalPrice+=productPrice;
  cartSummaryHTML+=`
  <tr class="service">
  <td class="tableitem"><p class="itemtext">${productname}</p></td>
  <td class="tableitem"><p class="itemtext"></p></td>
  <td class="tableitem"><p class="itemtext">${productPrice}</p></td>
  </tr>
  `;
});
cartSummaryHTML+=`
<tr >
<td ><h3>Total</h3></td>
<td><pre>       </pre></td>
<td ><h3>${totalPrice}</h3></td>
</tr>

`
document.querySelector('.js-order-summary').innerHTML=cartSummaryHTML;
