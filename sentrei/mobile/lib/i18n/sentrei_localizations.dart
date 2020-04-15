import 'package:flutter/material.dart';
import 'package:intl/intl.dart';
import 'package:sentrei/i18n/i18n.dart';

class SentreiLocalizations {
  SentreiLocalizations(this.localeName);

  static Future<SentreiLocalizations> load(Locale locale) {
    final String name =
        locale.countryCode.isEmpty ? locale.languageCode : locale.toString();
    final String localeName = Intl.canonicalizedLocale(name);
    return initializeMessages(localeName).then((_) {
      return SentreiLocalizations(localeName);
    });
  }

  static SentreiLocalizations of(BuildContext context) {
    return Localizations.of<SentreiLocalizations>(
        context, SentreiLocalizations);
  }

  final String localeName;

  String get title {
    return Intl.message(
      'This is my first localization App',
      name: 'title',
    );
  }
}
