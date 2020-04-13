class LogUtil {
  void log(dynamic data, {String errorIn, String name}) {
    if (errorIn != null) {
      print(
          '****************************** error ******************************');
      print('[Error] $errorIn $data');
      print(
          '****************************** error ******************************');
    } else if (data != null) {
      print(data);
    }
  }
}
