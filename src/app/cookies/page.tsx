import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Политика использования файлов Cookie | ЭрудитПати',
  description: 'Информация об использовании файлов cookie на сайте erudit-party.ru',
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
    },
  },
  alternates: {
    canonical: 'https://www.erudit-party.ru/cookies',
  },
};

export default function CookiesPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 md:pt-12 pt-10">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Политика использования файлов Cookie
        </h1>

        <p className="text-gray-600 mb-8">Дата последнего обновления: 05 октября 2025 г.</p>

        <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Что такое cookies</h2>
            <p className="text-gray-700 leading-relaxed">
              Файлы cookie — это небольшие текстовые файлы, которые сохраняются на вашем устройстве
              (компьютере, планшете или мобильном телефоне) при посещении сайта erudit-party.ru. Они
              помогают сайту запоминать информацию о вашем визите, что делает последующие посещения
              более удобными и полезными.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              2. Какие cookies мы используем
            </h2>

            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Необходимые cookies</h3>
                <p className="text-gray-700 mb-2">
                  Эти файлы необходимы для работы сайта и не могут быть отключены.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Файлы сеанса для обеспечения безопасности</li>
                  <li>Сохранение настроек пользователя</li>
                  <li>Запоминание согласия на использование cookies</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Аналитические cookies</h3>
                <p className="text-gray-700 mb-2">
                  Помогают нам понять, как посетители взаимодействуют с сайтом, собирая и передавая
                  информацию анонимно.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Яндекс.Метрика — анализ посещаемости и поведения пользователей</li>
                  <li>Статистика просмотров страниц</li>
                  <li>Время нахождения на сайте</li>
                </ul>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Функциональные cookies</h3>
                <p className="text-gray-700 mb-2">
                  Позволяют сайту запоминать сделанный вами выбор и предоставлять расширенные
                  персонализированные функции.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Сохранение языковых предпочтений</li>
                  <li>Запоминание выбранного региона</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Сторонние сервисы</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Мы используем следующие сторонние сервисы, которые могут устанавливать свои cookies:
            </p>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-gray-900">Яндекс.Метрика</p>
                  <p className="text-gray-600 text-sm">
                    Сервис веб-аналитики для сбора статистики посещений.
                  </p>
                  <a
                    href="https://metrica.yandex.ru/about/info/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-sm"
                  >
                    Политика конфиденциальности Яндекс.Метрики →
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Управление cookies</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Вы можете контролировать и/или удалять файлы cookies по своему усмотрению. Вы можете
              удалить все cookies, которые уже находятся на вашем устройстве, а также настроить
              большинство браузеров так, чтобы они блокировали их размещение.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
              <p className="text-gray-800 font-semibold mb-2">Как отключить cookies в браузерах:</p>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <span className="font-medium">Google Chrome:</span> Настройки → Конфиденциальность
                  и безопасность → Файлы cookie
                </li>
                <li>
                  <span className="font-medium">Mozilla Firefox:</span> Настройки → Приватность и
                  защита → Куки и данные сайтов
                </li>
                <li>
                  <span className="font-medium">Safari:</span> Настройки → Конфиденциальность →
                  Файлы cookie
                </li>
                <li>
                  <span className="font-medium">Яндекс.Браузер:</span> Настройки → Сайты →
                  Расширенные настройки сайтов → Cookie
                </li>
              </ul>
            </div>

            <p className="text-gray-600 text-sm mt-4 italic">
              Обратите внимание: при отключении cookies некоторые функции сайта могут работать
              некорректно.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Ваше согласие</h2>
            <p className="text-gray-700 leading-relaxed">
              Используя наш сайт, вы соглашаетесь с использованием файлов cookies в соответствии с
              настоящей Политикой. Если вы не согласны с использованием cookies, пожалуйста,
              измените настройки вашего браузера или прекратите использование сайта.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Изменения в политике</h2>
            <p className="text-gray-700 leading-relaxed">
              Мы можем периодически обновлять настоящую Политику использования cookies. Дата
              последнего обновления указана в начале документа. Рекомендуем время от времени
              проверять эту страницу на предмет изменений.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Контактная информация</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Если у вас есть вопросы относительно использования cookies на нашем сайте, вы можете
              связаться с нами:
            </p>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-gray-700">
                <span className="font-semibold">Email:</span>{' '}
                <a href="mailto:info@erudit-party.ru" className="text-blue-600 hover:underline">
                  info@erudit-party.ru
                </a>
              </p>
              <p className="text-gray-700 mt-2">
                <span className="font-semibold">Сайт:</span>{' '}
                <a href="https://www.erudit-party.ru" className="text-blue-600 hover:underline">
                  www.erudit-party.ru
                </a>
              </p>
            </div>
          </section>

          <section className="pt-6 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Связанные документы:</h3>
            <div className="flex flex-wrap gap-3">
              <a
                href="/privacy"
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Политика конфиденциальности
              </a>
              <a
                href="/terms"
                className="inline-block bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
              >
                Пользовательское соглашение
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
