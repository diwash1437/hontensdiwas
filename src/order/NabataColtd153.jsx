import { useState } from 'react';
import normalizedProducts from '../data/normalizedProducts';
import { Link } from 'react-router-dom';
import './nabata.css'

function NabataColtd153() {
  // const [search, setSearch] = useState("");
  const [nameSearch, setNameSearch]=useState('');

  // const filteredProducts = normalizedProducts.filter(product =>
  //   product.name.includes(search) ||
  //   product.romanji.toLowerCase().includes(search.toLowerCase())
  // );

  const filterProducts= normalizedProducts.filter(product=>
    product.name.includes(nameSearch) || 
  product.english.toLowerCase().includes(nameSearch.toLowerCase())
  )
//   const filterProducts = normalizedProducts.filter(product =>
//   product.name.includes(nameSearch) ||
//   (product.english && product.english.toLowerCase().includes(nameSearch.toLowerCase()))
// );

  return (
    <>
      <title>Nabata Co ltd (株)名畑</title>

      <Link to="/">Home</Link>

      <br /><br />

      {/* 🔍 Search Input */}
      <input
        type="text"
        placeholder="Search name or romaji..."
        // value={search}
        value={nameSearch}
        // onChange={(e) => setSearch(e.target.value)}
        onChange={(e)=> setNameSearch(e.target.value)}
      />

      <br /><br />

      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name (JP)</th>
            <th>Romaji</th>
            <th>English</th>
            <th>Image</th>
          </tr>
        </thead>

        <tbody>
          {filterProducts.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.romanji}</td>
              <td>{product.english}</td>
              <td className='product-image'>{product.image ? <img src={product.image} alt={product.name} width="50" /> : "No Image"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default NabataColtd153;
