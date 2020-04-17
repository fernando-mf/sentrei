import 'package:flutter/material.dart';
import 'package:intl/intl.dart';
import 'package:sentrei/i18n/i18n.dart';

class AppLocalizations {
  static Future<AppLocalizations> load(Locale locale) {
    final String name =
        locale.countryCode.isEmpty ? locale.languageCode : locale.toString();
    final String localeName = Intl.canonicalizedLocale(name);
    return initializeMessages(localeName).then((_) {
      Intl.defaultLocale = localeName;
      return AppLocalizations();
    });
  }

  static AppLocalizations of(BuildContext context) {
    return Localizations.of<AppLocalizations>(context, AppLocalizations);
  }

  String get start {
    return Intl.message(
      'Start',
    );
  }

  String get organizeYourLife {
    return Intl.message(
      'Organize Your Life',
    );
  }

  String get throughInsightfulMetrics {
    return Intl.message(
      'through insightful metrics',
    );
  }

  String get goBold {
    return Intl.message(
      'Go Bold',
    );
  }

  String get seeTheBiggerPicture {
    return Intl.message(
      'see the bigger picture',
    );
  }

  String get lifeopsAsAService {
    return Intl.message(
      'LifeOps as a Service',
    );
  }

  String get learnAndGrow {
    return Intl.message(
      'learn and grow',
    );
  }
}
