import { useState } from 'react';
import { useFetch } from '../../Hooks/useFetch';
// Styles
import Button from '@mui/material/Button';
import { CardItem } from '../CardItem/CardItem';
import './TripList.css';
export const TripList = () => {
  const [url, setUrl] = useState('http://localhost:3000/trips');

  const { data: trips, isLoading, error } = useFetch(url); //I can destructure data because its what is going to be return from useFetch

  return (
    <div className="trip-list">
      <h2>Trip List</h2>
      {isLoading && <div>Loading trips...</div>}
      {error && <div>{error}</div>}
      <ul>
        {trips && //Doing this only if i have a value for trips (true or false) then it will go through all the map and cycle
          trips.map(trip => <CardItem key={trip.id} trip={trip} />)}
      </ul>
      <div className="filters">
        <Button
          variant="contained"
          onClick={() =>
            setUrl('http://localhost:3000/trips?loc=Europe')
          }
        >
          European Trips
        </Button>
        <Button
          variant="contained"
          onClick={() => setUrl('http://localhost:3000/trips')}
        >
          All Trips
        </Button>
      </div>
    </div>
  );
};
