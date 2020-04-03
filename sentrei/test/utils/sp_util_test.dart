import 'package:test/test.dart';

import 'package:sentrei/utils/utils.dart';

void main() {
  group('Counter', () {
    test(
      'object should be initiated',
      () async {
        await SpUtil.getInstance();
      },
    );
  });
}
