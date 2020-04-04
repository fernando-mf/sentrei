import 'package:flutter/material.dart';
import 'package:sentrei/const/const.dart';

Widget signupWidget() {
  return Container(
    margin: EdgeInsets.only(left: 48.0, top: 32.0),
    child: Row(
      children: <Widget>[
        Text(
          'Don\'t have an account?',
          style: Style.textBlack,
        ),
        FlatButton(
          onPressed: () {
            print('Sign Up button pressed');
          },
          child: Text(
            'Sign Up',
            style: Style.textBlackUnderline,
          ),
        )
      ],
    ),
  );
}
