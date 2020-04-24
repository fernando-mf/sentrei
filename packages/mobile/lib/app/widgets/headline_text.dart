import 'package:flutter/material.dart';
import 'package:auto_size_text/auto_size_text.dart';
import 'package:sentrei/const/const.dart';

class HeadlineText extends StatelessWidget {
  HeadlineText(this.title, this.body);

  final String title;
  final String body;

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: EdgeInsets.symmetric(horizontal: 30),
      child: Center(
        child: Column(
          children: <Widget>[
            AutoSizeText(
              title,
              maxLines: 1,
              textAlign: TextAlign.center,
              style: TextStyles.headingWhiteBold,
            ),
            SizedBox(height: 10),
            AutoSizeText(
              body,
              maxLines: 1,
              textAlign: TextAlign.center,
              style: TextStyles.headingWhiteRegular,
            ),
          ],
        ),
      ),
    );
  }
}
