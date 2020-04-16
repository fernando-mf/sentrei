import 'package:flutter/material.dart';
import 'package:sentrei/i18n/i18n.dart';

class AppLocalizationDelegate extends LocalizationsDelegate<AppLocalization> {
  final Locale overriddenLocale;

  const AppLocalizationDelegate({this.overriddenLocale});

  @override
  bool isSupported(Locale locale) => [
        'en',
        'zh',
        'ja',
      ].contains(locale.languageCode);

  @override
  Future<AppLocalization> load(Locale locale) => AppLocalization.load(locale);

  @override
  bool shouldReload(LocalizationsDelegate<AppLocalization> old) => false;
}
