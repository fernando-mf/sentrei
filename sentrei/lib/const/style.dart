import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import 'package:sentrei/const/const.dart';

/// Resource: https://github.com/simplezhli/flutter_deer/blob/08cad29d8d54e96b5933aad0f1b88b3dc59925f6/lib/res/styles.dart
class Style {
  static const TextStyle headlineTop = TextStyle(
    color: Colour.black,
    letterSpacing: 3,
    fontSize: 20.0,
    fontWeight: FontWeight.bold,
  );

  static const TextStyle headlineMiddle = TextStyle(
    color: Colour.black,
    letterSpacing: 3,
    fontSize: 32.0,
  );

  static const TextStyle textHighlight = TextStyle(
    color: Colour.red,
    fontWeight: FontWeight.bold,
  );

  static const TextStyle text = TextStyle(
    fontSize: 14.0,
    color: Colour.text,
    // https://github.com/flutter/flutter/issues/40248
    textBaseline: TextBaseline.alphabetic,
  );

  static const TextStyle textDark = TextStyle(
    fontSize: 14.0,
    color: Colour.text_dark,
    textBaseline: TextBaseline.alphabetic,
  );

  static const TextStyle textBlack = TextStyle(color: Colour.black);

  static const TextStyle textBlackUnderline = TextStyle(
    color: Colour.black,
    decoration: TextDecoration.underline,
  );

  static const TextStyle textSize12 = TextStyle(
    fontSize: 12.0,
  );

  static const TextStyle textSize16 = TextStyle(
    fontSize: 16.0,
  );

  static const TextStyle textBold14 = TextStyle(
    fontSize: 14.0,
    fontWeight: FontWeight.bold,
  );

  static const TextStyle textBold16 = TextStyle(
    fontSize: 16.0,
    fontWeight: FontWeight.bold,
  );

  static const TextStyle textBold18 = TextStyle(
    fontSize: 18.0,
    fontWeight: FontWeight.bold,
  );

  static const TextStyle textBold24 = TextStyle(
    fontSize: 24.0,
    fontWeight: FontWeight.bold,
  );

  static const TextStyle textBold26 = TextStyle(
    fontSize: 26.0,
    fontWeight: FontWeight.bold,
  );

  static const TextStyle textGray12 = TextStyle(
    fontSize: 12.0,
    color: Colour.text_gray,
    fontWeight: FontWeight.normal,
  );

  static const TextStyle textGrayDark12 = TextStyle(
    fontSize: 12.0,
    color: Colour.text_gray_dark,
    fontWeight: FontWeight.normal,
  );

  static const TextStyle textGray14 = TextStyle(
    fontSize: 14.0,
    color: Colour.text_gray,
  );

  static const TextStyle textGrayDark14 = TextStyle(
    fontSize: 14.0,
    color: Colour.text_gray_dark,
  );

  static const TextStyle textHint14 = TextStyle(
    fontSize: 14.0,
    color: Colour.text_gray_dark,
  );

  static const TextStyle textHintDark14 = TextStyle(
    fontSize: 14.0,
    color: Colour.unselected_item_color_dark,
  );

  static const TextStyle textWhite14 = TextStyle(
    fontSize: 14.0,
    color: Colors.white,
  );
}
