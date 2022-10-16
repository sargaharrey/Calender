import { AboutUs, Blog, Box, Boxes, Clients, Main, Team } from "./components";
import { Container } from "react-grid-system";
import { TwitterApi } from "./components/twitterApi";

export function Home(props) {
  return (
    <Container fluid className="app">
      <Main />
      <Box />
      <Boxes />
      <Clients />
      <AboutUs />
      <Team />
      <Blog />
      <TwitterApi />
    </Container>
  );
}
