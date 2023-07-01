import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import commonEn from "../public/locales/en/common.json"
import dashboardEn from "../public/locales/en/dashboard.json"
import commonEs from "../public/locales/es/common.json"
import dashboardEs from "../public/locales/es/dashboard.json"
import { I18nNamespaces } from "./types/i18next"

i18n.use(initReactI18next).init({
	lng: "en",
	fallbackLng: "en",
	resources: {
		en: {
			translation: {
				common: commonEn as I18nNamespaces["common"],
				dashboard: dashboardEn as I18nNamespaces["dashboard"]
			}
		},
		es: {
			translation: {
				common: commonEs as I18nNamespaces["common"],
				dashboard: dashboardEs as I18nNamespaces["dashboard"]
			}
		}
	}
})

export default i18n
