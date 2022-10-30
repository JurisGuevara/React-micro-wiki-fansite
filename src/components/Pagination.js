import scrollToTop from "../customHooks/scrollToTop";

const Pagination = ({data, setUrl, firstPage, lastPage}) => {
  const toTop = () => scrollToTop()

  return (
    <div className="pagination">
      {typeof(data.previous) === 'string' && data.previous.substr(data.previous.length - 1) > 1 ? <button onClick={() => {setUrl(firstPage); toTop()}}>&#60;&#60;</button> : <button className="disabled">&#60;&#60;</button>}
      {data.previous ? <button onClick={() => {setUrl(data.previous); toTop()}}>Previous</button> : <button className="disabled">Previous</button>}
      {data.next ? <button onClick={() => {setUrl(data.next); toTop()}}>Next</button> : <button className="disabled">Next</button>}
      {typeof(data.next) === 'string' && data.next.substr(data.next.length - 1) < 6 ? <button onClick={() => {setUrl(lastPage); toTop()}}>&gt;&gt;</button> : <button className="disabled">&gt;&gt;</button>}
    </div>
  );
}
 
export default Pagination;