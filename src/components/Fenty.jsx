import React from "react";
import Card from "react-bootstrap/Card";
import { Link, useNavigate } from "react-router-dom";
const Fenty = () => {
  return (
    <div>
      <Card className="bg-dark text-white">
        <Card.Img
          src="https://www.gannett-cdn.com/-mm-/b007e16b5d1e3d0bf93d0912c03134400a689921/c=0-2982-7760-7347/local/-/media/2017/09/28/DetroitNews/B99580020Z.1_20170928184340_000_GI31LT3TU.2-0.jpg?width=3200&height=1800&fit=crop&format=pjpg&auto=webp"
          alt="Card image"
        />
        <Card.ImgOverlay>
          <Card.Title style={{ fontSize: "3rem" }}>FENTY BEAUTY</Card.Title>

          <Link target="_blank" to={"https://fentybeauty.com/"}>
            visit official site
          </Link>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
};

export default Fenty;
