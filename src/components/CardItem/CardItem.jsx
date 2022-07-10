import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export const CardItem = ({ trip }) => {
  return (
    <Card sx={{ minWidth: 275, margin: 4 }}>
      <CardContent>
        <Typography
          sx={{ fontSize: 14 }}
          color="text.secondary"
          gutterBottom
        >
          {trip.title}
        </Typography>
        <Typography variant="h5" component="div">
          {trip.price}
        </Typography>
      </CardContent>
    </Card>
  );
};
