function [] = aitken(f,g,x0,tolerance,nMax)
    x1 = g(x0);
    x2 = g(x1);
    x3 = g(x2);
    xi = x1 - ((x2-x1)^2)/(x3-2*x2+x1);
    fxi = f(xi);
    error = tolerance + 1;
    counter = 0;
    iterations = [counter,xi,fxi,error];
    while(fxi ~= 0 && error > tolerance && counter < nMax)
        x3Aux = x3;
        x2Aux = x2;
        x3 = g(x3);
        x2 = x3Aux;
        x1 = x2Aux;
        xiAux = xi;
        xi = x1 - ((x2-x1)^2)/(x3-2*x2+x1);
        fxi = f(xi);
        error = abs(xi-xiAux);
        counter = counter + 1;
        iterations = [iterations;[counter,xi,fxi,error]];
    end

    disp('   Counter             Xi                  Fxi                 Error')
    disp(iterations)

    if fxi == 0 
        disp(['The root has been found and it is: ', num2str(xi,12)])
    elseif error <= tolerance
        disp(['An approximation has been found and is: ', num2str(xi,12)])
    else 
        disp('The method fails with the maximum number of iterations given')
    end
end