import React from 'react'
import IcTwitter from "../../../images/icons/twitter.svg"
import IcGithub from "../../../images/icons/github.svg"
import IcLinkedin from "../../../images/icons/linkedin.svg"
import { Image} from "react-bootstrap"
import "./Social.scss"

export default function Social() {
    return (
      <div class="social">
      
      <a 
      href= "https://www.linkedin.com/in/guillermo-echag%C3%BCe-arriaza-a198b2192/"
      target="_blank" 
      rel="noreferrer noopener">
      <Image height={30} src="https://github.com/GuillermoEchague/GuillermoEchague/blob/main/img/linkedin.svg" />
      </a>
      
      <a 
      href= "https://github.com/GuillermoEchague"
      target="_blank" 
      rel="noreferrer noopener">
      <Image height={30} src="https://github.com/GuillermoEchague/GuillermoEchague/blob/main/img/github.svg" />
      </a>
      
      <a 
      href= "https://twitter.com/GuillermoEchag1"
      target="_blank" 
      rel="noreferrer noopener">
      <Image height={30} src="https://github.com/GuillermoEchague/GuillermoEchague/blob/main/img/twitter.svg" />
      </a>
      </div>
      
    )
  }