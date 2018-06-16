webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div style=\"text-align:center\">\r\n  <h1>\r\n      <app-topo></app-topo>\r\n  </h1>\r\n  <app-painel></app-painel>  \r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'traduzindo do inglês';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__progress_bar_progress_bar_component__ = __webpack_require__("../../../../../src/app/progress-bar/progress-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__topo_topo_component__ = __webpack_require__("../../../../../src/app/topo/topo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__painel_painel_component__ = __webpack_require__("../../../../../src/app/painel/painel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tentativas_tentativas_component__ = __webpack_require__("../../../../../src/app/tentativas/tentativas.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__progress_bar_progress_bar_component__["a" /* ProgressBarComponent */],
                __WEBPACK_IMPORTED_MODULE_5__topo_topo_component__["a" /* TopoComponent */],
                __WEBPACK_IMPORTED_MODULE_6__painel_painel_component__["a" /* PainelComponent */],
                __WEBPACK_IMPORTED_MODULE_7__tentativas_tentativas_component__["a" /* TentativasComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/painel/frases-mock.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FRASES; });
var FRASES = [
    { fraseEng: "I like to learn", frasePtBr: "Eu gosto de aprender" },
    { fraseEng: "I watch Tv", frasePtBr: "Eu assisto Tv" },
    { fraseEng: "How are you ?", frasePtBr: "Como vai você?" },
    { fraseEng: "I eat a lot", frasePtBr: "Eu como muito" },
    { fraseEng: "BabyLene", frasePtBr: "Josilene" }
];


/***/ }),

/***/ "../../../../../src/app/painel/painel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".jumbotron{\r\n    margin-top: 20px;\r\n    padding-top: 30px;\r\n    padding-bottom: 15px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/painel/painel.component.html":
/***/ (function(module, exports) {

module.exports = "    <div class=\"container\">\r\n        <div class=\"jumbotron\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-6\">\r\n                                <app-progress-bar [progressBar]=\"progresso\"></app-progress-bar>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                                <app-tentativas [tentativa]=\"tentativas\"></app-tentativas>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col text-right\">\r\n                                    <button type=\"button\" style=\"margin-top:-75px;\" class=\"btn btn-warning\" (click)=\"resetarPartida()\">Reiniciar</button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                \r\n                <div class=\"row\">\r\n                    <div class=\"col text-left\">\r\n                        <h3>{{instrucao}}</h3>\r\n                        <p>{{frases[indice].fraseEng}}</p>\r\n\r\n                        <div class=\"form-group\">\r\n                                <textarea class=\"form-control\" rows=\"3\" [(ngModel)]=\"areaTexto\"></textarea>\r\n                              </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                        <div class=\"col text-right\">\r\n                                <button type=\"button\" class=\"btn btn-primary\" (click)=\"verificaResposta()\">Avançar</button>\r\n                        </div>\r\n                    </div>\r\n        </div>\r\n\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/painel/painel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PainelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__frases_mock__ = __webpack_require__("../../../../../src/app/painel/frases-mock.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PainelComponent = (function () {
    function PainelComponent() {
        this.areaTexto = "";
        this.instrucao = "Traduza a frase: ";
        this.indice = 0;
        this.tentativas = 3;
        this.frases = __WEBPACK_IMPORTED_MODULE_1__frases_mock__["a" /* FRASES */];
        this.progresso = 0;
        this.acertos = 0;
    }
    PainelComponent.prototype.ngOnInit = function () {
    };
    PainelComponent.prototype.verificaResposta = function () {
        if (this.indice <= (this.frases.length - 1)) {
            if (this.frases[this.indice].frasePtBr.toLowerCase() == this.areaTexto.toLowerCase()) {
                this.acertos++;
                alert("Você acertou : " + this.frases[this.indice].frasePtBr);
            }
            else {
                this.tentativas--;
                alert("Você errou : " + this.frases[this.indice].frasePtBr);
                if (this.tentativas === -1) {
                    alert("Você perdeu e a rodada será reiniciada!");
                    this.tentativas = 3;
                    this.indice = this.frases.length;
                    this.progresso = 0;
                }
            }
            if (this.indice < (this.frases.length - 1)) {
                this.indice++;
                this.progresso += (100 / (this.frases.length - 1));
            }
            else {
                if (this.acertos === this.frases.length) {
                    alert("Você venceu, acertou : " + this.acertos + " de " + this.frases.length);
                }
                else {
                    this.tentativas = 3;
                    alert("Você perdeu, acertou : " + this.acertos + " de " + this.frases.length);
                }
                this.indice = 0;
                this.progresso = 0;
                this.acertos = 0;
            }
        }
        this.areaTexto = "";
    };
    PainelComponent.prototype.resetarPartida = function () {
        this.areaTexto = "";
        this.indice = 0;
        this.progresso = 0;
        this.tentativas = 0;
    };
    PainelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-painel',
            template: __webpack_require__("../../../../../src/app/painel/painel.component.html"),
            styles: [__webpack_require__("../../../../../src/app/painel/painel.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PainelComponent);
    return PainelComponent;
}());



/***/ }),

/***/ "../../../../../src/app/progress-bar/progress-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".progress{\r\n    background: #eef8da !important;\r\n    border: solid 1px #99ce28 !important;\r\n\r\n}\r\n\r\n.progress-bar{\r\n    background: #99ce28 !important;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/progress-bar/progress-bar.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row text-left\">\r\n<div class=\"progress\">\r\n    <div class=\"progress-bar\" [style.width]=\"getPercent()+'%'\">\r\n      {{progressBar}}%\r\n    </div>\r\n   </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/progress-bar/progress-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProgressBarComponent = (function () {
    function ProgressBarComponent() {
        this.progressBar = 0;
    }
    ProgressBarComponent.prototype.ngOnInit = function () {
    };
    ProgressBarComponent.prototype.getPercent = function () {
        return this.progressBar;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Number)
    ], ProgressBarComponent.prototype, "progressBar", void 0);
    ProgressBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-progress-bar',
            template: __webpack_require__("../../../../../src/app/progress-bar/progress-bar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/progress-bar/progress-bar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProgressBarComponent);
    return ProgressBarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/coracao.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Coracao; });
var Coracao = (function () {
    function Coracao(cheio, urlCoracaoVazio, urlCoracaoCheio) {
        if (urlCoracaoVazio === void 0) { urlCoracaoVazio = "/assets/coracao_vazio.png"; }
        if (urlCoracaoCheio === void 0) { urlCoracaoCheio = "/assets/coracao_cheio.png"; }
        this.cheio = cheio;
        this.urlCoracaoVazio = urlCoracaoVazio;
        this.urlCoracaoCheio = urlCoracaoCheio;
    }
    Coracao.prototype.exibirCoracao = function () {
        if (this.cheio) {
            return this.urlCoracaoCheio;
        }
        else {
            return this.urlCoracaoVazio;
        }
    };
    return Coracao;
}());



/***/ }),

/***/ "../../../../../src/app/tentativas/tentativas.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tentativas/tentativas.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <img [src]=\"coracaoVazio\"/>\r\n<img [src]=\"coracaoCheio\"/>\r\n<img [src]=\"coracaoCheio\"/> -->\r\n\r\n<img *ngFor=\"let coracao of coracoes\" [src]=\"coracao.exibirCoracao()\"/>\r\n"

/***/ }),

/***/ "../../../../../src/app/tentativas/tentativas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TentativasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_coracao_model__ = __webpack_require__("../../../../../src/app/shared/coracao.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TentativasComponent = (function () {
    function TentativasComponent() {
        this.coracoes = [new __WEBPACK_IMPORTED_MODULE_1__shared_coracao_model__["a" /* Coracao */](true), new __WEBPACK_IMPORTED_MODULE_1__shared_coracao_model__["a" /* Coracao */](true), new __WEBPACK_IMPORTED_MODULE_1__shared_coracao_model__["a" /* Coracao */](true)];
    }
    TentativasComponent.prototype.ngOnInit = function () {
    };
    TentativasComponent.prototype.ngOnChanges = function () {
        console.log("Tentativas ", this.tentativa);
        if (this.tentativa !== this.coracoes.length && this.tentativa > -1) {
            var indice = this.coracoes.length - this.tentativa;
            this.coracoes[indice - 1].cheio = false;
            console.log("indice ", indice);
        }
        else {
            this.coracoes[0].cheio = true;
            this.coracoes[1].cheio = true;
            this.coracoes[2].cheio = true;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Number)
    ], TentativasComponent.prototype, "tentativa", void 0);
    TentativasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-tentativas',
            template: __webpack_require__("../../../../../src/app/tentativas/tentativas.component.html"),
            styles: [__webpack_require__("../../../../../src/app/tentativas/tentativas.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TentativasComponent);
    return TentativasComponent;
}());



/***/ }),

/***/ "../../../../../src/app/topo/topo.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar{\r\nbackground: #1cb0f6;\r\ncolor: white;\r\n\r\n\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/topo/topo.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-faded\">\r\n    <h1  class=\"navbar-brand mb-0\">{{titulo}}</h1>\r\n</nav>"

/***/ }),

/***/ "../../../../../src/app/topo/topo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TopoComponent = (function () {
    function TopoComponent() {
        this.titulo = "Aprendendo ingês!";
    }
    TopoComponent.prototype.ngOnInit = function () {
    };
    TopoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-topo',
            template: __webpack_require__("../../../../../src/app/topo/topo.component.html"),
            styles: [__webpack_require__("../../../../../src/app/topo/topo.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TopoComponent);
    return TopoComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map