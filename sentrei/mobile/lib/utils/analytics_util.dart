import 'package:firebase_analytics/firebase_analytics.dart';
import 'package:flutter/foundation.dart';

class AnalyticsUtil {
  var analytics = FirebaseAnalytics();

  void logEvent({String name, Map<String, dynamic> parameters}) {
    kReleaseMode
        ? analytics.logEvent(name: name, parameters: parameters)
        : print('[EVENT]: $name');
  }
}
