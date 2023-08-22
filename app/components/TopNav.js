import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

const TopNav = () => {

    const { data, status } = useSession();

     console.log("========>","data => ", data, " status => ", status);

    return (
        <nav className="nav shadow p-2 justify-content-between mb-3">
        <Link className="nav-link" href="/" >Blog</Link>
            {status === "authenticated" ? (
                <>
                    <div className="d-flex">
                        <Link
                            className="nav-link"
                            href="/dashboard/user"                                
                        >
                          Dashboard
                        </Link>
                        <a
                            className="nav-link pointer"
                            onClick={() => signOut({ callbackUrl: "/login" })}
                        >
                            Logout
                        </a>
                    </div>
                </>
            ) : (
                <div className="d-flex">
                    <Link className="nav-link" href="/login">
                        Login
                    </Link>
                    <Link className="nav-link" href="/register">
                        Register
                    </Link>
                </div>
            )}
            
        </nav>
    );
};

export default TopNav;