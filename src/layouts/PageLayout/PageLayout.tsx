import React from 'react';
import { Link, Outlet } from 'react-router-dom';


const PageLayout: React.FC = () => {
    return (
        <main>
            navigation
            <section>
                <Outlet/>
            </section>
        </main>
    );
};

export default React.memo(PageLayout);