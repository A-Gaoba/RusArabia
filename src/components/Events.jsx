import { useState } from "react";

const Events = () => {
  const events = [
    {
      name: "كلاب الهاسكي",
      description: "استمتع بجولات مذهلة مع كلاب الهاسكي في الريف الروسي.",
      image: "https://via.placeholder.com/150", // صورة مؤقتة
    },
    {
      name: "الدب",
      description: "لقاء قريب مع الدببة الروسية في بيئتها الطبيعية.",
      image: "https://via.placeholder.com/150", // صورة مؤقتة
    },
    {
      name: "الأكواخ في الريف الروسي",
      description: "تجربة الإقامة في الأكواخ الريفية وسط الطبيعة الخلابة.",
      image: "https://via.placeholder.com/150", // صورة مؤقتة
    },
    {
      name: "سيارات الدريفت",
      description: "قيادة سيارات الدريفت المثيرة في مضمار خاص.",
      image: "https://via.placeholder.com/150", // صورة مؤقتة
    },
    {
      name: "هليكوبتر",
      description: "جولات مروحية مذهلة لمشاهدة المعالم من السماء.",
      image: "https://via.placeholder.com/150", // صورة مؤقتة
    },
    {
      name: "دبابات كبيرة",
      description: "تجربة قيادة الدبابات الكبيرة في ميادين خاصة.",
      image: "https://via.placeholder.com/150", // صورة مؤقتة
    },
    {
      name: "دبابات الثلج",
      description: "مغامرات على دبابات الثلج في المناظر الطبيعية الثلجية.",
      image: "https://via.placeholder.com/150", // صورة مؤقتة
    },
    {
      name: "المنطاد",
      description: "رحلات منطاد هوائي لرؤية المناظر الطبيعية الخلابة.",
      image: "https://via.placeholder.com/150", // صورة مؤقتة
    },
    {
      name: "الكروز",
      description: "رحلات بحرية فاخرة للاستمتاع بالمحيطات والأنهار.",
      image: "https://via.placeholder.com/150", // صورة مؤقتة
    },
    {
      name: "تذاكر المتاحف",
      description: "استكشاف أفضل المتاحف والمعارض الثقافية.",
      image: "https://via.placeholder.com/150", // صورة مؤقتة
    },
    {
      name: "تذاكر طيران داخلي _قطارات",
      description: "حجز تذاكر الطيران الداخلي والقطارات للسفر بسهولة.",
      image: "https://via.placeholder.com/150", // صورة مؤقتة
    },
    {
      name: "الزبلاين",
      description: "تجربة الزبلاين المثيرة عبر الغابات والوديان.",
      image: "https://via.placeholder.com/150", // صورة مؤقتة
    },
    {
      name: "التلفريك",
      description: "ركوب التلفريك لمشاهدة المناظر البانورامية الخلابة.",
      image: "https://via.placeholder.com/150", // صورة مؤقتة
    },
    {
      name: "جولات سياحية",
      description: "جولات سياحية منظمة لاكتشاف أجمل الأماكن والمعالم.",
      image: "https://via.placeholder.com/150", // صورة مؤقتة
    },
    {
      name: "كارتنج",
      description: "سباقات الكارتنج المثيرة لمحبي السرعة والإثارة.",
      image: "https://via.placeholder.com/150", // صورة مؤقتة
    },
  ];

  const [showAll, setShowAll] = useState(false);

  const handleShowAll = () => {
    setShowAll(true);
  };

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
          فعاليات
        </h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.slice(0, showAll ? events.length : 6).map((event) => (
            <div
              key={event.name}
              className="text-center border p-4 rounded-lg shadow-lg"
            >
              <img
                className="h-48 w-full rounded-md mx-auto"
                src={event.image}
                alt={event.name}
              />
              <h3 className="mt-4 text-lg leading-6 font-medium text-gray-900">
                {event.name}
              </h3>
              <p className="mt-2 text-base leading-6 text-gray-500">
                {event.description}
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

export default Events;
