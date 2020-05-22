export class User {
    login: string = '';
    id: number;
    url: string = '';
    name: string = '';
    company: string = '';
    blog: string = '';
    location: string = '';
    email: string = '';
    hireable: boolean = false;
    bio: string = '';
    repos: number;
    gists: number;
    followers: number;
    following: number;

    constructor(values: Object = {}){
        Object.assign(this, values);
    }
}
