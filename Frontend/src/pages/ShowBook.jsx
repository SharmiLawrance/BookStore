import React ,{useState, useEffect }from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';
import BookDetails from '../components/BookDetails';

const ShowBook = () => {
  const[books , setBooks] = useState([]);
  const[loading , setLoading] = useState(false);
  const {id} = useParams();
  useEffect(()=>{
    setLoading(true);
    axios
    .get(`http://localhost:5555/books/${id}`)
    .then((response)=>{
      setBooks(response.data);
      setLoading(false);
    })
    .catch((error)=>{
      console.log(error.message);
      setLoading(false);
    });
  },[]);
  return (
    <div>
      {loading ? (<Spinner />): (<BookDetails key ={books._id} book={books}/>)}
    </div>
  )
}

export default ShowBook