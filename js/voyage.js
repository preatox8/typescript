"use strict";
var Sejour = /** @class */ (function () {
    function Sejour(_nom, _prix) {
        this._nom = _nom;
        this._prix = _prix;
    }
    Sejour.prototype.getNom = function () {
        return this._nom;
    };
    Sejour.prototype.getPrix = function () {
        return this._prix;
    };
    return Sejour;
}());
var SejourService = /** @class */ (function () {
    function SejourService() {
        var sejour1 = new Sejour('Nantes', 37);
        var sejour2 = new Sejour('Paris', 50);
        this._Sejour = [sejour1, sejour2];
    }
    SejourService.prototype.findByName = function (nom) {
        var _Sejour = [];
        this._Sejour.forEach(function (element) {
            if (element.getNom() == nom) {
                return _Sejour.push(element);
            }
        });
        return _Sejour;
    };
    return SejourService;
}());
var sejourservice = new SejourService();
console.log(sejourservice.findByName('Paris'));
