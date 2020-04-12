import 'package:flutter_test/flutter_test.dart';
import 'package:sentrei/utils/utils.dart';

void main() {
  group('SpUtil', () {
    test('returns a Post if the http call completes successfully', () async {
      expect(await SpUtil.getInstance(), SpUtil);
    });
  });
}
