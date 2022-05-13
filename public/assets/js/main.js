// Set the date we're counting down to
var countDownDate = new Date(1652716800000).getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24)).toLocaleString('en-US', {minimumIntegerDigits: 2,useGrouping: false});
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toLocaleString('en-US', {minimumIntegerDigits: 2,useGrouping: false});
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toLocaleString('en-US', {minimumIntegerDigits: 2,useGrouping: false});
  var seconds = Math.floor((distance % (1000 * 60)) / 1000).toLocaleString('en-US', {minimumIntegerDigits: 2,useGrouping: false});

  // Display the result in the element with id="countdown"
  document.getElementById("countdown").innerHTML = days + ":" + hours + ":" + minutes + ":" + seconds;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "Refresh the Page!";
  }
}, 1000);

document.addEventListener('DOMContentLoaded', function() {
    var submitButton = document.querySelector('#submit')
    var email = document.querySelector("#email_input")

    submitButton.disabled = true
    submitButton.classList.remove("hover");

    email.addEventListener('input', function(){
        if(document.querySelector("#email_input").value == ""){
            submitButton.disabled = true
            submitButton.classList.remove("hover");
        }
        if(document.querySelector("#email_input").value != ""){
            submitButton.disabled = false
            submitButton.classList.add("hover");
        }
    })

    submitButton.addEventListener('click', async function() {
        email = document.querySelector("#email_input").value

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        var raw = JSON.stringify({
            "email": email
        });
        
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        
        fetch("https://sneakers-waitlist.herokuapp.com/add", requestOptions)
        .then(response => response.text())
        .then(result => {
            document.querySelector("#submit").style.color = "#ffffff"
            document.querySelector("#submit").disabled = true
            document.querySelector("#submit").style.backgroundColor = "#66ff66"
            document.querySelector("#submit").style.borderColor = "#66ff66"
            document.querySelector("#submit").textContent = "Success!"
        })
        .catch(error => console.log('error', error))
    })
})