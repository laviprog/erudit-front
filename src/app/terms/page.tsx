import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Пользовательское соглашение | ЭрудитПати',
  description: 'Условия использования сайта erudit-party.ru',
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
    },
  },
  alternates: {
    canonical: 'https://www.erudit-party.ru/terms',
  },
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50 md:pt-12 pt-10">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Пользовательское соглашение</h1>

        <p className="text-gray-600 mb-8">Дата последнего обновления: 06 октября 2025 г.</p>

        <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Общие положения</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Настоящее Пользовательское соглашение (далее — «Соглашение») регулирует отношения
              между вами (далее — «Пользователь») и организатором интеллектуальных игр «ЭрудитПати»
              (далее — «Организатор», «Мы») при использовании сайта www.erudit-party.ru (далее —
              «Сайт»).
            </p>
            <p className="text-gray-700 leading-relaxed">
              Используя Сайт, вы соглашаетесь со всеми условиями настоящего Соглашения. Если вы не
              согласны с какими-либо положениями, пожалуйста, прекратите использование Сайта.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Предмет соглашения</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Организатор предоставляет Пользователю доступ к Сайту для:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Получения информации об интеллектуальных играх «ЭрудитПати»</li>
              <li>Ознакомления с расписанием игр и мероприятий</li>
              <li>Отправки заявок и обращений через форму обратной связи</li>
              <li>Получения консультаций по организации корпоративных мероприятий</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              3. Регистрация и учётная запись
            </h2>
            <p className="text-gray-700 leading-relaxed">
              На текущий момент Сайт не требует обязательной регистрации. Для отправки обращений
              через форму обратной связи достаточно указать ваши контактные данные.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              4. Права и обязанности Пользователя
            </h2>

            <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-4">
              4.1. Пользователь имеет право:
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Использовать Сайт в информационных целях</li>
              <li>Отправлять обращения через форму обратной связи</li>
              <li>Получать информацию об играх и мероприятиях</li>
              <li>Обращаться к Организатору с вопросами и предложениями</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
              4.2. Пользователь обязуется:
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Не использовать Сайт в незаконных целях</li>
              <li>Не размещать и не передавать через Сайт незаконный контент</li>
              <li>Предоставлять достоверную информацию при заполнении форм</li>
              <li>Не нарушать работу Сайта и не пытаться получить несанкционированный доступ</li>
              <li>Соблюдать авторские права и права интеллектуальной собственности</li>
              <li>Не использовать автоматизированные средства для сбора информации с Сайта</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              5. Права и обязанности Организатора
            </h2>

            <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-4">
              5.1. Организатор имеет право:
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Изменять содержание и функционал Сайта без предварительного уведомления</li>
              <li>Приостанавливать работу Сайта для проведения технических работ</li>
              <li>Ограничивать доступ к Сайту при нарушении настоящего Соглашения</li>
              <li>Использовать обезличенные данные для улучшения работы Сайта</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
              5.2. Организатор обязуется:
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Обрабатывать персональные данные в соответствии с законодательством РФ</li>
              <li>Обеспечивать защиту информации Пользователей</li>
              <li>Отвечать на обращения Пользователей в разумные сроки</li>
              <li>Предоставлять актуальную информацию об играх и мероприятиях</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              6. Интеллектуальная собственность
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Все материалы Сайта, включая текст, графику, логотипы, изображения, видео и
              программное обеспечение, являются интеллектуальной собственностью Организатора или
              используются с разрешения правообладателей.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Запрещается копирование, распространение, изменение или любое другое использование
              материалов Сайта без письменного разрешения Организатора.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              7. Обработка персональных данных
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Обработка персональных данных Пользователей осуществляется в соответствии с{' '}
              <a href="/privacy" className="text-blue-600 hover:underline font-medium">
                Политикой конфиденциальности
              </a>
              . Используя Сайт и отправляя свои данные через форму обратной связи, вы соглашаетесь с
              условиями обработки персональных данных.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              8. Ограничение ответственности
            </h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded mb-4">
              <p className="text-gray-800 font-semibold mb-2">Важно:</p>
              <p className="text-gray-700 leading-relaxed">
                Сайт предоставляется «как есть». Организатор не несёт ответственности за:
              </p>
            </div>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Временную недоступность или перебои в работе Сайта</li>
              <li>Возможные ошибки или неточности в информации на Сайте</li>
              <li>Действия третьих лиц, использующих информацию Сайта</li>
              <li>
                Убытки, возникшие в результате использования или невозможности использования Сайта
              </li>
              <li>
                Технические проблемы на стороне Пользователя (браузер, интернет-соединение и т.д.)
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Заявки и обращения</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              При отправке заявки через форму обратной связи:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Заявка обрабатывается в течение 1-3 рабочих дней</li>
              <li>Мы свяжемся с вами по указанным контактам</li>
              <li>Отправка заявки не является заключением договора</li>
              <li>Окончательные условия обсуждаются индивидуально</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Использование cookies</h2>
            <p className="text-gray-700 leading-relaxed">
              Сайт использует файлы cookies для улучшения работы и анализа посещаемости. Подробная
              информация доступна в нашей{' '}
              <a href="/cookies" className="text-blue-600 hover:underline font-medium">
                Политике использования cookies
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              11. Изменение условий соглашения
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Организатор оставляет за собой право изменять условия настоящего Соглашения в любое
              время. Дата последнего обновления указана в начале документа.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Продолжая использовать Сайт после внесения изменений, вы соглашаетесь с обновлённой
              версией Соглашения. Рекомендуем регулярно проверять эту страницу на предмет изменений.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              12. Применимое право и разрешение споров
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Настоящее Соглашение регулируется законодательством Российской Федерации.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Все споры, возникающие в связи с использованием Сайта, разрешаются путём переговоров.
              В случае невозможности достижения согласия, споры подлежат разрешению в судебном
              порядке по месту нахождения Организатора.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Контактная информация</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              По всем вопросам, связанным с настоящим Соглашением, вы можете обратиться к нам:
            </p>
            <div className="bg-gray-50 rounded-lg p-6 space-y-3">
              <div>
                <p className="text-gray-600 text-sm">Организация:</p>
                <p className="text-gray-900 font-medium">ЭрудитПати</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm">Email:</p>
                <p className="text-gray-900">
                  <a href="mailto:info@erudit-party.ru" className="text-blue-600 hover:underline">
                    info@erudit-party.ru
                  </a>
                </p>
              </div>
              <div>
                <p className="text-gray-600 text-sm">Сайт:</p>
                <p className="text-gray-900">
                  <a href="https://www.erudit-party.ru" className="text-blue-600 hover:underline">
                    www.erudit-party.ru
                  </a>
                </p>
              </div>
              <div>
                <p className="text-gray-600 text-sm">Адрес:</p>
                <p className="text-gray-900">Камышин, Волгоградская область</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. Принятие условий</h2>
            <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
              <p className="text-gray-800 leading-relaxed">
                Используя Сайт www.erudit-party.ru, вы подтверждаете, что:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 mt-2 ml-4">
                <li>Ознакомились с настоящим Пользовательским соглашением</li>
                <li>Полностью понимаете и принимаете все условия Соглашения</li>
                <li>Обязуетесь соблюдать правила использования Сайта</li>
                <li>
                  Достигли возраста 18 лет или используете Сайт под контролем родителей/опекунов
                </li>
              </ul>
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
                href="/cookies"
                className="inline-block bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
              >
                Политика использования cookies
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
