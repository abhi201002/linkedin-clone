import React from 'react'
import styled from 'styled-components'
import Hashtags from './hashtags'

function right() {
  return (
    <Container>
      <Feed>
        <p>Add to your feed</p>
        <Hashtags name = "Linkedin"/>
        <Hashtags name = "Video"/>
      </Feed>
    </Container>
  )
}

export default right

const Container = styled.div`
  
`

const Feed = styled.div`
    /* display: flex;
    flex-direction: column; */
    background-color: white;
    padding: 10px 10px;
    p{
      font-size: 16px;
      font-weight: 500;
      margin-bottom: 10px;
      color:rgb(25,25,25)
    }
`