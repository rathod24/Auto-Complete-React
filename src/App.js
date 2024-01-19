
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const fruits=["Apple","Mango","Litchy","Orange","Avacado","Banana","Mulbery"]
  const [search,setSearch]=useState("");
  const [filterSearch,setFilterSearch]=useState(fruits);
  useEffect(()=>{
      setFilterSearch(fruits.filter((item)=>{
      return item.toLowerCase().includes(search.toLowerCase())
    }))
      
    
  },[search])
  
  return (
    <main>
      <h3>Search Item</h3>
      <input type='text' onChange={(e)=>setSearch(e.target.value)} />
      <ul>
     {
      filterSearch.map((item,index)=>{
        return <li key={index}>{item}</li>
      })
     }
      </ul>
    </main>
  );
}

export default App;
