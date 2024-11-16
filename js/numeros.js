function suma(){

let num1=0,num2=0,sum
num1=document.getElementById("num1").value
num2=document.getElementById("num2").value
num1= parseInt(num1)
num2= parseInt(num2)
sum = num1 + num2
document.getElementById("resp").innerHTML = sum

}

function resta(){

    let num1=0,num2=0,sum
    num1=document.getElementById("num1").value
    num2=document.getElementById("num2").value
    num1= parseInt(num1)
    num2= parseInt(num2)
    sum = num1 - num2
    document.getElementById("resp").innerHTML = sum
    
    }


    function multiplicación(){

        let num1=0,num2=0,sum
        num1=document.getElementById("num1").value
        num2=document.getElementById("num2").value
        num1= parseInt(num1)
        num2= parseInt(num2)
        sum = num1 * num2
        document.getElementById("resp").innerHTML = sum
        
        }

        function división(){

            let num1=0,num2=0,sum
            num1=document.getElementById("num1").value
            num2=document.getElementById("num2").value
            num1= parseInt(num1)
            num2= parseInt(num2)
            sum = num1 / num2
            document.getElementById("resp").innerHTML = sum
            
            }

        
            function mod(){

                let num1=0,num2=0,sum
                num1=document.getElementById("num1").value
                num2=document.getElementById("num2").value
                num1= parseInt(num1)
                num2= parseInt(num2)
                sum = num1 % num2
                document.getElementById("resp").innerHTML = sum
                
                }   

                   function div(){

                let num1=0,num2=0,sum
                num1=document.getElementById("num1").value
                num2=document.getElementById("num2").value
                num1= parseInt(num1)
                num2= parseInt(num2)
                sum = Math.trunc (num1 / num2)
                document.getElementById("resp").innerHTML = sum
                
                }   

                function Ac(){

                    let num1=0,num2=0,resp
                    num1=document.getElementById("num1").value
                    num2=document.getElementById("num2").value
                    document.getElementById("resp")
                    resp = document.getElementById("resp")
                    resp.innerHTML = ""
                    
                    }   

                function tablasumar() {
                    let tabla=0,desde=0,hasta=0, resp = 0, resul = 0
                    tabla=document.getElementById("tabla").value
                    desde=document.getElementById("desde").value
                    hasta=document.getElementById("hasta").value
                    resp = document.getElementById("resp")
                    tabla = parseInt(tabla)
                    desde = parseInt(desde)
                    hasta = parseInt(hasta)
                    resp.innerHTML = ""
                    while (desde <= hasta ) {
                      resul = desde + tabla
                      resp.innerHTML+= `${desde}+${tabla}=${resul}\n`
                      desde = desde + 1
                    }
                   
                }

                
                function tablamultiplicacion() {
                    let tabla=0,desde=0,hasta=0, resp = 0, resul = 0
                    tabla=document.getElementById("tabla").value
                    desde=document.getElementById("desde").value
                    hasta=document.getElementById("hasta").value
                    resp = document.getElementById("resp")
                    tabla = parseInt(tabla)
                    desde = parseInt(desde)
                    hasta = parseInt(hasta)
                    resp.innerHTML = ""
                    while (desde <= hasta ) {
                      resul = desde * tabla
                      resp.innerHTML+= `${desde}*${tabla}=${resul}\n`
                      desde = desde + 1
                    }
                   
                }
                 
                function multiplo() {
 
                    let num1 = 0, i = 0; resultado = ''
                    num1=document.getElementById("num1").value
                    resp=document.getElementById("resp")
                    num1=parseInt(num1);
                    if (isNaN(num1) || num1 <= 0) {
                        resp.innerHTML = "Por favor, ingresa un número válido mayor que 0.";
                        return;
                        
                    }
                    for (let i = num1; i <= 100; i += num1) {
                        resultado += i + ' '; 
                    }
                    resp.innerHTML = `Los múltiplos de ${num1} hasta 100 son: ${resultado}`;
                }
                
                function diasemana() {
                let ds = ""
                ds = document.getElementById("num1")
                resp = document.getElementById("resp")
                if (ds = "lunes") {
                    resp.innerHTML = "El día ingresado es el primer día de la semana"
                }
                

                }

               

               

                

                
