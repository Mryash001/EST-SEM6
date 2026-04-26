import { Card, CardContent, Typography, Button } from "@mui/material";

export default function CardItem({ title, desc }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="body2">{desc}</Typography>
        <Button variant="contained" sx={{ marginTop: 2 }}>
          Learn More
        </Button>
      </CardContent>
    </Card>
  );
}