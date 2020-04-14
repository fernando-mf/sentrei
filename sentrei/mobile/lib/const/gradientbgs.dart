import 'package:flutter/material.dart';

class GradientBgs {
  static LinearGradient aqua = LinearGradient(
    begin: Alignment.topLeft,
    end: Alignment.bottomRight,
    colors: [
      Color(0xFF00C6FF),
      Color(0xFF0072FF),
    ],
  );

  static LinearGradient mango = LinearGradient(
    begin: Alignment.topLeft,
    end: Alignment.bottomRight,
    colors: [
      Color(0xFFFFC371),
      Color(0xFFFF5F6D),
    ],
  );

  static LinearGradient react = LinearGradient(
    begin: Alignment.topLeft,
    end: Alignment.bottomRight,
    colors: [
      Color(0xFFFC5C7D),
      Color(0xFF6A82FB),
    ],
  );

  static LinearGradient peach = LinearGradient(
    begin: Alignment.centerLeft,
    end: Alignment.centerRight,
    colors: [
      Color(0xFFDDD6F3),
      Color(0xFFFAACA8),
    ],
  );
}
