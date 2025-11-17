import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Landing() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full bg-white text-gray-900 font-sans"
    >
      {/* NAVIGATION */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
          <div className="flex items-center justify-between">
            <a
              href="#"
              className={`text-xl font-bold transition ${
                isScrolled ? "text-gray-900" : "text-white"
              }`}
            >
              BotSystems
            </a>
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#problems"
                className={`transition hover:text-blue-600 ${
                  isScrolled ? "text-gray-900" : "text-white"
                }`}
              >
                Проблемы
              </a>
              <a
                href="#solutions"
                className={`transition hover:text-blue-600 ${
                  isScrolled ? "text-gray-900" : "text-white"
                }`}
              >
                Решения
              </a>
              <a
                href="#portfolio"
                className={`transition hover:text-blue-600 ${
                  isScrolled ? "text-gray-900" : "text-white"
                }`}
              >
                Работы
              </a>
              <a
                href="#contact"
                className={`transition hover:text-blue-600 ${
                  isScrolled ? "text-gray-900" : "text-white"
                }`}
              >
                Контакты
              </a>
            </div>
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 transition ${
                isScrolled ? "text-gray-900" : "text-white"
              }`}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden mt-4 pb-4 bg-white/95 backdrop-blur-md rounded-lg shadow-lg border border-gray-200"
            >
              <div className="flex flex-col gap-4 pt-4 px-4">
                <a
                  href="#problems"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-900 transition hover:text-blue-600 font-medium"
                >
                  Проблемы
                </a>
                <a
                  href="#solutions"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-900 transition hover:text-blue-600 font-medium"
                >
                  Решения
                </a>
                <a
                  href="#portfolio"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-900 transition hover:text-blue-600 font-medium"
                >
                  Работы
                </a>
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-900 transition hover:text-blue-600 font-medium"
                >
                  Контакты
                </a>
              </div>
            </motion.div>
          )}
        </div>
      </nav>
      {/* HERO */}
      <motion.section
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full px-8 pt-32 pb-40 relative overflow-hidden"
        style={{
          backgroundImage: `url(${import.meta.env.BASE_URL}background.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 leading-tight text-white">
              Автоматизация бизнес‑процессов c помощью телеграм ботов и AI Агентов.
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 md:mb-10 leading-relaxed">
               Разрабатываем AI-агентов: умные помощники для вашего бизнеса. От Mvp до запуска за 7 дней.
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-blue-600 text-white rounded-2xl shadow-lg hover:bg-blue-700 transition text-lg font-semibold"
            >
              Получить консультацию
            </a>
          </div>
        </div>
      </motion.section>

      {/* PROBLEMS */}
      <motion.section
        id="problems"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full px-8 py-24 bg-white"
      >
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Как AI агент или бот может вам помочь?
          </h2>
          <p className="text-gray-600 text-lg md:text-xl">
            Автоматизация рутинных задач и оптимизация бизнес-процессов
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              problem: "Заявки теряются и забываются",
              solution: "Бот автоматически принимает заявки, записывает в CRM и напоминает о них в нужный момент",
            },
            {
              problem: "Мастера забывают клиентов",
              solution: "AI агент ведёт историю взаимодействий, напоминает о повторных обращениях и предлагает услуги",
            },
            {
              problem: "Склад ведётся вручную",
              solution: "Бот автоматически обновляет остатки, списывает товары и формирует отчёты без Excel",
            },
            {
              problem: "Долго оформлять заказы",
              solution: "Клиент сам формирует заказ через бота, а вы получаете готовую заявку с расчётом стоимости",
            },
            {
              problem: "Нужен контроль сотрудников",
              solution: "Бот фиксирует все действия, отправляет отчёты и уведомляет о важных событиях в реальном времени",
            },
            {
              problem: "Сложно считать стоимость",
              solution: "AI агент автоматически рассчитывает стоимость на основе прайса, скидок и условий работы",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {item.problem}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.solution}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* SOLUTIONS */}
      <motion.section
        id="solutions"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full px-8 py-24 bg-gray-50"
      >
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Готовые решения</h2>
          <p className="text-gray-600 text-lg">Модули, которые можно подключить к вашему бизнесу</p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Бот для записей",
              desc: "Клиенты сами выбирают время, а мастер видит расписание в реальном времени.",
            },
            {
              title: "Бот для замерщиков",
              desc: "Замеры, фото, расчёты, отправка монтажникам и в таблицу автоматически.",
            },
            {
              title: "CRM‑бот",
              desc: "Вся информация о клиентах, заказах и оплатах — прямо в Telegram.",
            },
            {
              title: "WebApp‑каталоги",
              desc: "Каталоги товаров, склад, остатки, фильтры и карточки товаров.",
            },
            {
              title: "Автоматизация склада",
              desc: "Остатки, списания, перемещения — всё обновляется без Excel.",
            },
            {
              title: "Индивидуальные решения",
              desc: "Разработка под бизнес‑процессы вашей компании.",
            },
          ].map((card, i) => (
            <div key={i} className="p-8 bg-white rounded-3xl shadow-sm">
              <h3 className="text-xl font-bold mb-4">{card.title}</h3>
              <p className="text-gray-600">{card.desc}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* PORTFOLIO */}
      <motion.section
        id="portfolio"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full px-8 py-24 bg-white"
      >
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Выполненные работы</h2>
          <p className="text-gray-600 text-lg">
            Примеры автоматизации для различных бизнесов
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Бот для записи клиентов",
              client: "Салон красоты",
              desc: "Автоматизация записи, напоминания клиентам, управление расписанием мастеров.",
              tech: "Telegram Bot, Python",
            },
            {
              title: "CRM-система для замерщиков",
              client: "Компания по установке окон",
              desc: "Замеры, фото, расчёты, автоматическая отправка данных монтажникам.",
              tech: "Telegram Bot, WebApp",
            },
            {
              title: "Складской учёт",
              client: "Цветочный магазин",
              desc: "Учёт остатков, списания, перемещения, автоматическая синхронизация с таблицами.",
              tech: "Telegram Bot, Google Sheets API",
            },
            {
              title: "Каталог товаров",
              client: "Интернет-магазин",
              desc: "WebApp-каталог с фильтрами, корзиной и интеграцией с платежами.",
              tech: "Telegram WebApp, React",
            },
            {
              title: "Бот для приёма заказов",
              client: "Служба доставки",
              desc: "Приём заказов, отслеживание статусов, уведомления клиентов и курьеров.",
              tech: "Telegram Bot, Python",
            },
            {
              title: "Бот для кофейни",
              client: "Кофейня",
              desc: "Приём заказов, управление меню, расчёт стоимости, интеграция с кухней и кассой.",
              tech: "Telegram Bot, Python",
            },
          ].map((project, i) => (
            <motion.div
              key={i}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 bg-gray-50 rounded-3xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4">
                <span className="text-sm text-blue-600 font-semibold">
                  {project.client}
                </span>
                <h3 className="text-xl font-bold mt-2 mb-3">{project.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.split(", ").map((t, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA & FOOTER */}
      <div
        className="w-full relative overflow-hidden"
        style={{
          backgroundImage: `url(${import.meta.env.BASE_URL}background2.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        
        {/* CTA */}
        <motion.section
          id="contact"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full px-8 py-24 relative z-10"
        >
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Готовы автоматизировать ваш бизнес и избавиться от рутины?
            </h2>
            <p className="text-gray-200 text-lg md:text-xl mb-8">
              Напишите мне — предложу решение под вашу ситуацию.
            </p>

            <a
              href="https://t.me/Art3vil"
              className="inline-block px-8 py-4 bg-blue-600 text-white rounded-2xl shadow-lg hover:bg-blue-700 transition text-lg font-semibold"
            >
              Написать в Telegram
            </a>
          </div>
        </motion.section>

        {/* FOOTER */}
        <footer className="w-full py-10 relative z-10">
          <div className="max-w-6xl mx-auto px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-gray-300 text-sm">
                © {new Date().getFullYear()} Автоматизация бизнеса — Telegram‑боты под ключ
              </div>
              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
                <a
                  href="mailto:Cleanheroo@gmail.com"
                  className="text-gray-200 hover:text-blue-400 transition text-sm"
                >
                  Cleanheroo@gmail.com
                </a>
                <a
                  href="https://t.me/bot_systems"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200 hover:text-blue-400 transition text-sm"
                >
                  BotSystems
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </motion.div>
  );
}
