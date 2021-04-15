import React from "react"
import BasicLayout from "../layouts/BasicLayout";
import { Container } from "react-bootstrap"
import ListSkills from "../components/ListSkills";
import {tecnologias, estudios} from "../utils/skills"
import "./skills.scss"


export default function Skills() {
  return(
    <BasicLayout menuColor="#000">
      
      <Container className="skills">
      <div className="skills__block">
      <h2>Estudios</h2>
      <ListSkills skills={estudios}/>
      </div>
      </Container>
      
    </BasicLayout>)
}