import { useState } from "react";

const HotelsOffer = () => {
  const hotels = [
    {
      name: "ميتروبول",
      description: "فندق فاخر في قلب المدينة يقدم أفضل الخدمات والراحة.",
      image:
        "https://hi-cdn.t-rp.co.uk/images/hotels/384498/1?width=870&height=480&crop=false", // صورة مؤقتة
    },
    {
      name: "نوفوتيل موسكو سيتي",
      description: "فندق فاخر في قلب المدينة يقدم أفضل الخدمات والراحة.",
      image:
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/234738838.jpg?k=c5da4224092e1ac117764c00a968100a5a7235b24af139dab9a3393a020d6e61&o=&hp=1", // صورة مؤقتة
    },
    {
      name: "ماريوت بلازا",
      description: "فندق خمس نجوم يوفر إقامة مريحة وخدمات راقية.",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/eb/4e/f7/moscow-marriott-imperial.jpg?w=700&h=-1&s=1", // صورة مؤقتة
    },
    {
      name: "رتز كارلتون",
      description: "فندق فاخر يقع في وسط المدينة مع إطلالة رائعة على البحر.",
      image:
        "https://carltonmoscow.com/upload/resize_cache/iblock/e32/480_480_1619711fa078991f0a23d032687646b21/fgc7z8uz6m1uc21mdchpgrrui1ku9ilh.png", // صورة مؤقتة
    },
    {
      name: "فور سيزون",
      description: "فندق خمس نجوم يقدم خدمات متميزة وإقامة مريحة.",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/5d/59/86/exterior--v17631841.jpg?w=700&h=-1&s=1", // صورة مؤقتة
    },
    {
      name: "ناشيونال",
      description: "فندق رائع يقدم إقامة مريحة وخدمات ممتازة.",
      image:
        "https://russia4arab.com/wp-content/uploads/2021/02/d981d986d8afd982-d986d8a7d8b4d988d986d8a7d984-d981d989-d985d988d8b3d983d988-d98ad981d988d8ad-d985d986d987-d8b9d8a8d982-d8a7d984d8aad8a7d8b1d98ad8ae.jpg?w=640", // صورة مؤقتة
    },
    {
      name: "ماربوت",
      description: "فندق عصري يوفر جميع وسائل الراحة والترفيه.",
      image:
        "https://hotelcms-contents-live.tajawal.com/2894bb10-7826-442d-af3f-f413b69035ab.jpg", // صورة مؤقتة
    },
    {
      name: "سانت ريجس",
      description: "فندق فاخر يقدم تجربة إقامة لا تُنسى وخدمات راقية.",
      image:
        "https://the-st-regis-moscow-nikolskaya-hotel.albooked.com/data/Photos/OriginalPhoto/10187/1018778/1018778743/The-St-Regis-Moscow-Nikolskaya-Hotel-Exterior.JPEG", // صورة مؤقتة
    },
    {
      name: "أرارات بارك حياة",
      description: "فندق فاخر يقدم إقامة مريحة وتجربة فريدة.",
      image:
        "https://araratparkhotel.ru/wp-content/uploads/2022/07/cropped-Ararat-Park-Hyatt-Moscow-Exterior-Sky.jpg", // صورة مؤقتة
    },
    {
      name: "ماريوت أرورا",
      description: "فندق عائلي رائع يوفر جميع وسائل الراحة والترفيه.",
      image:
        "https://cdn.worldota.net/t/640x400/extranet/fc/45/fc4586de2778f70bbc8a39cc9f96227b55aac078.jpeg", // صورة مؤقتة
    },
    {
      name: "بلازا جاردن",
      description: "فندق عصري يقع في قلب المدينة مع حدائق جميلة.",
      image:
        "https://crowne-plaza-moscow-world-trade-centre-hotel.nochi.com/data/Photos/OriginalPhoto/9736/973661/973661485/Crowne-Plaza-Moscow-World-Trade-Centre-An-Ihg-Hotel-Exterior.JPEG", // صورة مؤقتة
    },
  ];

  const [showAll, setShowAll] = useState(false);

  const handleShowAll = () => {
    setShowAll(true);
  };

  return (
    <div className="bg-white py-12" id="hotels">
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
