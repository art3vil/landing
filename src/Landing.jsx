import React from "react";
import { motion } from "framer-motion";

export default function Landing() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full bg-white text-gray-900 font-sans"
    >
      {/* HERO */}
      <motion.section
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full px-8 py-20 bg-gray-50"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-6 leading-tight">
              Автоматизация бизнес‑процессов через Telegram‑ботов
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Ускоряю работу мастеров и малого бизнеса: заявки, замеры, склад, CRM,
              расчёты — всё в одном боте.
            </p>
            <a
              href="#contact"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-2xl shadow-lg hover:bg-blue-700 transition"
            >
              Получить консультацию
            </a>
          </div>

          <div className="flex justify-center">
            <div className="w-72 h-72 bg-gray-200 rounded-3xl shadow-inner flex items-center justify-center text-gray-500">
              Скриншот WebApp/бота
            </div>
          </div>
        </div>
      </motion.section>

      {/* PROBLEMS */}
      <motion.section
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full px-8 py-24 bg-white"
      >
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Что я решаю</h2>
          <p className="text-gray-600 text-lg">
            Бизнес теряет время и деньги на рутинных задачах. Я автоматизирую их.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          {[
            "Заявки теряются",
            "Мастера забывают клиентов",
            "Склад ведётся вручную",
            "Долго оформлять заказы",
            "Нужен контроль сотрудников",
            "Сложно считать стоимость",
          ].map((item, i) => (
            <div key={i} className="p-8 bg-gray-50 rounded-3xl shadow-sm text-center">
              <p className="text-lg font-medium text-gray-800">{item}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* SOLUTIONS */}
      <motion.section
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

      {/* CTA */}
      <motion.section
        id="contact"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full px-8 py-24 bg-white"
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Готовы ускорить ваш бизнес?</h2>
          <p className="text-gray-600 text-lg mb-8">Напишите мне — предложу решение под вашу ситуацию.</p>

          <a
            href="https://t.me/Art3vil"
            className="inline-block px-8 py-4 bg-blue-600 text-white rounded-2xl shadow-lg hover:bg-blue-700 transition text-lg"
          >
            Написать в Telegram
          </a>
        </div>
      </motion.section>

      {/* FOOTER */}
      <footer className="w-full py-10 text-center text-gray-500 text-sm bg-gray-50">
        © {new Date().getFullYear()} Автоматизация бизнеса — Telegram‑боты под ключ
      </footer>
    </motion.div>
  );
}
