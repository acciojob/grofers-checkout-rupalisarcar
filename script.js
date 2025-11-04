const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	let priceAll = document.querySelectorAll(".price");
	let totalPrice = 0;
	priceAll.forEach(item=>totalPrice+=parseInt(item.innerText));

	let ansCell = document.getElementById("ans");
	if(!ansCell){
		const newRow= document.createElement('tr');
		const firstCol = document.createElement('td')
		firstCol.innerText = "Total Price";
		
		const secCol = document.createElement('td')
		secCol.innerText = `${totalPrice}`
		secCol.id='ans';
		newRow.appendChild(firstCol);
		newRow.appendChild(secCol);
	
		let table = document.getElementsByTagName("table")[0]
	
		table.appendChild(newRow)
	}else{
		ansCell.innerText = totalPrice;
	}
  
};

getSumBtn.addEventListener("click", getSum);

