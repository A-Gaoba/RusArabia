import { FaSnapchat, FaWhatsapp, FaPhone } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            تواصل معنا
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            نحن هنا لمساعدتك
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            إذا كان لديك أي استفسارات أو تحتاج إلى أي مساعدة، لا تتردد في التواصل معنا عبر النموذج أدناه أو عبر وسائل الاتصال المختلفة.
          </p>
        </div>
        <div className="mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 shadow-xl rounded-lg transform transition duration-500 hover:scale-105">
              <h3 className="text-lg font-medium text-gray-900">
                أرسل لنا رسالة
              </h3>
              <form className="mt-6">
                <div className="grid grid-cols-1 gap-y-6">
                  <div>
                    <label htmlFor="name" className="sr-only">
                      الاسم
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="name"
                      placeholder="الاسم"
                      className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">
                      البريد الإلكتروني
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      placeholder="البريد الإلكتروني"
                      className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="sr-only">
                      الرسالة
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows="4"
                      placeholder="الرسالة"
                      className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500"
                    ></textarea>
                  </div>
                </div>
                <div className="mt-6">
                  <button
                    type="submit"
                    className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-lg text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    أرسل الرسالة
                  </button>
                </div>
              </form>
            </div>
            <div className="bg-white p-8 shadow-xl rounded-lg transform transition duration-500 hover:scale-105">
              <h3 className="text-lg font-medium text-gray-900">
                معلومات الاتصال
              </h3>
              <ul className="mt-6 space-y-4 text-gray-600 text-right">
                <li>
                  <span className="font-bold">العنوان:</span> شارع السلام، المدينة، الدولة
                </li>
                <li>
                  <span className="font-bold">الهاتف:</span> +123 456 789
                </li>
                <li>
                  <span className="font-bold">البريد الإلكتروني:</span> info@example.com
                </li>
              </ul>
              <div className="mt-8 flex justify-center space-x-6 space-x-reverse">
                <a href="#" className="text-yellow-500 hover:text-yellow-600">
                  <FaSnapchat className="h-8 w-8" />
                  <span className="sr-only">سناب شات</span>
                </a>
                <a href="#" className="text-green-500 hover:text-green-600">
                  <FaWhatsapp className="h-8 w-8" />
                  <span className="sr-only">واتساب</span>
                </a>
                <a href="tel:+123456789" className="text-blue-500 hover:text-blue-600">
                  <FaPhone className="h-8 w-8" />
                  <span className="sr-only">هاتف</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
