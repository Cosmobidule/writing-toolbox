export class Story {
    id: number | undefined;
    name: string = "";
    alias: string ="";
    description: string ="";
    imageUrl: string ="";
    isRolePlay: string = "";
    get isNew(): boolean {
        return this.id === undefined;
    }

    constructor(initializer?: any) {
        if(!initializer) return;
        if(initializer.id) this.id = initializer.id;
        if(initializer.name) this.name = initializer.name;
        if(initializer.alias) this.alias = initializer.alias;
        if(initializer.description) this.description = initializer.description;
        if(initializer.imageUrl) this.imageUrl = initializer.imageUrl;
        if(initializer.isRolePlay) this.isRolePlay = initializer.isRolePlay;
    }
}