var nr1 = Number(prompt("Introduceti primul numar:"));
var nr2 = Number(prompt("Introduceti al doilea numar:"));
var nr3 = Number(prompt("Introduceti al treilea numar:"));

/*console.log("Alege 1 pentru adunare");
console.log("Alege 2 pentru a afla cel mai mare numar");
console.log("Alege 3 pentru adunarea primului numar cu al treilea numar");
console.log("Alege 4 pentru afisarea unui array cu cele trei numere");*/

var alege = Number(prompt("Alege 1 pentru adunare; Alege 2 pentru a afla cel mai mare numar; Alege 3 pentru adunarea primului numar cu al treilea numar; Alege 4 pentru afisarea unui array cu cele trei numere."));

switch (alege){
    case 1:{
        let suma=0;
        suma = nr1 + nr2 + nr3;
        console.log(suma);
        break;
    }

    case 2:{
        let biggest = 0;
        let array1 = [];
        array1.push(nr1,nr2,nr3);
        for(let i=0; i<array1.length; i++){
            if(array1[i]>biggest){
                biggest = array1[i];
            }
        }
        console.log(biggest);
        break;
    }

    case 3:{
        let adunare=0;
        adunare = nr1 + nr3;
        console.log(adunare);
        break;
    }

    case 4:{
        let array =[];
        array.push(nr1,nr2,nr3);
        console.log(array);
        break;
    }
}

