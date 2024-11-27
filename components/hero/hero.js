import React from 'react';
import Link from 'next/link';

function hero(props) {
    return (
        <section className={"" + props.hclass}>
            <div className="wraper">
                <div className="content">
                    <h2>Welcome to Sailo</h2>
                    <h3>Modern Way To Lead
                        The Future World</h3>
                    <p>Dapibus aliquet lacus sem egestas netus vestibulum sit turpis scelerisque pharetra pelque diam
                        pharetra curabitur.</p>
                    <div className="hero-btn">
                        <Link href="/about" className="theme-btn">Discover More</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default hero;