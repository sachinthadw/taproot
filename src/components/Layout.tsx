import React from 'react';
import type { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

import BackgroundAnimation from './BackgroundAnimation';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col font-sans text-navy-900 bg-platinum-50 overflow-hidden relative">
            <BackgroundAnimation />
            <Navbar />
            <main className="flex-grow z-10">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
