(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group>\n  <mat-tab>\n    <ng-template mat-tab-label>\n      <mat-icon>book</mat-icon> ZOEKEN IN DE CATALOGUS </ng-template>\n    <form novalidate class=\"content content-test-form\" #form=\"ngForm\" (ngSubmit)=\"form.valid && submitForm(form)\">\n      <section class=\"row\">\n        <div class=\"col\">\n          <mat-input-container>\n            <input matInput matKeyboard placeholder=\"Zoekterm\" name=\"zoekterm\" [(ngModel)]=\"zoekValue\" (enterClick)=\"submitForm(form)\">\n          </mat-input-container>\n        </div>\n      </section>\n      <section class=\"row\">\n        <button mat-raised-button type=\"submit\" aria-label=\"Submit form\">\n          ZOEKEN\n        </button>\n      </section>\n    </form>\n    <div>\n      <div *ngIf=\"resultaten.length > 0 as value; else noResult\">\n        <!-- <div class=\"row\">-->\n        <ngx-masonry [options]=\"{ transitionDuration: '1s' }\" [useImagesLoaded]=\"true\">\n          <ngxMasonryItem class=\"masonry-item\" *ngFor=\"let resultaat of resultaten\">\n            <!--  <div class=\"col\">-->\n            <mat-card class=\"card\">\n              <mat-card-header>\n                <mat-card-title class=\"title\">{{resultaat.titles[0].title[0]._}}</mat-card-title>\n                <mat-card-subtitle class=\"subtitle\" *ngIf=\"isUndefined(resultaat.authors) as value; else elseBlock\">\n                </mat-card-subtitle>\n                <ng-template #elseBlock>\n                  <mat-card-subtitle>\n                    {{getAuthor(resultaat)}}\n                  </mat-card-subtitle>\n                </ng-template>\n              </mat-card-header>\n              <img mat-card-image src=\"{{getUrl(resultaat)}}\" alt=\"CoverImage\">\n              <mat-card-content>\n                {{resultaat.summaries? resultaat.summaries[0].summary[0]._ : \"\"}}\n              </mat-card-content>\n              <mat-card-actions>\n                <!-- <a href=\"{{resultaat['detail-page']}}\" target=\"_blank\" mat-button>MEER INFO</a> -->\n                <button (click)=\"openModal('custom-modal',resultaat)\" mat-button>BESCHIKBAARHEID</button>\n                <!-- <p>{{getAvailability(resultaat.frabl[0]._)}}</p> -->\n              </mat-card-actions>\n              <!-- <div *ngIf=\"isArray(resultaat.types.type) as value; else elseBlockType\">\n                  <mat-chip-list>\n                    <mat-chip *ngFor=\"let t of resultaat.types.type\" selected=\"true\" color=\"warn\">{{t}}</mat-chip>\n                  </mat-chip-list>\n                </div>\n                <ng-template #elseBlockType>\n                  <div>\n                    <mat-chip-list>\n                      <mat-chip selected=\"true\" color=\"warn\"> {{resultaat.types.type}}\n                      </mat-chip>\n                    </mat-chip-list>\n                  </div>\n                </ng-template>-->\n            </mat-card>\n            <!--  </div>-->\n          </ngxMasonryItem>\n        </ngx-masonry>\n        <!-- </div>-->\n        <modal id=\"custom-modal\">\n          <div class=\"modal\">\n            <div class=\"modal-body\">\n              <!-- <iframe id=\"frame\" frameborder=\"0\" width=\"100%\" height=\"100%\"></iframe> -->\n              <div *ngIf=\"boekResultaat\">\n                <p class=\"mat-tab-label\">{{resultaat?.titles[0].title[0]._}} - {{getAuthor(resultaat)}}\n                </p>\n                <mat-table [dataSource]=\"boekResultaat\" class=\"mat-elevation-z8\">\n                  <ng-container matColumnDef=\"check\">\n                    <mat-header-cell *matHeaderCellDef> </mat-header-cell>\n                    <mat-cell *matCellDef=\"let element\">\n                      <ng-template [ngIf]=\"getIcon(element.status[0])\" [ngIfElse]=\"loggedOut\">\n                        <mat-icon class=\"check\">check</mat-icon>\n                      </ng-template>\n                      <ng-template #loggedOut>\n                        <mat-icon class=\"close\">close</mat-icon>\n                      </ng-template>\n                    </mat-cell>\n                  </ng-container>\n                  <ng-container matColumnDef=\"subloc\">\n                    <mat-header-cell *matHeaderCellDef> Plaats </mat-header-cell>\n                    <mat-cell *matCellDef=\"let element\"> {{element.subloc[0]}} </mat-cell>\n                  </ng-container>\n\n                  <ng-container matColumnDef=\"shelfmark\">\n                    <mat-header-cell *matHeaderCellDef> </mat-header-cell>\n                    <mat-cell *matCellDef=\"let element\"> {{element.shelfmark[0]}} </mat-cell>\n                  </ng-container>\n\n                  <ng-container matColumnDef=\"publication\">\n                    <mat-header-cell *matHeaderCellDef> Uitgave </mat-header-cell>\n                    <mat-cell *matCellDef=\"let element\"> {{element.publication[0]._}} </mat-cell>\n                  </ng-container>\n\n                  <ng-container matColumnDef=\"status\">\n                    <mat-header-cell *matHeaderCellDef> Beschikbaarheid </mat-header-cell>\n                    <mat-cell *matCellDef=\"let element\">{{element.status[0]}}</mat-cell>\n                  </ng-container>\n\n                  <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n                  <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n                </mat-table>\n              </div>\n              <button (click)=\"closeModal('custom-modal');\" id=\"close\">\n                <mat-icon>close</mat-icon>\n              </button>\n            </div>\n          </div>\n          <div class=\"modal-background\"></div>\n        </modal>\n      </div>\n      <ng-template #noResult>\n        <div *ngIf=\"!first\">\n          <img class=\"noresult\" src=\"assets/noresultTextDown.png\">\n        </div>\n      </ng-template>\n    </div>\n    <div>\n      <div>\n      </div>\n    </div>\n  </mat-tab>\n</mat-tab-group>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  margin: 40px 32px; }\n\n.row {\n  align-items: center;\n  display: -ms-grid;\n  display: grid;\n  grid-gap: 16px;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n  padding: 8px; }\n\n.content-test-form .row:last-of-type > .col:last-of-type {\n    align-self: flex-start;\n    padding-top: 8px; }\n\n.col {\n  position: relative; }\n\n.col > .mat-input-container {\n    display: block; }\n\n.mat-raised-button {\n  width: 100%; }\n\n.mat-select + .mat-raised-button {\n    margin-top: 24px; }\n\n.mat-select {\n  display: block; }\n\npre {\n  background-color: #e0e0e0;\n  border-radius: 3px;\n  display: block;\n  font: 11px/1.5 Monospaced, monospace;\n  margin: 8px 0;\n  min-height: 16px;\n  padding: 4px 8px;\n  white-space: normal; }\n\n.card {\n  max-width: 180px; }\n\n.noresult {\n  max-width: 70%;\n  display: block;\n  margin: auto; }\n\n.masonry-item {\n  margin: 0 10px 10px 10px;\n  background-color: #f1f1f1;\n  background-size: cover;\n  width: 180px; }\n\nmat-card-content {\n  font-size: 12px; }\n\n/* MODAL STYLES\n-------------------------------*/\n\nmodal {\n  /* modals are hidden by default */\n  display: none; }\n\nmodal .modal {\n    /* modal container fixed across whole screen */\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    /* z-index must be higher than .modal-background */\n    z-index: 1000;\n    /* enables scrolling for tall modals */\n    overflow: auto; }\n\nmodal .modal .modal-body {\n      padding: 20px;\n      background: #fff;\n      /* margin exposes part of the modal background */\n      margin: 40px;\n      height: 80%; }\n\nmodal .modal-background {\n    /* modal background fixed across whole screen */\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    /* semi-transparent black  */\n    background-color: #000;\n    opacity: 0.75;\n    /* z-index must be below .modal and above everything else  */\n    z-index: 900; }\n\nbody.modal-open {\n  /* body overflow is hidden to hide main scrollbar when modal window is open */\n  overflow: hidden; }\n\n#close {\n  color: #777;\n  font: 20px/100% arial, sans-serif;\n  position: absolute;\n  right: 28px;\n  border: none;\n  text-decoration: none;\n  top: 28px;\n  background-color: #fff;\n  padding: 10px;\n  font-weight: bold; }\n\n.mat-column-check {\n  flex: 0 040px; }\n\n.check {\n  color: green; }\n\n.close {\n  color: red; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _ngx_material_keyboard_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-material-keyboard/core */ "./node_modules/@ngx-material-keyboard/core/esm5/ngx-material-keyboard-core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");
/* harmony import */ var _modal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal.service */ "./src/app/modal.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var AppComponent = /** @class */ (function () {
    function AppComponent(_keyboardService, locale, _dataService, _modalService) {
        this._keyboardService = _keyboardService;
        this.locale = locale;
        this._dataService = _dataService;
        this._modalService = _modalService;
        this.first = true;
        this.resultaten = [];
        this.boekResultaat = [];
        this.displayedColumns = ['check', 'subloc', 'shelfmark', 'publication', 'status'];
        this.zoekValue = '';
    }
    Object.defineProperty(AppComponent.prototype, "zoekterm", {
        get: function () {
            return this._zoekterm;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "keyboardVisible", {
        get: function () {
            return this._keyboardService.isOpened;
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.ngOnInit = function () {
        this.defaultLocale = (" " + this.locale).slice(1);
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.closeCurrentKeyboard();
    };
    AppComponent.prototype.submitForm = function (form) {
        var _this = this;
        var temp = form.controls["zoekterm"].value;
        this._zoekterm = temp.replace(/\s/g, "%20");
        if (typeof this._zoekterm !== "undefined") {
            this._dataService.search(this._zoekterm)
                .subscribe(function (response) {
                console.log(response);
                if (response.aquabrowser.results !== undefined) {
                    _this.resultaten = response.aquabrowser.results[0].result;
                }
                else {
                    _this.resultaten.length = 0;
                }
                _this.first = false;
            });
        }
    };
    AppComponent.prototype.isUndefined = function (authors) {
        return (typeof authors === "undefined");
    };
    AppComponent.prototype.openKeyboard = function (locale) {
        var _this = this;
        if (locale === void 0) { locale = this.defaultLocale; }
        this._keyboardRef = this._keyboardService.open(locale, {
            darkTheme: this.darkTheme,
            duration: this.duration,
            isDebug: this.isDebug
        });
        this._enterSubscription = this._keyboardRef.instance.enterClick.subscribe(function () {
            _this.submitForm();
        });
    };
    AppComponent.prototype.closeCurrentKeyboard = function () {
        if (this._keyboardRef) {
            this._keyboardRef.dismiss();
        }
        if (this._enterSubscription) {
            this._enterSubscription.unsubscribe();
        }
    };
    AppComponent.prototype.isArray = function (obj) {
        return Array.isArray(obj);
    };
    AppComponent.prototype.getUrl = function (url) {
        if (url.coverimages != undefined) {
            var temp = url.coverimages[0].coverimage[0]._.replace(/&amp;/g, "&").replace('small', 'large');
            return temp;
        }
        else
            return ("assets/noimage.png");
    };
    AppComponent.prototype.getAuthor = function (a) {
        if (a != undefined) {
            if (a.authors[0]['main-author'] != undefined) {
                return a.authors[0]['main-author'][0]._;
            }
            else
                return a.authors[0].author[0]._;
        }
    };
    AppComponent.prototype.openModal = function (id, resultaat) {
        console.log(resultaat);
        this.resultaat = resultaat;
        this.getAvailability(resultaat.frabl[0]._);
        this._modalService.open(id, resultaat['detail-page']);
    };
    AppComponent.prototype.closeModal = function (id) {
        this._modalService.close(id);
    };
    AppComponent.prototype.getAvailability = function (frabl) {
        var _this = this;
        this._dataService.getAvailability(frabl).subscribe(function (response) {
            _this.boekResultaat = response.aquabrowser.locations[0].location[0].location[0].items[0].item;
            console.log(response.aquabrowser.locations[0].location[0].location[0].items[0]);
        });
    };
    AppComponent.prototype.isAvailable = function (availabilty) {
        console.log(availabilty);
        return availabilty;
    };
    AppComponent.prototype.getIcon = function (icon) {
        if (icon.toLowerCase().includes("aanwezig"))
            return true;
        else
            return false;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")],
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"])),
        __metadata("design:paramtypes", [_ngx_material_keyboard_core__WEBPACK_IMPORTED_MODULE_1__["MatKeyboardService"], Object, _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _modal_service__WEBPACK_IMPORTED_MODULE_3__["ModalService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _ngx_material_keyboard_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-material-keyboard/core */ "./node_modules/@ngx-material-keyboard/core/esm5/ngx-material-keyboard-core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");
/* harmony import */ var _modal_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./modal.service */ "./src/app/modal.service.ts");
/* harmony import */ var ngx_masonry__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-masonry */ "./node_modules/ngx-masonry/fesm5/ngx-masonry.js");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./modal/modal.component */ "./src/app/modal/modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"],
                _modal_modal_component__WEBPACK_IMPORTED_MODULE_19__["ModalComponent"]
            ],
            imports: [
                // Angular modules
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                // Material modules
                _material_material_module__WEBPACK_IMPORTED_MODULE_13__["MaterialModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__["MatSlideToggleModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__["MatTabsModule"],
                _ngx_material_keyboard_core__WEBPACK_IMPORTED_MODULE_14__["MatKeyboardModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__["MatChipsModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
                //Masonary
                ngx_masonry__WEBPACK_IMPORTED_MODULE_18__["NgxMasonryModule"],
            ],
            providers: [
                { provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], useValue: 'nl-BE' },
                _data_service__WEBPACK_IMPORTED_MODULE_16__["DataService"],
                _modal_service__WEBPACK_IMPORTED_MODULE_17__["ModalService"]
            ],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.search = function (search) {
        // const url = 'http://localhost:8080' + "/api/" + search;
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["BACKEND_URL"] + "/api/" + search;
        return this.http.get(url);
    };
    DataService.prototype.getAvailability = function (frabl) {
        // const url = 'http://localhost:8080' + "/api/availability/" + frabl;
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["BACKEND_URL"] + "/api/availability/" + frabl;
        return this.http.get(url);
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/modal.service.ts":
/*!**********************************!*\
  !*** ./src/app/modal.service.ts ***!
  \**********************************/
/*! exports provided: ModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return ModalService; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

var ModalService = /** @class */ (function () {
    function ModalService() {
        this.modals = [];
    }
    ModalService.prototype.add = function (modal) {
        // add modal to array of active modals
        this.modals.push(modal);
    };
    ModalService.prototype.remove = function (id) {
        // remove modal from array of active modals
        var modalToRemove = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["find"])(this.modals, { id: id });
        this.modals = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["without"])(this.modals, modalToRemove);
    };
    ModalService.prototype.open = function (id, url) {
        // open modal specified by id
        var modal = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["find"])(this.modals, { id: id });
        modal.open(url);
    };
    ModalService.prototype.close = function (id) {
        // close modal specified by id
        var modal = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["find"])(this.modals, { id: id });
        modal.close();
    };
    return ModalService;
}());



/***/ }),

/***/ "./src/app/modal/modal.component.ts":
/*!******************************************!*\
  !*** ./src/app/modal/modal.component.ts ***!
  \******************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modal.service */ "./src/app/modal.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ModalComponent = /** @class */ (function () {
    function ModalComponent(modalService, el) {
        this.modalService = modalService;
        this.el = el;
        this.element = jquery__WEBPACK_IMPORTED_MODULE_1__(el.nativeElement);
    }
    ModalComponent.prototype.ngOnInit = function () {
        var modal = this;
        // ensure id attribute exists
        if (!this.id) {
            console.error('modal must have an id');
            return;
        }
        // move element to bottom of page (just before </body>) so it can be displayed above everything else
        this.element.appendTo('body');
        // close modal on background click
        this.element.on('click', function (e) {
            var target = jquery__WEBPACK_IMPORTED_MODULE_1__(e.target);
            if (!target.closest('.modal-body').length) {
                modal.close();
            }
        });
        // add self (this modal instance) to the modal service so it's accessible from controllers
        this.modalService.add(this);
    };
    // remove self from modal service when directive is destroyed
    ModalComponent.prototype.ngOnDestroy = function () {
        this.modalService.remove(this.id);
        this.element.remove();
    };
    // open modal
    ModalComponent.prototype.open = function (url) {
        this.element.show();
        jquery__WEBPACK_IMPORTED_MODULE_1__("#frame").attr("src", url);
        jquery__WEBPACK_IMPORTED_MODULE_1__('body').addClass('modal-open');
    };
    // close modal
    ModalComponent.prototype.close = function () {
        this.element.hide();
        jquery__WEBPACK_IMPORTED_MODULE_1__("#frame").attr("src", "");
        jquery__WEBPACK_IMPORTED_MODULE_1__('body').removeClass('modal-open');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ModalComponent.prototype, "id", void 0);
    ModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'modal',
            template: '<ng-content></ng-content>'
        }),
        __metadata("design:paramtypes", [_modal_service__WEBPACK_IMPORTED_MODULE_2__["ModalService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment, BACKEND_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BACKEND_URL", function() { return BACKEND_URL; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
var BACKEND_URL = "https://bib-virtual-keyboard.herokuapp.com";
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/lottejespers/Documenten/De_Krook/bibVirtualKeyboard/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map