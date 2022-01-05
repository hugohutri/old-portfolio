import { FC } from "react";
import AboutMe from "./components/AboutMe";
import ButtonRow from "./components/ButtonRow";
import Name from "./components/Name";
import ProfilePicture from "./components/ProfilePicture";
import SocialMedia from "./components/SocialMedia";
import "./styles.css";

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  return (
    <>
      <Name />
      <ProfilePicture />
      <AboutMe />
      <SocialMedia />
      <hr />
      <ButtonRow />
    </>
  );
};

export default Home;
