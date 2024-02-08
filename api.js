document.addEventListener("DOMContentLoaded", function () {
    const APIKEY = "65c1b160610cb660f35cbea2";
    const APIURL = "https://contact-51b2.restdb.io/rest/contact"


    document.getElementById("contactForm").addEventListener("submit", function (e) {
        e.preventDefault();
        
        let contactName = document.getElementById("contact-name").value;
        let contactEmail = document.getElementById("contact-email").value;
        let contactMessage = document.getElementById("contact-msg").value;

        let jsondata = {
            "name": contactName,
            "email": contactEmail,
            "message": contactMessage
        }
        let settings = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-apikey": APIKEY,
                "Cache-Control": "no-cache"
            },
            body: JSON.stringify(jsondata),
        }

        const response = fetch(APIURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-apikey": APIKEY,
                "Cache-Control": "no-cache"
            },
            body: JSON.stringify(jsondata),
            
            beforeSend: function () {
                document.getElementById("contact-submit").disabled = true;
                document.getElementById("contactForm").reset();
            }
        })
        console.log(response.jsondata)

        fetch("https://contact-51b2.restdb.io/rest/contact", settings)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                document.getElementById("contact-submit").disabled = false;
                document.getElementById("add-update-msg").style.display = "block";
                setTimeout(function () {
                    document.getElementById("add-update-msg").style.display = "none";
                }, 3000);
                getContacts();
            });
    });

function getContacts(limit = 10, all = true) {
    let settings = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "x-apikey": APIKEY,
            "Cache-Control": "no-cache"
        },
    }


}})
