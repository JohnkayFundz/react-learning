import Navbar from "../components/Navbar";
import ProductList from "../components/ProductList";
import Cart from "../components/Cart";

function Home() {
  return (
    <>
      <Navbar />

      <div style={{ display: "flex", gap: "30px", padding: "20px" }}>
        <div style={{ flex: 2 }}>
          <ProductList />
        </div>

        <div style={{ flex: 1 }}>
          <Cart />
        </div>
      </div>
    </>
  );
}

export default Home;