import { useState } from "react";
const initial = [
  { id: 1, name: "Pen", price: 10 },
  { id: 2, name: "Notebook", price: 60 },
  { id: 3, name: "Bag", price: 700 },
];
export default function App() {
  const [products, setProducts] = useState(initial);
  const [editId, setEditId] = useState(null);
  const [form, setForm] = useState({ name: "", price: "" });
  const select = (p) => { setEditId(p.id); setForm({ name: p.name, price: p.price }); };
  const update = (e) => {
    e.preventDefault();
    setProducts(products.map((p) => (p.id === editId ? { ...p, ...form } : p)));
    setEditId(null);
    setForm({ name: "", price: "" });
  };
  return (
    <div className="app">
      <h1>Update Product</h1>
      <div className="card">
        <ul>
          {products.map((p) => (
            <li key={p.id}>
              <span>{p.name} - Rs. {p.price}</span>
              <button onClick={() => select(p)}>Edit</button>
            </li>
          ))}
        </ul>
      </div>
      {editId && (
        <form className="card" onSubmit={update}>
          <h2>Edit Product</h2>
          <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
          <input type="number" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} required />
          <button type="submit">Update</button>
          <button type="button" className="alt" onClick={() => setEditId(null)}>Cancel</button>
        </form>
      )}
    </div>
  );
}
