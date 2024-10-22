// call a string
const car = "limosin";
console.log("# 2 ways call a string:");
console.log("1. with direct variable name + car :" + car);
console.log(
  "2. with direct variable name in culrybrace ${car} " +
    `${car} and one line closed with backtick`
);
console.log("# Length of string:");
console.log(`${car} string length: ${car.length}`);

console.log("# Substring: ");
console.log("substring: fromIndex, toIndexExclude");
console.log(car.substring(car.length / 2, car.length / 2 + 3));
/**
 * framework: next.js
 * rendering: csr
 * functional component, !class component
 *
 * react hooks
 * async await, howto call api use async await
 * react query
 * zustand
 * state management
 *
 * modified text
 * new page
 * routing
 *
 * todo-list
 *
 * clone
 * yarn install
 *
 * learn javascript es5-es6
 * setup react environment
 *
 * ssr: server side rendering, like blogging, seo priority
 * Menggunakan SSR
 * - Jika SEO prioritas kita, biasanya ketika kita membuat sebuah situs blog dan
 *   kita ingin setiap orang yang mencari di google membuka website kita, maka SSR adalah pilihan kita.
 * - Jika website mu membutuhkan initial loading yang cepat.
 * - Jika konten dari website kita tidak membutuhkan banyak interaksi pengguna.
 *
 * csr: client side rendering, web application, need a alot of interaction with user
 * Menggunakan CSR
 * - Ketika SEO bukan prioritas.
 * - Jika situs kita memiliki banyak interaksi
 * - Jika kita membuat sebuah aplikasi website
 *
 * 1. find react js simple app
 * 2. where is react hooks in simple app
 * 3. convert to next js
 * 4. convert to typescript
 * 5. add state management / zustand
 *
 */
