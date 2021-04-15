import React from 'react'
import {Container, Row, Col, Image} from "react-bootstrap"
import Social from "./Social";
import profileImage from "../../images/Avatar-1.jpg"
import "./Profile.scss"

const data = [
    {
      title: "E-Mail:",
      info: "guillermo.echaguea@gmail.com",
    },
    {
      title: "Telefono:",
      info: "+56 9 81936377",
    },
  ]

export default function Profile() {
    return (
        <div className="profile">
            <div className="wallpaper" />
            <div className="dark" />
            <Container className="box">
            <Row className="info">
                    <Col xs={12} md={4}>
                        <Image src={profileImage}  fluid />
                    </Col>
                    <Col xs={12} md={8} className="info__data">
                    <span>¡HOLA!</span>
                    <p>Guillermo Echagüe Arriaza</p>
                    <p>Ingeniero Civil en Mecánica - Junior Developer Software</p>
                    <hr />
                    <div className="more-info">
                    {data.map((item, index) => (
                        <div key={index} className="item">
                            <p>{item.title}</p>
                            <p>{item.info}</p>
                        </div>
                    ))}
                    </div>
                    </Col>
                </Row>
                    <Social/>
            </Container>
        </div>
    )
}
