import 'package:firebase_analytics/firebase_analytics.dart';
import 'package:flutter/foundation.dart';
import 'package:sentrei/utils/utils.dart';

class AnalyticsUtil {
  var analytics = FirebaseAnalytics();

  void logEvent({String name, Map<String, dynamic> parameters}) {
    kReleaseMode
        ? analytics.logEvent(name: name, parameters: parameters)
        : LogUtil().log('[EVENT]: $name');
  }

  void logScreen({String name, Map<String, dynamic> parameters}) {
    kReleaseMode
        ? analytics.logEvent(name: name, parameters: parameters)
        : LogUtil().log('[SCREEN]: $name');
  }
}
