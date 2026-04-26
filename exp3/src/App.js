import { Container, Grid } from "@mui/material";
import Navbar from "./components/Navbar";
import CardItem from "./components/CardItem";

function App() {
  const data = [
    { title: "React", desc: "Frontend Library" },
    { title: "Node", desc: "Backend Runtime" },
    { title: "MongoDB", desc: "Database" },
    { title: "Express", desc: "Server Framework" }
  ];

  return (
    <>
      <Navbar />

      <Container sx={{ marginTop: 4 }}>
        <Grid container spacing={3}>
          {data.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <CardItem title={item.title} desc={item.desc} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default App;