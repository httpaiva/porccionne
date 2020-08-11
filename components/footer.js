import React from 'react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="footer">
            <Link href="/creditos"><p>Copyrigth © 2020 - Porccionne</p></Link>
        </footer>
    );
}