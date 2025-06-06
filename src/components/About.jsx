
const About = () => {
 return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        Hello Tailwind CSS! 🎨
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        You're now styling with Tailwind in a Vite + React project.
      </p>
      <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
        Click Me
      </button>
    </div>
  );

}

export default About