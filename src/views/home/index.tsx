import React from 'react';
import Container from '@material-ui/core/Container';
import Body from './body';
import Footer from './footer';


export default function Home() {
    return (
        <Container >
            <div className='home'>

                <div className="body">
                    <Body />
                </div>

                <div className='footer'>
                    <Footer />
                </div>

            </div>
        </Container>
    )
}