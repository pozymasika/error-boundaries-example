export default function Nav() {
  return (
    <nav className="bg-gray-800 p-3">
      <ul>
        <li className="inline-block mr-4">
          <a
            href="/"
            className="text-gray-200 hover:text-white"
            data-testid="home-link"
          >
            Home
          </a>
        </li>
        <li className="inline-block mr-4">
          <a
            href="/about"
            className="text-gray-200 hover:text-white"
            data-testid="about-link"
          >
            About
          </a>
        </li>
      </ul>
    </nav>
  );
}
