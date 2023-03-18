// function calculateMinCost() {
//   //your code here

// 	let cost=0;
// 	let data=document.querySelector("#rope-lengths").value;
// 	// alert(data);

// 	let arr=data.split(" ");
// 	// alert(typeof arr[0]);

// 	while(arr.length>1)
// 	{
// 		arr.sort(function (a,b){a-b;} );
			
		
		
// 		let num1=parseInt(arr[0]);
// 		let num2=parseInt(arr[1]);
		
// 		// alert(num1+" "+num2+" "+cost);
		
// 		let sum=num1+num2;
		
// 		cost+=sum;
// 		// alert(sum);

// 		arr.splice(0,2);
// 		arr.push(sum);
// 	}
// 	document.querySelector("#result").textContent=cost;
	
  
  
  
// }  

function calculateMinCost() {
  //your code here
  // read data from input element;
  var inputData = document.querySelector("#rope-lengths").value;
  var inputArr = inputData.split(",");

  for (var i = 0; i < inputArr.length; i++) {
    inputArr[i] = Number(inputArr[i]);
  }
  var cost = 0;

  while (inputArr.length > 1) {
    var newRope = inputArr[0] + inputArr[1];
    cost += newRope;

    // delete first two element
    inputArr.splice(0, 2);
    inputArr.push(newRope);
    //alert(newRope);
  }
  document.querySelector("#result").textContent = cost;
}
