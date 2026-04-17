console.log("[userModel] initialized");
class User{
    constructor(firstName, lastName, userID, email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.userID = userID;
        this.email = email;

    }
}
exports.createUser = function(firstName, lastName, userID, email){
        return new User(firstName, lastName, userID, email);
    }