export default function SuggestionPallete({ title, description, image }) {
  return (
    <div className="w-80 bg-gradient-to-b from-orange-400  text-center p-6 relative shadow-lg  transform transition duration-500 hover:shadow-2xl ">
      {/* Price Link */}
      <a
        href="#"
        className="inline-block bg-yellow-400 text-black px-6 py-2 -rotate-12 font-bold transition duration-500 hover:bg-gray-800 hover:text-white hover:scale-105 transform"
      >
        FROM : ₹149
      </a>

      {/* Image */}
      <div className="w-48 h-48 mx-auto my-4 overflow-hidden rounded-full relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition duration-500 transform hover:rotate-6"
        />
      </div>

      {/* Title and Description */}
      <h2 className="text-black text-lg font-bold">{title}</h2>
      <p className="text-black text-sm my-2 line-clamp-2">{description}</p>
    </div>
  );
}
