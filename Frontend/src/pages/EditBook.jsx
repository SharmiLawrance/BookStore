import React, {useState, useEffect}from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Spinner from '../components/Spinner';

const EditBook = () => {
  const[title,setTitle] = useState('');
  const[author, setAuthor] = useState('');
  const[publishedYear,setPublishedYear] = useState('');
  const[description, setDescription] = useState('');
  const[genre, setGenre] = useState('');
  const[imageSource,setImagesource] = useState();
  const[loading,setLoading] = useState(true);
  const navigate = useNavigate();
  const {id} = useParams();
  useEffect(()=>{
    const fetchBook =async ()=>{
   try{
    const response = await axios.get(`http://localhost:5555/books/${id}`);
      setTitle(response.data.title);
      setAuthor(response.data.author);
      setPublishedYear(response.data.publishedYear);
      setDescription(response.data.description);
      setGenre(response.data.genre);
      setImagesource(response.data.imageSource);
      setLoading(false);
    }
    catch(error){
      console.log(error);
      setLoading(false);
    }
  };
  fetchBook();
    },[id]);

  const handleSaveBook=async()=>{
    const data={
      imageSource,
      title,
      author,
      publishedYear,
      description,
      genre
    };
    try{
    await
    axios.put(`http://localhost:5555/books/${id}`,data)
      navigate('/');
    }
    catch(error){
      setLoading(false);
      console.log(error);
    }
  };
  return (
    <div className='create-book-container'>
      <h1 className='create-book-heading'>Edit Details</h1>
      {loading ? (<Spinner/>) : ''}
      <div className='input-form-container'>
        <div className='input-book-name'>
          <label htmlFor="title">Book Name</label>
          <input type="text" id='title' value={title} onChange={(e)=>{setTitle(e.target.value)}} required/>
        </div>
        <div className='input-author-name'>
          <label htmlFor="author">Author Name</label>
          <input type="text" id='author' value={author} onChange={(e)=>{setAuthor(e.target.value)}}required/>
        </div>
        <div className='input-published-year'>
          <label htmlFor="publishedYear">Published Year</label>
          <input type="number" id='publishedYear' value={publishedYear} onChange={(e)=>{setPublishedYear(e.target.value)}} required />
        </div>
        <div className='input-book-description'>
        <label htmlFor="book-description">Book Description</label>
        <input type="textarea" id='book-description' value={description} onChange={(e)=>{setDescription(e.target.value)}}required />
        </div>
        <div className='input-genre'>
        <label htmlFor="genre">Genre</label>
        <input type="text" id='genre' value={genre} onChange={(e)=>{setGenre(e.target.value)}} required/>
        </div>
        <div className='input-img-url'>
        <label htmlFor="img-url">Image URL</label>
        <input type="text" id='img-url' value={imageSource} onChange={(e)=>{setImagesource(e.target.value)}} required/>
        </div>
        <button className='save-btn' onClick={handleSaveBook}>Save</button>
      </div>
    </div>
  )
}

export default EditBook