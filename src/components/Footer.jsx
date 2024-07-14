import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaSnapchat,
  FaWhatsapp,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-medium text-white">عن الشركة</h3>
            <p className="mt-4 text-sm text-gray-400">
              نحن نسعى لتوفير أفضل العروض والخدمات السياحية التي تناسب جميع
              احتياجاتكم. سواء كنتم تبحثون عن فنادق فاخرة، أو رحلات مميزة، أو
              فعاليات شيقة، نحن هنا لنقدم لكم تجربة سفر لا تُنسى.
            </p>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium text-white">روابط سريعة</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white">
                  عن الشركة
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white">
                  الفنادق
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white">
                  عروض
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white">
                  فعاليات
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white">
                  تواصل معنا
                </a>
              </li>
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-medium text-white">معلومات الاتصال</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-400">
              <li>
                <span className="font-bold text-white">العنوان:</span> شارع
                السلام، المدينة، الدولة
              </li>
              <li>
                <span className="font-bold text-white">الهاتف:</span> +123 456
                789
              </li>
              <li>
                <span className="font-bold text-white">البريد الإلكتروني:</span>{" "}
                info@example.com
              </li>
            </ul>
            <div className="mt-6 flex justify-center space-x-6 space-x-reverse">
              <a href="#" className="text-gray-400 hover:text-white">
                <FaSnapchat className="h-6 w-6" />
                <span className="sr-only">سناب شات</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaWhatsapp className="h-6 w-6" />
                <span className="sr-only">واتساب</span>
              </a>
              <a
                href="tel:+123456789"
                className="text-gray-400 hover:text-white"
              >
                <FaPhone className="h-6 w-6" />
                <span className="sr-only">هاتف</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaFacebook className="h-6 w-6" />
                <span className="sr-only">فيسبوك</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaTwitter className="h-6 w-6" />
                <span className="sr-only">تويتر</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaInstagram className="h-6 w-6" />
                <span className="sr-only">إنستغرام</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaLinkedin className="h-6 w-6" />
                <span className="sr-only">لينكدإن</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8 text-center">
          <p className="text-sm text-gray-400">
            &copy; 2024 RusArabic. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
