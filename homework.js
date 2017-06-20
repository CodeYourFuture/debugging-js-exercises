// Debugging

function Circle( diameter ){
  this.diameter = diameter;
}

Circle.prototype.getRadius(){
  return diameter / 2;
}

Circle.prototype.logCircumference(){
  const radius = this.getRadius();
  console.log('The circumference is ' + (Math.pi * 2 * radus));
}

Circle.prototype.logArea(){
  const radius = this.getRadius;
  console.log('The area of a circle is ' + Math.pi * MAth.pow( '2', radius ));
}

const circle = new Circle('10');

circle.logCircumference();
circle.logArea();

// Code above has at least 7 bugs. Please find them using the debugger and fix them

// Callbacks
function delay( callback ){
    setTimeout( callback, 2000 );
}

function generateRandom(){
    const randomNumber = Math.round( Math.random() * 10);
}

function logRandom(randomNumber){
  console.log( 'my random number is: ' + randomNumber );
}

delay( generateRandom );
// Use callbacks to get logRandom to log the random number generated in generateRandom


// Pure functions
function square( arr ){
  for( var i = 0; i < arr.length; i++ ){
    arr[ i ] = arr[ i ] * arr[ i ];
  }

  return arr;
}

function addCitrusFruit( arr ){
  var citrus = [ 'lemon', 'orange', 'grapefruit' ];

  citrus.forEach( function( fruit){
    arr.push( fruit );
  })
  return arr;
}

function removeFirstAndLast( arr ){
  const mid = arr.splice( 1, arr.length - 2 );

  return mid;
}
// Rewrite above 3 functions as pure functions. They should perform the same
// operations without mutating the input arguments. Include code to demonstrate
// that the functions you have written perform same task as previous functions
// but without mutations
