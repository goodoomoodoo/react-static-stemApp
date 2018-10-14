import React from 'react';
import ReactDOM from 'react-dom';
import ReactMarkDown from 'react-markdown';
import classNames from 'classnames';

import eventMD from '../../content/Event.md';
import missionaryMD from '../../content/Missionary.md';

import '../../style/Content.css';

class Content extends React.Component
{
    constructor( props )
    {
        super( props );

        this.state = {
            content: [],
            hover: false
        };

        this.handleScroll = this.handleScroll.bind( this );
    }

    componentWillMount()
    {
        fetch( eventMD )
          .then( res => res.text() )
          .then( text => {
              let arr = [ text, ...this.state.content ];
              this.setState({
                  content: arr
              });
          });
        
        fetch( missionaryMD )
          .then( res => res.text() )
          .then( text => {
              let arr = [ text, ...this.state.content ];
              this.setState({
                content: arr
              });
          });
    }

    componentDidMount()
    {
        window.addEventListener( 'scroll', this.handleScroll );

        this.props.changeContentTop( ReactDOM.findDOMNode( this ).offsetTop );
    }

    handleScroll( )
    {
        let scrollTop = window.scrollY;

        if( scrollTop > this.props.top - 50 )
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
        let sideBarClass = classNames(
            'content-bar',
            {
                'content-bar-abs': !this.state.hover,
                'content-bar-fix': this.state.hover
            }
        )

        return (
            <div className='content'>
                <div className='text'>
                    {
                        this.state.content.map( ( text, index ) => {
                            return <ReactMarkDown key={index} source={text} />
                        })
                    }
                </div>
                <div className={sideBarClass}>
                    <ul>
                        <li>
                            Statement
                        </li>
                        <li>
                            Event
                        </li>
                        <li>
                            Contact
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Content;