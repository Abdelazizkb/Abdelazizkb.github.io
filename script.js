function sendMail(params){
    var tempParams={
        from_name:document.getElementById("firstname").value+" "+document.getElementById("lastname").value+" "+document.getElementById("email").value,
        to_name:"korba abdelaziz",
        message:document.getElementById("message").value
    };
    emailjs.send('service_95twc0g','template_vymu68f',tempParams).then(res=>{
        console.log(res.status)
    })
}