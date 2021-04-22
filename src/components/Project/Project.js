import React from 'react'
import { Container, Row, Col, Card, Button } from "react-bootstrap"
import Social from "./Social";
import projects from "../../utils/projects"
import "./Project.scss"


export default function Profile() {
    return (
        <div className="profile">
            <div className="wallpaper1" />
            <div className="dark" />
            <Container className="box">
            <Row className="info">
                    
            {projects.map((project, index) => (
                <Col key={index} xs={12} sm={4} className="project">
                  <Card>
                    <div
                      className="image"
                      style={{ backgroundImage: `url("${project.image}")` }}
                    />
                    <Card.Body>
                      <Card.Title className="title">{project.title}</Card.Title>
                      <Card.Text>{project.description}</Card.Text>
                      <a href={project.url} target="_blank" rel="noreferrer noopener">
                        <Button variant="primary">Ver proyecto</Button>
                      </a>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
                </Row>
                    <Social/>
            </Container>
        </div>
    )
}
