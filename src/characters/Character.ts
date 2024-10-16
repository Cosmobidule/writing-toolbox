export class Character {
    id : number | undefined;
    name: string = '';
    nickname : string = '';
    age: number | undefined;
    mainCharacter : boolean = false;
    rank :  string = '';
    jobtitle : string = '';
    description: string = '';
    imageUrl: string = '';
    roman: string = '';
    faceclaim: string = '';
    isActive: boolean = false;
    get isNew(): boolean {
        return this.id === undefined;
    }

    constructor(initializer?: any) {
        if(!initializer) return;
        if (initializer.id) this.id = initializer.id;
        if (initializer.name) this.name = initializer.name;
        if (initializer.nickname) this.nickname = initializer.nickname;
        if (initializer.age) this.age = initializer.age;
        if (initializer.mainCharacter) this.mainCharacter = initializer.mainCharacter;
        if (initializer.rank) this.rank = initializer.rank;
        if (initializer.jobtitle) this.jobtitle = initializer.jobtitle;
        if (initializer.description) this.description = initializer.description;
        if (initializer.imageUrl) this.imageUrl = initializer.imageUrl;
        if (initializer.roman) this.roman = initializer.roman;
        if (initializer.faceclaim) this.faceclaim = initializer.faceclaim;
        if (initializer.isActive) this.isActive = initializer.isActive;
    }
}