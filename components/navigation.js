import Logo from './logo';
import Link from 'next/link';

const Navigation = () => (
    <nav>
        <Link className="link" href='/'><a>Home</a></Link>
        <span>&#215;</span>
        <Link className="link" href='/about'><a>About</a></Link>
        <span>&#215;</span>
        <Link className="link" href='/writing'><a>Writing</a></Link>
        <span>&#215;</span>
        <Link className="link" href='/projects'><a>Projects</a></Link>

        <style jsx>{`
            nav {
                margin-bottom: 4rem;
            }

            a {
                color: inherit;
                margin-right: 15px;
                position: relative;
                text-decoration: none;
                z-index: 1;
            }

            a:hover:after {
                background: #ffa39e;
                bottom: 6px;
                content: '';
                display: block;
                height: 2px;
                left: -5px;
                position: absolute;
                right: -5px;
                z-index: -1;
            }

            span {
                color: #ccc;
                margin-right: 15px;
            }
        `}</style>
    </nav>
);

export default Navigation;
