import { useRouteError, Link } from "react-router-dom"
import NavBar from "../components/NavBar";


export default function ErrorPage() {
    const error = useRouteError();
    return (
        <div className="m-5">
            <NavBar/>
            <h1 className="text-xl">Oops! Looks like something went wrong.</h1>
            <p className="text-xs mb-2">Something went wrong.</p>
            {error && (
          <p className="mb-3"><code>{error.status}: {error.statusText}</code></p>
        )}            <Link to="/">🔙 take me home</Link>
        </div>
    )
}