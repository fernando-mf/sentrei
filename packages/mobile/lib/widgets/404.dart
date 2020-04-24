import 'package:flutter/material.dart';

class WidgetNotFound extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Icon(Icons.home),
      ),
      body: Text('404'),
    );
  }
}
