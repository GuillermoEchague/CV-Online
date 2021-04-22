import React from "react"
import { Container, Button } from "react-bootstrap"
import CV from "../../images/cv.pdf"
import "./AboutMe.scss"

export default function AboutMe() {
  return (
    <Container className="about-me">
      <h4> Lo que he hecho y lo que puedo hacer </h4>
      <p>
     Siéntase libre de echar un vistazo más profundo a lo que he logrado a lo largo de los años y lo que puedo hacer por usted. Mi currículum repasa los elementos estándar, pero comprenda que no embellezco mis capacidades (nada bueno sale de eso).
      </p>
      <hr />

      <a href={CV} target="_blank" rel="noreferrer noopener">
        <Button primary>VER MI RESUMEN</Button>
      </a>
    </Container>
  )
}
