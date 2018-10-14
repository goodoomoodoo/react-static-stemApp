import React from 'react';
import classNames from 'classnames';

import '../../style/NavBar.css';

class NavBar extends React.Component
{
    constructor( props )
    {
        super( props );

        this.state = {
            hover: false
        }

        this.handleScroll = this.handleScroll.bind( this );
    }

    componentDidMount()
    {
        window.addEventListener( 'scroll', this.handleScroll );
    }

    handleScroll()
    {
        let scrollTop = window.scrollY;

        if( scrollTop > this.props.contentTop - 100 )
            this.setState({
                hover: true
            });
        else 
            this.setState({
                hover: false
            });
    }

    render() 
    {
        let navBarItemClass = classNames(
            {
                'nav-bar-item': this.state.hover,
                'nav-bar-item-hidden': !this.state.hover
            }
        )
        return (
            <div className='nav-bar'>
                <div className='nav-bar-title'>TITLE</div>
                <div className={navBarItemClass}>
                    More
                    <ul className='nav-bar-dmenu'>
                        <li>item</li>
                        <li>item</li>
                    </ul>
                </div>
                <div className={navBarItemClass}>About</div>
            </div>
        );
    }
}

export default NavBar;