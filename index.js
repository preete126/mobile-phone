let appArray = [
    { img: "image/call.png", name: "Phone" },
    { img: "image/facebook.png", name: "Facebook" },
    { img: "image/gmail.png", name: "Gmail" },
    { img: "image/instagram.png", name: "Instagram" },
    { img: "image/telegram.jpg", name: "Telegram" },
    { img: "image/tiktok.png", name: "Tiktok" },
    { img: "image/twitter.png", name: "Twitter" },
    { img: "image/youtube.jpg", name: "Youtube" },
    { img: "image/snap_chat.png", name: "Snapchat" },
    { img: "image/facebook.png", name: "Facebook" },
    { img: "image/gmail.png", name: "Gmail" },
    { img: "image/instagram.png", name: "Instagram" },
    { img: "image/telegram.jpg", name: "Telegram" },
    { img: "image/tiktok.png", name: "Tiktok" },
    { img: "image/twitter.png", name: "Twitter" },
    { img: "image/youtube.jpg", name: "Youtube" },
    { img: "image/call.png", name: "Phone" },
    { img: "image/facebook.png", name: "Facebook" },
    { img: "image/gmail.png", name: "Gmail" },
    { img: "image/instagram.png", name: "Instagram" },
    { img: "image/telegram.jpg", name: "Telegram" },
    { img: "image/tiktok.png", name: "Tiktok" },
    { img: "image/twitter.png", name: "Twitter" },
    { img: "image/youtube.jpg", name: "Youtube" },
    { img: "image/call.png", name: "Phone" },
    { img: "image/facebook.png", name: "Facebook" },
    { img: "image/gmail.png", name: "Gmail" },
    { img: "image/instagram.png", name: "Instagram" },
    { img: "image/telegram.jpg", name: "Telegram" },
    { img: "image/tiktok.png", name: "Tiktok" },
    { img: "image/twitter.png", name: "Twitter" },
    { img: "image/youtube.jpg", name: "Youtube" }
]
let toggle = true
let callNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, "*", 0, "#"]
let displayApps = false
let timer = 0



function body() {
    document.getElementById("innerContainer").innerHTML = " "
    for (let index = 0; index < appArray.length; index++) {
        const element = appArray[index];
        document.getElementById("innerContainer").innerHTML += `
        <div class="appimg" onclick="Execute(${index})">
            <img width="100%" src="${element.img} ">
        </div>
    `

    }

    document.getElementById("inner").classList.add("add")
    document.getElementById("inner").classList.remove("layer")
    document.getElementById("innerContainer").classList.remove("addSpace")
    document.getElementById("innerContainer").classList.remove("changebg")
}

function showApps() {
    if (toggle == true) {
        body()
        toggle = false
    } else if (toggle == false && displayApps == true) {
        toggle = true
        body()
        toggle = false
    }

}
setInterval(function () {
    let date = new Date();
    if (String(date.getHours()).length < 2) {
        
        document.getElementById("hrs").innerHTML = `0${date.getHours()}`
    } else {

        document.getElementById("hrs").innerHTML = date.getHours()
    }
    if (String(date.getMinutes()).length < 2) {
        document.getElementById("mins").innerHTML = `0${date.getMinutes()}`
    } else {
        document.getElementById("mins").innerHTML = date.getMinutes()
    }

}, 1000)

function CallDigits() {
    document.getElementById("innerContainer").innerHTML = `
        <input type="text" readonly id="input">
        `
    for (let index = 0; index < 12; index++) {
        document.getElementById("innerContainer").innerHTML += `
            <button type="button" class="callbtn" onclick="AddNumber(${index})">${callNumbers[index]} </button>
            `

    }

    document.getElementById("innerContainer").innerHTML += `
        <div class="callContainer" >
        <img onclick="Dial()" src='image/call.png' alt=""/>
        <span id="delete" onclick="DeleteOne()">x</span>
        </div>

        `

    document.getElementById("innerContainer").classList.add("addSpace")
}
function Execute(index) {
    displayApps = true
    document.getElementById("innerContainer").innerHTML = " "
    document.getElementById("inner").classList.add("layer")
    if (index == 0) {
        CallDigits()
        console.log(index);
    } else {
        document.getElementById("innerContainer").classList.add("changebg")
        document.getElementById("innerContainer").innerHTML = `
        <div class="ussd">Unsupported format, can't open this application</div>
        `
    }
}

function AddNumber(index) {
    document.getElementById("input").value += callNumbers[index]
}

function DeleteOne() {
    let string = String(document.getElementById("input").value)
    console.log(string);
    let stringLength = string.length
    let slice = String(string.slice(0, stringLength - 1))
    document.getElementById("input").value = slice
}

function Dial() {
    let string = String(document.getElementById("input").value)
    if (string.length == 0) {

    }
    if (string.includes("*" && "#")) {
        console.log(true);
        if (string[0] == "*" && string[string.length - 1] == "#") {

            document.getElementById("innerContainer").innerHTML = " "
            document.getElementById("innerContainer").classList.add("changebg")
            document.getElementById("innerContainer").innerHTML = `
            <div class="ussd">USSD code runnning... </div>
            `


        }
        else {
            document.getElementById("innerContainer").innerHTML = " "
            document.getElementById("innerContainer").classList.add("changebg")
            document.getElementById("innerContainer").innerHTML = `
        <div class="ussd">Connection promblem or invalid mmi</div>
        `
        }

    }
    else if (string.includes("*" || "#")) {
        console.log(false)
        document.getElementById("innerContainer").innerHTML = " "
        document.getElementById("innerContainer").classList.add("changebg")
        document.getElementById("innerContainer").innerHTML = `
        <div class="ussd">Connection promblem or invalid mmi</div>
        `
    }
    else if (string.length == 0) {
        alert("Can't place a call")
    }
    else {
        document.getElementById("innerContainer").innerHTML = " "
        document.getElementById("innerContainer").classList.add("changebg")
        document.getElementById("innerContainer").innerHTML = `
        <div class="calling">
            <div>
                <div>${string} </div>
                <div style="margin-top:7px;">Calling...</div>
            </div>
            <img src='image/call.png' onclick=" Back()" alt="">
        </div>
        `
    }
}

function Back() {
    CallDigits()
}