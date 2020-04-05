import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:sentrei/app/app.dart';

void main() {
  var map = Map<String, Widget>();
  map['onboarding_page'] = OnboardingPage();

  group('login => Detect whether page clickable targets have semantics', () {
    ThemeData themeData = ThemeProvider().getTheme();
    map.forEach((name, page) {
      testWidgets(name, (WidgetTester tester) async {
        final SemanticsHandle handle = tester.ensureSemantics();
        await tester.pumpWidget(MaterialApp(
          home: page,
          theme: themeData,
        ));
        await expectLater(tester, meetsGuideline(labeledTapTargetGuideline));
        handle.dispose();
      });
    });
  });
}
