import { Link } from "react-router-dom";


export default function NavBar()
{
    return (<>
    <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Music Pal</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <Link to="/home" class="nav-link active" aria-current="page">Home</Link>
                </li>
                <li class="nav-item dropdown">
                    <Link class="nav-link dropdown-toggle" to="/Fundamentals" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Fundamentals
                    </Link>
                    <ul class="dropdown-menu">
                        <li><Link class="dropdown-item" to="/Fundamentals/scaletesting">Scale Testing</Link></li>
                        <li><a class="dropdown-item" href="#"></a></li>
                        <li><a class="dropdown-item" href="#"></a></li>
                    </ul>
                </li>
            </ul>
            </div>
        </div>
        </nav>

    </>)
}