
const CreateBookForm = () => {
  const[title, setTitle] = useState('');
  const[author, setAuthor] = useState('');
  const[publishYear, setPublishYear] = useState('');
  const[description,setDescription] = useState('');
  const[genre,setGenre] = useState('');
  const[loading,setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSaveBook = () =>{
    const data = {
      title,
      author,
      publishYear,
      description,
      genre
    };
    setLoading(true);
    axios.post("http://localhost:5555/books",data).then(()=>{
      setLoading(false);
      navigate('/');
    })
    .catch((error)=>{
      setLoading(false);
      console.log(error);
    });
  }
  return (
    <div>
      <h1>Book Details</h1>
      <div className='input-fiels-container'> 
        <div className='input-book-name'>
        <label htmlFor="">Book Name</label>
        <input type="text" id='book' value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
        </div>
        <div className='input-author-name'>
        <label htmlFor="author">Author</label>
        <input type="text" id='author' value={author} onChange={(e)=>{setAuthor(e.target.value)}} />
        </div>
        <div className='input-published-year'>
        <label htmlFor="year">Published Year</label>
        <input type="number" value={publishedYear} id='year'onChange={(e)=>{setPublishYear(e.target.value)}} />
        </div>
        <div className='input-book-description'>
        <label htmlFor="book-description">Book Description</label>
        <input type="textarea" id='description' value={description} onChange={(e)=>{setDescription(e.target.value)}} />
        </div>
        <div className='input-book-genre'>
        <label htmlFor="genre">Genre</label>
        <input type="text" id='genre' value={genre} onChange={(e)=>{setGenre(e.target.value)}} />
        </div>
        <button className='save-btn' onClick={handleSaveBook}>Save</button>
      </div>
    </div>
  )
}

export default CreateBookForm