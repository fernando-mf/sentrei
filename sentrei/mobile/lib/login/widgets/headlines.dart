import 'package:flutter/material.dart';

Widget headlinesWidget() {
  return Container(
    margin: EdgeInsets.only(left: 48.0, top: 32.0),
    child: Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: <Widget>[
        Text(
          'WELCOME BACK!',
          textAlign: TextAlign.left,
        ),
        Container(
          margin: EdgeInsets.only(top: 48.0),
          child: Text(
            'Log in \nto continue.',
            textAlign: TextAlign.left,
          ),
        )
      ],
    ),
  );
}
