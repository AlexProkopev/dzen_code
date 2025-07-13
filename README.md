
<body>

  <h1>Orders & Products SPA</h1>

  <p>
    Полноценное одностраничное приложение для отображения и управления заказами и товарами.
    Проект построен на современном fullstack-стеке с использованием модульного подхода и семантической верстки.
    Интерфейс адаптивный и работает в реальном времени через WebSocket.
  </p>

  <h2>⚙️ Используемые технологии</h2>

  <ul>
    <li><strong>Frontend (client/):</strong>
      <ul>
        <li>React 18</li>
        <li>Redux Toolkit (состояние заказов и товаров)</li>
        <li>React Router</li>
        <li>Bootstrap 5 (адаптивная вёрстка и стили)</li>
        <li>Axios (HTTP-запросы к API)</li>
        <li>Socket.IO Client (счётчик вкладок в реальном времени)</li>
      </ul>
    </li>
    <li><strong>Backend (server/):</strong>
      <ul>
        <li>Node.js + Express</li>
        <li>MongoDB + Mongoose (хранение заказов и товаров)</li>
        <li>Socket.IO Server (реалтайм-соединения)</li>
        <li>dotenv, cors, helmet</li>
      </ul>
    </li>
  </ul>

  <h2>📁 Архитектура компонентов (src/components)</h2>
  <ul>
    <li><code>DeleteConfirmModal</code> — модальное окно подтверждения удаления</li>
    <li><code>Layout</code> — каркас приложения с TopMenu и NavigationMenu</li>
    <li><code>Loader</code> — индикатор локальной загрузки</li>
    <li><code>OrderCard</code> — карточка заказа с выпадающим списком продуктов</li>
    <li><code>PaginationControls</code> — управление страницами</li>
    <li><code>ProductsList</code> — отображение всех продуктов с фильтрацией</li>
    <li><code>TypeFilter</code> — фильтр по типу продукта</li>
    <li><code>WebSocketCounter</code> — отображение количества активных вкладок</li>
  </ul>

  <h2>📚 Структура проекта</h2>

  <h3>Клиент (client/)</h3>
  <ul>
    <li><code>components/</code> — переиспользуемые UI-компоненты</li>
    <li><code>pages/</code> — Страницы приложения</li>
    <li><code>redux/</code> — состояния, асинхронные запросы и селекторы (orders/products)</li>
    <li><code>App.jsx</code>, <code>index.js</code> — точка входа и маршрутизация</li>
  </ul>

  <h3>Сервер (server/)</h3>
  <ul>
    <li><code>models/</code> — схемы MongoDB для заказов и товаров</li>
    <li><code>controllers/</code> — логика обработки запросов</li>
    <li><code>services/</code> — вспомогательные функции для контроллеров</li>
    <li><code>routes/</code> — REST API endpoints</li>
    <li><code>db.js</code> — подключение к MongoDB</li>
    <li><code>server.js</code> — запуск сервера + socket.io</li>
  </ul>

  <p>
    Сервер находится на хостинге railway.com. Его можно запустить отдельно для разработки, либо для превью просто по ссылке живой страницы.
  </p>

  <a href="https://github.com/AlexProkopev/dzen_code_data">Cылка на репозиторий с Back-End и документацией</a>

  <h2>🚀 Как запустить</h2>

  <h3>Backend</h3>
  <pre><code>cd server
npm install
npm run dev</code></pre>


  <h3>Frontend</h3>
  <pre><code>cd client
npm install
npm start</code></pre>

<h3>🚀 Запуск через Docker</h3>
<pre><code># 1. Клонируй репозиторий
git clone https://github.com/AlexProkopev/dzen-code.git
cd dzen-code

# 2. Собери Docker-образ
docker build -t dzen-code-front .

# 3. Запусти контейнер (React SPA на порту 3000)
docker run -p 3000:80 dzen-code-front
</code></pre>

<p>⚠️ Приложение ожидает, что Backend доступен по адресу <code>http://localhost:8080</code><br>
Убедись, что он запущен локально или используй Railway-версию (ниже по ссылке документация)</p>

<a href="https://github.com/AlexProkopev/dzen_code_data">Перейти к репозиторию Backend</a>


  <h2>📌 Основной функционал</h2>
  <ul>
    <li>Просмотр заказов с детализацией</li>
    <li>Фильтрация и отображение продуктов</li>
    <li>Удаление заказов с подтверждением</li>
    <li>Пагинация заказов и продуктов</li>
    <li>WebSocket-счётчик активных пользователей</li>
    <li>Семантическая и адаптивная вёрстка</li>
  </ul>

  <h2>🧩 Использование</h2>
  <ul>
    <li>Выбери вкладку "Orders" — отобразятся карточки заказов с их статусами и суммами</li>
    <li>Клик по бургеру возле кнопки удалить, раскроет список товаров внутри</li>
    <li>На вкладке "Products" можно фильтровать продукты по типу</li>
    <li>Удаление заказа — кнопка с иконкой 🗑, открывает модалку</li>
    <li>Наверху — счётчик вкладок по WebSocketb текущее дата и время</li>
  </ul>

  <h2>👤 Автор</h2>
  <p>Александр Прокопьев</p>

</body>
</html>
