import Link from "next/link";

const TopNav = () => {
    return (
        <nav className="nav shadow p-2 justify-content-between mb-3">
        <Link className="nav-link" href="/" >Blog</Link>
        <div className="d-flex">
        <Link className="nav-link" href="/login" >Login</Link>
        <Link className="nav-link" href="/register" >Register</Link>
        </div>
            
        </nav>
    );
};

export default TopNav;