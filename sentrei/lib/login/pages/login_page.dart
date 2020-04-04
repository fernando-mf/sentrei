import 'package:flutter/material.dart';
import 'package:sentrei/const/const.dart';
import 'package:sentrei/const/gradientbg.dart';

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
            headlinesWidget(),
            emailTextFieldWidget(),
            passwordTextFieldWidget(),
            loginButtonWidget(),
            signupWidget(),
          ],
        ),
      ),
    );
  }
}

Widget signupWidget() {
  return Container(
    margin: EdgeInsets.only(left: 48.0, top: 32.0),
    child: Row(
      children: <Widget>[
        Text(
          'Don\'t have an account?',
          style: TextStyle(),
        ),
        FlatButton(
          onPressed: () {
            print('Sign Up button pressed');
          },
          child: Text(
            'Sign Up',
            style: TextStyle(
              color: Colour.text,
              decoration: TextDecoration.underline,
              fontWeight: FontWeight.bold,
            ),
          ),
        )
      ],
    ),
  );
}

Widget passwordTextFieldWidget() {
  return Container(
    margin: EdgeInsets.only(
      left: 32.0,
      right: 16.0,
    ),
    child: TextField(
      style: Style.textHint14,
      obscureText: true,
      decoration: InputDecoration(
        fillColor: Colour.text,
        filled: true,
        contentPadding: EdgeInsets.fromLTRB(40.0, 30.0, 10.0, 10.0),
        border: OutlineInputBorder(
          borderRadius: BorderRadius.circular(12.0),
          borderSide: BorderSide.none,
        ),
        hintText: 'Password',
        hintStyle: Style.textHint14,
      ),
    ),
  );
}

Widget emailTextFieldWidget() {
  return Container(
    margin: EdgeInsets.only(
      left: 16.0,
      right: 32.0,
      top: 32.0,
    ),
    decoration: BoxDecoration(
      boxShadow: [
        BoxShadow(
          color: Colour.text,
          blurRadius: 15,
          spreadRadius: 0,
          offset: Offset(0.0, 16.0),
        ),
      ],
      borderRadius: BorderRadius.circular(12.0),
      gradient: LinearGradient(
        begin: FractionalOffset(0.0, 0.4),
        end: FractionalOffset(0.9, 0.7),
        stops: [
          0.2,
          0.9,
        ],
        colors: [
          Colour.red,
          Colour.dark_red,
        ],
      ),
    ),
    child: TextField(
      style: Style.textHint14,
      decoration: InputDecoration(
        suffixIcon: Icon(
          IconData(0xe902, fontFamily: 'Icons'),
          color: Colour.red,
          size: 10.0,
        ),
        contentPadding: EdgeInsets.fromLTRB(40.0, 30.0, 10.0, 10.0),
        border: OutlineInputBorder(
          borderRadius: BorderRadius.circular(12.0),
          borderSide: BorderSide.none,
        ),
        hintText: 'Email',
        hintStyle: Style.textHint14,
      ),
    ),
  );
}

Widget headlinesWidget() {
  return Container(
    margin: EdgeInsets.only(left: 48.0, top: 32.0),
    child: Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: <Widget>[
        Text(
          'WELCOME BACK!',
          textAlign: TextAlign.left,
          style: TextStyle(
            letterSpacing: 3,
            fontSize: 20.0,
            fontWeight: FontWeight.bold,
          ),
        ),
        Container(
          margin: EdgeInsets.only(top: 48.0),
          child: Text(
            'Log in \nto continue.',
            textAlign: TextAlign.left,
            style: TextStyle(
              letterSpacing: 3,
              fontSize: 32.0,
            ),
          ),
        )
      ],
    ),
  );
}

Widget loginButtonWidget() {
  return Container(
    margin: EdgeInsets.only(
      left: 32.0,
      top: 32.0,
    ),
    child: Row(
      children: <Widget>[
        InkWell(
          onTap: () {},
          child: Container(
            padding: EdgeInsets.symmetric(
              horizontal: 36.0,
              vertical: 16.0,
            ),
            decoration: BoxDecoration(
              boxShadow: [
                BoxShadow(
                  color: Colour.bg_gray,
                  blurRadius: 15,
                  spreadRadius: 0,
                  offset: Offset(0.0, 32.0),
                ),
              ],
              borderRadius: BorderRadius.circular(36.0),
              gradient: LinearGradient(
                begin: FractionalOffset.centerLeft,
                stops: [0.2, 1],
                colors: [Colour.bg_gray, Colour.dark_bg_gray],
              ),
            ),
            child: Text(
              'LOGIN',
              style: TextStyle(
                color: Colour.dark_red,
                fontWeight: FontWeight.bold,
              ),
            ),
          ),
        ),
      ],
    ),
  );
}
