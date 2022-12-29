import { useState } from "react";
import { CreateProduct } from "./Components/CreateProduct";
import { ErrorMessage } from "./Components/ErrorMessage";
import { Loader } from "./Components/Loader";
import { Modal } from "./Components/Modal";
import { Product } from "./Components/Product";
import { useProducts } from "./Hooks/products";
import { IProduct } from "./models";

function App() {
  // Bring Hook data with next fields
  const { loading, error, items, addItem } = useProducts();
  const [modal, setModal] = useState(false)

  const createHandler = (item: IProduct) => {
    setModal(false)
    addItem(item)
  }

  // Iteration of items with map method
  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {/* If loading is true then take */}
      {loading && <Loader />}
      {error && <ErrorMessage error={error} />}
      {items.map((item) => (
        <Product item={item} key={item.id} />
      ))}
      
      {/* Form and create product are different components 
      to make modal universal component, onClick works onClose method */}
      {modal && <Modal title="Create new item" onClose={() => setModal(false)}>
        <CreateProduct onCreate={createHandler} />
      </Modal>}

      <button 
      onClick={() => setModal(true)}
      className="absolute bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2">+</button>
    </div>
  );
}

export default App;
