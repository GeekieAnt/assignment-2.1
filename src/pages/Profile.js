import React from "react";
import ak from "../assets/ak.jpg";
import {
  Container,
  Typography,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  List,
  ListItem,
} from "@mui/material";

const Profile = () => {
  return (
    <Container>
      <Card sx={{ maxWidth: 250 }}>
        <CardHeader title="Anton Kho" />
      </Card>
      <CardMedia
        component="img"
        height="200"
        image={ak}
        sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
      />
      <CardContent>
        <Typography variant="h5">Hobbies</Typography>
        <List>
          <ListItem>Kettlebell Workout</ListItem>
          <ListItem>Watch Anime</ListItem>
          <ListItem>Travel</ListItem>
        </List>
        <Typography variant="h5">About</Typography>
        <Typography>
          As an engineer with a diverse background, I have consistently been
          recognized for my success in solving technical challenges. I am adept
          at learning new products and technologies, staying up-to-date with the
          latest industry trends and best practices through continuous
          self-development. By staying on top of emerging technologies and
          keeping my skills sharp, I have been able to make valuable
          contributions
        </Typography>
      </CardContent>
    </Container>
  );
};

export default Profile;
