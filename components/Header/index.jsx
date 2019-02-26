import React from 'react'
import styled from 'styled-components'

const HeaderCotainer = styled.div`
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #e8e8e8;
  position: fixed;
  padding: 10px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 30;
  min-height: 3.25rem;
`

export default function Header (props) {
  return (
    <HeaderCotainer></HeaderCotainer>
  )
}