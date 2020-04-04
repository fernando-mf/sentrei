import 'dart:async';
import 'package:meta/meta.dart';

@immutable
class User {
  const User({
    @required this.uid,
    this.email,
    this.photoUrl,
    this.displayName,
  });

  final String uid;
  final String email;
  final String photoUrl;
  final String displayName;
}

abstract class AuthService {
  Future<User> currentUser();
  Future<User> signInWithGoogle();
  Future<User> signInWithFacebook();
  Future<void> signOut();
  Stream<User> get onAuthStateChanged;
  void dispose();
}
