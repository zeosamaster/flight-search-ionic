export class User {
    public token: string;
    public name: string;
    public picture: string;
    public email: string;

    constructor(res: any) {
        this.token = res.token;
        this.name = res.user.name;
        this.picture = res.user.picture;
        this.email = res.user.email;
    }
};
