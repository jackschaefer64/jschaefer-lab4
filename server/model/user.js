console.log("[userModel] initialized");
class User{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;

    }
}
exports.createUser = function(firstName, lastName){
        return new User(firstName, lastName);
    }