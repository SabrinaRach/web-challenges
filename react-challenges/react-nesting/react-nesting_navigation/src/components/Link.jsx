export default function Link({href, children}) {
    return (
        <a className="navigation__link" href={href}> {/*Nur die Navigationslinks sollen durch <Link> ersetzt werden. */}
            {children}
        </a>
    );
}