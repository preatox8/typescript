class Sejour{

    constructor(private _nom:string, private _prix:number){

    }

    getNom():string{

       return this._nom
    }

    getPrix():number{
        return this._prix
    }
}

class SejourService{

    private _Sejour:Sejour[]

    constructor(){
        let sejour1:Sejour = new Sejour('Nantes', 37);
        let sejour2:Sejour = new Sejour('Paris', 50);
        this._Sejour = [sejour1, sejour2];
    }

    findByName(nom:string):Sejour[]{
        let _Sejour:Sejour[] = [];
            this._Sejour.forEach(element => {
                if(element.getNom() == nom){
                    return _Sejour.push(element);
                }
            })
        return _Sejour;
    }
}

let sejourservice:SejourService = new SejourService();
console.log(sejourservice.findByName('Paris'));