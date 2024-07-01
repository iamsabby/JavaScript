// Exercise 4 Digital Clock

/* Create a digital  seconds clock  using setInterval and date object in JavaScript
The Date object can be used to get the date, time , hours, minutes and seconds which can be update using set interval 
Try to keep the UI look good. */

let start = () => {
    let t = new Date()
    let h = t.getHours()
    let m = t.getMinutes()
    let s = t.getSeconds()
    let d = t.getDate()
    let mm = t.getMonth()
    h = check(h)
    m = check(m)
    s = check(s)

    document.getElementById("clock").innerHTML = h + ":" + m + ":" + s

    setInterval(start, 1000)
}

let check = (a) => {
    if (a < 10){
        return a = "0" + a
    }
    else{
        return a
    }
}
