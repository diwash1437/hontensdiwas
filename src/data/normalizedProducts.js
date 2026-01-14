// hiragana and katakana change
// normalizedProducts.js
import { toRomaji } from 'wanakana';
import { foodProducts } from './nabatacoltd';

const normalizedProducts = foodProducts.map((product, index) => ({
  id: `foodProduct-${index + 1}`,
  name: product.name,
//   product.romanji && product.romanji.trim() !== ""
//   condition ? A : B
//   IF condition is true → use A
// ELSE → use B
  romanji:
    product.romanji && product.romanji.trim() !== ""
      ? product.romanji
      : toRomaji(product.name),
  // english: product.english && "" , 
//   Your current normalization:
// english: product.english && "",


// What does this do?

// In JavaScript, && works like this:

// condition && value


// If condition is truthy → return value

// If condition is falsy → return condition (itself)

// So in your case:

// product.english && ""


// If product.english exists → returns "" (empty string) ✅

// If product.english does NOT exist (undefined) → returns undefined ❌

// Why it still crashes

// Later in your filter:

// product.english.toLowerCase().includes(nameSearch.toLowerCase())


// For products without english, product.english is still undefined

// So calling .toLowerCase() on undefined crashes.

// Even though you tried normalization, product.english && "" does NOT guarantee a string — it can still be undefined.

////////////////


// The correct way to normalize

// You want every product to have english, even if empty:

// english: product.english ? product.english : ""  ********************


// If product.english exists → use it

// If not → use ""

// Now every product has a string, and .toLowerCase() will never crash.

english: product.english ? product.english : "" ,


// Key takeaway

// && "" does not guarantee a string.

// ? : ternary operator does guarantee a string.

// After this fix, your search:

// product.english.toLowerCase().includes(nameSearch.toLowerCase())


// Will never crash, even if some products didn’t have english originally.




  price: product.price ?? 0,
  image: product.image || ""
}));

export default normalizedProducts;


// Key takeaway

// && does NOT keep the original value

// It only returns the second value if the first is truthy

// If the first value is falsy (undefined, "", null, 0) → returns the first value

// This is why in your code product.english && "" destroyed the real English name


// normalizedProducts.js


