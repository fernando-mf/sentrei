import 'package:flutter_auth_buttons/flutter_auth_buttons.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:sentrei/const/const.dart';
import 'package:sentrei/login/login.dart';
import 'package:sentrei/widgets/widgets.dart';

class LoginPage extends StatelessWidget {
  LoginPage({
    Key key,
    this.isLoading,
    this.manager,
    this.title,
  }) : super(key: key);
  final LoginManager manager;
  final String title;
  final bool isLoading;

  Future<void> _signInWithGoogle(BuildContext context) async {
    try {
      await manager.signInWithGoogle();
    } on PlatformException catch (e) {
      if (e.code != 'ERROR_ABORTED_BY_USER') {
        print(e);
      }
    }
  }

  Future<void> _signInWithFacebook(BuildContext context) async {
    try {
      await manager.signInWithFacebook();
    } on PlatformException catch (e) {
      if (e.code != 'ERROR_ABORTED_BY_USER') {
        print(e);
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        padding: EdgeInsets.only(top: 64.0),
        decoration: BoxDecoration(gradient: GradientBg.signup_background),
        child: ListView(
          physics: BouncingScrollPhysics(),
          children: <Widget>[
            Center(
              child: LoadAssetImage(
                'logo',
                width: 130.0,
                height: 130.0,
                fit: BoxFit.cover,
              ),
            ),
            headlinesWidget(),
            Container(
              margin: EdgeInsets.only(left: 32.0, right: 32.0, top: 32.0),
              child: AppleSignInButton(
                onPressed: () {},
                style: AppleButtonStyle.black,
                text: 'Log in with Apple',
              ),
            ),
            Container(
              margin: EdgeInsets.only(left: 32.0, right: 32.0, top: 12.0),
              child: GoogleSignInButton(
                onPressed: isLoading ? null : () => _signInWithGoogle(context),
                splashColor: Colour.black_opaque,
                text: 'Log in with Google',
              ),
            ),
            Container(
              margin: EdgeInsets.only(left: 32.0, right: 32.0, top: 12.0),
              child: TwitterSignInButton(
                onPressed: () {},
                text: 'Log in with Twitter',
              ),
            ),
            Container(
              margin: EdgeInsets.only(left: 32.0, right: 32.0, top: 12.0),
              child: FacebookSignInButton(
                onPressed:
                    isLoading ? null : () => _signInWithFacebook(context),
                text: 'Log in with Facebook',
              ),
            ),
            signupWidget(),
          ],
        ),
      ),
    );
  }
}
