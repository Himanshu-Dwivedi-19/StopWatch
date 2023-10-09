const time = document.getElementById("time");
var seconds = 0, t, lp = 1;
var hh = 0, mm = 0, ss = 0;
function reset() {
    let test = document.getElementById("b1");
    test.innerText = "Lap";
    document.getElementById("btn1").setAttribute("onclick", "lap()");
    clearInterval(t);
    let temp = document.getElementsByClassName("store");
    for (let i = 0; i < temp.length; i++) {
        temp[i].innerText = "";
    }
    hh = 0, ss = 0, mm = 0, seconds = 0;
    time.innerText = "00:00:00";
    lp = 1;
}
function start() {
    t = setInterval(function () {
        ss = seconds % 100;
        ss = parseInt(ss);
        mm = parseInt(seconds / 100);
        hh = parseInt(mm / 60);
        mm = mm % 60;
        if (ss < 10) {
            ss = "0" + ss;
        }
        if (mm < 10) {
            mm = "0" + mm;
        }
        if (hh < 10) {
            hh = "0" + hh;
        }

        time.innerText = hh + ":" + mm + ":" + ss;
        // console.log(hh,mm,ss);
        seconds++;
        // console.log(hh,':',mm,':',ss);
    }, 10);
    let text = document.getElementById("b2");
    text.innerText = "Stop";
    document.getElementById("btn2").setAttribute("onclick", "stop()")
    let test = document.getElementById("b1");
    test.innerText = "Lap";
    document.getElementById("btn1").setAttribute("onclick", "lap()");
}

function lap() {
    // let text = document.getElementById("h1").innerText;
    if (hh != "00" || mm != "00" || ss != "00") {
        let hed = document.getElementById("stwch");
        let temp = document.getElementsByClassName("store");
        let flag = false;
        for (let i = 0; i < temp.length; i++) {
            if (temp[i].innerText == "") {
                // console.log(temp[i])
                flag = true;
                let l = document.createElement("a");
                l.innerText = "Lap" + " " + lp;
                l.setAttribute("id", "l");
                let r = document.createElement("a");
                r.innerText = hh + ":" + mm + ":" + ss;
                r.setAttribute("id", "l");
                temp[i].appendChild(l);
                temp[i].appendChild(r);
                lp++;
                break;
            }
        }
        if (flag == false) {
            flag = document.createElement("div");
            flag.setAttribute("class", "store");
            let l = document.createElement("a");
            l.innerText = "Lap" + " " + lp;
            l.setAttribute("id", "l");
            let r = document.createElement("a");
            r.innerText = hh + ":" + mm + ":" + ss;
            r.setAttribute("id", "l");
            flag.appendChild(l);
            flag.appendChild(r);
            hed.appendChild(flag);
            lp++;
        }
    }


}

function stop() {
    let text = document.getElementById("b1");
    text.innerText = "Reset";
    document.getElementById("btn1").setAttribute("onclick", "reset()");

    clearInterval(t);

    let test = document.getElementById("b2");
    test.innerText = "Start";
    document.getElementById("btn2").setAttribute("onclick", "start()")
}

