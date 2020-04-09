import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:sentrei/login/login.dart';

class LoginPageBuilder extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final AuthService auth = Provider.of<AuthService>(context, listen: false);
    return ChangeNotifierProvider<ValueNotifier<bool>>(
      create: (_) => ValueNotifier<bool>(false),
      child: Consumer<ValueNotifier<bool>>(
        builder: (_, ValueNotifier<bool> isLoading, __) =>
            Provider<LoginManager>(
          create: (_) => LoginManager(auth: auth, isLoading: isLoading),
          child: Consumer<LoginManager>(
            builder: (_, LoginManager manager, __) => LoginPage(
              isLoading: isLoading.value,
              manager: manager,
              title: 'Firebase Auth Demo',
            ),
          ),
        ),
      ),
    );
  }
}
