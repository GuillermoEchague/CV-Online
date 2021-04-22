import React from 'react'
import { Container} from "react-bootstrap"
import {estudios} from "../../utils/skills"
import Social from "./Social";
import "./ListSkill.scss"


export default function ListSkill() {

    return (
        <div className="cursos">
            <div className="wallpaper2" />
            <div className="dark" />
            <Container className="box">
           
            {estudios.map((estudio, index) => (
            <>
                <h3  className="titulo">{estudio.title}</h3>
                <h4 className="description"> {estudio.description}</h4>
                <h4 className="date">Fecha: {estudio.date}</h4>
                <hr />
            </>
                

                ))}
            

                <Social/>
            </Container>

        </div>
    )
}
