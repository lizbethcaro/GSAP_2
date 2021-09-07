


gsap.to( "#mover1", 3, { left: 100, onComplete: al_terminar, onCompleteParams: [ 1 ] } );
gsap.to( "#mover2", 4, { top: 100, onComplete: al_terminar, onCompleteParams: [ 2 ] } );
gsap.to( "#mover3", 5, { rigth: 100, onComplete: al_terminar, onCompleteParams: [ 3 ] } );


function al_terminar( fulano )
{
    
    gsap.to( "#mover" + fulano, 2, { opacity: 0.2, onComplete: deshacer, onCompleteParams: [ fulano ]} );  //este llama a la otra funcion
    console.log( "Termino." + fulano );
}

function deshacer( fulano2 )
{
    //para concatenas 
    gsap.to( "#mover" + fulano2, 2, { opacity: 2  } );  //este llama a la otra funcion
    console.log( "finalizo........" + fulano2 );
}





