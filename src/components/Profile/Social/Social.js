import React from 'react'

import { Image} from "react-bootstrap"
import "./Social.scss"

export default function Social() {
    return (
      <div class="link">
      
      <a 
      href= "https://www.linkedin.com/in/guillermo-e-a198b2192/"
      target="_blank" 
      rel="noreferrer noopener">
      <Image height={30} src="https://raw.githubusercontent.com/GuillermoEchague/GuillermoEchague/7e7f4a38d747f5d66c944714343ecd6c2cebba46/img/linkedin.svg" />
      </a>
      
      <a 
      href= "https://github.com/GuillermoEchague"
      target="_blank" 
      rel="noreferrer noopener">
      <Image height={30} src="https://raw.githubusercontent.com/GuillermoEchague/GuillermoEchague/7e7f4a38d747f5d66c944714343ecd6c2cebba46/img/github.svg" />
      </a>
      
      <a 
      href= "https://twitter.com/GuillermoEchag1"
      target="_blank" 
      rel="noreferrer noopener">
      <Image height={30} src="https://raw.githubusercontent.com/GuillermoEchague/GuillermoEchague/7e7f4a38d747f5d66c944714343ecd6c2cebba46/img/twitter.svg" />
      </a>
      </div>
      
    )
  }