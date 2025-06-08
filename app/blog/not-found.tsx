import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[500px]">
            <h1 className="text-6xl font-bold">404</h1>
            <p className="text-2xl">Page not found</p>
            <Link
                href="/"
                className="mt-10 px-5 py-3 btn btn-secondary"
            >
                Return Home
            </Link>
        </div>
    );
}
