import React ,{useState } from 'react'
import axios from 'axios';
import { useParams,useNavigate,Link } from 'react-router-dom';
import Spinner from '../components/Spinner';

const DeleteBook = () => {
  const[loading,setLoading] = useState(false);
  const navigate = useNavigate();
  const {id} = useParams();
  const handleDeleteBook =()=>{
    setLoading(true);
    axios.delete(`http://localhost:5555/books/${id}`).then((response)=>{
      setLoading(false);
      navigate('/');
    })
    .catch((error)=>{
      setLoading(false);
      console.log(error);
      alert("An error occurred, check the console");
    });
  };
  return (
   <div className='delete-book'>
    {loading ? (<Spinner/>):''}
      <div className='confirmation-container'>
        <h1 className='confirmation-msg'>Do you want to delete?</h1>
        <div className='button-container'>
        <button className="delete-btn btn" onClick={handleDeleteBook}>Delete</button>
        <Link to="/"><button className='cancel-btn btn'>Cancel</button></Link>
        </div>
      </div>
   </div>
  )
}

export default DeleteBook