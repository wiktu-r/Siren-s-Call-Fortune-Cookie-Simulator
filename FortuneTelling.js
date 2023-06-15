function fortune() {
    const judy = document.getElementById('judy');
    const display = document.getElementById('display');

    const fortunes = ["Don't hold onto things that require a tight grip.", 
    "Every good and perfect gift is from above.", 
    "Be careful who you trust. Salt and sugar look the same.",
    "Tough love only works when there's as much love as there is tough.", 
    "I am inside your walls", 
    "Every new beginning comes from some other beginning's end.", 
    "She lives the poetry she cannot write.",
    "Little by little, one travels far."];
    const random = Math.floor(Math.random() * fortunes.length);
    document.getElementById('judy').src="3-depressed.png"
    display.innerHTML = fortunes[random];

    if(fortunes[random] != "I am inside your walls") {
        judy.src="3-smile.png"
    } else {
        judy.src="3-depressed.png"
    }
}