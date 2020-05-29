import 'package:flutter/material.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:google_sign_in/google_sign_in.dart';
// import 'package:sentrei/utils/analytics_util.dart';
import 'package:sentrei/models/models.dart';
import 'package:sentrei/utils/utils.dart';

class AuthProvider extends ChangeNotifier {
  AuthStatus authStatus = AuthStatus.not_determined;
  bool isSignInWithGoogle = false;
  FirebaseUser user;
  String userId;
  List<User> _profileUserModelList;
  User _userModel;

  final FirebaseAuth _firebaseAuth = FirebaseAuth.instance;
  final GoogleSignIn _googleSignIn = GoogleSignIn();

  User get userModel => _userModel;

  User get profileUserModel {
    if (_profileUserModelList != null && _profileUserModelList.isNotEmpty) {
      return _profileUserModelList.last;
    } else {
      return null;
    }
  }

  void removeLastUser() {
    _profileUserModelList.removeLast();
  }

  /// Logout from device
  void logoutCallback() {
    authStatus = AuthStatus.not_logged_in;
    userId = '';
    _userModel = null;
    _profileUserModelList = null;
    // TODO: Disable firebase analytics
    // if (isSignInWithGoogle) {
    //   _googleSignIn.signOut();
    //   AnalyticsUtil().logEvent(name: 'google_logout');
    // }
    _firebaseAuth.signOut();
    notifyListeners();
  }

  /// Alter select auth method, login and sign up page
  void openSignupPage() {
    authStatus = AuthStatus.not_logged_in;
    userId = '';
    notifyListeners();
  }

  /// `Create` and `Update` user
  /// IF `newUser` is true new user is created
  /// Else existing user will update with new values
  createUser(User user, {bool newUser = false}) {
    if (newUser) {
      // Create username by the combination of name and id
      // TODO: Disable firebase analytics
      // user.userName =
      //     ModelUtil().getUserName(id: user.userId, name: user.displayName);
      // AnalyticsUtil().logEvent(name: 'create_newUser');

      // Time at which user) is created
      user.createdAt = DateTime.now().toUtc().toString();
    }
    DatabaseUtil()
        .database
        .child('profile')
        .child(user.userId)
        .set(user.toJson());
    _userModel = user;
    if (_profileUserModelList != null) {
      _profileUserModelList.last = _userModel;
    }
    // loading = false;
  }

  /// Create user from `google login`
  /// If user is new then it create a new user
  /// If user is old then it just `authenticate` user and return firebase user data
  Future<FirebaseUser> handleGoogleSignIn() async {
    try {
      /// Record log in firebase kAnalytics about Google login
      /// TODO: Disable firebase analytics
      // await AnalyticsUtil().analytics.logLogin(loginMethod: 'google_login');
      final GoogleSignInAccount googleUser = await _googleSignIn.signIn();
      if (googleUser == null) {
        throw Exception('Google login cancelled by user');
      }
      final GoogleSignInAuthentication googleAuth =
          await googleUser.authentication;

      final AuthCredential credential = GoogleAuthProvider.getCredential(
        accessToken: googleAuth.accessToken,
        idToken: googleAuth.idToken,
      );
      user = (await _firebaseAuth.signInWithCredential(credential)).user;
      authStatus = AuthStatus.logged_in;
      userId = user.uid;
      isSignInWithGoogle = true;
      createUserFromGoogleSignIn(user);
      notifyListeners();
      return user;
    } catch (error) {
      user = null;
      authStatus = AuthStatus.not_logged_in;
      LogUtil().log(error, errorIn: 'handleGoogleSignIn');
      return null;
    }
  }

  /// Create user profile from google login
  createUserFromGoogleSignIn(FirebaseUser user) {
    var diff = DateTime.now().difference(user.metadata.creationTime);
    // Check if user is new or old
    // If user is new then add new user to firebase realtime kDatabase
    if (diff < Duration(seconds: 15)) {
      User model = User(
        bio: 'Edit profile to update bio',
        dob: DateTime(1950, DateTime.now().month, DateTime.now().day + 3)
            .toString(),
        location: 'Somewhere in universe',
        photoUrl: user.photoUrl,
        displayName: user.displayName,
        email: user.email,
        key: user.uid,
        userId: user.uid,
        contact: user.phoneNumber,
        isVerified: user.isEmailVerified,
      );
      createUser(model, newUser: true);
    } else {
      LogUtil().log('Last login at: ${user.metadata.lastSignInTime}');
    }
  }
}
