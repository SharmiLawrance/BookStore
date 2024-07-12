import React, {useState, useEffect} from 'react'
import Header from '../components/Header'
import Spinner from '../components/Spinner'
import { Link } from 'react-router-dom'
import axios from 'axios'
import BooksCard from '../components/BooksCard'
import { IoAddCircleSharp } from "react-icons/io5";


const Home = () => {
  const[books,setBooks] = useState([]);
  const[loading, setLoading] = useState(false);
  useEffect(()=>{
    setLoading(true);
    axios
    .get("http://localhost:5555/books")
    .then((response) => {
      setBooks(response.data.data);
      setLoading(false);
    })
    .catch((error) => { 
      console.log(error);
      setLoading(false);
    });
  },[]);
    
  
  return (
    <div>
      {!loading ? (<div><BooksCard books = {books}/>  <Link to="/books/create"><IoAddCircleSharp className='add-book-btn'/></Link></div>) : (<Spinner />)}
    
      
    </div>
  )
}

export default Home