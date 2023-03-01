
function Ocultar1() {
    document.getElementById("caja1").style.display = "none";
}
function Mostrar1(){
    document.getElementById("caja1").style.display = "block";
}

function Mostrar_Ocultar1() {
    var caja1 = document.getElementById("caja1");

    if (caja1.style.display == "none") {
        Mostrar1();
        document.getElementById("boton1").value = "Ocultar";
    }

    else {
        Ocultar1();
        document.getElementById("boton1").value = "Mostrar";
    }     
    }

//CAJA2//

    function Ocultar2() {
        document.getElementById("caja2").style.display = "none";
    }
    function Mostrar2(){
        document.getElementById("caja2").style.display = "block";
    }
    
    function Mostrar_Ocultar2() {
        var caja2 = document.getElementById("caja2");
    
        if (caja2.style.display == "none") {
            Mostrar2();
            document.getElementById("boton2").value = "Ocultar";
        }
    
        else {
            Ocultar2();
            document.getElementById("boton2").value = "Mostrar";
        }
            
        }


//CAJA3//


function Ocultar3() {
    document.getElementById("caja3").style.display = "none";
}
function Mostrar3(){
    document.getElementById("caja3").style.display = "block";
}

function Mostrar_Ocultar3() {
    var caja3 = document.getElementById("caja3");

    if (caja3.style.display == "none") {
        Mostrar3();
        document.getElementById("boton3").value = "Ocultar";
    }

    else {
        Ocultar3();
        document.getElementById("boton3").value = "Mostrar";
    }
        
    }

//CAJA4//

function Ocultar4() {
    document.getElementById("caja4").style.display = "none";
}
function Mostrar4(){
    document.getElementById("caja4").style.display = "block";
}

function Mostrar_Ocultar4() {
    var caja4 = document.getElementById("caja4");

    if (caja4.style.display == "none") {
        Mostrar4();
        document.getElementById("boton4").value = "Ocultar";
    }

    else {
        Ocultar4();
        document.getElementById("boton4").value = "Mostrar";
    }
        
    }

