// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */
import type { BaseTranslation as BaseTranslationType, LocalizedString, RequiredParams } from 'typesafe-i18n'

export type BaseTranslation = BaseTranslationType
export type BaseLocale = 'en'

export type Locales =
	| 'de'
	| 'en'
	| 'ja-JP'

export type Translation = RootTranslation

export type Translations = RootTranslation

type RootTranslation = {
	/**
	 * E​n​g​l​i​s​h
	 */
	language: string
	/**
	 * H​a​p​p​y​ ​H​o​l​i​d​a​y​s​!
	 */
	happyHolidays: string
	/**
	 * {​d​a​t​e​|​f​u​l​l​D​a​y​}​ ​i​s​ ​i​n​ ​<​>​{​t​i​m​e​}​<​>
	 * @param {unknown} date
	 * @param {unknown} time
	 */
	christmasIsComing: RequiredParams<'date|fullDay' | 'time'>
	/**
	 * {​{​o​n​e​ ​d​a​y​|​?​?​ ​d​a​y​s​}​}
	 */
	day: string
}

export type TranslationFunctions = {
	/**
	 * English
	 */
	language: () => LocalizedString
	/**
	 * Happy Holidays!
	 */
	happyHolidays: () => LocalizedString
	/**
	 * {date|fullDay} is in <>{time}<>
	 */
	christmasIsComing: (arg: { date: unknown, time: unknown }) => LocalizedString
	/**
	 * {{one day|?? days}}
	 */
	day: (arg: { days: string | number | boolean }) => LocalizedString
}

export type Formatters = {
	fullDay: (value: unknown) => unknown
}
