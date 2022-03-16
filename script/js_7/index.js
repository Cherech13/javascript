//1.1
var playList = [
    {
      author: "LED ZEPPELIN",
      song: "STAIRWAY TO HEAVEN"
    },
    {
      author: "QUEEN",
      song: "BOHEMIAN RHAPSODY"
    },
    {
      author: "LYNYRD SKYNYRD",
      song: "FREE BIRD"
    },
    {
      author: "DEEP PURPLE",
      song: "SMOKE ON THE WATER"
    },
    {
      author: "JIMI HENDRIX",
      song: "ALL ALONG THE WATCHTOWER"
    },
    {
      author: "AC/DC",
      song: "BACK IN BLACK"
    },
    {
      author: "QUEEN",
      song: "WE WILL ROCK YOU"
    },
    {
      author: "METALLICA",
      song: "ENTER SANDMAN"
    }
  ];
  const ol = document.createElement("ol");
  const mainDiv = document.getElementById("content");
  mainDiv.append(ol);
  for (let i in playList) {
    const li = document.createElement("li");
    const pBtn = document.createElement("p");
    pBtn.append(playList[i].author);
    pBtn.append(" : ");
    pBtn.append(playList[i].song);
    li.append(pBtn);
    ol.append(li);
  }


//1.2
let modal = document.getElementById("my_modal");
let btn = document.getElementById("mybtn");
let span = document.getElementsByClassName("close")[0];


btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal) {
    modal.style.display = "none";
 }
 }


//1.3
const trafficLights = document.querySelector("div.traffic-light");

const redlight = document.getElementById("red");
const yellowlight = document.getElementById("yellow");
const greenlight = document.getElementById("gren");
const butn = document.getElementById("btn");

butn.addEventListener("click", function () {
        if (redlight.classList.contains("traffic__red")) {
            redlight.classList.remove("traffic__red");
            yellowlight.classList.add("traffic__yellow");
        } else if (yellowlight.classList.contains("traffic__yellow")) {
            yellowlight.classList.remove("traffic__yellow");
            greenlight.classList.add("traffic__green");
        } else if (greenlight.classList.contains("traffic__green")) {
            greenlight.classList.remove("traffic__green");
            redlight.classList.add("traffic__red");
        }
    });