import { useEffect, useRef, useState } from "react";
import ItemsFilter from "../components/ItemsFilter";
import ItemsForm from "../components/ItemsForm";
import ItemsList from "../components/ItemsList";
import AwesomeButton from "../components/UI/button/AwesomeButton";
import MyModal from "../components/UI/modal/MyModal";
import { useItems } from "../hooks/useItems";
import '../styles/App.css';
//import ItemsService from "../API/ItemsService";
import Pagination from "../components/UI/Pagination/Pagination";
import MySelect from "../components/UI/select/MySelect";
import { useFetch } from "../hooks/useFetch";
import pageCount from "../utils/pageCount";
import ApiService from "../API/api";
import RotatingSquare from "../components/rotatingSquare";
import { useObserver } from "../hooks/useObserver";

function Main() {
  let [items, setItems] = useState([])
  let [totalItems, setTotalItems] = useState(10); //всего страниц
  const [limit, setLimit] = useState(10);//сколько айтемов на страница
  const [page, setPage] = useState(1); //текущая страница
  const [modalVisbility, setModalVisibility] = useState(false)
  const [filter, setFilter] = useState({ sort: '', query: '' })
  const lastElement = useRef();
  const [fetchItems, isItemsLoading, ItemsError] = useFetch(async () => {
    const newItems = await ApiService.labubu;
    setItems([...items, ...newItems]); //const items = await ItemsService.getAll();
  })
  let sortedAndSearchedItems = useItems(items, filter.sort, filter.query)
  const [isFilterActive, setIsFilterActive] = useState(false);

  useEffect(() => {
    fetchItems()
  }, [page])

  useObserver(lastElement, page < 10 && !isFilterActive, isItemsLoading, ()=>{
    setPage(prev => prev + 1);
  })

  useEffect(() => {
    setTotalItems(ApiService.labubu.length)
  }, [totalItems, items,page])

  
  useEffect(() => {
    const filterIsActive = !!filter.query || !!filter.sort;
    setIsFilterActive(filterIsActive);
    if (filterIsActive) {
      setPage(1);
    }
  }, [filter.query, filter.sort]);


  const createItem = (newItem) => {
    setItems([...items, newItem]);
  }

  const removeItem = (someItem) => {
    setItems(items.filter(i => i.id !== someItem.id));
  }

  const switchPage = (index) => {
    setPage(index);
  }

  return (
    <div className="App">
      <AwesomeButton onClick={() => { console.log(totalItems); }}></AwesomeButton>
      <AwesomeButton onClick={() => setModalVisibility(true)}>
        Add New Item!!!
      </AwesomeButton>
      <MyModal visible={modalVisbility} setVisibility={setModalVisibility}>
        <ItemsForm create={createItem}></ItemsForm>
      </MyModal>
      <ItemsFilter filter={filter} setFilter={setFilter} />
      <MySelect options={[{ value: 5, name: '5' }, { value: 10, name: '10' }, { value: 25, name: '25' }]} defaultValue={`SetLimit d_${limit}`} resetPage={setPage} onChange={setLimit}></MySelect>
      {
        ItemsError &&
        <h1>we have an exscuse: ${ItemsError}</h1>
      }
      <ItemsList remove={removeItem} limit={limit} page={page} items={sortedAndSearchedItems} title={'My ANime List'}></ItemsList>
      <div ref={lastElement} style={{background: 'red', height: 20, width:200, margin: 100}}></div>
      {
        isItemsLoading &&
        <RotatingSquare></RotatingSquare>
      }
      {!isFilterActive &&
        <Pagination switchpage={switchPage} totalPages={pageCount(totalItems, limit)} limit={limit} page={page} />
      }
    </div>
  );
}

export default Main