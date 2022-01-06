import { FC } from "react";
import styled from "styled-components";

const StyledTextContainer = styled.div`
  font-size: 1.2rem;
  text-align: justify;
  padding-top: 5%;
  padding-bottom: 5%;
  @media (max-width: 550px) {
    font-size: 1rem;
  }
`;

const AboutMe: FC<{}> = () => {
  return (
    <StyledTextContainer className="container">
      <p>
        Hei! Olen Hugo, ja olen ohjelmisto&shy;kehittäjä Lappeen&shy;rannasta.
        Teen pääasiassa Front-end -kehitystä, mutta myös Back-end ja
        mobiili&shy;puolta. Koulu&shy;tukseltani olen Tieto&shy; tekniikan
        kandidaatti ja olen opiskellut ohjelmisto&shy; tuotannon lisäksi
        data-analytiikkaa.
      </p>
      <p>
        Osaamisalueeseeni kuuluu mm. JavaScript/TypeScript, React ja React
        Native, joita olen käyttänyt parin vuoden ajan sekä töissä että omissa
        projek&shy;teissani. Näiden lisäksi hallitsen lukuisia
        tekno&shy;logioita, kuten Node.js, Python, Matlab ja AWS. Esimerkiksi
        tämä sivu on rakennettu käyttäen React, TypeScript ja Styled Components.
        Lähde&shy;koodin löydät{" "}
        <a href="https://github.com/hugohutri/hugohutri.github.io/tree/main">
          täältä.
        </a>
      </p>
    </StyledTextContainer>
  );
};

export default AboutMe;
