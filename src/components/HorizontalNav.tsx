export default function HorizontalNav() {
  return (
    <nav className="bg-gray-200 p-4">
      <ul className="flex flex-col">
        <li>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:text-white hover:bg-gray-800"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:text-white hover:bg-gray-800"
          >
            Settings
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:text-white hover:bg-gray-800"
          >
            Profile
          </a>
        </li>
      </ul>
    </nav>
  );
}
