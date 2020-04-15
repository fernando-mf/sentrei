import 'package:flutter/material.dart';
import 'package:sentrei/i18n/i18n.dart';

class SentreiLocalizationsDelegate
    extends LocalizationsDelegate<SentreiLocalizations> {
  const SentreiLocalizationsDelegate();

  @override
  bool isSupported(Locale locale) => [
        'en',
        'zh',
        'ja',
      ].contains(locale.languageCode);

  @override
  Future<SentreiLocalizations> load(Locale locale) =>
      SentreiLocalizations.load(locale);

  @override
  bool shouldReload(SentreiLocalizationsDelegate old) => false;
}
