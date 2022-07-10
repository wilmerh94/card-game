import { useEffect, useRef, useState } from 'react';

export const useFetch = (url, _options) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  //  use useRef to wrap an object/array argument
  // Which is a useEffect dependency
  const options = useRef(_options).current; //This is a solution for infinity loop on useEffect

  useEffect(() => {
    console.log(options);
    const controller = new AbortController();
    const fetchData = async () => {
      //I can create Async function inside of the function of the useEffect
      setIsLoading(true);
      try {
        const res = await fetch(url, { signal: controller.signal }); // fetching the data
        if (!res.ok) {
          //this if is going to be call if the response is false and then give the error
          throw new Error(res.statusText);
        }
        const json = await res.json(); //  making the data a json object

        setIsLoading(false);
        setData(json); // changing the value of data in my useState
        setError(null);
      } catch (err) {
        if (err.name === 'AbortError') {
          console.log('the fetch was aborted');
        } else {
          setIsLoading(false);
          setError('Could not fetch the data');
        }
      }
    };
    fetchData();

    return () => {
      controller.abort();
    };
  }, [url, options]); //if the url change for any chance the use Effect will be render again

  return { data, isLoading, error }; //this return is coming from the useState which has the value of the setData inside of the useEffect
  //{PropName : VariableName}
};
