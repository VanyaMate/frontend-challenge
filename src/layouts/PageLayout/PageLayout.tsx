import React from 'react';
import { Link, Outlet } from 'react-router-dom';


const PageLayout: React.FC = () => {
    console.log('layout');

    return (
        <main>
            <header>
                <ul>
                    <img alt="" src="/arms.png"/>
                    <li><Link to="/">home</Link></li>
                    <li><Link to="/favorites">favorites</Link></li>
                </ul>
            </header>
            <section>
                <Outlet/>
            </section>
        </main>
    );
};

export default React.memo(PageLayout);