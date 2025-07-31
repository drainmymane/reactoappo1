import { useRef, useState } from "react";
import './styles/App.css'
import ItemsList from "./components/ItemsList";
import ItemsForm from "./components/ItemsForm";
import MyModal from "./components/UI/modal/MyModal";
import AwesomeButton from "./components/UI/button/AwesomeButton";
import ItemsFilter from "./components/ItemsFilter";
import { useItems } from "./hooks/useItems";
import axios from 'axios';



function App() {
  function compare(a, b) {
    if (a > b) return 1;
    if (a === b) return 0;
    if (a < b) return -1;
  }

  let [items, setItems] = useState([
    { id: 1, title: 'Apple', amount: 20, },
    { id: 2, title: 'bi', amount: -1 },
    { id: 3, title: 'ZOD', amount:5 },
  ])

  let [modalVisbility, setModalVisibility]=useState(false);
  let [filter,setFilter]=useState({sort:'',query:''})
  let sortedAndSearchedItems = useItems(items, filter.sort, filter.query)

  const createItem = (newItem) => {
    setItems([...items, newItem]);
  }

  const removeItem = (someItem) => {
    setItems(items.filter(i => i.id !== someItem.id));
  }

  return (
    <div className="App">
      <AwesomeButton onClick={()=>setModalVisibility(true)}>
        Add New Item!!!
      </AwesomeButton>
      <MyModal visible={modalVisbility} setVisibility={setModalVisibility}>
        <ItemsForm create={createItem}></ItemsForm>
      </MyModal>
      <ItemsFilter filter={filter} setFilter={setFilter} />
      <ItemsList remove={removeItem} items={sortedAndSearchedItems} title={'My ANime List'}></ItemsList>
    </div>
  );
}

export default App
