import "./App.css";
import { useState } from "react";
import { useFetch } from "./hooks/useFetch";

const url = "http://localhost:3000/products";

function App() {
  // const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const { data: items, httpConfig, loading, error } = useFetch(url);

  // setProducts(data);

  //primeira abordagem de requisição sem customHooks
  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await fetch(url);
  //     const data = await res.json();

  //     setProducts(data);
  //   }
  //   fetchData();
  // }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (name && price) {
      const product = {
        name,
        price,
      };
      // const res = await fetch(url, {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(product),
      // });

      // const addedProduct = await res.json();

      // setProducts((previousProducts) => [...previousProducts, addedProduct]);

      httpConfig(product, "POST");
      setName("");
      setPrice("");
    }
  };

  const handleDelete = (id) => {
    console.log(id);
    httpConfig(id, "DELETE");
  };

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      {loading && <p>Carregando Dados...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && (
        <ul>
          {items &&
            items.map((product) => (
              <li key={product.id}>
                {product.name} - R$: {product.price}{" "}
                <button onClick={() => handleDelete(product.id)}>
                  Deletar
                </button>
              </li>
            ))}
        </ul>
      )}

      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              name="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </label>
          <label>
            Preço:
            <input
              type="text"
              name="price"
              value={price}
              onChange={(event) => setPrice(event.target.value)}
            />
          </label>
          {loading ? (
            <input type="submit" disabled value="Aguarde" />
          ) : (
            <input type="submit" value="Criar" />
          )}
        </form>
      </div>
    </div>
  );
}

export default App;
