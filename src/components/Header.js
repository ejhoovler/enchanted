/*eslint-disable */
import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-camera-retro"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Enchanted Mirror STL</h1>
                <p></p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('book')}}>About Us</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('gallery')}}>Gallery</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
