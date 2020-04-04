import 'package:flutter/material.dart';
import 'package:sentrei/const/const.dart';

class GradientBg {
  static const LinearGradient signup_background = LinearGradient(
    begin: FractionalOffset(0.0, 0.4), end: FractionalOffset(0.9, 0.7),
    // Add one stop for each color. Stops should increase from 0 to 1
    stops: [0.1, 0.9], colors: [Colour.red, Colour.dark_red],
  );

  static const LinearGradient signup_color_background = LinearGradient(
    tileMode: TileMode.clamp,
    begin: FractionalOffset.centerLeft,
    end: FractionalOffset.centerRight,
    stops: [0.1, 1.0],
    colors: [Colour.red, Colour.dark_red],
  );

  static const LinearGradient signup_circle_button_background = LinearGradient(
    tileMode: TileMode.clamp,
    begin: FractionalOffset.centerLeft,
    end: FractionalOffset.centerRight,
    // Add one stop for each color. Stops should increase from 0 to 1
    stops: [0.4, 1],
    colors: [Colour.material_bg, Colour.dark_material_bg],
  );
}
