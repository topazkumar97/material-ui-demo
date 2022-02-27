import React from "react";
import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
  Button,
} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import useStyles from "./Styles";

const App = () => {
  const classes = useStyles();
  const card = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera />
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container maxWidth="sm">
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Photo Album
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Hello everyone This is a photo album and I'm trying to make this
              sentence as long as possible so we can see how does it look like
              on screen.
            </Typography>
            <div>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant="contained">See More Photos</Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined">Secondary Actions</Button>
                </Grid>
              </Grid>
            </div>
          </Container>
          <Container className={classes.container}>
            <Grid container spacing={4} >
              {card.map((key) => (
                <Grid item key={key} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://picsum.photos/200/300"
                      title="Image title"
                    />
                    <CardContent>
                      <Typography variant="h5">Heading</Typography>
                      <Typography variant="h6">
                        This is a media card. You can use this section to
                        describe the content.
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">VIEW</Button>
                      <Button size="small">EDIT</Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </div>
      </main>
    </>
  );
};

export default App;
