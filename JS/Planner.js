let btnDOM = document.getElementById("BtnAdd");
let inputField = document.getElementById("inputField");
var key = "userGoals";
var parsedGoals = new Array();

checkDBExist();

btnDOM.onclick = function() {

  let tempInputData = inputField.value;
	
  parsedGoals.push(tempInputData);
  
  localStorage.setItem(key, JSON.stringify(parsedGoals));

	displayData();
}


function checkDBExist() {
    if (localStorage.getItem(key) == undefined ||
        localStorage.getItem(key) == null) {
      console.log("Key-Value Pair Does not exist!");

      localStorage.setItem(key, JSON.stringify([]));
    }
    else {
      console.log("it exist!")
			getData();
			displayData();
    }
  }


function getData(){

  let userGoalsDetails = localStorage.getItem(key);
  parsedGoals = JSON.parse(userGoalsDetails)

}

function displayData() {
	var html = "";
	
	parsedGoals.forEach(function(value, idx) {
		html += `<div class="checkboxcontainers">

		<div class="form-check margin1 borderRadiusCheck font">
			<input class="form-check-input borderRadiusCheck fontSizeCheck margin1" type="checkbox" value="" id="flexCheckDefault">
			<label class="form-check-label fontSizeCheck" for="flexCheckDefault">
				${value}
			</label>
		</div>`;
	});

	document.querySelector(".list").innerHTML = html;
}

getData();