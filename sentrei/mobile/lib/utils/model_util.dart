class ModelUtil {
  String getUserName({String name, String id}) {
    String userName = '';
    name = name.split(' ')[0];
    id = id.substring(0, 4).toLowerCase();
    userName = '@$name$id';
    return userName;
  }
}
