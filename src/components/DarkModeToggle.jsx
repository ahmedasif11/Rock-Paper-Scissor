const DarkModeToggle = ({ darkMode, toggleDarkMode }) => {
  return (
    <button
      onClick={toggleDarkMode}
      className={`absolute top-5 right-5 p-2 rounded ${
        darkMode ? "bg-gray-700 text-white" : "bg-gray-300 text-black"
      } transition duration-300`}
    >
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default DarkModeToggle;
