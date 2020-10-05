'use strict'

import React, { Component } from 'react'
import Square from './square'

class App extends React.Component{
    render(){
        return(
            <div className='container' onClick={(e) => {
                alert('clicou')
            }}>
                {['blue', 'red', 'green'].map((square, index) => (
                    <Square key={index} color={square}/>
                ))}
            </div>
        )
    }
}

export default App

//Passando o index na key ele faz com que seja definido um valor de key diferente para componente rederizado do map
