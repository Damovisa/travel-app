import React from 'react';
import Link from 'next/link';

const TitleBar: React.FC = () => {
    return (
        <header className="bg-primary text-primary-foreground p-4 flex justify-between items-center">
            <h1 className="text-xl font-bold"><a href="/">Mona Airways</a></h1>
            <nav>
                <ul className="flex space-x-4">
                    <li>
                        <Link href="/book" className="hover:bg-primary-light p-2 rounded">
                            📖 Book
                        </Link>
                    </li>
                    <li>
                        <Link href="/checkin" className="hover:bg-primary-light p-2 rounded">
                            🛫 Check In
                        </Link>
                    </li>
                    <li>
                        <Link href="/profile" className="hover:bg-primary-light p-2 rounded">
                            👤 My Profile
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default TitleBar;