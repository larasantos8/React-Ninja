'use strict'

import React from 'react'

const Title = () => <h1>Hello, {`${props.name} ${props.lastname}`}</h1>

Title.defaultProps = {
    name: 'unknown',
    lastname: 'no last name'
}

export default Title