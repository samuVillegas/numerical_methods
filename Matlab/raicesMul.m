function [x] = raicesMul(f,f1,f2,x0,tolerance,nMax) 
    xi = x0;
    fxi = f(xi);
    if fxi == 0
        disp(['Se ha encontrado la raiz y es: ', num2str(xi,12)])
    else 
        counter = 0;
        f1xi = f1(xi);
        f2xi = f2(xi);
        error = tolerance + 1;
        det = (f1xi^2)-(fxi*f2xi);
        iterations = [counter,xi,fxi,error];
        while(fxi ~= 0 && error > tolerance && counter < nMax && det~=0)
            xiaux = xi;
            xi = xi - ((fxi*f1xi)/((f1xi^2)-(fxi*f2xi)));
            fxi = f(xi);
            f1xi = f1(xi);
            f2xi = f2(xi);
            error = abs(xi-xiaux);
            det = (f1xi^2)-(fxi*f2xi);
            counter = counter +1;
            iterations = [iterations;[counter,xi,fxi,error]];
        end

        disp('   Counter             Xi                  Fxi                 Error')
        disp(iterations)

        if fxi == 0 
            disp(['The root has been found and it is: ', num2str(xi,12)])
        elseif error <= tolerance
            disp(['An approximation has been found and is: ', num2str(xi,12)])
        elseif det == 0
            disp('Error during method execution')
        else 
            disp('The method fails with the maximum number of iterations given')
        end
        
    end
    x = xi;
end 