import 'dart:async';
import 'package:random_string/random_string.dart' as random;
import 'package:sentrei/login/login.dart';

/// Mock authentication service to be used for testing the UI
/// Keeps an in-memory store of registered accounts so that registration and sign in flows can be tested.
class MockAuthService implements AuthService {
  MockAuthService({
    this.startupTime = const Duration(milliseconds: 250),
    this.responseTime = const Duration(seconds: 2),
  }) {
    Future<void>.delayed(responseTime).then((_) {
      _add(null);
    });
  }
  final Duration startupTime;
  final Duration responseTime;

  User _currentUser;

  final StreamController<User> _onAuthStateChangedController =
      StreamController<User>();
  @override
  Stream<User> get onAuthStateChanged => _onAuthStateChangedController.stream;

  @override
  Future<User> currentUser() async {
    await Future<void>.delayed(startupTime);
    return _currentUser;
  }

  @override
  Future<void> signOut() async {
    _add(null);
  }

  void _add(User user) {
    _currentUser = user;
    _onAuthStateChangedController.add(user);
  }

  @override
  Future<User> signInWithGoogle() async {
    await Future<void>.delayed(responseTime);
    final User user = User(uid: random.randomAlphaNumeric(32));
    _add(user);
    return user;
  }

  @override
  void dispose() {
    _onAuthStateChangedController.close();
  }
}
