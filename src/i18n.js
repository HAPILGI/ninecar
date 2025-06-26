import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    ko: {
      translation: {
        headline: "NINEGO MOTOSR - 믿고 맡기는 사고차 경매 대행",
        specialty: "사고차 경매 / 수출 대행 전문",
        consult_guide: "카톡으로 상담하고, 원하는 차량 조건만 알려주세요.",
        consult_title: "상담 요청",
        name: "이름",
        contact: "연락처 (전화/카톡)",
        requirement: "차량 조건이나 희망사항",
        submit: "보내기",
        kakao_consult: "카카오톡 상담하기",
        contact_info: "전화: 010-9138-2775 | FAX: 0504-160-2775",
        footer_address: "카카오톡: @ninego | 주소: 인천 연수구 연수동 556-6, 202호",
      }
    },
    en: {
      translation: {
        headline: "NINEGO MOTORS - Trusted Accident Car Auction Agent",
        specialty: "Specialized in accident car auctions / export",
        consult_guide: "Chat via KakaoTalk and just tell us your car preferences.",
        consult_title: "Consultation Request",
        name: "Name",
        contact: "Contact (Phone/KakaoTalk)",
        requirement: "Car conditions or requests",
        submit: "Submit",
        kakao_consult: "Chat via KakaoTalk",
        contact_info: "Phone: 010-9138-2775 | FAX: 0504-160-2775",
        footer_address: "Kakao: @ninego | Address: 556-6, Yeonsu-dong, Yeonsu-gu, Incheon, Korea",
      }
    },
    ru: {
      translation: {
        headline: "NINEGO MOTORS - Надёжный аукцион аварийных автомобилей",
        specialty: "Специализация: аукционы и экспорт аварийных авто",
        consult_guide: "Напишите в KakaoTalk и расскажите, какой автомобиль вам нужен.",
        consult_title: "Запрос консультации",
        name: "Имя",
        contact: "Контакт (Телефон/KakaoTalk)",
        requirement: "Условия или пожелания",
        submit: "Отправить",
        kakao_consult: "Связаться в KakaoTalk",
        contact_info: "Тел: 010-9138-2775 | Факс: 0504-160-2775",
        footer_address: "Kakao: @ninego | Адрес: 556-6, Йонсу-донг, Йонсу-гу, Инчхон, Корея",
      }
    },
    kg: {
      translation: {
        headline: "NINEGO MOTORS - Ишенимдүү кырсык автоунаа аукциону",
        specialty: "Кырсык автоунаа аукциону жана экспорт боюнча адис",
        consult_guide: "KakaoTalk аркылуу байланышып, каалаган автоунааңызды айтып бериңиз.",
        consult_title: "Кеңеш суроо",
        name: "Аты",
        contact: "Байланыш (Телефон/KakaoTalk)",
        requirement: "Автоунаа боюнча талаптар",
        submit: "Жөнөтүү",
        kakao_consult: "KakaoTalk аркылуу байланышуу",
        contact_info: "Тел: 010-9138-2775 | Факс: 0504-160-2775",
        footer_address: "Kakao: @ninego | Дарек: Инчхон, Йонсу району, Йонсу-донг 556-6, 202-бөлмө",
      }
    },
    ar: {
      translation: {
        headline: "نينجو موتورز - وكيل موثوق لمزادات سيارات الحوادث",
        specialty: "متخصصون في مزادات وتصدير السيارات المتضررة",
        consult_guide: "تواصل عبر كاكاوتوك وأخبرنا بمواصفات السيارة التي تريدها.",
        consult_title: "طلب استشارة",
        name: "الاسم",
        contact: "جهة الاتصال (الهاتف/كاكاوتوك)",
        requirement: "شروط أو طلبات السيارة",
        submit: "إرسال",
        kakao_consult: "الدردشة عبر كاكاوتوك",
        contact_info: "الهاتف: 010-9138-2775 | الفاكس: 0504-160-2775",
        footer_address: "كاكاوتوك: @ninego | العنوان: إنشيون، حي يونسو، يونسو-دونغ 556-6، الغرفة 202",
      }
    }
  },
  lng: "ko",
  fallbackLng: "ko",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
