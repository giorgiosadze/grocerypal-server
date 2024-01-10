//statuses sent from the server (must match the server.ts version)
export enum status {
    INVALID_FORM = "INVALID_FORM",
    OKAY = "OKAY",
    NOT_AUTHORIZED = "NOT_AUTHORIZED",
    NOT_FOUND = "NOT FOUND",
    DB_CONNECTION_FAIL = "DB_CONNECTION_FAIL"
}

//holds the user credentials for the login and signup pages
export class User {
    "userfname": string = "";
    "userlname": string = "";
    "useremail": string = "";
    "userpassword": string = "";
    "userrole": string = "";
    //convert to json
    toJson() {
        return { "userfname": this.userfname, "userlname": this.userlname, "useremail": this.useremail, "userpassword": this.userpassword };
    }
}
