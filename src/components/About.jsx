import React from "react";
import Card from "react-bootstrap/Card";

const About = () => {
  return (
    <div>
      <Card
        className="container"
        style={{ width: "50%", backgroundColor: "#F5F5F5" }}
      >
        <Card.Img
          variant="top"
          className="container"
          style={{ width: "70%" }}
          src="http://www.rihannanow.com/wp-content/uploads/2015/02/150128_W_Korea_Shot_4_0301_41-640x960.jpg"
        />
        <Card.Body>
          <Card.Title style={{ textAlign: "center", fontSize: "2rem" }}>
            Rihanna Biography
          </Card.Title>
          <Card.Text style={{ fontSize: "1rem" }}>
            <span style={{ fontWeight: "bold" }}>Robyn Rihanna Fenty</span> was
            born in Bridgetown, Barbados, on February 20, 1988. She is a
            well-known singer, songwriter, model, dancer, actress, fashion
            designer, entrepreneur, and music producer of Barbadian and American
            nationality.
            <br />
            <br />
            Rihanna is the daughter of Monica Braithwaite, a retired public
            accountant, and Ronald Fenty, a commercial supervisor from both
            Barbados and Ireland. She has two brothers of his parents and three
            half-brothers by his father side. She went to Charles F.
            <br />
            <br />
            Broome School, where she attended elementary school, and Combermere
            School, where she won both the talent contest and the beauty pageant
            in 2004. As a child, she suffered from severe headaches, associated
            with the constant arguments her parents maintained due to Ronald
            Fenty’s addiction to cocaine. However, when Rihanna was 14 years
            old, they divorced, and the headaches ceased. Her musical career
            began when she formed a musical trio with two of her classmates in
            2003. By that time, the American music producer Evan Rogers was
            vacationing with his wife in Barbados. A friend of Rihanna contacted
            his wife and told him about her. Convinced by his wife, Evan called
            the trio to an audition, in which Rihanna prevailed before her two
            companions with her voice, singing Emotion, of the band Destiny’s
            Child, and Hero, of the singer Mariah Carey.
            <br />
            <br />
            Evan Rogers then arranged a second audition, but this time without
            her partners and with the presence of her mother. Pleased with what
            he heard, he invited Rihanna to record a demo in the United States,
            which was sent to different record companies. This model went
            through several hands, up to rapper Jay-Z, who had just obtained the
            position of president and CEO of the label Def Jam. Jay-Z was only
            able to listen to Rihanna singing Pon de Replay to feel
            enthusiastic, although he had his doubts. So, he called Rihanna for
            an audition in New York, where he convinced both Jay-Z and L.A. Reid
            that they wanted her in Def Jam.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default About;
