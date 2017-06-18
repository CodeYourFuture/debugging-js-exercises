const y = 3;

function outer( value ){
  const increased = value + 2;

  function multiply(z){
    const output = z * y;

    return output;
  }

  return multiply(increased);
}

const result = outer( 5 );

console.log( result );
