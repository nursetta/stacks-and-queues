
var q = [
  { name: 'banana',  price: 0.29 },
  { name: 'smoothie', price: 4.00 },
  { name: 'car', price: 10000 },
  { name: 'cake',  price: 6.00 },
  { name: 'cheese', price: 3.00 },
  { name: 'milk', price: 2.00 },
  { name: 'eggs',  price: 3.00 },
  { name: 'bread', price: 4.00 },
  { name: 'chips', price: 5.00 },
  { name: 'salsa',  price: 1.00 },
  { name: 'chicken', price: 3.00 },
  { name: 'steak', price: 5.00 },
  { name: 'apple',  price: 10.00 },
  { name: 'orange', price: 6.00	},
  { name: 'grapes', price: 4.00 }

];

function calculateTotal(array) {
var discountArray = [];
var counter = 0;
var total = 0;

	while (array.length > 0) {
		var current_element = array.shift();
		counter ++;
		if (counter % 3 === 0) {
			discountArray.push(total += current_element.price * 0.9);
		}
		else if (counter % 5 === 0) {
			discountArray.push(total += current_element.price * 0.8);
		}
		else if ((counter % 3 === 0) && (counter % 5 === 0)){
			discountArray.push(total += current_element.price * 0.7);
		}
		else {
			discountArray.push(total += current_element.price);
		}
	}
return(total);
	
}

calculateTotal(q);


//array to pop to

//Loop through q

//if q[i] % 3 

//pop current element

//	(current_element.price) * 0.9

//push new current_element back to var q

//else if q[i] % 5

//pop current element

//	(current_element.price) * 0.8

//push new current_element back to var q

//else if q[i] % 3 && 5

//pop current element

//	(current_element.price) * 0.7

//push new current_element back to var q

//else total all .prices
