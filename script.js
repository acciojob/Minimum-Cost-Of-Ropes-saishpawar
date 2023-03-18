function calculateMinCost() {
  //your code here

	let cost=0;
	let data=document.querySelector("#rope-lengths").value;
	// alert(data);

	let arr=data.split(" ");
	// alert(typeof arr[0]);

	while(arr.length>1)
	{
		arr.sort(function (a,b){a-b;} );
			
		
		
		let num1=parseInt(arr[0]);
		let num2=parseInt(arr[1]);
		
		// alert(num1+" "+num2+" "+cost);
		
		let sum=num1+num2;
		
		cost+=sum;
		alert(sum);

		arr.splice(0,2);
		arr.push(sum);
	}
	// alert(cost);
	return cost;
	
  
  
  
}  
