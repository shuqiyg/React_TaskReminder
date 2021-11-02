import React from 'react'
import Button from './Button'
import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'

const Header = ({title, onAdd, showAdd}) => {
    const location = useLocation()

    return (
        <header className='header'>
           <h1>{title}</h1>
           {location.pathname === '/' && <Button color={showAdd? 'red' : 'green'} text={showAdd? 'Close' : 'Create'} onClick={onAdd}/>}
        </header>
    )
}

Header.defaultPros = {
    title: 'An another APP',
}

Header.prototype = {
    title: PropTypes.string.isRequired
}

export default Header
