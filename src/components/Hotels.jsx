import { useState } from 'react';

const HotelsOffer = () => {
  const hotels = [
    {
      name: "ميتروبول",
      description: "فندق فاخر في قلب المدينة يقدم أفضل الخدمات والراحة.",
      image: "https://via.placeholder.com/150", // صورة مؤقتة
    },
    {
      name: "فندق تالون الإمبراطوري",
      description: "فندق إمبراطوري يقدم تجربة فاخرة وخدمات متميزة.",
      image: "https://via.placeholder.com/150", // صورة مؤقتة
    },
    {
      name: "ماريوت بلازا",
      description: "فندق خمس نجوم يوفر إقامة مريحة وخدمات راقية.",
      image: "https://via.placeholder.com/150", // صورة مؤقتة
    },
    {
      name: "رتز كارلتون",
      description: "فندق فاخر يقع في وسط المدينة مع إطلالة رائعة على البحر.",
      image: "https://via.placeholder.com/150", // صورة مؤقتة
    },
    {
      name: "فور سيزون",
      description: "فندق خمس نجوم يقدم خدمات متميزة وإقامة مريحة.",
      image: "https://via.placeholder.com/150", // صورة مؤقتة
    },
    {
      name: "ناشيونال",
      description: "فندق رائع يقدم إقامة مريحة وخدمات ممتازة.",
      image: "https://via.placeholder.com/150", // صورة مؤقتة
    },
    {
      name: "ماربوت",
      description: "فندق عصري يوفر جميع وسائل الراحة والترفيه.",
      image: "https://via.placeholder.com/150", // صورة مؤقتة
    },
    {
      name: "سانت ريجس",
      description: "فندق فاخر يقدم تجربة إقامة لا تُنسى وخدمات راقية.",
      image: "https://via.placeholder.com/150", // صورة مؤقتة
    },
    {
      name: "أرارات بارك حياة",
      description: "فندق فاخر يقدم إقامة مريحة وتجربة فريدة.",
      image: "https://via.placeholder.com/150", // صورة مؤقتة
    },
    {
      name: "ماريوت أرورا",
      description: "فندق عائلي رائع يوفر جميع وسائل الراحة والترفيه.",
      image: "https://via.placeholder.com/150", // صورة مؤقتة
    },
    {
      name: "بلازا جاردن",
      description: "فندق عصري يقع في قلب المدينة مع حدائق جميلة.",
      image: "https://via.placeholder.com/150", // صورة مؤقتة
    },
    {
      name: "نوفوتيل موسكو سيتي",
      description: "فندق متميز في وسط موسكو يقدم إقامة مريحة وخدمات ممتازة.",
      image: "https://via.placeholder.com/150", // صورة مؤقتة
    },
  ];

  const [showAll, setShowAll] = useState(false);

  const handleShowAll = () => {
    setShowAll(true);
  };

  return (
    <div className="bg-white py-12" id='hotels'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-indigo-600 font-extrabold text-4xl tracking-wide mb-4">
          عروض الفنادق
        </h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hotels.slice(0, showAll ? hotels.length : 6).map((hotel) => (
            <div
              key={hotel.name}
              className="text-center border p-4 rounded-lg shadow-lg"
            >
              <img
                className="h-48 w-full rounded-md mx-auto"
                src={hotel.image}
                alt={hotel.name}
              />
              <h3 className="mt-4 text-lg leading-6 font-medium text-gray-900">
                {hotel.name}
              </h3>
              <p className="mt-2 text-base leading-6 text-gray-500">
                {hotel.description}
              </p>
            </div>
          ))}
        </div>
        {!showAll && (
          <div className="mt-10">
            <button
              onClick={handleShowAll}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg"
            >
              عرض الكل
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HotelsOffer;
