
// global scope
var a = 5; 

/*
    jadi klo var itu dia cakupannya berdasarkan scope
    yaitu 
    - global scope
    - function scope
*/

function hello() {
    // alert('test');
    // alert akan error
    // ReferenceError: alert is not defined
    // karena alert adalah browser window property
    // tidak ada di nodejs yang mana adalah server side

    // jadi testna pakai console.log()
    // ok ini ada di node server side dan didukung
    console.log('test');
    
    // cetak global scope di fungsi scope dan ok    
    console.log(a);
    
    // deklarasi var fungsi scope
    // cetak dalam fungsi scope dan ok
    var b = 6;
    console.log(b);
    // var dapat di reassign
    a = 100;
}

function helloVar() {
    // cetak var global scope di fungsi dan ok
    console.log(a);

    // cetak var out fungsi scope dan gagal
    console.log(b);
}

hello();
helloVar();

