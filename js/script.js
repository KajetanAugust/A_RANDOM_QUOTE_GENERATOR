/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/


//////////////////
// QUOTES ARRAY //
//////////////////

const quotes = [
    {quote:'There are three responses to a piece of design. Yes, no and wow! Wow is the one to aim for.',source:'Milton Glaser', field:'Architecture'},
    {quote:'As designers, we are in the service industry, but that does not mean we need to be servile. Clients are looking to us for guidance and expertise. We should lead them and not be bullied.',source:'Kevin Finn', citation:'Shillington Melbourne, Guest lecture', year: 2016, field:'Design'},
    {quote:'Be remembered. I’d much rather have work loved or hated than not remembered.',source:'Tim Sutherland', citation:'Shillington Melbourne, Guest lecture', year:2015, field:'Design'},
    {quote:'The simpler the idea, the better. It could break ground, and it could defy physics, but as long as the idea is super simple enough that I can tell my Mum, then that’s a great idea.',source:'Jon Gledstone', citation:'Shillington London, Guest lecture', year: 2015, field:'Advertisement'},
    {quote:'The public is more familiar with bad design than good design. It is, in effect, conditioned to prefer bad design, because that is what it lives with. The new becomes threatening, the old reassuring.',source:'Paul Rand', field:'Graphic Design'},
    {quote:'You have power as a designer to change the relationship someone has with an object. Your challenge is to keep people looking. Build-in those little details. To some people, they might mean a lot.',source:'David Pearson', citation:'Shillington London', year: 2015, field:'Text Design'},
    {quote:'Art does not reproduce the visible; rather, it makes visible.',source:'Paul Klee', citation:'Creative Credo', year: 1920, field:'Painting'},
    {quote:'Since geometry is the right foundation of all painting, I have decided to teach its rudiments and principles to all youngsters eager for art.',source:'Albrecht Dürer', citation:'The Art of Measurement', year: 1525, field:'Painting'},
    {quote:'There\'s an applied style of being minimal and simple, and then there\'s real simplicity. This looks simple, because it really is.',source:'Jonathan Ive', citation:'Wired News', year: 2003, field:'Industrial Design'},
    {quote:'It’s not too shabby is it?',source:'Jonathan Ive', citation:'Macworld Keynote', year: 2007, field:'Industrial Design'},
    {quote:'Good design’s not about what medium you’re working in. It’s about thinking hard about what you want to do and what you have to work with before you start.',source:'Susan Kare', field:'Graphic Design'},
    {quote:'You can have an art experience in front of a Rembrandt… or in front of a piece of graphic design.', source:' Stefan Sagmeister', field:'Graphic Design'},
    {quote:'If no one hates it, no one really loves it.',source:'Jessica Walsh', field:'Illustration'},
    {quote:'If you can properly define the problem, then you’ve already defined the solution as well.',source:'Chip Kidd', field:'Books Design'},
    {quote:'Digital design is like painting, except the paint never dries.',source:'Neville Brody', field:'Art Direction'},
    {quote:'What the visionaries had in common was a particular love of craft and a desire to play.',source:'Petrula Vrontikis', field:'Design'},
    {quote:'I want to make beautiful things, even if nobody cares, as opposed to ugly things. That’s my intent.',source:'Saul Bass', field:'Animation'},
    {quote:'Graphic design will save the world right after rock and roll does.',source:'David Carson', field:'Typography'},
    {quote:'There is no progress in art, any more than there is progress in making love. There are simply different ways of doing it.',source:'Man Rey', citation:'To Be Continued, Unnoticed', year: 1948, field:'Visual Arts'},
    {quote:'It seems that perfection is attained not when there is nothing more to add, but when there is nothing more to remove.',source:'Antoine de Saint Exupéry', citation:'Terre des Hommes', year:1939, field:'Literature'},
    {quote:'To create, one must first question everything.',source:'Eileen Gray', field:'Architecture'},
    {quote:'Think more, design less.',source:'Ellen Lupton', citation:'Lecture', year: 1998, field:'Typography'},
    {quote:'There are 360 degrees, so why stick to one?',source:'Zaha Hadid', citation:'Master builder Interview', year: 2003, field:'Architecture'},
    {quote:'Words Have Meaning, Type Has Spirit',source:'Paula Scher', field:'Typography'},
    {quote:'Dare to be naïve.',source:'Buckminster Fuller', citation:'Synergetics', year: 1975, field:'Futurism'},
];

/////////////////////////////
// getRandomQuote FUNCTION //
/////////////////////////////

function getRandomQuote() {
    const randomNumber = Math.floor(Math.random() * quotes.length );
    return quotes[randomNumber];
}

/////////////////////////////
// getRandomColor FUNCTION //
/////////////////////////////

function getRandomColor() {
    let color=[];
    for(let i = 0; i < 3; i++ ) {
        const number = Math.floor(Math.random() * 256);
        color.push(number);
    }
    return color;
}

/////////////////////////
// printQuote FUNCTION //
/////////////////////////

function printQuote() {

    const chosenQuote = getRandomQuote();

// FILTERING UNEXISTING INFORMATIONS

    const informationChecker = function() {
        let existingAdditionalInfo='' ;
        if (chosenQuote.citation !== undefined) {
            existingAdditionalInfo += `<span class="citation">${chosenQuote.citation}</span>`;
        }
        if (chosenQuote.year !== undefined) {
            existingAdditionalInfo += `<span class="year">${chosenQuote.year}</span>`;
        }
        if (chosenQuote.field !== undefined) {
            existingAdditionalInfo += `<span class="field">, ${chosenQuote.field}</span>`;
        }

    return existingAdditionalInfo;
    };

// CREATING HTML

    document.getElementById('quote-box').innerHTML = `
        <p class="quote"> ${chosenQuote.quote} </p>
        <p class="source"> ${chosenQuote.source}${informationChecker()}
        </p>
    `;

// DRAWING RANDOM COLOR

    document.querySelector('body').style.backgroundColor= `rgb(${getRandomColor()})`;
}

// STARTING QUOTE SELECTION

printQuote();

// INTERVAL FOR PRINTING NEW QUOTE

setInterval(printQuote, 10000);

///////////////////////////
// BUTTON EVENT LISTENER //
///////////////////////////

document.getElementById('load-quote').addEventListener("click", printQuote, false);