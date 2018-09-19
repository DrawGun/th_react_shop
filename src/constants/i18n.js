import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n.use(LanguageDetector).init({
  resources: {
    en: {
      translations: {
        'ContactsInfo': 'Contact Information',
        'My shop': 'My shop',
        'Gallery': 'Gallery',
        'Contacts': 'Contacts',
        'Selected orders': 'Selected orders',
        'Modal': 'Modal',
        'Cancel': 'Cancel',
        'No Match': 'No Match!',
        'Home': 'Home',
        'More': 'More',
        'Price': 'Price',
        'AddToBasket': 'AddToBasket',
        'Title': 'Title',
        'Basket is empty': 'Basket is empty',
        'Yours order': 'Yours order',
        'Name': 'Name',
        'Email': 'Email',
        'Submit': 'Submit'
      }
    },
    ru: {
      translations: {
        'ContactsInfo': 'Контактная информация',
        'My shop': 'Мой магазин',
        'Gallery': 'Галерея',
        'Contacts': 'Контакты',
        'Selected orders': 'Выбрано заказов',
        'Modal': 'Модальное окно',
        'Cancel': 'Закрыть',
        'No Match': 'Нет совпадений!',
        'Home': 'На главную',
        'More': 'Подробнее',
        'Price': 'Цена',
        'AddToBasket': 'Добавить в корзину',
        'Title': 'Название',
        'Basket is empty': 'В корзине ничего нет',
        'Yours order': 'Ваши заказы',
        'Name': 'Имя',
        'Email': 'E-mail',
        'Submit': 'Отправить'
      }
    }
  },
  lng: 'ru',
  fallbackLng: 'ru',
  debug: true,
  ns: ['translations'],
  defaultNS: 'translations',
  keySeparator: false,
  interpolation: {
    escapeValue: false,
    formatSeparator: ','
  },
  react: {
    wait: true
  }
});

export default i18n;
