months = ["January","February","March","April","May","June","July","August","Septrmber","October","November","December"]
function update(){

    const date = new Date();

    let h = date.getHours();
    const a = h<12?"AM":"PM";
    h = h%12||12;
    h = h.toString().padStart(2,0);
    const m = date.getMinutes().toString().padStart(2,0);
    const s = date.getSeconds().toString().padStart(2,0);
    const d = date.getDate().toString().padStart(2,0);
    const mon = date.getUTCMonth();
    const y = date.getFullYear();
    document.getElementById("clock").textContent = `${h}:${m}:${s} ${a}`;
    document.getElementById("date").textContent = `${d} ${months[mon]} ${y}`;
}
update();
setInterval(update,1000);
