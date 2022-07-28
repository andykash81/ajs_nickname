export default class Validator {
  validateUsername(username) {
    this.name = username;
    if (this.name.match(/^[a-zA-Z]+(([a-zA-Z])*|(\d){1,3}(?!\d)|(-)*|(_)*)*[a-zA-Z]+$/) !== null) {
      return `${this.name}`;
    }
    return 'Имя пользователя не соответствует шаблону.';
  }
}
