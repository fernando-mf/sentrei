import 'package:flutter/material.dart';
import 'package:sentrei/i18n/i18n.dart';

class AppLocalizationDelegate extends LocalizationsDelegate<AppLocalizations> {
  final Locale overriddenLocale;

  const AppLocalizationDelegate({this.overriddenLocale});

  @override
  bool isSupported(Locale locale) => [
        'en',
        'zh',
        'ja',
      ].contains(locale.languageCode);

  @override
  Future<AppLocalizations> load(Locale locale) => AppLocalizations.load(locale);

  @override
  bool shouldReload(LocalizationsDelegate<AppLocalizations> old) => false;
}
