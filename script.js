function displayDate() {
    const today = new Date ();
    let thisDay = today.getDate();
    let thisMonth = today.getMonth() +1;
    let thisYear = today.getFullYear();
    let strDate =   "Today's date: " +thisMonth + "/" +thisDay + "/" +thisYear;
    document.getElementById("currdate").innerHTML = strDate
}
displayDate();