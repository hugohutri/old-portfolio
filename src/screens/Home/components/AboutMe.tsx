import { FC } from "react";

const AboutMe: FC<{}> = () => {
  return (
    <div className="container about-me">
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
    </div>
  );
};

export default AboutMe;
