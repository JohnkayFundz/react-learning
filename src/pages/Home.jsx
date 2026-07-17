import Navbar from "../components/Navbar";
import ProductList from "../components/ProductList";
import Cart from "../components/Cart";

function Home() {
  return (
    <>
      <Navbar />

      <main className="container home-layout">
        <ProductList />
        <Cart />
      </main>
    </>
  );
}

export default Home;