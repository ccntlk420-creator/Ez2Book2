import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      nav: {
        about: "About",
        cases: "Cases",
        faq: "FAQ",
        book: "Book Now"
      },
      hero: {
        tag: "Exclusive Access",
        title: "Your ticket to",
        titleItalic: "the world of luxury.",
        subtitle: "We book the best hotels in the world with discounts up to 50%. Official. Safe. For members only.",
        ctaCases: "View Cases",
        ctaTg: "Telegram"
      },
      features: {
        access: {
          title: "Direct Access",
          desc: "We bypass retail markups of aggregators through tour operator inventory."
        },
        api: {
          title: "API & VPN",
          desc: "We use regional pricing loopholes available only to professionals."
        },
        private: {
          title: "Private Rates",
          desc: "Exclusive offers hidden from the general public."
        }
      },
      editorial: {
        tag: "Smart Luxury",
        title1: "Rest like a",
        title1Italic: "millionaire",
        title2: "pay like a",
        title2Italic: "tourist.",
        desc: "We don't just look for discounts. We open doors to a world that was previously accessible only through personal connections.",
        cta: "Start Saving"
      },
      audience: {
        title: "Who is our service for",
        items: [
          {
            label: "The Connoisseur",
            title: "Comfort Lover",
            desc: "For those accustomed to 5 stars and impeccable service, but see no point in paying the aggregators' marketing tax."
          },
          {
            label: "The Strategist",
            title: "The Strategist",
            desc: "For those planning complex routes and valuing the opportunity to double their vacation for the same budget."
          },
          {
            label: "The Explorer",
            title: "Active Traveler",
            desc: "For those always on the move, looking for a way to get more experiences from every trip worldwide."
          }
        ]
      },
      cases: {
        title: "Our",
        titleItalic: "Cases.",
        subtitle: "Real bookings of our clients from the last month. Compare prices and see for yourself.",
        savings: "Savings",
        items: [
          {
            name: "ME Barcelona",
            loc: "Spain, Barcelona • 7 nights",
            desc: "Lux suite with city view. Booking through a closed tour operator channel."
          },
          {
            name: "The Capra Saas-Fee",
            loc: "Switzerland, Alps • 5 nights",
            desc: "Premium chalet. Using regional API pricing."
          }
        ]
      },
      metrics: {
        years: "Years in business",
        objects: "Objects in base",
        clients: "Happy clients",
        saved: "Saved"
      },
      cta: {
        title: "Ready for",
        titleItalic: "new discoveries?",
        request: "Request Selection",
        cases: "View Cases"
      },
      faq: {
        title: "Frequently Asked Questions",
        items: [
          {
            q: "Why are the prices so low?",
            a: "We use corporate rates accessible only to large agents, and book through partner channels in other regions where prices for the same hotels are significantly lower."
          },
          {
            q: "Is it legal?",
            a: "Absolutely. You receive an official hotel voucher. Your booking will appear in the hotel system just as if you had booked it yourself."
          },
          {
            q: "What if I change my mind?",
            a: "Cancellation terms depend on the selected rate. We always offer both non-refundable options with maximum discount and flexible rates with cancellation possibility."
          }
        ]
      },
      footer: {
        rights: "© 2024 Easy Book. Private Concierge."
      },
      cookies: {
        title: "Cookies & Privacy",
        desc: "We use cookies to enhance your experience and analyze our traffic. By clicking \"Accept\", you consent to our use of cookies as described in our",
        btn: "Accept All"
      }
    }
  },
  ru: {
    translation: {
      nav: {
        about: "О нас",
        cases: "Кейсы",
        faq: "FAQ",
        book: "Забронировать"
      },
      hero: {
        tag: "Exclusive Access",
        title: "Твой билет в",
        titleItalic: "мир люкса.",
        subtitle: "Бронируем лучшие отели мира со скидкой до 50%. Официально. Безопасно. Только для своих.",
        ctaCases: "Посмотреть кейсы",
        ctaTg: "Telegram"
      },
      features: {
        access: {
          title: "Прямой доступ",
          desc: "Минуем розничные наценки агрегаторов через инвентарь туроператоров."
        },
        api: {
          title: "API и VPN",
          desc: "Используем региональные ценовые лазейки, доступные только профи."
        },
        private: {
          title: "Закрытые тарифы",
          desc: "Эксклюзивные предложения, скрытые от широкой публики."
        }
      },
      editorial: {
        tag: "Smart Luxury",
        title1: "Отдыхай как",
        title1Italic: "миллионер",
        title2: "плати как",
        title2Italic: "турист.",
        desc: "Мы не просто ищем скидки. Мы открываем двери в мир, который раньше был доступен только через личные связи.",
        cta: "Начать экономить"
      },
      audience: {
        title: "Для кого наш сервис",
        items: [
          {
            label: "The Connoisseur",
            title: "Ценитель комфорта",
            desc: "Для тех, кто привык к 5 звездам и безупречному сервису, но не видит смысла платить маркетинговый налог агрегаторов."
          },
          {
            label: "The Strategist",
            title: "Стратег",
            desc: "Для тех, кто планирует сложные маршруты и ценит возможность продлить отпуск в два раза при том же бюджете."
          },
          {
            label: "The Explorer",
            title: "Активный путешественник",
            desc: "Для тех, кто всегда в движении и ищет способ получить больше впечатлений от каждой поездки по всему миру."
          }
        ]
      },
      cases: {
        title: "Наши",
        titleItalic: "Кейсы.",
        subtitle: "Реальные бронирования наших клиентов за последний месяц. Сравните цены и убедитесь сами.",
        savings: "Savings",
        items: [
          {
            name: "ME Barcelona",
            loc: "Испания, Барселона • 7 ночей",
            desc: "Люкс с видом на город. Бронирование через закрытый канал туроператора."
          },
          {
            name: "The Capra Saas-Fee",
            loc: "Швейцария, Альпы • 5 ночей",
            desc: "Шале премиум-класса. Использование региональных API цен."
          }
        ]
      },
      metrics: {
        years: "Работаем с года",
        objects: "Объектов в базе",
        clients: "Довольных клиентов",
        saved: "Сэкономлено"
      },
      cta: {
        title: "Готовы к",
        titleItalic: "новым открытиям?",
        request: "Запросить подборку",
        cases: "Посмотреть кейсы"
      },
      faq: {
        title: "Часто задаваемые вопросы",
        items: [
          {
            q: "Почему цены такие низкие?",
            a: "Мы используем корпоративные тарифы, доступ к которым имеют только крупные агенты, а также бронируем через партнерские каналы в других регионах, где цены на те же отели значительно ниже."
          },
          {
            q: "Это легально?",
            a: "Абсолютно. Вы получаете официальный ваучер отеля. Ваше бронирование будет отображаться в системе отеля так же, как если бы вы забронировали его сами."
          },
          {
            q: "Что если я передумаю?",
            a: "Условия отмены зависят от выбранного тарифа. Мы всегда предлагаем как невозвратные варианты с максимальной скидкой, так и гибкие тарифы с возможностью отмены."
          }
        ]
      },
      footer: {
        rights: "© 2024 Easy Book. Private Concierge."
      },
      cookies: {
        title: "Cookies & Privacy",
        desc: "Мы используем cookies, чтобы улучшить ваш опыт и анализировать трафик. Нажимая \"Accept\", вы соглашаетесь на использование cookies, как описано в нашей",
        btn: "Accept All"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "ru",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
