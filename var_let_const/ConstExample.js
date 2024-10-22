// untuk mengetahui cara kerja file js ini
// jalankan, $node ConstExample.js


// global scope
const a = 5; 

/*
    jadi klo const itu dia cakupannya berdasarkan scope
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
    
    // deklarasi const fungsi scope
    // cetak dalam fungsi scope dan ok
    const b = 6;
    console.log(b);
    // const tidak dapat di reassign dan error, TypeError: Assignment to constant variable.
    a = 100;
}

function helloVar() {
    // cetak const global scope di fungsi dan ok
    // tidak sampai kemari di line 34 sudah error
    console.log(a);

    // cetak const out fungsi scope dan gagal
    console.log(b);
}

hello();
helloVar();

