const text = "nama saya adalah budi, saya bekerja sebagai frontend engineer";

const array = [1000, 20, 15, 18, 1, 9, 35];

const isObject = {
  nama_mobil: "ferrari",
  kecepatan: "6000 cc",
  harga: 20000000000,
  tipe: "tidak diketahui",
};
const arrayOf = [
  {
    nama_mobil: "lamborgini",
    kecepatan: "8000 cc",
    harga: 70000000000,
    tipe: "aventador",
  },
];

const tex = (tet, a) => {
  const tot = tet.replaceAll(text, a);
  return tot;
};
console.log(
  tex(text, "nama saya adalah budi saya bekerja sebagai javascript engineer")
);
console.log(Array(100).join("-"));
const sub = (tex, a) => {
  const sub = text.substring(a, text.length);
  return sub;
};

console.log(sub(text, 23));
console.log(Array(100).join("-"));
const up = (tex) => {
  const up = text.toLocaleUpperCase();
  return up;
};
console.log(up(text));
console.log(Array(100).join("-"));
function sort(ar, as) {
  if (ar === "Ascending") {
    as.sort((a, b) => a - b);
  }
  if (ar === "Descanding") {
    as.sort((a, b) => b - a);
  }

  return as;
}

console.log("Descanding:", sort("Ascending", array));
console.log("Ascanding:", sort("Descanding", array));
console.log(Array(100).join("-"));
const idx = (s) => {
  const idx = text.indexOf(s);
  return idx;
};
console.log(idx("frontend engineer"));
console.log(Array(100).join("-"));
const idx_1 = (c) => {
  const idx_1 = text.includes(c);
  return idx_1;
};
console.log(idx_1("frontend engineer"));
console.log(Array(100).join("-"));
const idx_2 = (a) => {
  const idx_2 = array.indexOf(a);
  return idx_2;
};
console.log(18);
console.log(Array(100).join("-"));
//7. gunakan metode includes() untuk pencarian nama pada input variable array diatas:
// output : temukan nilai 2000 = false
const idx_3 = (a) => {
  const idx_3 = array.indexOf(a);
  return idx_3;
};
console.log(2000);
console.log(Array(100).join("-"));
//8. gunakan metode filter() untuk pencarian nama pada input variable array diatas:
// output : hapus nilai selain 1000 = [35, 20, 18, 15, 9, 1]
const idx_4 = (index, a) => {
  const idx_4 = array.filter((index) => index < a);
  return idx_4;
};
console.log(array, 1000);
console.log(Array(100).join("-"));
//9. gunakan metode filter() untuk pencarian nama pada input variable array diatas:
// output : temukan nilai sama dengan 1000 = [1000]

const idx_5 = (index, a) => {
  const idx_5 = array.filter((index) => index === a);
  return idx_5;
};
console.log(array, 1000);
console.log(Array(100).join("-"));
//10. gabungkan variable isObject kedalam variable arrayOf dengan menggunakan method push atau spread operator
/**
    output:
     const arrayOf = [{
        nama_mobil: "lamborgini",
        kecepatan: "8000 cc",
        harga: 70000000000,
        tipe: "aventador"
    },{
        nama_mobil: "ferrari",
        kecepatan: "6000 cc",
        harga: 20000000000,
        tipe: "tidak diketahui"
    }]
 * */
const pushArray = (object) => {
  arrayOf.push(object);
  return arrayOf;
};
const arrayBaru = pushArray({
  nama_mobil: "ferrari",
  kecepatan: "6000 cc",
  harga: 20000000000,
  tipe: "tidak diketahui",
});

console.log(arrayBaru);
//11. Buat metode Function() dari sebuah  semua methode algorithma yg telah di kerjakan lalu return setiap kondisinya dan berikan nama function yg sesuai denga kebutuhan
/**
    output : 
        function(){
            // isilah metode tersebut kedalam function()///
            // berikan return valuenya
        } 
* */
