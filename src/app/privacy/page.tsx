import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Политика конфиденциальности | ЭрудитПати',
  description: 'Политика обработки персональных данных на сайте erudit-party.ru',
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
    },
  },
  alternates: {
    canonical: 'https://www.erudit-party.ru/privacy',
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 md:pt-12 pt-10">

      <div className="max-w-4xl mx-auto px-4 py-12">

        <h1 className="text-4xl font-bold text-gray-900 mb-2">Политика конфиденциальности</h1>

        <p className="text-gray-600 mb-8">Дата последнего обновления: 06 октября 2025 г.</p>

        <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Общие положения</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Настоящая Политика конфиденциальности определяет порядок обработки и защиты
              персональных данных пользователей сайта www.erudit-party.ru (далее — «Сайт»).
            </p>
            <p className="text-gray-700 leading-relaxed mb-3">
              Оператором персональных данных является организатор интеллектуальных игр «ЭрудитПати»
              (далее — «Оператор», «Мы»).
            </p>
            <p className="text-gray-700 leading-relaxed">
              Используя Сайт и отправляя нам свои персональные данные, вы даёте согласие на их
              обработку в соответствии с настоящей Политикой конфиденциальности и Федеральным
              законом от 27.07.2006 № 152-ФЗ «О персональных данных».
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              2. Какие данные мы собираем
            </h2>
            <p className="text-gray-700 mb-3">
              При использовании Сайта и заполнении формы обратной связи мы можем собирать следующие
              персональные данные:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>
                <span className="font-medium">Имя и фамилия</span> — для обращения к вам
              </li>
              <li>
                <span className="font-medium">Адрес электронной почты</span> — для связи с вами
              </li>
              <li>
                <span className="font-medium">Номер телефона</span> — для оперативной связи
              </li>
              <li>
                <span className="font-medium">Сообщение</span> — текст вашего обращения
              </li>
              <li>
                <span className="font-medium">Цель обращения</span> — консультация, партнёрство,
                заказ игры и т.д.
              </li>
              <li>
                <span className="font-medium">Технические данные</span> — IP-адрес, тип браузера,
                данные cookies (см.{' '}
                <a href="/cookies" className="text-blue-600 hover:underline">
                  Политику cookies
                </a>
                )
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              3. Цели обработки персональных данных
            </h2>
            <p className="text-gray-700 mb-3">
              Мы обрабатываем ваши персональные данные для следующих целей:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Обработка и ответ на ваши обращения через форму обратной связи</li>
              <li>Предоставление информации об интеллектуальных играх и мероприятиях</li>
              <li>Организация и проведение игр, консультирование по вопросам заказа</li>
              <li>Улучшение качества обслуживания и работы Сайта</li>
              <li>Анализ посещаемости и поведения пользователей (с помощью Яндекс.Метрики)</li>
              <li>Исполнение договорных обязательств</li>
              <li>Соблюдение требований действующего законодательства РФ</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              4. Правовые основания обработки данных
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Обработка персональных данных осуществляется на основании:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Вашего согласия, предоставленного при заполнении формы на Сайте</li>
              <li>Необходимости исполнения договора, стороной которого вы являетесь</li>
              <li>Требований законодательства Российской Федерации</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              5. Сроки хранения персональных данных
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Ваши персональные данные хранятся в течение:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Срока, необходимого для достижения целей обработки</li>
              <li>Срока действия вашего согласия (до его отзыва)</li>
              <li>
                Срока, установленного законодательством РФ (не менее 3 лет с момента последнего
                обращения)
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-3">
              После истечения указанных сроков персональные данные удаляются или обезличиваются.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              6. Передача данных третьим лицам
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Мы не передаём ваши персональные данные третьим лицам, за исключением случаев:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>
                Когда это необходимо для выполнения наших обязательств перед вами (например,
                организация мероприятия)
              </li>
              <li>Когда передача требуется по закону или решению суда</li>
              <li>С вашего явного согласия</li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded mt-4">
              <p className="text-gray-800 font-semibold mb-2">Сервисы третьих сторон:</p>
              <p className="text-gray-700 mb-2">
                Мы используем следующие сторонние сервисы, которые могут обрабатывать ваши данные в
                соответствии с собственными политиками конфиденциальности:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>
                  <span className="font-medium">Яндекс.Метрика</span> — аналитика посещаемости (
                  <a
                    href="https://metrica.yandex.ru/about/info/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    политика конфиденциальности
                  </a>
                  )
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              7. Меры защиты персональных данных
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Мы применяем технические и организационные меры для защиты ваших данных:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Использование защищённого протокола HTTPS для передачи данных</li>
              <li>Ограничение доступа к персональным данным только уполномоченным лицам</li>
              <li>Регулярное резервное копирование данных</li>
              <li>Защита от несанкционированного доступа, изменения или уничтожения данных</li>
              <li>Обучение сотрудников правилам обработки и защиты персональных данных</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Ваши права</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              В соответствии с законодательством РФ вы имеете право:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>
                <span className="font-medium">Получить информацию</span> о том, какие ваши данные
                обрабатываются
              </li>
              <li>
                <span className="font-medium">Требовать уточнения</span> неточных или неполных
                данных
              </li>
              <li>
                <span className="font-medium">Требовать удаления</span> своих персональных данных
              </li>
              <li>
                <span className="font-medium">Отозвать согласие</span> на обработку персональных
                данных
              </li>
              <li>
                <span className="font-medium">Обжаловать действия</span> Оператора в уполномоченном
                органе (Роскомнадзор) или в суде
              </li>
              <li>
                <span className="font-medium">Получить копию</span> своих данных в структурированном
                формате
              </li>
            </ul>

            <p className="text-gray-700 leading-relaxed mt-4">
              Для реализации своих прав обратитесь к нам по контактам, указанным в разделе 11.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Использование cookies</h2>
            <p className="text-gray-700 leading-relaxed">
              Наш Сайт использует файлы cookies для улучшения работы и анализа посещаемости.
              Подробная информация о том, какие cookies мы используем и как ими управлять, доступна
              в нашей{' '}
              <a href="/cookies" className="text-blue-600 hover:underline font-medium">
                Политике использования cookies
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              10. Изменения в политике конфиденциальности
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Мы оставляем за собой право вносить изменения в настоящую Политику конфиденциальности.
              Дата последнего обновления указана в начале документа. Актуальная версия всегда
              доступна на этой странице. Продолжая использовать Сайт после внесения изменений, вы
              соглашаетесь с обновлённой Политикой.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Контактная информация</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              По всем вопросам, связанным с обработкой персональных данных, вы можете обратиться к
              нам:
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
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              12. Согласие на обработку персональных данных
            </h2>
            <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
              <p className="text-gray-800 leading-relaxed">
                Отправляя форму обратной связи на нашем Сайте, вы подтверждаете, что:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 mt-2 ml-4">
                <li>Ознакомились с настоящей Политикой конфиденциальности</li>
                <li>Согласны на обработку ваших персональных данных в указанных целях</li>
                <li>Понимаете свои права и способы их реализации</li>
              </ul>
            </div>
          </section>

          <section className="pt-6 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Связанные документы:</h3>
            <div className="flex flex-wrap gap-3">
              <a
                href="/cookies"
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Политика использования cookies
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
