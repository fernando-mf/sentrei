import 'package:flutter_auth_buttons/flutter_auth_buttons.dart';
import 'package:flutter/material.dart';
import 'package:sentrei/const/const.dart';
import 'package:sentrei/login/login.dart';
import 'package:sentrei/widgets/widgets.dart';

class LoginPage extends StatelessWidget {
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
              ),
            ),
            Container(
              margin: EdgeInsets.only(left: 32.0, right: 32.0, top: 12.0),
              child: GoogleSignInButton(
                onPressed: () {},
                splashColor: Colour.black_opaque,
              ),
            ),
            Container(
              margin: EdgeInsets.only(left: 32.0, right: 32.0, top: 12.0),
              child: FacebookSignInButton(
                onPressed: () {},
              ),
            ),
            signupWidget(),
          ],
        ),
      ),
    );
  }
}
