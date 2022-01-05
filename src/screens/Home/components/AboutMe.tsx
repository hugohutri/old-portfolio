import { FC } from "react";
import styled from "styled-components";

const StyledTextContainer = styled.div`
  text-align: center;
  padding-top: 5%;
  padding-bottom: 5%;
`;

const AboutMe: FC<{}> = () => {
  return (
    <StyledTextContainer className="container">
      <p>
        Hei! Olen Hugo, ja olen ohjelmistokehittäjä Lappeenrannasta. Teen
        pääasiassa Frontend -kehitystä, mutta myös Backend ja mobiilipuolta.
        Koulutukseltani olen Tietotekniikan kandidaatti ja olen opiskellut
        ohjelmistotuotannon lisäksi data-analytiikkaa.
      </p>
      <p>
        Osaamisalueeseeni kuuluu mm. JavaScript/TypeScript, React ja React
        Native, joita olen käyttänyt parin vuoden ajan sekä töissä että omissa
        projekteissani. Näiden lisäksi hallitsen lukuisia teknologioita Node.js,
        Python, Matlab ja AWS. Suosikkikolmikkoni on React, Typescript ja Linux
        :)
      </p>
    </StyledTextContainer>
  );
};

export default AboutMe;
