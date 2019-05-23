$(".petition1").append("<p> test</p>");

mrtk.watchForState(function() {
  if (mrtk.user.name) {
    document.getElementById("loginWithGoogle").style.display = "none";
    document.getElementById("logout").style.display = "block";
    document.getElementById("welcomeMessage").innerHTML = `Hello ${
      mrtk.user.name
    }`;
    document.getElementById("createPetition").style.display = "block";
  } else {
    document.getElementById("logout").style.display = "none";
    document.getElementById("loginWithGoogle").style.display = "block";
    document.getElementById("welcomeMessage").innerHTML = `Please Login`;
    document.getElementById("createPetition").style.display = "none";
  }
});
function signP() {}
async function getData() {
  var db = firebase.firestore();
  var rawResponse = await db.collection("petition1").get();
  var response = rawResponse.docs.map(item => {
  return {
  id: item.id,
  ...item.data()
                                      
  };
  }
     console.log(response);                                 
  for (var i = 0; i < response.length; i++) {
    var goal = parseInt(response[i].goal, 10);
    var currentSigns = 100;
    var barWidth = currentSigns / goal * 100;
    var barWidthp = barWidth + "%";
    var barNumber = "inBar" + i;
    
    if (response[i].approved == true) {
    $("#container").append(`<div class='petition1'>
   <p class = "petitionHdr"> ${response[i].name}</p>
<p>${response[i].describe}</p><br>
<p>Our Goal is to reach: ${response[i].goal} signatures</p>
<div class = "outBar" id = "outBar">
   <div class = "inBar" style="width: barWidthp" id = "'inBar'+ i">goal</div>
</div>
<p>Created By: ${response[i].creator}</p> <br>
<button class = "pButton" id = "'pButton' + i">Sign this petition!</button>

</div>`);
    
    }
  }
  $(".pButton").click(function(){
  console.log("It Worked!");
});

}


getData();