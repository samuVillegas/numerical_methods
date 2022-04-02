function [] = steffensen(f,g,x0,tolerance,nMax)
    x1 = g(x0);
    x2 = g(x1);
    xi = x0 - ((x1-x0)^2)/(x2-2*x1+x0);
    fxi = f(xi);
    error = tolerance + 1;
    counter = 0;
    iterations = [counter,xi,fxi,error];

    while fxi ~= 0 && error > tolerance && counter < nMax
        x0 = xi;
        x1 = g(x0);
        x2 = g(x1);
        xiAux = xi;
        xi = x0 - ((x1-x0)^2)/(x2-2*x1+x0);
        fxi = f(xi);
        error = abs(xi-xiAux);
        counter = counter + 1;
        iterations = [iterations;[counter,xi,fxi,error]];
    end

    disp('   Counter             Xi                  Fxi                 Error')
    disp(iterations)

    if fxi == 0 
        disp(['Se ha encontrado la raiz y es: ', num2str(xi,12)])
    elseif error <= tolerance
        disp(['Se ha encontrado una aproximación y es: ', num2str(xi,12)])
    else 
        disp('The method fails with the maximum number of iterations given')
    end
end