import React from 'react'
import { Container } from "react-bootstrap"
import "./ListSkills.scss"


export default function ListSkills(props) {

    const { skills} = props;

    return (
    <Container className="cursos">
        
        {skills.map((skill, index) => (
            <>
            <h3  className="titulo">{skill.title}</h3>
            <h4 className="description"> {skill.description}</h4>
            <h4 className="date">Fecha: {skill.date}</h4>
            <hr />
            </>
            ))}
            
    </Container>
    )
}
