# Learning more with REACT

Learning from the beginning, how to use conditions inside of JSX like

```javascript
{BOOLEAN && (COMPONENTS OR ANY JSX) }
```

If the boolean or the condition im using there is true it will show me what is after the **&&**

Using map as a filter in JSX

```javascript

{VariableNAme.map( () => (COMPONENTS OR ANY JSX))}
```

Inline functions inside of JSX to be call just when i click

```javascript
onClick={() => e.target.value}
```

## Custom Hooks

useFetch for fetching data from any url
This function is going to work with any URL because that is the prop that it set up to work with
Setting the useState to null from the beginning give me the option to add anything i need for it
The the use Effect is going to be call, then the function FetchData is called with async function where the value of url will be fetch and then the result translate to a json format and set the value to the setData property and call the function fetchData again and return just data as a value of this function

```jsx
export const useFetch = (url) => {
 const [data, setData] = useState(null);

 useEffect(() => {
  const fetchData = async () => {
   const res = await fetch(url);

   const json = await res.json();

   setData(json);
  };
  fetchData();
 }, [url]);

 return { data };
};
```

```javascript
    const [showTrips, setShowTrips] = useState(true);

  <Button
variant={showTrips ? 'contained' : 'outlined'}
onClick={() => setShowTrips(false)}
>
Hide Trip
</Button>
{showTrips && <TripList />} */

````
