import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import { FaGithub, FaLinkedin, FaGlobe, FaBars, FaTimes } from 'react-icons/fa';

function Header() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const iconSize = 'text-2xl'; // Tailwind class for icon size (approx 24px)
    const iconHoverEffect = 'hover:text-blue-300 transition-colors duration-200';

    const navbarIcons = [
        { link: 'https://github.com/sharduld1908/chatdb-llm', icon: <FaGithub className={iconSize} />, label: 'GitHub Profile' },
        { link: 'https://linkedin.com/in/sharduld1908', icon: <FaLinkedin className={iconSize} />, label: 'LinkedIn Profile' },
        { link: '/your-portfolio-link', icon: <FaGlobe className={iconSize} />, label: 'Portfolio Website' }
    ]

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    // Effect 1: Body Scroll Lock
    useEffect(() => {
        if (isDrawerOpen) {
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        } else {
            document.body.style.overflow = ''; // Re-enable scrolling
        }

        // Cleanup function to ensure scroll is re-enabled if component unmounts while drawer is open
        return () => {
            document.body.style.overflow = '';
        };
    }, [isDrawerOpen]); // Re-run effect when isDrawerOpen changes

    // Effect 2: Close on Escape Key
    useEffect(() => {
        const handleEscapeKey = (event) => {
            if (event.key === 'Escape') {
                setIsDrawerOpen(false);
            }
        };

        if (isDrawerOpen) {
            document.addEventListener('keydown', handleEscapeKey);
        }

        // Cleanup function to remove event listener
        return () => {
            document.removeEventListener('keydown', handleEscapeKey);
        };
    }, [isDrawerOpen]); // Re-run effect when isDrawerOpen changes

    return (
        <>
            <nav className='bg-gradient-to-r from-blue-600 to-blue-800 text-white p-3 shadow-lg sticky top-0 z-50'>
                <div className="flex px-4 justify-between items-center">

                    {/* Left Side */}
                    <a href="/" className="text-2xl font-semibold tracking-tight hover:text-blue-200 transition-colors duration-200">
                        ChatDB LLM
                    </a>

                    {/* Right Side - Desktop Icons */}
                    <div className="hidden sm:flex items-center space-x-6">
                        {navbarIcons.map((item, index) => (
                            <a
                                key={index}
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`text-white ${iconHoverEffect}`}
                                aria-label={item.label}
                            >
                                {item.icon}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button (Hamburger) */}
                    <div className="sm:hidden">
                        <button
                            onClick={toggleDrawer}
                            aria-label="Open menu"
                            aria-expanded={isDrawerOpen}
                            aria-controls="mobile-menu-drawer"
                            className="text-white p-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-300 rounded-md"
                        >
                            {isDrawerOpen ? <FaTimes className={iconSize} /> : <FaBars className={iconSize} />}
                        </button>
                    </div>

                </div>
            </nav>

            {/* Overlay */}
            {isDrawerOpen && (
                <div
                    className="fixed inset-0 z-[55] sm:hidden"
                    onClick={toggleDrawer}
                    aria-hidden="true"
                ></div>
            )}

            {/* Drawer Panel - Animates from Top */}
            <div
                id="mobile-menu-drawer"
                className={`fixed top-0 left-0 right-0 bg-blue-700 text-white shadow-xl transform transition-transform ease-in-out duration-300 z-[60] sm:hidden
                            ${isDrawerOpen ? 'translate-y-0' : '-translate-y-full'}`}
                role="dialog"
                aria-modal="true"
                aria-labelledby="drawer-title"
            >
                {/* Optional: Add padding and container for content alignment */}
                <div className="container mx-auto px-4 py-5">
                    <div className="flex justify-between items-center mb-6">
                        <h2 id="drawer-title" className="text-xl font-semibold">Menu</h2>
                        <button
                            onClick={toggleDrawer}
                            aria-label="Close menu"
                            className="text-white hover:text-blue-200 p-1"
                        >
                            <FaTimes className="text-xl" /> {/* Close button inside the drawer */}
                        </button>
                    </div>

                    <ul className="space-y-4">
                        {navbarIcons.map((item, index) => (
                            <li key={index}>
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center space-x-3 p-2 rounded hover:bg-blue-600 transition-colors duration-200"
                                    onClick={toggleDrawer} // Close drawer on link click
                                >
                                    {/* Apply icon size for drawer icons, can be same or different */}
                                    {React.cloneElement(item.icon, { className: 'text-xl' })}
                                    <span>{item.label}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
        
    )
}

export default Header