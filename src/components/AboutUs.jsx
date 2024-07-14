const AboutMe = () => {
  const services = [
    {
      name: "حجوزات فنادق",
      description:
        "نوفر لكم أفضل العروض على حجوزات الفنادق لنضمن لكم إقامة مريحة وممتعة.",
      icon: "🏨", // رمز مؤقت
    },
    {
      name: "إستقبال من والى المطار",
      description:
        "نقدم خدمات استقبال وتوصيل من وإلى المطار بكل سهولة وراحة لضمان بداية ونهاية رحلة ممتعة.",
      icon: "✈️", // رمز مؤقت
    },
    {
      name: "حجز فعاليات",
      description:
        "نسهل عليكم حجز تذاكر الفعاليات والأنشطة المختلفة لتستمتعوا بأفضل التجارب.",
      icon: "🎟️", // رمز مؤقت
    },
    {
      name: "ترتيب رحلات فردية وجماعية",
      description:
        "نرتب لكم رحلات فردية وجماعية مخصصة لتناسب كافة احتياجاتكم وتفضيلاتكم.",
      icon: "🚌", // رمز مؤقت
    },
    {
      name: "تحويلات من الخليج إلى روسيا",
      description:
        "نقدم خدمات تحويل الأموال بين دول الخليج وروسيا بأمان وسرعة عالية.",
      icon: "💱", // رمز مؤقت
    },
    {
      name: "جولات سياحية",
      description:
        "ننظم جولات سياحية مميزة لاستكشاف أجمل الأماكن والمعالم السياحية بطريقة ممتعة.",
      icon: "🌍", // رمز مؤقت
    },
    {
      name: "خدمات أخرى",
      description:
        "نوفر مجموعة متنوعة من الخدمات الأخرى لتلبية جميع احتياجاتكم أثناء السفر.",
      icon: "🔧", // رمز مؤقت
    },
  ];

  return (
    <div className="bg-white py-12" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-indigo-600 font-extrabold text-4xl tracking-wide mb-4">
          عن الشركة
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          نقدم لكم أفضل الخدمات السياحية لضمان تجربة سفر لا تُنسى. من حجوزات
          الفنادق إلى تنظيم الفعاليات والجولات السياحية، نضمن لكم رحلة مريحة
          وممتعة.
        </p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <span className="block text-4xl font-extrabold text-gray-900">
              06 سنوات
            </span>
            <span className="mt-1 block text-lg leading-6 font-medium text-gray-500">
              خبرة
            </span>
          </div>
          <div>
            <span className="block text-4xl font-extrabold text-gray-900">
              587+
            </span>
            <span className="mt-1 block text-lg leading-6 font-medium text-gray-500">
              عملاء سعداء
            </span>
          </div>
          <div>
            <span className="block text-4xl font-extrabold text-gray-900">
              350+
            </span>
            <span className="mt-1 block text-lg leading-6 font-medium text-gray-500">
              مشاريع مُنجزة
            </span>
          </div>
        </div>
        <div className="mt-10 flex justify-center">
          <img
            className="h-32 w-32 rounded-full mx-auto"
            src="https://via.placeholder.com/150"
            alt="الملف الشخصي"
          />
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.name} className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mx-auto">
                {service.icon}
              </div>
              <h3 className="mt-2 text-lg leading-6 font-medium text-gray-900">
                {service.name}
              </h3>
              <p className="mt-2 text-base leading-6 text-gray-500">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
