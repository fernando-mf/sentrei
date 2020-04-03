import 'dart:async';
import 'dart:convert';

import 'package:shared_preferences/shared_preferences.dart';
import 'package:synchronized/synchronized.dart';

/// SharedPreferences Util.
///
/// Reference: https://github.com/Sky24n/flustars
class SpUtil {
  static SpUtil _singleton;
  static SharedPreferences _sp;
  static Lock _lock = Lock();

  /// Gets instance of a singleton `SharedPreferences` object.
  ///
  /// If `singleton` is null, a new object is initialized.
  static Future<SpUtil> getInstance() async {
    if (_singleton == null) {
      await _lock.synchronized(() async {
        if (_singleton == null) {
          // Keep local instance until it is fully initialized.
          var singleton = SpUtil._();
          await singleton._init();
          _singleton = singleton;
        }
      });
    }
    return _singleton;
  }

  /// `SpUtil` named constructor.
  SpUtil._();

  /// Loads the `SharedPreferences` object.
  Future _init() async {
    _sp = await SharedPreferences.getInstance();
  }

  /// Puts a `key[value]` object to the `SharedPreferences` object.
  static Future<bool> putObject(String key, Object value) {
    if (_sp == null) return null;
    return _sp.setString(
      key,
      value == null ? '' : json.encode(value),
    );
  }

  /// Gets a `String` from the `SharedPreferences` object with the specified `key`.
  ///
  /// If `key` doesn't exist, the `String` will fall back to `defValue`
  static String getString(String key, {String defValue = ''}) {
    if (_sp == null) return defValue;
    return _sp.getString(key) ?? defValue;
  }

  /// Puts a `key[value]` `String` to the `SharedPreferences` object.
  static Future<bool> putString(String key, String value) {
    if (_sp == null) return null;
    return _sp.setString(key, value);
  }

  /// Gets a `bool` from the `SharedPreferences` object with the specified `key`.
  ///
  /// If `key` doesn't exist, the `bool` will fall back to `defValue`
  static bool getBool(String key, {bool defValue = false}) {
    if (_sp == null) return defValue;
    return _sp.getBool(key) ?? defValue;
  }

  /// Puts a `key[value]` `bool` to the `SharedPreferences` object.
  static Future<bool> putBool(String key, bool value) {
    if (_sp == null) return null;
    return _sp.setBool(key, value);
  }
}
