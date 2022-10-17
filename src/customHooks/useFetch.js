import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const abortCont = new AbortController()

    fetch(url, {signal: abortCont.signal})
    .then(response => {
      if(!response.ok) {
        throw Error('Failed to fetch data')
      }
      return response.json()
    })
    .then(data => {
      setData(data)
      setIsPending(false)
      setError(null)
    })
    .catch(error => {
      if (error.name === 'AbortError') {
        return;
      } else {
        setError(error.message)
        setIsPending(false)
      }
    })

    return () => abortCont.abort();
  },[])

  return {data, isPending, error}
}
 
export default useFetch;