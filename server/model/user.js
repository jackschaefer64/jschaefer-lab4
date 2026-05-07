console.log("[userModel] initialized");
class User{
    constructor(id, firstName, lastName, email){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;

    }
}
exports.createUser = function(id, firstName, lastName, email){
        return new User(id, firstName, lastName, email);
    }