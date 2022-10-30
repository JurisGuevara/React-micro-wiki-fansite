import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setLoading } from "../store/loadingSlice";

const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const dispatch = useDispatch()

  useEffect(() => {
    const abortCont = new AbortController()
    dispatch(setLoading(true))
    setData(null)

    setTimeout(() => {
      fetch(url, {signal: abortCont.signal})
      .then(response => {
        if(!response.ok) {
          throw Error('Failed to fetch data')
        }
        return response.json()
      })
      .then(data => {
        setData(data)
        dispatch(setLoading(false))
        setError(null)
      })
      .catch(error => {
        if (error.name === 'AbortError') {
          return;
        } else {
          setError(error.message)
          dispatch(setLoading(false))
        }
      })
    }, 1000);

    return () => abortCont.abort();
  },[url])

  return {data, error}
}
 
export default useFetch;