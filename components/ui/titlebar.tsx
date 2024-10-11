import React from 'react';
import Link from 'next/link';
import { Link1Icon } from '@radix-ui/react-icons';

const TitleBar: React.FC = () => {
    return (
        <header>
        <div className="logo">
        <Link href="/"><img src="/img/logo.svg" alt="Copilot Airways" /></Link>
        </div>
        <nav>
            <ul>
                <li className="selected"><Link href="/book">Book Flight</Link></li>
                <li><Link href="#">Check-In</Link></li>
                <li><Link href="/travelguide">Travel Guide</Link></li>
                <li className="avatar"><Link href="/profile"><img src="img/avatar.jpeg" width="32px" height="32px" /></Link></li>
            </ul>
        </nav>
      </header>
    );
};

export default TitleBar;