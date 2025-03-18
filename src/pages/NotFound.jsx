import { Link } from "react-router-dom";

// Componente per la pagina 404 - Not Found
export default function NotFound () {

    return (

        <div className="not-found">

            <h1 className="h1-custom">404 - Page Not Found</h1>
            <p className="movie-details">The page you are looking for doesn't exist or has been moved.</p>

            <Link to="/">

                <button className="button-gen">Back to Home</button>

            </Link>

        </div>

    );

};
