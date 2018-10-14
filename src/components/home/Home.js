import React from 'react';

import '../../style/Home.css';

import NavBar from './NavBar';
import Background from './Background';
import Main from './Main';
import Content from './Content';
import Footer from './Footer';

class Home extends React.Component
{
    constructor( props )
    {
        super( props );

        this.state = {
            contentTop: 0
        };

        this.changeContentTop = this.changeContentTop.bind( this );
    }

    changeContentTop( num )
    {
        this.setState({
            contentTop: num
        });
    }

    render()
    {
        return (
            <div className='home'>
              <NavBar contentTop={this.state.contentTop}/>
              <Background />
              <Main />
              <Content top={this.state.contentTop} changeContentTop={this.changeContentTop}/>
              <Footer />
            </div>
        )
    }
}

export default Home;