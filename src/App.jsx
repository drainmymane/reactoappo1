import { useEffect, useRef, useState } from "react";
import './styles/App.css'
import ItemsList from "./components/ItemsList";
import ItemsForm from "./components/ItemsForm";
import MyModal from "./components/UI/modal/MyModal";
import AwesomeButton from "./components/UI/button/AwesomeButton";
import ItemsFilter from "./components/ItemsFilter";
import { useItems } from "./hooks/useItems";
import axios from 'axios';
//import ItemsService from "../API/ItemsService";
import generateRandomItems from "../API/api";
import { motion, AnimatePresence } from "framer-motion";
import { UseFetch } from "./hooks/useFetch";



function App() {
  function compare(a, b) {
    if (a > b) return 1;
    if (a === b) return 0;
    if (a < b) return -1;
  }

  const [items, setItems] = useState([
    { id: 1, title: 'Apple', amount: 20, },
    { id: 2, title: 'bi', amount: -1 },
    { id: 3, title: 'ZOD', amount:5 },
  ])

  const [modalVisbility, setModalVisibility]=useState(false)
  const [filter,setFilter]=useState({sort:'',query:''})
  const [fetchItems,isItemsLoading, ItemsError] = UseFetch(async ()=>{
      setItems(generateRandomItems(100)); //const items = await ItemsService.getAll();
  })
  let sortedAndSearchedItems = useItems(items, filter.sort, filter.query)

  useEffect(()=>{
    fetchItems()
  },[])

  const createItem = (newItem) => {
    setItems([...items, newItem]);
  }

  const removeItem = (someItem) => {
    setItems(items.filter(i => i.id !== someItem.id));
  }

  return (
    <div className="App">
      <AwesomeButton onClick={()=>{console.log(items)}}></AwesomeButton>
      <AwesomeButton onClick={()=>setModalVisibility(true)}>
        Add New Item!!!
      </AwesomeButton>
      <MyModal visible={modalVisbility} setVisibility={setModalVisibility}>
        <ItemsForm create={createItem}></ItemsForm>
      </MyModal>
      <ItemsFilter filter={filter} setFilter={setFilter} />
      {
        ItemsError &&
        <h1>we have an exscuse: ${ItemsError}</h1>
      }
      {
        isItemsLoading 
          ? <motion.div className="rotatingSqr" animate={{ rotate: 380 }} transition={{ duration: 1, ease: "easeInOut", repeat: Infinity,repeatType: "reverse" }}>Loading</motion.div>
          : <ItemsList remove={removeItem} items={sortedAndSearchedItems} title={'My ANime List'}></ItemsList>
      }

    </div>
  );
}

export default App
