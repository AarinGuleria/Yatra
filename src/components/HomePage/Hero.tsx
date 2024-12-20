// Homepage imports
import React, { useState } from "react";

// Hero component
const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-indigo-900 to-purple-900 py-20 sm:py-28">
      {/* Glassmorphism background */}
      <div className="absolute inset-0 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg"></div>

      {/* Captivating color circles */}
      <div className="absolute w-full h-full">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-3000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:w-1/2 max-w-xl space-y-8 mb-12 lg:mb-0">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
              Discover Your{" "}              
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-600">
                Perfect Adventure
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed">
              Embark on unforgettable journeys with .fis. From luxurious
              retreats to thrilling experiences, we've curated your dream
              vacation.
            </p>
            <div className="flex space-x-4">
              <button className="bg-indigo-600 text-white px-8 py-4 text-lg font-semibold rounded-full hover:bg-indigo-700 transition-all duration-300 shadow-lg transform hover:scale-105">
                Start Exploring
              </button>
            </div>
          </div>
          <div className="w-full lg:w-1/2 relative">
            <div className="grid grid-cols-2 gap-6 transform rotate-3 hover:rotate-0 transition-all duration-500">
              <img
                src="src\assets\elements\hero-right.png"
                alt="Adventure"
                className="rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300"
              />
              <img
                src="src\assets\elements\hero-right2.png"
                alt="Luxury Hotel"
                className="rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Benefits component
const Benefits: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-indigo-900 to-purple-900 relative">
      {/* Glassmorphism background */}
      <div className="absolute inset-0 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg"></div>

      {/* Captivating color circles */}
      <div className="absolute w-full h-full">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-gold-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-3000"></div>
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-end mb-12">
          <div className="top-1/2 transform z-20">
            <div className="relative z-10 text-right">
              <h2 className="text-3xl font-bold mb-3 text-purple-300">
                Discover the
              </h2>
              <h1 className="text-6xl font-extrabold text-white leading-tight">
                Benefits of
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-600">
                  Vibrant Cities
                </span>
              </h1>
            </div>
            <div className="w-24 h-1 bg-indigo-600 mt-4 ml-auto"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-6 transform hover:scale-105 transition-all duration-300">
            <div className="bg-purple-700 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <span className="text-white text-2xl">📣</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">
              Cost-effective advertising
            </h3>
            <p className="text-purple-300">
              With a free listing, you can advertise your rental with no upfront costs.
            </p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-6 transform hover:scale-105 transition-all duration-300">
            <div className="bg-purple-700 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <span className="text-white text-2xl">🌍</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">
              Reach millions with Chis
            </h3>
            <p className="text-purple-300">
              Millions of people are searching for unique places to stay around the world.
            </p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-6 transform hover:scale-105 transition-all duration-300">
            <div className="bg-purple-700 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <span className="text-white text-2xl">🔒</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">
              Secure and simple
            </h3>
            <p className="text-purple-300">
              A Holiday Lettings listing gives you a secure and easy way to take bookings and payments online.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// FeaturedPlacesToStay component
const FeaturedPlacesToStay: React.FC = () => {
  const [selectedPlace, setSelectedPlace] = useState<string | null>(null);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const places = [
    {
      title: "Entire cabin - 10 beds",
      src: "src/assets/elements/hotel view.jpg",
      name: "Best Western Cedars...",
      address: "1 Anzinger Court",
      price: "₹2,100/night",
      rating: 28,
      description: "A cozy cabin nestled in the woods, perfect for large groups or family gatherings.",
      city: "New York",
    },
    {
      title: "Entire cabin - 6 beds",
      src: "/src/assets/elements/hero-right-3.png",
      name: "Bell By Greene King Inns",
      address: "32923 Judy Hill",
      price: "₹18,750/night",
      rating: 45,
      description: "Charming inn with a rustic feel, offering comfort and a taste of local hospitality.",
      city: "Tokyo",
    },
    {
      title: "Luxury apartment - 3 beds",
      src: "/src/assets/elements/villa2.webp",
      name: "The Ritz-Carlton Residences",
      address: "15 Central Park West",
      price: "₹37,500/night",
      rating: 49,
      description: "Opulent city living with breathtaking views and world-class amenities.",
      city: "Paris",
    },
    {
      title: "Beachfront villa - 8 beds",
      src: "/src/assets/elements/villa1.jpg",
      name: "Sunset Paradise Resort",
      address: "789 Ocean Drive",
      price: "₹26,250/night",
      rating: 47,
      description: "Luxurious beachfront property offering stunning ocean views and direct beach access.",
      city: "London",
    },
    {
      title: "Mountain chalet - 5 beds",
      src: "/src/assets/elements/villa3.webp",
      name: "Alpine Lodge Retreat",
      address: "42 Evergreen Lane",
      price: "₹13,500/night",
      rating: 41,
      description: "Scenic mountain getaway perfect for ski enthusiasts and nature lovers.",
      city: "New York",
    },
    {
      title: "City loft - 2 beds",
      src: "/src/assets/elements/villa4.jpg",
      name: "Urban Oasis Suites",
      address: "567 Downtown Avenue",
      price: "₹11,250/night",
      rating: 39,
      description: "Modern loft in the heart of the city, ideal for urban explorers and business travelers.",
      city: "Tokyo",
    },
  ];

  const cities = ["New York", "Tokyo", "Paris", "London"];

  const handleCityClick = (city: string) => {
    setSelectedCity(city);
    const placesInCity = places.filter(place => place.city === city);
    setMessage(`Found ${placesInCity.length} places to stay in ${city}!`);
    setTimeout(() => setMessage(null), 3000); // Hide message after 3 seconds
  };

  const filteredPlaces = selectedCity
    ? places.filter(place => place.city === selectedCity)
    : places;

  return (
    <section className="py-16 bg-gradient-to-br from-indigo-900 to-purple-900 relative">
      {/* Glassmorphism background */}
      <div className="absolute inset-0 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg"></div>

      {/* Captivating color circles */}
      <div className="absolute w-full h-full">
        <div className="absolute top-0 right-0 w-128 h-128 bg-royal-blue rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-128 h-128 bg-royal-purple rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-3000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl font-bold mb-2 text-white">
          Featured places to stay
        </h2>
        <p className="text-xl text-purple-300 mb-8">
          Popular places that .fis recommends for your next adventure
        </p>

        <div className="flex space-x-4 mb-8 overflow-x-auto pb-4">
          {cities.map((city) => (
            <button
              key={city}
              className={`px-6 py-3 bg-indigo-600 bg-opacity-80 text-white rounded-full hover:bg-opacity-100 transition-all duration-300 shadow-lg transform hover:scale-105 focus:outline-none ${
                selectedCity === city
                  ? 'bg-opacity-100 shadow-inner'
                  : ''
              }`}
              onClick={() => handleCityClick(city)}
            >
              <span className="text-lg font-semibold">{city}</span>
            </button>
          ))}
        </div>

        {message && (
          <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-indigo-600 text-white px-6 py-3 rounded-full shadow-lg z-50 animate-fade-in-out">
            <span className="text-lg font-semibold">{message}</span>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPlaces.map((place, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
              onClick={() => setSelectedPlace(place.name)}
            >
              <img
                src={place.src}
                alt={place.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-purple-300">
                  {place.title}
                </h3>
                <h4 className="text-xl font-bold mb-2 text-white">
                  {place.name}
                </h4>
                <p className="text-indigo-300 mb-4">
                  {place.address}
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-white font-bold">
                    {place.price}
                  </p>
                  <div className="flex items-center bg-purple-700 rounded-full px-3 py-1">
                    <span className="text-yellow-400 mr-1">★</span>
                    <span className="text-white">{place.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedPlace && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white bg-opacity-90 backdrop-filter backdrop-blur-lg p-8 rounded-lg max-w-2xl w-full">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                {places.find(place => place.name === selectedPlace)?.name}
              </h2>
              <p className="text-gray-600 mb-4">
                {places.find(place => place.name === selectedPlace)?.description}
              </p>
              <div className="flex justify-between items-center mb-4">
                <p className="text-gray-800 font-bold">
                  {places.find(place => place.name === selectedPlace)?.price}
                </p>
                <div className="flex items-center bg-purple-700 rounded-full px-3 py-1">
                  <span className="text-yellow-400 mr-1">★</span>
                  <span className="text-white">
                    {places.find(place => place.name === selectedPlace)?.rating}
                  </span>
                </div>
              </div>
              <button
                className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors duration-300"
                onClick={() => setSelectedPlace(null)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

// Videos component
const Videos: React.FC = () => {
  const [mainVideo, setMainVideo] = React.useState({
    title: "Interlaken Switzerland🇨🇭 Walking in the Rain",
    views: "1.2M views",
    duration: "15:30",
    category: "Luxury",
    src: "https://www.youtube.com/watch?v=mNzenfB3OuY",
    index: 0,
  });

  const videos = [
    {
      title: "Explore Netherlands",
      views: "1.2M views",
      duration: "15:30",
      category: "Luxury",
      src: "https://www.youtube.com/watch?v=QVoSgRbd69c",
    },
    {
      title: "Adventure Travel Guide: Tokyo",
      views: "890K views",
      duration: "12:45",
      category: "Adventure",
      src: "https://www.youtube.com/watch?v=cS-hFKC_RKI",
    },
    {
      title: "Hidden Gems of Europe",
      views: "2.5M views",
      duration: "20:15",
      category: "Exploration",
      src: "https://www.youtube.com/watch?v=D0Ggn2BFwkc"
    },
    {
      title: "Culinary Journey",
      views: "1.8M views",
      duration: "18:20",
      category: "Food & Culture",
      src: "https://www.youtube.com/watch?v=NN8nD99B7YY"
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-indigo-900 to-purple-900 relative">
      {/* Glassmorphism background */}
      <div className="absolute inset-0 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg"></div>

      {/* Captivating color circles */}
      <div className="absolute w-full h-full">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-160 h-160 bg-royal-gold rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/4 right-1/4 w-128 h-128 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse animation-delay-3000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Explore Our Captivating Videos
          </h2>
          <p className="text-xl text-indigo-300 max-w-2xl mx-auto">
            Immerse yourself in stunning visuals and inspiring stories from
            around the world.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <div className="relative aspect-video bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-lg overflow-hidden">
              <iframe
                src={mainVideo.src.replace("watch?v=", "embed/")}
                title={mainVideo.title}
                className="w-full h-full"
                allowFullScreen
              ></iframe>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-2xl font-semibold mb-2">
                  {mainVideo.title}
                </h3>
                <div className="flex justify-between items-center">
                  <span>{mainVideo.views}</span>
                  <span className="bg-indigo-600 px-2 py-1 rounded-full text-sm">
                    {mainVideo.category}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 space-y-4">
            {videos.map((video, index) => (
              <div
                key={index}
                className="flex bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-102"
                onClick={() => setMainVideo({ ...video, index })}
              >
                <div className="w-1/3 relative">
                  <img
                    src={`https://img.youtube.com/vi/${video.src.split('v=')[1]}/0.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-1 right-1 bg-black bg-opacity-70 text-white text-xs px-1 py-0.5 rounded">
                    {video.duration}
                  </div>
                </div>
                <div className="w-2/3 p-3">
                  <h4 className="text-sm font-semibold text-white mb-1 line-clamp-2">
                    {video.title}
                  </h4>
                  <p className="text-xs text-indigo-300">
                    {video.views}
                  </p>
                  <span className="text-xs bg-indigo-600 text-white px-2 py-0.5 rounded-full mt-1 inline-block">
                    {video.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero, Benefits, FeaturedPlacesToStay, Videos };
