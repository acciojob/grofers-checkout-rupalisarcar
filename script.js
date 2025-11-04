const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	let priceAll = document.querySelectorAll(".price");
	let totalPrice = 0;
	priceAll.forEach(item=>totalPrice+=parseInt(item.innerText));
	
	const newRow= document.createElement('tr');
	const firstCol = document.createElement('td')
	firstCol.innerText = "Total Price";
	const secCol = document.createElement('td')
	secCol.innerText = `${totalPrice}`

	newRow.appendChild(firstCol);
	newRow.appendChild(secCol);

	let table = document.getElementsByTagName("table")[0]

	table.appendChild(newRow)
  
};

getSumBtn.addEventListener("click", getSum);

