function runCodeWithFPS () {      
    requestAnimationFrame(runCodeWithFPS);
    
    now = Date.now();
    delta = now - then;
    
    if (delta > interval) {
        then  =  now  -  ( delta  %  interval ) ;

        runCode();
    }
}

runCodeWithFPS();