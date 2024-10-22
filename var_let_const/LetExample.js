// untuk mengetahui cara kerja file js ini
// jalankan, $node LetExample.js


// global scope
let a = 5; 

/*
    jadi klo let itu dia cakupannya berdasarkan scope
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
    
    // deklarasi let fungsi scope
    // cetak dalam fungsi scope dan ok
    let b = 6;
    console.log(b);
    // let dapat di reassign
    a = 100;
}

function helloVar() {
    // cetak let global scope di fungsi dan ok
    console.log(a);

    // cetak let out fungsi scope dan gagal
    console.log(b);
}

hello();
helloVar();

