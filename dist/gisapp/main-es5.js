function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/angular-material.module.ts":
  /*!********************************************!*\
    !*** ./src/app/angular-material.module.ts ***!
    \********************************************/

  /*! exports provided: AngularMaterialModule */

  /***/
  function srcAppAngularMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AngularMaterialModule", function () {
      return AngularMaterialModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js"); // import { CommonModule } from '@angular/common';


    var AngularMaterialModule = function AngularMaterialModule() {
      _classCallCheck(this, AngularMaterialModule);
    };

    AngularMaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AngularMaterialModule
    });
    AngularMaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AngularMaterialModule_Factory(t) {
        return new (t || AngularMaterialModule)();
      },
      providers: [],
      imports: [[//   CommonModule,
      _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatListModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_11__["MatSliderModule"]], _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatListModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_11__["MatSliderModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AngularMaterialModule, {
        imports: [//   CommonModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatListModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_11__["MatSliderModule"]],
        exports: [_angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatListModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_11__["MatSliderModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AngularMaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [//   CommonModule,
          _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatListModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_11__["MatSliderModule"]],
          exports: [_angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatListModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_11__["MatSliderModule"]],
          providers: []
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _mapa_mapa_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./mapa/mapa.component */
    "./src/app/mapa/mapa.component.ts");

    var routes = [{
      path: '',
      redirectTo: '/mapa',
      pathMatch: 'full'
    }, {
      path: 'mapa',
      component: _mapa_mapa_component__WEBPACK_IMPORTED_MODULE_2__["MapaComponent"]
    }, {
      path: '**',
      redirectTo: '/mapa',
      pathMatch: 'full'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngx-pwa/local-storage */
    "./node_modules/@ngx-pwa/local-storage/__ivy_ngcc__/fesm2015/ngx-pwa-local-storage.js");
    /* harmony import */


    var src_providers_event_emitter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/providers/event-emitter.service */
    "./src/providers/event-emitter.service.ts");
    /* harmony import */


    var src_providers_kategorija_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/providers/kategorija.service */
    "./src/providers/kategorija.service.ts");
    /* harmony import */


    var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-ui-loader */
    "./node_modules/ngx-ui-loader/__ivy_ngcc__/fesm2015/ngx-ui-loader.js");
    /* harmony import */


    var src_providers_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/providers/dialog.service */
    "./src/providers/dialog.service.ts");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

    function AppComponent_ng_container_17_mat_icon_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " arrow_drop_up");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_ng_container_17_mat_icon_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " arrow_drop_down_circle");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_ng_container_17_button_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ng_container_17_button_6_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

          var kat_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r15.checkAll(kat_r9);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " done_all");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_ng_container_17_mat_list_7_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        k: a0
      };
    };

    function AppComponent_ng_container_17_mat_list_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_ng_container_17_mat_list_7_ng_container_1_Template, 1, 0, "ng-container", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var kat_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r7)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, kat_r9));
      }
    }

    function AppComponent_ng_container_17_ng_container_8_mat_list_1_mat_icon_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "arrow_drop_up");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_ng_container_17_ng_container_8_mat_list_1_mat_icon_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "arrow_drop_down_circle");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_ng_container_17_ng_container_8_mat_list_1_button_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ng_container_17_ng_container_8_mat_list_1_button_6_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);

          var subkat_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r26.checkAll(subkat_r21);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " done_all");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_ng_container_17_ng_container_8_mat_list_1_mat_list_7_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    function AppComponent_ng_container_17_ng_container_8_mat_list_1_mat_list_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_ng_container_17_ng_container_8_mat_list_1_mat_list_7_ng_container_1_Template, 1, 0, "ng-container", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var subkat_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r7)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, subkat_r21));
      }
    }

    function AppComponent_ng_container_17_ng_container_8_mat_list_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ng_container_17_ng_container_8_mat_list_1_Template_button_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);

          var subkat_r21 = ctx.$implicit;

          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r31.toggleCollapsed(subkat_r21);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_ng_container_17_ng_container_8_mat_list_1_mat_icon_3_Template, 2, 0, "mat-icon", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_ng_container_17_ng_container_8_mat_list_1_mat_icon_4_Template, 2, 0, "mat-icon", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppComponent_ng_container_17_ng_container_8_mat_list_1_button_6_Template, 3, 0, "button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppComponent_ng_container_17_ng_container_8_mat_list_1_mat_list_7_Template, 2, 4, "mat-list", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var subkat_r21 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !subkat_r21.collapsed && subkat_r21.layers.length > 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", subkat_r21.collapsed && subkat_r21.layers.length > 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", subkat_r21.opis, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !subkat_r21.collapsed && subkat_r21.layers.length > 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !subkat_r21.collapsed);
      }
    }

    function AppComponent_ng_container_17_ng_container_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_ng_container_17_ng_container_8_mat_list_1_Template, 8, 5, "mat-list", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var kat_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", kat_r9.subkat);
      }
    }

    function AppComponent_ng_container_17_Template(rf, ctx) {
      if (rf & 1) {
        var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ng_container_17_Template_button_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35);

          var kat_r9 = ctx.$implicit;

          var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r34.toggleCollapsed(kat_r9);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_ng_container_17_mat_icon_3_Template, 2, 0, "mat-icon", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_ng_container_17_mat_icon_4_Template, 2, 0, "mat-icon", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppComponent_ng_container_17_button_6_Template, 3, 0, "button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppComponent_ng_container_17_mat_list_7_Template, 2, 4, "mat-list", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AppComponent_ng_container_17_ng_container_8_Template, 2, 1, "ng-container", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var kat_r9 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !kat_r9.collapsed && (kat_r9.layers.length > 0 || kat_r9.subkat.length > 0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", kat_r9.collapsed && (kat_r9.layers.length > 0 || kat_r9.subkat.length > 0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", kat_r9.opis, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !kat_r9.collapsed && kat_r9.layers.length > 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !kat_r9.collapsed);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !kat_r9.collapsed);
      }
    }

    function AppComponent_button_20_Template(rf, ctx) {
      if (rf & 1) {
        var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_button_20_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38);

          var KO_r36 = ctx.$implicit;

          var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r37.promeniKO(KO_r36);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var KO_r36 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](KO_r36.nazivKO);
      }
    }

    function AppComponent_button_34_Template(rf, ctx) {
      if (rf & 1) {
        var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_button_34_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

          return _r0.toggle();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "launch");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_ng_template_35_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ng_template_35_div_0_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46);

          var l_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().l;

          var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r44.reloadLayer(l_r41);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "filter_list");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_ng_template_35_div_0_Template_input_ngModelChange_7_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46);

          var filter_r43 = ctx.$implicit;
          return filter_r43.searchstring = $event;
        })("keydown", function AppComponent_ng_template_35_div_0_Template_input_keydown_7_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46);

          return $event.stopPropagation();
        })("keyup.enter", function AppComponent_ng_template_35_div_0_Template_input_keyup_enter_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46);

          var l_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().l;

          var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r49.reloadLayer(l_r41);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var filter_r43 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](filter_r43.opis);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", filter_r43.searchstring);
      }
    }

    function AppComponent_ng_template_35_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_ng_template_35_div_0_Template, 8, 2, "div", 8);
      }

      if (rf & 2) {
        var l_r41 = ctx.l;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", l_r41.filteri);
      }
    }

    function AppComponent_ng_template_37_mat_list_item_0_mat_icon_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "check_box_outline_blank");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_ng_template_37_mat_list_item_0_mat_icon_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "check_box");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_ng_template_37_mat_list_item_0_p_12_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    var _c1 = function _c1(a0) {
      return {
        l: a0
      };
    };

    function AppComponent_ng_template_37_mat_list_item_0_p_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_ng_template_37_mat_list_item_0_p_12_ng_container_1_Template, 1, 0, "ng-container", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var l_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r5)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, l_r53));
      }
    }

    var _c2 = function _c2(a0) {
      return {
        "opacity": a0
      };
    };

    var _c3 = function _c3(a0) {
      return {
        "color": a0
      };
    };

    function AppComponent_ng_template_37_mat_list_item_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ng_template_37_mat_list_item_0_Template_button_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r60);

          var l_r53 = ctx.$implicit;

          var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r59.clickLayer(l_r53);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_ng_template_37_mat_list_item_0_mat_icon_3_Template, 2, 0, "mat-icon", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_ng_template_37_mat_list_item_0_mat_icon_4_Template, 2, 0, "mat-icon", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ng_template_37_mat_list_item_0_Template_button_click_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r60);

          var l_r53 = ctx.$implicit;

          var ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r61.changeLayerPreview($event, l_r53);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "brush");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ng_template_37_mat_list_item_0_Template_button_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r60);

          var l_r53 = ctx.$implicit;

          var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r62.displayLegend(l_r53);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "live_help");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AppComponent_ng_template_37_mat_list_item_0_p_12_Template, 2, 4, "p", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var l_r53 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !l_r53.checked);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", l_r53.checked);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", l_r53.naziv, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !(l_r53.checked && l_r53.fillColor))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c2, !(l_r53.checked && l_r53.fillColor) ? "0" : "1"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c3, l_r53.fillColor));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !(l_r53.checked && l_r53.legend))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c2, !(l_r53.checked && l_r53.legend) ? "0" : "1"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", l_r53.checked);
      }
    }

    function AppComponent_ng_template_37_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_ng_template_37_mat_list_item_0_Template, 13, 15, "mat-list-item", 31);
      }

      if (rf & 2) {
        var k_r51 = ctx.k;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", k_r51.layers);
      }
    }

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(storageMap, eventEmitter, kategorijaService, ngxService, dialogService) {
        _classCallCheck(this, AppComponent);

        this.storageMap = storageMap;
        this.eventEmitter = eventEmitter;
        this.kategorijaService = kategorijaService;
        this.ngxService = ngxService;
        this.dialogService = dialogService;
        this.title = 'GIS Vrbas';
        this.menuLayers = [];
        this.listaKat = [];
        this.currentKO = ' (Vrbas-grad)';
        this.poruka1 = '';
        this.poruka2 = '';
        this.listaKO = [{
          idKO: 7,
          sifraKO: '013',
          nazivKO: 'Vrbas',
          rBrKO: 1,
          centarx: 45.57185,
          centary: 19.640113,
          zoom: 14
        }, {
          idKO: 1,
          sifraKO: '003',
          nazivKO: 'Bačko Dobro Polje',
          rBrKO: 3,
          centarx: 45.500382,
          centary: 19.68927,
          zoom: 15
        }, {
          idKO: 8,
          sifraKO: '025',
          nazivKO: 'Zmajevo',
          rBrKO: 4,
          centarx: 45.452394,
          centary: 19.688595,
          zoom: 15
        }, {
          idKO: 4,
          sifraKO: '016',
          nazivKO: 'Ravno Selo',
          rBrKO: 5,
          centarx: 45.447693,
          centary: 19.62254,
          zoom: 15
        }, {
          idKO: 3,
          sifraKO: '007',
          nazivKO: 'Kucura',
          rBrKO: 6,
          centarx: 45.520522,
          centary: 19.589556,
          zoom: 15
        }, {
          idKO: 5,
          sifraKO: '012',
          nazivKO: 'Savino Selo',
          rBrKO: 7,
          centarx: 45.506154,
          centary: 19.522938,
          zoom: 15
        }];
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.storageMap.get('KO').subscribe(function (katOpst) {
            if (katOpst) {
              _this.eventEmitter.KOChange.emit(katOpst);

              _this.currentKO = ' (' + katOpst.nazivKO + ')';
            }

            _this.storageMap.get('mnLayers').subscribe(function (ls) {
              if (ls) {
                _this.menuLayers = ls; // console.log('menuLayers: ' + JSON.stringify(this.menuLayers.length));
              } else {
                _this.storageMap["delete"]('mnLayers').subscribe();
              } // console.log('okida');


              _this.getListaKat();
            });
          });
        }
      }, {
        key: "getListaKat",
        value: function getListaKat() {
          var _this2 = this;

          this.kategorijaService.getKategorije().subscribe(function (lista) {
            //  console.log(JSON.stringify(lista));
            _this2.listaKat = [];
            lista.filter(function (kat) {
              return kat.nadkateg === 0;
            }).forEach(function (item) {
              return _this2.listaKat.push(item);
            });

            _this2.listaKat.forEach(function (kat) {
              return kat.subkat = [];
            });

            lista.filter(function (kat) {
              return kat.nadkateg !== 0;
            }).forEach(function (subkat) {
              return _this2.listaKat.find(function (kat) {
                return kat.id === subkat.nadkateg;
              }).subkat.push(subkat);
            });

            _this2.checkFromStorage();
          }, function (error) {
            return console.log('Nema konekcije!  ' + error);
          });
        }
      }, {
        key: "promeniKO",
        value: function promeniKO(katOpst) {
          var _this3 = this;

          this.storageMap.set('KO', katOpst).subscribe();
          this.eventEmitter.KOChange.emit(katOpst);
          this.currentKO = ' (' + katOpst.nazivKO + ')';
          this.menuLayers.forEach(function (cl) {
            var layer = _this3.getLayer(cl.id);

            if (cl.checked && layer.pojedinacnaKO) {
              _this3.reloadLayer(layer);
            }
          });
        }
      }, {
        key: "getLayer",
        value: function getLayer(id) {
          var layer;
          this.listaKat.forEach(function (kat) {
            if (kat.layers.findIndex(function (l) {
              return l.id === id;
            }) > -1) {
              layer = kat.layers.find(function (l) {
                return l.id === id;
              });
              console.log(JSON.stringify(layer));
            } else {
              kat.subkat.forEach(function (extSubkat) {
                if (extSubkat.layers.findIndex(function (l) {
                  return l.id === id;
                }) > -1) {
                  layer = extSubkat.layers.find(function (l) {
                    return l.id === id;
                  });
                }
              });
            }
          });
          return layer;
        }
      }, {
        key: "checkFromStorage",
        value: function checkFromStorage() {
          var _this4 = this;

          this.listaKat.forEach(function (kat) {
            return kat.subkat.forEach(function (subkat) {
              return _this4.checkFromStorageSubkat(subkat);
            });
          });
          this.listaKat.forEach(function (kat) {
            return _this4.checkFromStorageKat(kat);
          });
        }
      }, {
        key: "checkFromStorageSubkat",
        value: function checkFromStorageSubkat(subkat) {
          var _this5 = this;

          subkat.collapsed = true;
          subkat.layers.forEach(function (l) {
            var cl = _this5.menuLayers.find(function (mlayer) {
              return mlayer.id === l.id;
            });

            if (cl) {
              l.checked = cl.checked;

              if (l.checked) {
                subkat.collapsed = false;
              }
            } else {
              l.checked = false;

              _this5.menuLayers.push({
                id: l.id,
                checked: false
              });
            }

            if (l.checked) {
              if (l.id === 4) {
                _this5.ngxService.startLoader('rasveta');
              } else {
                _this5.ngxService.start();
              }
            }

            _this5.eventEmitter.layerSwitch.emit(l);
          });
        }
      }, {
        key: "checkFromStorageKat",
        value: function checkFromStorageKat(kat) {
          var _this6 = this;

          kat.collapsed = true;
          kat.layers.forEach(function (l) {
            var cl = _this6.menuLayers.find(function (mlayer) {
              return mlayer.id === l.id;
            });

            if (cl) {
              l.checked = cl.checked;

              if (l.checked) {
                kat.collapsed = false;
              }
            } else {
              l.checked = false;

              _this6.menuLayers.push({
                id: l.id,
                checked: false
              });
            }

            if (l.checked) {
              if (l.id === 4) {
                _this6.ngxService.startLoader('rasveta');
              } else {
                _this6.ngxService.start();
              }
            }

            _this6.eventEmitter.layerSwitch.emit(l);
          });
          kat.subkat.forEach(function (subkat) {
            if (!subkat.collapsed) {
              kat.collapsed = false;
            }
          });
        }
      }, {
        key: "toggleCollapsed",
        value: function toggleCollapsed(kat) {
          if (kat.collapsed) {
            kat.collapsed = false;
          } else {
            kat.collapsed = true;
          }
        }
      }, {
        key: "reloadLayer",
        value: function reloadLayer(layer) {
          layer.checked = false;
          this.eventEmitter.layerSwitch.emit(layer);
          layer.checked = true;
          this.eventEmitter.layerSwitch.emit(layer);
        }
      }, {
        key: "clickLayer",
        value: function clickLayer(layer, preserveFitToBounds) {
          // console.log("layer: " + JSON.stringify(layer));
          if (layer.id === 4) {
            this.ngxService.startLoader('rasveta');
          } else {
            this.ngxService.start();
          }

          layer.checked = !layer.checked;

          if (layer.checked === false && layer.filteri) {
            layer.filteri.forEach(function (f) {
              return f.searchstring = '';
            });
          }

          if (preserveFitToBounds) {
            layer.preserveFitToBounds = true;
          } else {
            layer.preserveFitToBounds = false;
          } // console.log('layer.checked:  ' + layer.checked);


          if (!this.menuLayers) {
            this.removeAllLayers();
          }

          var ml = this.menuLayers.find(function (mlayer) {
            return mlayer.id === layer.id;
          }); // console.log(JSON.stringify(cl));

          if (ml) {
            ml.checked = layer.checked;
          }

          this.eventEmitter.layerSwitch.emit(layer);
          this.storageMap.set('mnLayers', this.menuLayers).subscribe(); // console.log("menuLAyers: " + localStorage.getItem("mnLayers"));
        }
      }, {
        key: "checkAll",
        value: function checkAll(kat) {
          var _this7 = this;

          var listUnchecked = kat.layers.filter(function (l) {
            return l.checked === false;
          });

          switch (listUnchecked.length) {
            case 0:
              kat.layers.forEach(function (l) {
                _this7.clickLayer(l);
              });
              break;

            case 1:
              listUnchecked.forEach(function (l) {
                _this7.clickLayer(l); // if exist one uncheck, fit to bounds

              });
              break;

            default:
              listUnchecked.forEach(function (l) {
                _this7.clickLayer(l, true); // if exist more than one, not fit to bounds

              });
          }
        }
      }, {
        key: "removeAllLayers",
        value: function removeAllLayers() {
          this.menuLayers.forEach(function (ml) {
            return ml.checked = false;
          });
          this.storageMap.set('mnLayers', this.menuLayers).subscribe();
          this.listaKat.forEach(function (kat) {
            return kat.layers.forEach(function (l) {
              return l.filteri.forEach(function (f) {
                return f.searchstring = '';
              });
            });
          });
          this.listaKat.forEach(function (kat) {
            return kat.subkat.forEach(function (sk) {
              return sk.layers.forEach(function (l) {
                return l.filteri.forEach(function (f) {
                  return f.searchstring = '';
                });
              });
            });
          });
          this.checkFromStorage();
        }
      }, {
        key: "changeLayerPreview",
        value: function changeLayerPreview(ev, layer) {
          var x = +ev.clientX;
          var y = +ev.clientY;
          this.dialogService.displayLayerPreview({
            layer: layer,
            x: x,
            y: y
          });
        }
      }, {
        key: "displayLegend",
        value: function displayLegend(l) {
          this.dialogService.displayLegend(l);
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_1__["StorageMap"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_providers_event_emitter_service__WEBPACK_IMPORTED_MODULE_2__["EventEmitterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_providers_kategorija_service__WEBPACK_IMPORTED_MODULE_3__["KategorijaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_ui_loader__WEBPACK_IMPORTED_MODULE_4__["NgxUiLoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_providers_dialog_service__WEBPACK_IMPORTED_MODULE_5__["DialogService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 39,
      vars: 6,
      consts: [[3, "loaderId"], ["mode", "side", "opened", "true"], ["sideNav", ""], ["mat-icon-button", "", 1, "hideSideNavBtn", 3, "click"], [1, "meni-ko"], ["mat-button", "", 3, "matMenuTriggerFor"], ["matSubheader", ""], [3, "click"], [4, "ngFor", "ngForOf"], ["menuKO", "matMenu"], ["mat-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], [1, "ukloni-slojeve"], ["mat-button", "", 3, "click"], [1, "ogranicenje"], [1, "sideNav.isOpen?mapa-container:mapa-container"], [1, "showSideNavContainer"], ["mat-raised-button", "", "class", "showSideNavBtn", 3, "click", 4, "ngIf"], ["filter", ""], ["listitem", ""], ["matListIcon", "", 4, "ngIf"], ["mat-icon-button", "", 3, "click", 4, "ngIf"], [4, "ngIf"], ["matListIcon", ""], ["mat-icon-button", "", 3, "click"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "subkat", 4, "ngFor", "ngForOf"], [1, "subkat"], ["mat-menu-item", "", 3, "click"], ["mat-raised-button", "", 1, "showSideNavBtn", 3, "click"], ["appearance", "outline", 1, "searchfield"], ["matInput", "", 3, "ngModel", "ngModelChange", "keydown", "keyup.enter"], ["style", "font-size: small; height: fit-content; padding-bottom: 2px; padding-left: 10px", 4, "ngFor", "ngForOf"], [2, "font-size", "small", "height", "fit-content", "padding-bottom", "2px", "padding-left", "10px"], ["matLine", "", 1, "mn-slojevi"], ["mat-button", "", 1, "btn-sloj", 3, "click"], ["mat-button", "", 1, "btn-legend", 3, "disabled", "ngStyle", "click"], [3, "ngStyle"], ["matLine", "", 4, "ngIf"], ["matLine", ""]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngx-ui-loader");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ngx-ui-loader", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-drawer-container");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-drawer", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r63);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

            return _r0.toggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "maximize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "swap_horiz");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h4", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Izaberi slojeve: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-list", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_mat_list_click_16_listener($event) {
            return $event.stopPropagation();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AppComponent_ng_container_17_Template, 9, 6, "ng-container", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-menu", null, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, AppComponent_button_20_Template, 2, 1, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_22_listener() {
            return ctx.removeAllLayers();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "layers_clear");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "ukloni sve slojeve ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Podaci u GIS-u su orijentacioni ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " i nisu za slu\u017Ebenu upotrebu. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-drawer-content", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, AppComponent_button_34_Template, 3, 0, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, AppComponent_ng_template_35_Template, 1, 1, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, AppComponent_ng_template_37_Template, 1, 1, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loaderId", "rasveta");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("promeni naselje ", ctx.currentKO, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listaKat);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listaKO);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r0.opened);
        }
      },
      directives: [ngx_ui_loader__WEBPACK_IMPORTED_MODULE_4__["ɵb"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatDrawer"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuTrigger"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListSubheaderCssMatStyler"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatList"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["_MatMenu"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatDrawerContent"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListIconCssMatStyler"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgTemplateOutlet"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuItem"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgModel"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListItem"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatLine"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgStyle"]],
      styles: [".hideSideNavBtn[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.meni-ko[_ngcontent-%COMP%] {\n  padding-top: 30px;\n}\n\n.btn-sloj[_ngcontent-%COMP%] {\n  width: 230px !important;\n  text-align: left;\n}\n\n.mn-slojevi[_ngcontent-%COMP%] {\n  height: 32px;\n  float: left !important;\n}\n\n.btn-legend[_ngcontent-%COMP%] {\n  float: right;\n  width: 20px !important;\n}\n\n.mapa-container[_ngcontent-%COMP%] {\n  padding-top: 2px;\n}\n\n.ukloni-slojeve[_ngcontent-%COMP%] {\n  padding-top: 80px !important;\n}\n\n.subkat[_ngcontent-%COMP%] {\n  padding-left: 15px;\n}\n\n.searchfield[_ngcontent-%COMP%] {\n  font-size: small;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n\n.showSideNavContainer[_ngcontent-%COMP%] {\n  position: absolute;\n  padding-top: 5px;\n}\n\n.showSideNavBtn[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 999;\n}\n\n.ogranicenje[_ngcontent-%COMP%] {\n  padding-left: 20px;\n  padding-top: 50px;\n  font-size: x-small;\n  color: gray;\n}\n\n  .mat-form-field-appearance-outline .mat-form-field-outline {\n  padding-top: 12px;\n  height: 60% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxwZWtvLnJvZ2Fub3ZpY1xcRGVza3RvcFxcQW5ndWxhciBwcm9qZWN0c1xcZ2lzYXBwLWFuZzkvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7QUNDSjs7QURFQTtFQUNJLHVCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxzQkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLHNCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksNEJBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDQ0o7O0FER0E7RUFDRSxpQkFBQTtFQUNBLHNCQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGlkZVNpZGVOYXZCdG4ge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4ubWVuaS1rbyB7XHJcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcclxufVxyXG5cclxuLmJ0bi1zbG9qIHtcclxuICAgIHdpZHRoOiAyMzBweCAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLm1uLXNsb2pldmkge1xyXG4gICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJ0bi1sZWdlbmQge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgd2lkdGg6IDIwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1hcGEtY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmctdG9wOjJweDtcclxufVxyXG5cclxuLnVrbG9uaS1zbG9qZXZlIHtcclxuICAgIHBhZGRpbmctdG9wOiA4MHB4IWltcG9ydGFudDtcclxufVxyXG5cclxuLnN1YmthdCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbn1cclxuXHJcbi5zZWFyY2hmaWVsZCB7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxufVxyXG5cclxuLnNob3dTaWRlTmF2Q29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbn1cclxuXHJcbi5zaG93U2lkZU5hdkJ0biB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4Ojk5OTtcclxufVxyXG5cclxuLm9ncmFuaWNlbmplIHtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gICAgZm9udC1zaXplOiB4LXNtYWxsO1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbn1cclxuXHJcblxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtb3V0bGluZSB7XHJcbiAgcGFkZGluZy10b3A6IDEycHg7XHJcbiAgaGVpZ2h0OiA2MCUgIWltcG9ydGFudDtcclxufVxyXG4iLCIuaGlkZVNpZGVOYXZCdG4ge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5tZW5pLWtvIHtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG59XG5cbi5idG4tc2xvaiB7XG4gIHdpZHRoOiAyMzBweCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4ubW4tc2xvamV2aSB7XG4gIGhlaWdodDogMzJweDtcbiAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcbn1cblxuLmJ0bi1sZWdlbmQge1xuICBmbG9hdDogcmlnaHQ7XG4gIHdpZHRoOiAyMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tYXBhLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctdG9wOiAycHg7XG59XG5cbi51a2xvbmktc2xvamV2ZSB7XG4gIHBhZGRpbmctdG9wOiA4MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5zdWJrYXQge1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG59XG5cbi5zZWFyY2hmaWVsZCB7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG59XG5cbi5zaG93U2lkZU5hdkNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcGFkZGluZy10b3A6IDVweDtcbn1cblxuLnNob3dTaWRlTmF2QnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5OTk7XG59XG5cbi5vZ3JhbmljZW5qZSB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgcGFkZGluZy10b3A6IDUwcHg7XG4gIGZvbnQtc2l6ZTogeC1zbWFsbDtcbiAgY29sb3I6IGdyYXk7XG59XG5cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lIHtcbiAgcGFkZGluZy10b3A6IDEycHg7XG4gIGhlaWdodDogNjAlICFpbXBvcnRhbnQ7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], function () {
        return [{
          type: _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_1__["StorageMap"]
        }, {
          type: src_providers_event_emitter_service__WEBPACK_IMPORTED_MODULE_2__["EventEmitterService"]
        }, {
          type: src_providers_kategorija_service__WEBPACK_IMPORTED_MODULE_3__["KategorijaService"]
        }, {
          type: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_4__["NgxUiLoaderService"]
        }, {
          type: src_providers_dialog_service__WEBPACK_IMPORTED_MODULE_5__["DialogService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _mapa_mapa_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./mapa/mapa.component */
    "./src/app/mapa/mapa.component.ts");
    /* harmony import */


    var _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-pwa/local-storage */
    "./node_modules/@ngx-pwa/local-storage/__ivy_ngcc__/fesm2015/ngx-pwa-local-storage.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var src_providers_event_emitter_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/providers/event-emitter.service */
    "./src/providers/event-emitter.service.ts");
    /* harmony import */


    var src_providers_ko_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/providers/ko.service */
    "./src/providers/ko.service.ts");
    /* harmony import */


    var src_providers_tacke_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/providers/tacke.service */
    "./src/providers/tacke.service.ts");
    /* harmony import */


    var src_providers_poligoni_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! src/providers/poligoni.service */
    "./src/providers/poligoni.service.ts");
    /* harmony import */


    var src_providers_linije_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! src/providers/linije.service */
    "./src/providers/linije.service.ts");
    /* harmony import */


    var src_providers_mlinije_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! src/providers/mlinije.service */
    "./src/providers/mlinije.service.ts");
    /* harmony import */


    var src_providers_rasveta_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! src/providers/rasveta.service */
    "./src/providers/rasveta.service.ts");
    /* harmony import */


    var src_providers_kategorija_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! src/providers/kategorija.service */
    "./src/providers/kategorija.service.ts");
    /* harmony import */


    var src_providers_globalVars__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! src/providers/globalVars */
    "./src/providers/globalVars.ts");
    /* harmony import */


    var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ngx-ui-loader */
    "./node_modules/ngx-ui-loader/__ivy_ngcc__/fesm2015/ngx-ui-loader.js");
    /* harmony import */


    var _dialog_legend_dialog_legend_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./dialog-legend/dialog-legend.component */
    "./src/app/dialog-legend/dialog-legend.component.ts");
    /* harmony import */


    var _dialog_details_dialog_details_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./dialog-details/dialog-details.component */
    "./src/app/dialog-details/dialog-details.component.ts");
    /* harmony import */


    var _angular_material_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./angular-material.module */
    "./src/app/angular-material.module.ts");
    /* harmony import */


    var ngx_color_picker__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ngx-color-picker */
    "./node_modules/ngx-color-picker/__ivy_ngcc__/fesm2015/ngx-color-picker.js");
    /* harmony import */


    var _dialog_layer_preview_dialog_layer_preview_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./dialog-layer-preview/dialog-layer-preview.component */
    "./src/app/dialog-layer-preview/dialog-layer-preview.component.ts");

    var ngxUiLoaderConfig = {
      bgsColor: 'green',
      bgsOpacity: 0.5,
      bgsPosition: 'bottom-right',
      bgsSize: 60,
      bgsType: 'ball-spin',
      blur: 5,
      delay: 0.2,
      fgsColor: '#17a11e',
      fgsPosition: 'center-center',
      fgsSize: 60,
      fgsType: 'folding-cube',
      gap: 24,
      logoPosition: 'center-center',
      logoSize: 120,
      // "logoUrl": "assets/imgs/logo.png",
      masterLoaderId: 'master',
      overlayBorderRadius: '0',
      overlayColor: 'rgba(40, 40, 40, 0.8)',
      pbColor: 'green',
      pbDirection: 'ltr',
      pbThickness: 3,
      hasProgressBar: true,
      text: 'Molimo sačekajte...',
      textColor: '#FFFFFF',
      textPosition: 'center-center',
      maxTime: 0,
      minTime: 0
    };

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [src_providers_event_emitter_service__WEBPACK_IMPORTED_MODULE_9__["EventEmitterService"], src_providers_ko_service__WEBPACK_IMPORTED_MODULE_10__["KOService"], src_providers_tacke_service__WEBPACK_IMPORTED_MODULE_11__["TackeService"], src_providers_poligoni_service__WEBPACK_IMPORTED_MODULE_12__["PoligoniService"], src_providers_linije_service__WEBPACK_IMPORTED_MODULE_13__["LinijeService"], src_providers_mlinije_service__WEBPACK_IMPORTED_MODULE_14__["MLinijeService"], src_providers_rasveta_service__WEBPACK_IMPORTED_MODULE_15__["RasvetaService"], src_providers_kategorija_service__WEBPACK_IMPORTED_MODULE_16__["KategorijaService"], src_providers_globalVars__WEBPACK_IMPORTED_MODULE_17__["GlobalVars"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_material_module__WEBPACK_IMPORTED_MODULE_21__["AngularMaterialModule"], ngx_color_picker__WEBPACK_IMPORTED_MODULE_22__["ColorPickerModule"], _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_6__["StorageModule"].forRoot({
        IDBNoWrap: true
      }), ngx_ui_loader__WEBPACK_IMPORTED_MODULE_18__["NgxUiLoaderModule"].forRoot(ngxUiLoaderConfig)]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _mapa_mapa_component__WEBPACK_IMPORTED_MODULE_5__["MapaComponent"], _dialog_legend_dialog_legend_component__WEBPACK_IMPORTED_MODULE_19__["DialogLegendComponent"], _dialog_details_dialog_details_component__WEBPACK_IMPORTED_MODULE_20__["DialogDetailsComponent"], _dialog_layer_preview_dialog_layer_preview_component__WEBPACK_IMPORTED_MODULE_23__["DialogLayerPreviewComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_material_module__WEBPACK_IMPORTED_MODULE_21__["AngularMaterialModule"], ngx_color_picker__WEBPACK_IMPORTED_MODULE_22__["ColorPickerModule"], _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_6__["StorageModule"], ngx_ui_loader__WEBPACK_IMPORTED_MODULE_18__["NgxUiLoaderModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _mapa_mapa_component__WEBPACK_IMPORTED_MODULE_5__["MapaComponent"], _dialog_legend_dialog_legend_component__WEBPACK_IMPORTED_MODULE_19__["DialogLegendComponent"], _dialog_details_dialog_details_component__WEBPACK_IMPORTED_MODULE_20__["DialogDetailsComponent"], _dialog_layer_preview_dialog_layer_preview_component__WEBPACK_IMPORTED_MODULE_23__["DialogLayerPreviewComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_material_module__WEBPACK_IMPORTED_MODULE_21__["AngularMaterialModule"], ngx_color_picker__WEBPACK_IMPORTED_MODULE_22__["ColorPickerModule"], _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_6__["StorageModule"].forRoot({
            IDBNoWrap: true
          }), ngx_ui_loader__WEBPACK_IMPORTED_MODULE_18__["NgxUiLoaderModule"].forRoot(ngxUiLoaderConfig)],
          entryComponents: [_dialog_legend_dialog_legend_component__WEBPACK_IMPORTED_MODULE_19__["DialogLegendComponent"], _dialog_details_dialog_details_component__WEBPACK_IMPORTED_MODULE_20__["DialogDetailsComponent"], _dialog_layer_preview_dialog_layer_preview_component__WEBPACK_IMPORTED_MODULE_23__["DialogLayerPreviewComponent"]],
          providers: [src_providers_event_emitter_service__WEBPACK_IMPORTED_MODULE_9__["EventEmitterService"], src_providers_ko_service__WEBPACK_IMPORTED_MODULE_10__["KOService"], src_providers_tacke_service__WEBPACK_IMPORTED_MODULE_11__["TackeService"], src_providers_poligoni_service__WEBPACK_IMPORTED_MODULE_12__["PoligoniService"], src_providers_linije_service__WEBPACK_IMPORTED_MODULE_13__["LinijeService"], src_providers_mlinije_service__WEBPACK_IMPORTED_MODULE_14__["MLinijeService"], src_providers_rasveta_service__WEBPACK_IMPORTED_MODULE_15__["RasvetaService"], src_providers_kategorija_service__WEBPACK_IMPORTED_MODULE_16__["KategorijaService"], src_providers_globalVars__WEBPACK_IMPORTED_MODULE_17__["GlobalVars"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/dialog-details/dialog-details.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/dialog-details/dialog-details.component.ts ***!
    \************************************************************/

  /*! exports provided: DialogDetailsComponent */

  /***/
  function srcAppDialogDetailsDialogDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DialogDetailsComponent", function () {
      return DialogDetailsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    function DialogDetailsComponent_th_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "keyboard_backspace");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
      }
    }

    function DialogDetailsComponent_td_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r6.key, " ");
      }
    }

    function DialogDetailsComponent_th_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 7);
      }
    }

    function DialogDetailsComponent_td_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r7 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r7.value, " ");
      }
    }

    function DialogDetailsComponent_tr_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 10);
      }
    }

    function DialogDetailsComponent_tr_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 11);
      }
    }

    var DialogDetailsComponent = /*#__PURE__*/function () {
      function DialogDetailsComponent(dialogRef, data) {
        _classCallCheck(this, DialogDetailsComponent);

        this.dialogRef = dialogRef;
        this.data = data;
        this.detalji = new Map();
        this.lista = [];
        this.displayedColumns = ['key', 'value'];

        try {
          this.detalji = JSON.parse(data);
        } catch (e) {}
      }

      _createClass(DialogDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          Object.keys(this.detalji).forEach(function (k) {
            _this8.lista.push({
              key: k,
              value: _this8.detalji[k]
            });
          });
        }
      }]);

      return DialogDetailsComponent;
    }();

    DialogDetailsComponent.ɵfac = function DialogDetailsComponent_Factory(t) {
      return new (t || DialogDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]));
    };

    DialogDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DialogDetailsComponent,
      selectors: [["app-dialog-details"]],
      decls: 10,
      vars: 3,
      consts: [["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "key"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "value"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-button", "", 3, "mat-dialog-close"], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]],
      template: function DialogDetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-dialog-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](2, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DialogDetailsComponent_th_3_Template, 4, 1, "th", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DialogDetailsComponent_td_4_Template, 2, 1, "td", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](5, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DialogDetailsComponent_th_6_Template, 1, 0, "th", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DialogDetailsComponent_td_7_Template, 2, 1, "td", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DialogDetailsComponent_tr_8_Template, 1, 0, "tr", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DialogDetailsComponent_tr_9_Template, 1, 0, "tr", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.lista);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        }
      },
      directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]],
      styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlhbG9nLWRldGFpbHMvQzpcXFVzZXJzXFxwZWtvLnJvZ2Fub3ZpY1xcRGVza3RvcFxcQW5ndWxhciBwcm9qZWN0c1xcZ2lzYXBwLWFuZzkvc3JjXFxhcHBcXGRpYWxvZy1kZXRhaWxzXFxkaWFsb2ctZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGlhbG9nLWRldGFpbHMvZGlhbG9nLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9kaWFsb2ctZGV0YWlscy9kaWFsb2ctZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59IiwidGFibGUge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dialog-details',
          templateUrl: './dialog-details.component.html',
          styleUrls: ['./dialog-details.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/dialog-layer-preview/dialog-layer-preview.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/dialog-layer-preview/dialog-layer-preview.component.ts ***!
    \************************************************************************/

  /*! exports provided: DialogLayerPreviewComponent */

  /***/
  function srcAppDialogLayerPreviewDialogLayerPreviewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DialogLayerPreviewComponent", function () {
      return DialogLayerPreviewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var src_providers_event_emitter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/providers/event-emitter.service */
    "./src/providers/event-emitter.service.ts");
    /* harmony import */


    var src_models_layer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/models/layer */
    "./src/models/layer.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ngx_color_picker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-color-picker */
    "./node_modules/ngx-color-picker/__ivy_ngcc__/fesm2015/ngx-color-picker.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function DialogLayerPreviewComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Boja sloja:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("colorPickerChange", function DialogLayerPreviewComponent_div_2_Template_input_colorPickerChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.layer.fillColor = $event;
        })("colorPickerSelect", function DialogLayerPreviewComponent_div_2_Template_input_colorPickerSelect_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.changedLayerPreview();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx_r0.layer.fillColor, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colorPicker", ctx_r0.layer.fillColor);
      }
    }

    function DialogLayerPreviewComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Prozirnost sloja:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-slider", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DialogLayerPreviewComponent_div_3_Template_mat_slider_change_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.changedLayerPreview();
        })("ngModelChange", function DialogLayerPreviewComponent_div_3_Template_mat_slider_ngModelChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.layer.fillOpacity = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("max", 1)("min", 0)("step", 0.05)("thumbLabel", false)("tickInterval", 0.1)("ngModel", ctx_r1.layer.fillOpacity);
      }
    }

    function DialogLayerPreviewComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Boja ivica:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("colorPickerChange", function DialogLayerPreviewComponent_div_4_Template_input_colorPickerChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.layer.strokeColor = $event;
        })("colorPickerSelect", function DialogLayerPreviewComponent_div_4_Template_input_colorPickerSelect_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r12.changedLayerPreview();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx_r2.layer.strokeColor, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colorPicker", ctx_r2.layer.strokeColor);
      }
    }

    function DialogLayerPreviewComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Prozirnost ivica:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-slider", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DialogLayerPreviewComponent_div_5_Template_mat_slider_change_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r13.changedLayerPreview();
        })("ngModelChange", function DialogLayerPreviewComponent_div_5_Template_mat_slider_ngModelChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r15.layer.strokeOpacity = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("max", 1)("min", 0)("step", 0.05)("thumbLabel", false)("tickInterval", 0.1)("ngModel", ctx_r3.layer.strokeOpacity);
      }
    }

    var DialogLayerPreviewComponent = /*#__PURE__*/function () {
      function DialogLayerPreviewComponent(dialogRef, layer, eventEmitter) {
        _classCallCheck(this, DialogLayerPreviewComponent);

        this.dialogRef = dialogRef;
        this.layer = layer;
        this.eventEmitter = eventEmitter;
      }

      _createClass(DialogLayerPreviewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "changedLayerPreview",
        value: function changedLayerPreview() {
          this.eventEmitter.layerPreviewChange.emit(this.layer);
        }
      }]);

      return DialogLayerPreviewComponent;
    }();

    DialogLayerPreviewComponent.ɵfac = function DialogLayerPreviewComponent_Factory(t) {
      return new (t || DialogLayerPreviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_providers_event_emitter_service__WEBPACK_IMPORTED_MODULE_2__["EventEmitterService"]));
    };

    DialogLayerPreviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DialogLayerPreviewComponent,
      selectors: [["app-dialog-layer-preview"]],
      decls: 6,
      vars: 5,
      consts: [[4, "ngIf"], [3, "colorPicker", "colorPickerChange", "colorPickerSelect"], [1, "slider", 3, "max", "min", "step", "thumbLabel", "tickInterval", "ngModel", "change", "ngModelChange"]],
      template: function DialogLayerPreviewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DialogLayerPreviewComponent_div_2_Template, 4, 3, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DialogLayerPreviewComponent_div_3_Template, 4, 6, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DialogLayerPreviewComponent_div_4_Template, 4, 3, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DialogLayerPreviewComponent_div_5_Template, 4, 6, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.layer.naziv);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.layer.fillColor);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.layer.fillOpacity);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.layer.strokeColor);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.layer.strokeOpacity);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], ngx_color_picker__WEBPACK_IMPORTED_MODULE_5__["ColorPickerDirective"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_6__["MatSlider"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]],
      styles: [".slider[_ngcontent-%COMP%] {\n  width: 90%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlhbG9nLWxheWVyLXByZXZpZXcvQzpcXFVzZXJzXFxwZWtvLnJvZ2Fub3ZpY1xcRGVza3RvcFxcQW5ndWxhciBwcm9qZWN0c1xcZ2lzYXBwLWFuZzkvc3JjXFxhcHBcXGRpYWxvZy1sYXllci1wcmV2aWV3XFxkaWFsb2ctbGF5ZXItcHJldmlldy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGlhbG9nLWxheWVyLXByZXZpZXcvZGlhbG9nLWxheWVyLXByZXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9kaWFsb2ctbGF5ZXItcHJldmlldy9kaWFsb2ctbGF5ZXItcHJldmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zbGlkZXIge1xyXG4gICAgd2lkdGg6IDkwJTtcclxufSIsIi5zbGlkZXIge1xuICB3aWR0aDogOTAlO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogLayerPreviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dialog-layer-preview',
          templateUrl: './dialog-layer-preview.component.html',
          styleUrls: ['./dialog-layer-preview.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
        }, {
          type: src_models_layer__WEBPACK_IMPORTED_MODULE_3__["Layer"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
          }]
        }, {
          type: src_providers_event_emitter_service__WEBPACK_IMPORTED_MODULE_2__["EventEmitterService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/dialog-legend/dialog-legend.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/dialog-legend/dialog-legend.component.ts ***!
    \**********************************************************/

  /*! exports provided: DialogLegendComponent */

  /***/
  function srcAppDialogLegendDialogLegendComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DialogLegendComponent", function () {
      return DialogLegendComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function DialogLegendComponent_mat_list_item_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", " - " + item_r1.tekst, " ");
      }
    }

    var DialogLegendComponent = /*#__PURE__*/function () {
      function DialogLegendComponent(dialogRef, data) {
        _classCallCheck(this, DialogLegendComponent);

        this.dialogRef = dialogRef;
        this.data = data;
      }

      _createClass(DialogLegendComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "nePrikazuj",
        value: function nePrikazuj() {
          this.dialogRef.close(false);
        }
      }]);

      return DialogLegendComponent;
    }();

    DialogLegendComponent.ɵfac = function DialogLegendComponent_Factory(t) {
      return new (t || DialogLegendComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]));
    };

    DialogLegendComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DialogLegendComponent,
      selectors: [["app-dialog-legend"]],
      decls: 7,
      vars: 3,
      consts: [["mat-dialog-title", ""], [4, "ngFor", "ngForOf"], ["mat-dialog-actions", "", 1, "actions"], ["mat-stroked-button", "", 1, "btn", 3, "mat-dialog-close"], [3, "src"]],
      template: function DialogLegendComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DialogLegendComponent_mat_list_item_3_Template, 3, 2, "mat-list-item", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "OK");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data.simboli);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", false);
        }
      },
      directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatList"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListItem"]],
      styles: [".actions[_ngcontent-%COMP%] {\n  padding-top: 15px;\n  text-align: center;\n}\n\n.btn[_ngcontent-%COMP%] {\n  width: 90%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlhbG9nLWxlZ2VuZC9DOlxcVXNlcnNcXHBla28ucm9nYW5vdmljXFxEZXNrdG9wXFxBbmd1bGFyIHByb2plY3RzXFxnaXNhcHAtYW5nOS9zcmNcXGFwcFxcZGlhbG9nLWxlZ2VuZFxcZGlhbG9nLWxlZ2VuZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGlhbG9nLWxlZ2VuZC9kaWFsb2ctbGVnZW5kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvZGlhbG9nLWxlZ2VuZC9kaWFsb2ctbGVnZW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjdGlvbnMge1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gICAgd2lkdGg6IDkwJTtcclxufSIsIi5hY3Rpb25zIHtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJ0biB7XG4gIHdpZHRoOiA5MCU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogLegendComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dialog-legend',
          templateUrl: './dialog-legend.component.html',
          styleUrls: ['./dialog-legend.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/mapa/mapa.component.ts":
  /*!****************************************!*\
    !*** ./src/app/mapa/mapa.component.ts ***!
    \****************************************/

  /*! exports provided: MapaComponent */

  /***/
  function srcAppMapaMapaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapaComponent", function () {
      return MapaComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! leaflet */
    "./node_modules/leaflet/dist/leaflet-src.js");
    /* harmony import */


    var leaflet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var leaflet_markercluster__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! leaflet.markercluster */
    "./node_modules/leaflet.markercluster/dist/leaflet.markercluster-src.js");
    /* harmony import */


    var leaflet_markercluster__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet_markercluster__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var leaflet_easyprint__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! leaflet-easyprint */
    "./node_modules/leaflet-easyprint/dist/bundle.js");
    /* harmony import */


    var leaflet_easyprint__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(leaflet_easyprint__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var src_models_lmm_tacka_layera__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/models/lmm_tacka_layera */
    "./src/models/lmm_tacka_layera.ts");
    /* harmony import */


    var src_models_lml_linija_layera__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/models/lml_linija_layera */
    "./src/models/lml_linija_layera.ts");
    /* harmony import */


    var src_models_lmp_poligon_layera__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/models/lmp_poligon_layera */
    "./src/models/lmp_poligon_layera.ts");
    /* harmony import */


    var src_models_linija__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/models/linija */
    "./src/models/linija.ts");
    /* harmony import */


    var _dialog_details_dialog_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../dialog-details/dialog-details.component */
    "./src/app/dialog-details/dialog-details.component.ts");
    /* harmony import */


    var src_providers_event_emitter_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/providers/event-emitter.service */
    "./src/providers/event-emitter.service.ts");
    /* harmony import */


    var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ngx-ui-loader */
    "./node_modules/ngx-ui-loader/__ivy_ngcc__/fesm2015/ngx-ui-loader.js");
    /* harmony import */


    var src_providers_tacke_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/providers/tacke.service */
    "./src/providers/tacke.service.ts");
    /* harmony import */


    var src_providers_linije_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! src/providers/linije.service */
    "./src/providers/linije.service.ts");
    /* harmony import */


    var src_providers_mlinije_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! src/providers/mlinije.service */
    "./src/providers/mlinije.service.ts");
    /* harmony import */


    var src_providers_poligoni_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! src/providers/poligoni.service */
    "./src/providers/poligoni.service.ts");
    /* harmony import */


    var src_providers_rasveta_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! src/providers/rasveta.service */
    "./src/providers/rasveta.service.ts");
    /* harmony import */


    var src_providers_dialog_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! src/providers/dialog.service */
    "./src/providers/dialog.service.ts");

    var MapaComponent = /*#__PURE__*/function () {
      function MapaComponent(eventEmitter, ngxService, tackeService, linijeService, mlinijeService, poligoniService, rasvetaService, dialogService) {
        _classCallCheck(this, MapaComponent);

        this.eventEmitter = eventEmitter;
        this.ngxService = ngxService;
        this.tackeService = tackeService;
        this.linijeService = linijeService;
        this.mlinijeService = mlinijeService;
        this.poligoniService = poligoniService;
        this.rasvetaService = rasvetaService;
        this.dialogService = dialogService;
        this.selectedIdKO = 7;
        this.KO = {
          idKO: 7,
          sifraKO: '013',
          nazivKO: 'Vrbas-grad',
          rBrKO: 1,
          centarx: 45.57185,
          centary: 19.640113,
          zoom: 14
        };
        this.layers = [];
        this.listaLmmTackaLayera = new Array();
        this.listaLmlLinijaLayera = new Array();
        this.listaLmpPoligonLayera = new Array();
        this.rasvetaMarkers = leaflet__WEBPACK_IMPORTED_MODULE_1__["markerClusterGroup"]({
          disableClusteringAtZoom: 18
        });
        this.loadedLayers = [];
        this.baseMaps = {
          'Esri Topo': leaflet__WEBPACK_IMPORTED_MODULE_1__["tileLayer"]('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
            // tslint:disable-next-line:max-line-length
            attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'
          }),
          'Openstreet mapnik': leaflet__WEBPACK_IMPORTED_MODULE_1__["tileLayer"]('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          }),
          'Esri World Imaginary': leaflet__WEBPACK_IMPORTED_MODULE_1__["tileLayer"]('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
            // tslint:disable-next-line:max-line-length
            attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
          })
        };
      }

      _createClass(MapaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;

          this.mymap = leaflet__WEBPACK_IMPORTED_MODULE_1__["map"]('lmapa', {
            zoomSnap: 0.2,
            zoomControl: false
          }).setView(leaflet__WEBPACK_IMPORTED_MODULE_1__["latLng"](this.KO.centarx, this.KO.centary), this.KO.zoom);
          this.baseMaps['Esri Topo'].addTo(this.mymap);
          this.eventEmitter.KOChange.subscribe(function (ko) {
            // console.log(JSON.stringify(ko));
            _this9.KO = ko;

            _this9.mymap.panTo(leaflet__WEBPACK_IMPORTED_MODULE_1__["latLng"](ko.centarx, ko.centary));

            _this9.mymap.setZoom(ko.zoom);
          });
          this.eventEmitter.layerSwitch.subscribe(function (layer) {
            // console.log("Loading layer: " + JSON.stringify(layer));
            if (layer.checked) {
              // console.log(JSON.stringify(layer.filteri));
              _this9.loadLayer(layer);
            } else {
              // console.log("Unloading layer: " + layer.id + " , vrsta: " + layer.vrsta);
              _this9.unloadLayer(layer);
            }
          });
          this.eventEmitter.layerPreviewChange.subscribe(function (layer) {
            _this9.changedLayerPreview(layer);
          });
          this.baseLayerControl = leaflet__WEBPACK_IMPORTED_MODULE_1__["control"].layers(this.baseMaps, {}).addTo(this.mymap);
          leaflet__WEBPACK_IMPORTED_MODULE_1__["control"].zoom({
            position: 'topright'
          }).addTo(this.mymap);
          leaflet__WEBPACK_IMPORTED_MODULE_1__["easyPrint"]({
            title: 'Štampanje',
            position: 'topright',
            sizeModes: ['A4Portrait', 'A4Landscape']
          }).addTo(this.mymap);
        } //////////////////////////////////////////////////////////////////////////////////////////////////
        /// Layers //////////////////////////////////////////////////////////////////////////////////////

      }, {
        key: "loadLayer",
        value: function loadLayer(layer) {
          switch (layer.vrsta) {
            case 't':
            case 'T':
              this.getTacke(layer);
              break;

            case 'p':
            case 'P':
              this.getPoligoni(layer);
              break;

            case 'l':
            case 'L':
              this.getMLinije(layer);
              break;

            case 'r':
            case 'R':
              this.getRasveta(layer);
              break;
          }
        }
      }, {
        key: "unloadLayer",
        value: function unloadLayer(layer) {
          var _this10 = this;

          switch (layer.vrsta) {
            case 't':
            case 'T':
              this.listaLmmTackaLayera.forEach(function (tl, index) {
                if (tl.layerId === layer.id) {
                  tl.lmm.forEach(function (m) {
                    return m.removeFrom(_this10.mymap);
                  });

                  _this10.listaLmmTackaLayera.splice(index, 1);

                  _this10.ngxService.stop();
                }
              });
              break;

            case 'p':
            case 'P':
              this.listaLmpPoligonLayera.forEach(function (pl, index) {
                if (pl.layerId === layer.id) {
                  pl.lmp.forEach(function (p) {
                    return p.removeFrom(_this10.mymap);
                  });

                  _this10.listaLmpPoligonLayera.splice(index, 1);

                  _this10.ngxService.stop();
                }
              });
              break;

            case 'l':
            case 'L':
              this.listaLmlLinijaLayera.forEach(function (ll, index) {
                if (ll.layerId === layer.id) {
                  ll.lml.forEach(function (l) {
                    return l.removeFrom(_this10.mymap);
                  });

                  _this10.listaLmlLinijaLayera.splice(index, 1);

                  _this10.ngxService.stop();
                }
              });
              break;

            case 'r':
            case 'R':
              this.rasvetaMarkers.clearLayers();
              this.rasvetaMarkers.removeFrom(this.mymap);
              this.ngxService.stopLoader('rasveta');
              break;
          }
        } /////////////////////////////////////////////////////////////////////////////////////////////////////
        ////// Tacke //////////////////////////////////////////////////////////////////////////////////////

      }, {
        key: "getTacke",
        value: function getTacke(layer) {
          var _this11 = this;

          var lmmTackaLayera = new src_models_lmm_tacka_layera__WEBPACK_IMPORTED_MODULE_4__["LmmTackaLayera"]();
          var lmmZaKO = [];
          lmmTackaLayera.layerId = layer.id;
          this.tackeService.getListaTacaka(layer, this.KO.idKO).subscribe(function (lista) {
            if (lista) {
              lista.forEach(function (tacka) {
                var lmmTacka = _this11.lmm(tacka);

                lmmTackaLayera.lmm.push(lmmTacka);

                if (!layer.preserveFitToBounds && _this11.tackeService.pripadaKO(tacka, _this11.KO)) {
                  lmmZaKO.push(lmmTacka);
                }
              });
            }

            _this11.listaLmmTackaLayera.push(lmmTackaLayera);

            layer.checked = true;

            _this11.ngxService.stop();

            if (!layer.preserveFitToBounds && lmmZaKO.length > 0) {
              var fg = new leaflet__WEBPACK_IMPORTED_MODULE_1__["featureGroup"](lmmZaKO);
              var bounds = fg.getBounds();

              _this11.mymap.flyToBounds(bounds, {
                padding: [15, 15]
              });
            }
          });
        }
      }, {
        key: "lmm",
        value: function lmm(tacka) {
          var _this12 = this;

          var lmm = leaflet__WEBPACK_IMPORTED_MODULE_1__["marker"]([tacka.geom.coordinates[0], tacka.geom.coordinates[1]]).setIcon(leaflet__WEBPACK_IMPORTED_MODULE_1__["icon"]({
            iconUrl: tacka.icon,
            iconSize: [16, 16],
            iconAnchor: [8, 16]
          })).addTo(this.mymap);
          var divElement = document.createElement('div');
          var pElement = document.createElement('p');
          pElement.innerHTML = tacka.info;
          pElement.innerHTML += '<br\>';
          pElement.innerHTML += '<br\>';

          if (tacka.detalji && tacka.detalji !== null) {
            var bElement = document.createElement('button');
            bElement.id = 'popup_button';
            bElement.addEventListener('click', function () {
              return _this12.dialogService.dialog.open(_dialog_details_dialog_details_component__WEBPACK_IMPORTED_MODULE_8__["DialogDetailsComponent"], {
                // width: '250px',
                data: tacka.detalji
              });
            });
            bElement.innerHTML = 'Detaljno';
            pElement.appendChild(bElement);
          }

          divElement.appendChild(pElement);
          lmm.bindPopup(divElement);

          if (tacka.label) {
            lmm.bindTooltip(tacka.label, {
              permanent: true,
              direction: 'right',
              opacity: '0.3',
              className: 'label'
            });
          } else {
            lmm.bindTooltip(tacka.tooltip, {
              opacity: 0.7
            });
          }

          return lmm;
        } //////////////////////////////////////////////////////////////////////////////////////////////////
        /// MLinije //////////////////////////////////////////////////////////////////////////////////////

      }, {
        key: "getMLinije",
        value: function getMLinije(layer) {
          var _this13 = this;

          var lmlLinijaLayera = new src_models_lml_linija_layera__WEBPACK_IMPORTED_MODULE_5__["LmlLinijaLayera"]();
          var lmlZaKO = [];
          lmlLinijaLayera.layerId = layer.id;
          this.mlinijeService.getListaMLinija(layer, this.KO.idKO).subscribe(function (lista) {
            if (lista) {
              lista.forEach(function (mlinija) {
                var _iterator = _createForOfIteratorHelper(mlinija.geom.coordinates),
                    _step;

                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var coord = _step.value;
                    var linija = new src_models_linija__WEBPACK_IMPORTED_MODULE_7__["Linija"]();
                    linija.coordinates = coord;
                    linija.strokeColor = mlinija.strokeColor;
                    linija.strokeOpacity = mlinija.strokeOpacity;
                    linija.strokeWeight = mlinija.strokeWeight;
                    linija.opis = mlinija.opis;
                    linija.info = mlinija.info;

                    var lmlMlinija = _this13.lml(linija);

                    lmlLinijaLayera.lml.push(lmlMlinija);

                    if (!layer.preserveFitToBounds && _this13.linijeService.pripadaKO(linija, _this13.KO)) {
                      lmlZaKO.push(lmlMlinija);
                    }
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }
              });
            }

            _this13.listaLmlLinijaLayera.push(lmlLinijaLayera);

            layer.checked = true;

            _this13.ngxService.stop();

            if (!layer.preserveFitToBounds && lmlZaKO.length > 0) {
              var fg = new leaflet__WEBPACK_IMPORTED_MODULE_1__["featureGroup"](lmlZaKO);
              var bounds = fg.getBounds();

              _this13.mymap.flyToBounds(bounds, {
                padding: [15, 15]
              });
            }
          });
        }
      }, {
        key: "lml",
        value: function lml(linija) {
          var _this14 = this;

          var path = new Array();

          var _iterator2 = _createForOfIteratorHelper(linija.coordinates),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var coord = _step2.value;
              path.push(new leaflet__WEBPACK_IMPORTED_MODULE_1__["LatLng"](coord[0], coord[1]));
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }

          var lml = leaflet__WEBPACK_IMPORTED_MODULE_1__["polyline"](path);

          if (linija.label) {
            lml.bindTooltip(linija.label, {
              permanent: true,
              direction: 'center',
              opacity: '0.3',
              className: 'label'
            });
          } else {
            lml.bindTooltip(linija.opis);
          }

          lml.setStyle({
            color: linija.strokeColor,
            opacity: linija.strokeOpacity,
            weight: linija.strokeWeight
          }).addTo(this.mymap);
          var divElement = document.createElement('div');
          var pElement = document.createElement('p');
          pElement.innerHTML = linija.info;
          pElement.innerHTML += '<br\>';
          pElement.innerHTML += '<br\>';

          if (linija.detalji && linija.detalji !== null) {
            var bElement = document.createElement('button');
            bElement.id = 'popup_button';
            bElement.addEventListener('click', function () {
              return _this14.dialogService.dialog.open(_dialog_details_dialog_details_component__WEBPACK_IMPORTED_MODULE_8__["DialogDetailsComponent"], {
                // width: '250px',
                data: linija.detalji
              });
            });
            bElement.innerHTML = 'Detaljno';
            pElement.appendChild(bElement);
          }

          divElement.appendChild(pElement);
          lml.bindPopup(divElement);
          path = [];
          return lml;
        } //////////////////////////////////////////////////////////////////////////////////////////////////
        /// Poligoni //////////////////////////////////////////////////////////////////////////////////////

      }, {
        key: "getPoligoni",
        value: function getPoligoni(layer) {
          var _this15 = this;

          var lmpPoligonLayera = new src_models_lmp_poligon_layera__WEBPACK_IMPORTED_MODULE_6__["LmpPoligonLayera"]();
          lmpPoligonLayera.layerId = layer.id;
          var lmpZaKO = [];
          this.poligoniService.getListaPoligona(layer, this.KO.idKO).subscribe(function (lista) {
            if (lista) {
              lista.forEach(function (poligon) {
                var lmpPoligon = _this15.lmp(poligon);

                lmpPoligonLayera.lmp.push(lmpPoligon);

                if (!layer.preserveFitToBounds && _this15.poligoniService.pripadaKO(poligon, _this15.KO)) {
                  lmpZaKO.push(lmpPoligon);
                }
              });
            }

            _this15.listaLmpPoligonLayera.push(lmpPoligonLayera);

            layer.checked = true;

            _this15.ngxService.stop();

            if (!layer.preserveFitToBounds && lmpZaKO.length > 0) {
              var fg = new leaflet__WEBPACK_IMPORTED_MODULE_1__["featureGroup"](lmpZaKO);
              var bounds = fg.getBounds();

              _this15.mymap.flyToBounds(bounds, {
                padding: [15, 15],
                maxZoom: 17
              });
            }
          });
        }
      }, {
        key: "lmp",
        value: function lmp(poligon) {
          var _this16 = this;

          var temena = new Array();
          var paths = new Array();

          for (var i = 0; i < poligon.geom.coordinates.length; i++) {
            poligon.geom.coordinates[+i].forEach(function (koord) {
              temena.push(new leaflet__WEBPACK_IMPORTED_MODULE_1__["LatLng"](koord[0], koord[1]));
            });
            paths.push(temena);
            temena = [];
          }

          var lmp = leaflet__WEBPACK_IMPORTED_MODULE_1__["polygon"](paths);

          if (poligon.label) {
            lmp.bindTooltip(poligon.label, {
              permanent: true,
              direction: 'center',
              opacity: '0.3',
              className: 'label'
            });
          }

          lmp.setStyle({
            color: poligon.strokeColor,
            opacity: poligon.strokeOpacity,
            weight: poligon.strokeWeight,
            fillColor: poligon.fillColor,
            fillOpacity: poligon.fillOpacity
          }).addTo(this.mymap);
          var divElement = document.createElement('div');
          var pElement = document.createElement('p');
          pElement.innerHTML = poligon.info;
          pElement.innerHTML += '<br\>';
          pElement.innerHTML += '<br\>';

          if (poligon.detalji && poligon.detalji !== null) {
            var bElement = document.createElement('button');
            bElement.id = 'popup_button';
            bElement.addEventListener('click', function () {
              return _this16.dialogService.dialog.open(_dialog_details_dialog_details_component__WEBPACK_IMPORTED_MODULE_8__["DialogDetailsComponent"], {
                // width: '250px',
                data: poligon.detalji
              });
            });
            bElement.innerHTML = 'Detaljno';
            pElement.appendChild(bElement);
          }

          divElement.appendChild(pElement);
          lmp.bindPopup(divElement);
          paths = [];
          return lmp;
        } //////////////////////////////////////////////////////////////////////////////////////////////////
        /// Rasveta //////////////////////////////////////////////////////////////////////////////////////

      }, {
        key: "getRasveta",
        value: function getRasveta(layer) {
          var _this17 = this;

          this.rasvetaService.getListaRasveteKO(layer, this.KO.idKO).subscribe(function (listarasvete) {
            _this17.removeRasveta();

            listarasvete.forEach(function (stub) {
              return _this17.dodajRasvetaMarkerNaMapu(stub);
            });

            _this17.rasvetaMarkers.addTo(_this17.mymap);

            _this17.ngxService.stopLoader('rasveta');
          });
        }
      }, {
        key: "dodajRasvetaMarkerNaMapu",
        value: function dodajRasvetaMarkerNaMapu(rasveta) {
          var markerLatLng = new leaflet__WEBPACK_IMPORTED_MODULE_1__["LatLng"](rasveta.geom.coordinates[0], rasveta.geom.coordinates[1]);
          var info;
          var snaga;
          var marker = leaflet__WEBPACK_IMPORTED_MODULE_1__["marker"](markerLatLng).setIcon(leaflet__WEBPACK_IMPORTED_MODULE_1__["icon"]({
            iconUrl: this.rasvetaService.icon(rasveta.kolicina, 18)
          }));

          if (rasveta.kolicina !== null) {
            if (rasveta.snaga1 !== null) {
              snaga = '' + rasveta.snaga1;

              if (rasveta.snaga2 !== null) {
                snaga = snaga + '+' + rasveta.snaga2;

                if (rasveta.snaga3 !== null) {
                  snaga = snaga + '+' + rasveta.snaga3;

                  if (rasveta.snaga4 !== null) {
                    snaga = snaga + '+' + rasveta.snaga4;
                  }
                }
              }
            } // tslint:disable-next-line:max-line-length


            info = 'Tip stuba: ' + rasveta.stub + ',<br> visina: ' + rasveta.visina + ',<br> tip sijalice: ' + rasveta.tipsijalice + '<br>' + 'w:' + snaga;
          } else {
            info = 'Tip stuba: ' + rasveta.stub + ', visina: ' + rasveta.visina;
          }

          var divElement = document.createElement('div');
          var pElement = document.createElement('p');
          pElement.innerHTML = info;
          pElement.innerHTML += '<br\>';
          divElement.appendChild(pElement);
          marker.bindPopup(divElement);
          this.rasvetaMarkers.addLayer(marker);
        }
      }, {
        key: "removeRasveta",
        value: function removeRasveta() {
          this.rasvetaMarkers.clearLayers();
        }
      }, {
        key: "changedLayerPreview",
        value: function changedLayerPreview(layer) {
          switch (layer.vrsta) {
            case 't':
            case 'T':
              break;

            case 'p':
            case 'P':
              this.listaLmpPoligonLayera.find(function (l) {
                return l.layerId === layer.id;
              }).lmp.forEach(function (poligon) {
                poligon.setStyle({
                  color: layer.strokeColor,
                  opacity: layer.strokeOpacity,
                  fillColor: layer.fillColor,
                  fillOpacity: layer.fillOpacity
                });
              });
              break;

            case 'l':
            case 'L':
              break;
          }
        }
      }]);

      return MapaComponent;
    }();

    MapaComponent.ɵfac = function MapaComponent_Factory(t) {
      return new (t || MapaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_providers_event_emitter_service__WEBPACK_IMPORTED_MODULE_9__["EventEmitterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_ui_loader__WEBPACK_IMPORTED_MODULE_10__["NgxUiLoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_providers_tacke_service__WEBPACK_IMPORTED_MODULE_11__["TackeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_providers_linije_service__WEBPACK_IMPORTED_MODULE_12__["LinijeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_providers_mlinije_service__WEBPACK_IMPORTED_MODULE_13__["MLinijeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_providers_poligoni_service__WEBPACK_IMPORTED_MODULE_14__["PoligoniService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_providers_rasveta_service__WEBPACK_IMPORTED_MODULE_15__["RasvetaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_providers_dialog_service__WEBPACK_IMPORTED_MODULE_16__["DialogService"]));
    };

    MapaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MapaComponent,
      selectors: [["app-mapa"]],
      decls: 4,
      vars: 0,
      consts: [["rel", "stylesheet", "href", "https://unpkg.com/leaflet@1.5.1/dist/leaflet.css", "integrity", "sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ==", "crossorigin", ""], ["rel", "stylesheet", "href", "https://unpkg.com/leaflet.markercluster@1.4.1/dist/MarkerCluster.css"], ["rel", "stylesheet", "href", "https://unpkg.com/leaflet.markercluster@1.4.1/dist/MarkerCluster.Default.css"], ["id", "lmapa", 1, "lmapa"]],
      template: function MapaComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "link", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "link", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        }
      },
      styles: ["#lmapa[_ngcontent-%COMP%] {\n  height: 98vh;\n}\n\n#popup_button[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to bottom, #3498db, #2980b9);\n  border-radius: 8px;\n  font-family: Arial;\n  color: #ffffff;\n  font-size: 12px;\n  padding: 4px 7px 4px 7px;\n  text-decoration: none;\n  width: 180px;\n}\n\n.info-image[_ngcontent-%COMP%] {\n  max-width: 20%;\n  color: blue;\n}\n\n.leaflet-tooltip.label[_ngcontent-%COMP%] {\n  background: green;\n  border: 2px solid cyan;\n}\n\n.leaflet-tooltip-left.label[_ngcontent-%COMP%]::before {\n  border-left-color: cyan;\n}\n\n.leaflet-tooltip-right.label[_ngcontent-%COMP%]::before {\n  border-right-color: cyan;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwYS9DOlxcVXNlcnNcXHBla28ucm9nYW5vdmljXFxEZXNrdG9wXFxBbmd1bGFyIHByb2plY3RzXFxnaXNhcHAtYW5nOS9zcmNcXGFwcFxcbWFwYVxcbWFwYS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFwYS9tYXBhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQ0NKOztBREVBO0VBTUksOERBQUE7RUFHQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBQ0FKOztBREVBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QURFRTtFQUNFLHVCQUFBO0FDQ0o7O0FERUU7RUFDRSx3QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbWFwYS9tYXBhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2xtYXBhIHsgXHJcbiAgICBoZWlnaHQ6IDk4dmg7XHJcbn1cclxuXHJcbiNwb3B1cF9idXR0b257XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIGdpcy1wcmltYXJ5KTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgIzM0OThkYiwgIzI5ODBiOSk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICMzNDk4ZGIsICMyOTgwYjkpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLW1zLWxpbmVhci1ncmFkaWVudCh0b3AsICMzNDk4ZGIsICMyOTgwYjkpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLW8tbGluZWFyLWdyYWRpZW50KHRvcCwgIzM0OThkYiwgIzI5ODBiOSk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMzQ5OGRiLCAjMjk4MGI5KTtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogODtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogODtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgcGFkZGluZzogNHB4IDdweCA0cHggN3B4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgd2lkdGg6IDE4MHB4O1xyXG59XHJcbi5pbmZvLWltYWdle1xyXG4gICAgbWF4LXdpZHRoOiAyMCU7XHJcbiAgICBjb2xvcjpibHVlO1xyXG59XHJcblxyXG4ubGVhZmxldC10b29sdGlwLmxhYmVsIHtcclxuICAgIGJhY2tncm91bmQ6IGdyZWVuO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgY3lhblxyXG4gIH1cclxuICBcclxuICAubGVhZmxldC10b29sdGlwLWxlZnQubGFiZWw6OmJlZm9yZSB7XHJcbiAgICBib3JkZXItbGVmdC1jb2xvcjogY3lhbjtcclxuICB9XHJcbiAgXHJcbiAgLmxlYWZsZXQtdG9vbHRpcC1yaWdodC5sYWJlbDo6YmVmb3JlIHtcclxuICAgIGJvcmRlci1yaWdodC1jb2xvcjogY3lhbjtcclxuICB9XHJcbiAgXHJcbiAgLy8gLmZpeGVkTGFiZWx7XHJcbiAgLy8gICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIC8vICAgY29sb3I6IGJsdWVcclxuICAvLyAgIH0iLCIjbG1hcGEge1xuICBoZWlnaHQ6IDk4dmg7XG59XG5cbiNwb3B1cF9idXR0b24ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICMzNDk4ZGIsICMyOTgwYjkpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICMzNDk4ZGIsICMyOTgwYjkpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtbXMtbGluZWFyLWdyYWRpZW50KHRvcCwgIzM0OThkYiwgIzI5ODBiOSk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC1vLWxpbmVhci1ncmFkaWVudCh0b3AsICMzNDk4ZGIsICMyOTgwYjkpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMzQ5OGRiLCAjMjk4MGI5KTtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA4O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwYWRkaW5nOiA0cHggN3B4IDRweCA3cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgd2lkdGg6IDE4MHB4O1xufVxuXG4uaW5mby1pbWFnZSB7XG4gIG1heC13aWR0aDogMjAlO1xuICBjb2xvcjogYmx1ZTtcbn1cblxuLmxlYWZsZXQtdG9vbHRpcC5sYWJlbCB7XG4gIGJhY2tncm91bmQ6IGdyZWVuO1xuICBib3JkZXI6IDJweCBzb2xpZCBjeWFuO1xufVxuXG4ubGVhZmxldC10b29sdGlwLWxlZnQubGFiZWw6OmJlZm9yZSB7XG4gIGJvcmRlci1sZWZ0LWNvbG9yOiBjeWFuO1xufVxuXG4ubGVhZmxldC10b29sdGlwLXJpZ2h0LmxhYmVsOjpiZWZvcmUge1xuICBib3JkZXItcmlnaHQtY29sb3I6IGN5YW47XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-mapa',
          templateUrl: './mapa.component.html',
          styleUrls: ['./mapa.component.scss']
        }]
      }], function () {
        return [{
          type: src_providers_event_emitter_service__WEBPACK_IMPORTED_MODULE_9__["EventEmitterService"]
        }, {
          type: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_10__["NgxUiLoaderService"]
        }, {
          type: src_providers_tacke_service__WEBPACK_IMPORTED_MODULE_11__["TackeService"]
        }, {
          type: src_providers_linije_service__WEBPACK_IMPORTED_MODULE_12__["LinijeService"]
        }, {
          type: src_providers_mlinije_service__WEBPACK_IMPORTED_MODULE_13__["MLinijeService"]
        }, {
          type: src_providers_poligoni_service__WEBPACK_IMPORTED_MODULE_14__["PoligoniService"]
        }, {
          type: src_providers_rasveta_service__WEBPACK_IMPORTED_MODULE_15__["RasvetaService"]
        }, {
          type: src_providers_dialog_service__WEBPACK_IMPORTED_MODULE_16__["DialogService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  "./src/models/layer.ts":
  /*!*****************************!*\
    !*** ./src/models/layer.ts ***!
    \*****************************/

  /*! exports provided: Layer */

  /***/
  function srcModelsLayerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Layer", function () {
      return Layer;
    });

    var Layer = function Layer() {
      _classCallCheck(this, Layer);

      this.pojedinacnaKO = false;
      this.checked = false;
      this.enabledLegend = true;
      this.preserveFitToBounds = false;
    };
    /***/

  },

  /***/
  "./src/models/linija.ts":
  /*!******************************!*\
    !*** ./src/models/linija.ts ***!
    \******************************/

  /*! exports provided: Linija */

  /***/
  function srcModelsLinijaTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Linija", function () {
      return Linija;
    });

    var Linija = function Linija() {
      _classCallCheck(this, Linija);
    };
    /***/

  },

  /***/
  "./src/models/lml_linija_layera.ts":
  /*!*****************************************!*\
    !*** ./src/models/lml_linija_layera.ts ***!
    \*****************************************/

  /*! exports provided: LmlLinijaLayera */

  /***/
  function srcModelsLml_linija_layeraTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LmlLinijaLayera", function () {
      return LmlLinijaLayera;
    }); // Leaflet map polygon


    var LmlLinijaLayera = function LmlLinijaLayera() {
      _classCallCheck(this, LmlLinijaLayera);

      this.lml = [];
    };
    /***/

  },

  /***/
  "./src/models/lmm_tacka_layera.ts":
  /*!****************************************!*\
    !*** ./src/models/lmm_tacka_layera.ts ***!
    \****************************************/

  /*! exports provided: LmmTackaLayera */

  /***/
  function srcModelsLmm_tacka_layeraTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LmmTackaLayera", function () {
      return LmmTackaLayera;
    }); // Leaflet map marker


    var LmmTackaLayera = function LmmTackaLayera() {
      _classCallCheck(this, LmmTackaLayera);

      this.lmm = [];
    };
    /***/

  },

  /***/
  "./src/models/lmp_poligon_layera.ts":
  /*!******************************************!*\
    !*** ./src/models/lmp_poligon_layera.ts ***!
    \******************************************/

  /*! exports provided: LmpPoligonLayera */

  /***/
  function srcModelsLmp_poligon_layeraTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LmpPoligonLayera", function () {
      return LmpPoligonLayera;
    }); // Leaflet map polygon


    var LmpPoligonLayera = function LmpPoligonLayera() {
      _classCallCheck(this, LmpPoligonLayera);

      this.lmp = [];
    };
    /***/

  },

  /***/
  "./src/providers/dialog.service.ts":
  /*!*****************************************!*\
    !*** ./src/providers/dialog.service.ts ***!
    \*****************************************/

  /*! exports provided: DialogService */

  /***/
  function srcProvidersDialogServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DialogService", function () {
      return DialogService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_dialog_legend_dialog_legend_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/dialog-legend/dialog-legend.component */
    "./src/app/dialog-legend/dialog-legend.component.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var src_app_dialog_layer_preview_dialog_layer_preview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/dialog-layer-preview/dialog-layer-preview.component */
    "./src/app/dialog-layer-preview/dialog-layer-preview.component.ts");
    /* harmony import */


    var _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngx-pwa/local-storage */
    "./node_modules/@ngx-pwa/local-storage/__ivy_ngcc__/fesm2015/ngx-pwa-local-storage.js");

    var DialogService = /*#__PURE__*/function () {
      function DialogService(dialog, storageMap) {
        _classCallCheck(this, DialogService);

        this.dialog = dialog;
        this.storageMap = storageMap;
      }

      _createClass(DialogService, [{
        key: "displayLegend",
        value: function displayLegend(layer) {
          if (layer.legend) {
            try {
              var data = {
                title: layer.naziv + ':',
                simboli: JSON.parse(layer.legend)
              };
              var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
              dialogConfig.position = {
                bottom: '0',
                right: '300'
              };
              dialogConfig.data = data;
              dialogConfig.width = '250px';
              dialogConfig.hasBackdrop = true;
              this.dialog.open(src_app_dialog_legend_dialog_legend_component__WEBPACK_IMPORTED_MODULE_1__["DialogLegendComponent"], dialogConfig);
            } catch (e) {}
          }
        }
      }, {
        key: "displayLayerPreview",
        value: function displayLayerPreview(params) {
          var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
          dialogConfig.position = {
            left: +params.x + 30 + 'px'
          };
          dialogConfig.data = params.layer;
          dialogConfig.width = '250px';
          dialogConfig.hasBackdrop = true;
          this.dialog.open(src_app_dialog_layer_preview_dialog_layer_preview_component__WEBPACK_IMPORTED_MODULE_3__["DialogLayerPreviewComponent"], dialogConfig);
        }
      }]);

      return DialogService;
    }();

    DialogService.ɵfac = function DialogService_Factory(t) {
      return new (t || DialogService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_4__["StorageMap"]));
    };

    DialogService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DialogService,
      factory: DialogService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
        }, {
          type: _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_4__["StorageMap"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/providers/event-emitter.service.ts":
  /*!************************************************!*\
    !*** ./src/providers/event-emitter.service.ts ***!
    \************************************************/

  /*! exports provided: EventEmitterService */

  /***/
  function srcProvidersEventEmitterServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventEmitterService", function () {
      return EventEmitterService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var EventEmitterService = function EventEmitterService() {
      _classCallCheck(this, EventEmitterService);

      this.KOChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      this.layerSwitch = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      this.layerPreviewChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    };

    EventEmitterService.ɵfac = function EventEmitterService_Factory(t) {
      return new (t || EventEmitterService)();
    };

    EventEmitterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: EventEmitterService,
      factory: EventEmitterService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EventEmitterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/providers/globalVars.ts":
  /*!*************************************!*\
    !*** ./src/providers/globalVars.ts ***!
    \*************************************/

  /*! exports provided: GlobalVars */

  /***/
  function srcProvidersGlobalVarsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GlobalVars", function () {
      return GlobalVars;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var GlobalVars = /*#__PURE__*/function () {
      // baseURL1 = 'http://93.87.76.62:8080/gis-3.0.1';// lokalna adresa
      // baseURL1 = 'https://93.87.76.62:8081';
      function GlobalVars() {
        _classCallCheck(this, GlobalVars);

        // baseURL = 'http://localhost:8080';
        // baseURL1 = 'http://localhost:8080';
        // baseURL = 'https://vgis21.herokuapp.com';
        // baseURL1 = 'https://vgis21.herokuapp.com';
        // baseURL = 'http://79.101.21.143:8070/gis-vrbas-2.1.2';
        // baseURL = 'https://93.87.76.62:8081';
        // baseURL1 = 'http://192.168.69.21:8070/gis-vrbas-2.1.2'; // lokalna adresa
        // baseURL1 = 'https://93.87.76.62:8081';
        this.baseURL = 'https://www.vrbasgis.net:8080/gis-3.0.1'; // baseURL = 'https://93.87.76.62:8081';

        this.baseURL1 = 'https://www.vrbasgis.net:8080/gis-3.0.1'; // lokalna adresa
      }

      _createClass(GlobalVars, [{
        key: "setBaseURL",
        value: function setBaseURL(value) {
          this.baseURL = value;
        }
      }, {
        key: "getBaseURL",
        value: function getBaseURL() {
          return this.baseURL;
        }
      }]);

      return GlobalVars;
    }();

    GlobalVars.ɵfac = function GlobalVars_Factory(t) {
      return new (t || GlobalVars)();
    };

    GlobalVars.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: GlobalVars,
      factory: GlobalVars.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GlobalVars, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/providers/kategorija.service.ts":
  /*!*********************************************!*\
    !*** ./src/providers/kategorija.service.ts ***!
    \*********************************************/

  /*! exports provided: KategorijaService */

  /***/
  function srcProvidersKategorijaServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KategorijaService", function () {
      return KategorijaService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _globalVars__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./globalVars */
    "./src/providers/globalVars.ts");

    var KategorijaService = /*#__PURE__*/function () {
      function KategorijaService(http, globalVars) {
        _classCallCheck(this, KategorijaService);

        this.http = http;
        this.globalVars = globalVars;
      }

      _createClass(KategorijaService, [{
        key: "getKategorije",
        value: function getKategorije() {
          var _this18 = this;

          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Content-Type': 'application/x-www-form-urlencoded',
              // tslint:disable-next-line:object-literal-key-quotes
              'Accept': 'application/json',
              'Access-Control-Allow-Origin': '*'
            })
          };
          return this.http.get(this.globalVars.baseURL + '/layers/kategorije', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            return _this18.http.get(_this18.globalVars.baseURL1 + '/layers/kategorije', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(1));
          }));
        }
      }]);

      return KategorijaService;
    }();

    KategorijaService.ɵfac = function KategorijaService_Factory(t) {
      return new (t || KategorijaService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_globalVars__WEBPACK_IMPORTED_MODULE_3__["GlobalVars"]));
    };

    KategorijaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: KategorijaService,
      factory: KategorijaService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KategorijaService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _globalVars__WEBPACK_IMPORTED_MODULE_3__["GlobalVars"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/providers/ko.service.ts":
  /*!*************************************!*\
    !*** ./src/providers/ko.service.ts ***!
    \*************************************/

  /*! exports provided: KOService */

  /***/
  function srcProvidersKoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KOService", function () {
      return KOService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _globalVars__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./globalVars */
    "./src/providers/globalVars.ts");

    var KOService = /*#__PURE__*/function () {
      function KOService(http, globalVars) {
        _classCallCheck(this, KOService);

        this.http = http;
        this.globalVars = globalVars;
      }

      _createClass(KOService, [{
        key: "getListaKO",
        value: function getListaKO() {
          var _this19 = this;

          var listaKOUrl = this.globalVars.baseURL + '/api/listako';
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Content-Type': 'application/x-www-form-urlencoded',
              // tslint:disable-next-line:object-literal-key-quotes
              'Accept': 'application/json',
              'Access-Control-Allow-Origin': '*'
            })
          };
          return this.http.get(this.globalVars.baseURL + '/api/listako', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            return _this19.http.get(_this19.globalVars.baseURL1 + '/layers/listako', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(1));
          }));
        }
      }, {
        key: "getKO",
        value: function getKO(id) {
          var _this20 = this;

          var KOUrl = this.globalVars.baseURL + '/api/ko';
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          params = params.append('id', '' + id);
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Content-Type': 'application/x-www-form-urlencoded',
              // tslint:disable-next-line:object-literal-key-quotes
              'Accept': 'application/json',
              'Access-Control-Allow-Origin': '*'
            }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('id', '' + id)
          };
          return this.http.get(this.globalVars.baseURL + '/api/ko', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            return _this20.http.get(_this20.globalVars.baseURL1 + '/api/ko', httpOptions);
          }));
        }
      }]);

      return KOService;
    }();

    KOService.ɵfac = function KOService_Factory(t) {
      return new (t || KOService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_globalVars__WEBPACK_IMPORTED_MODULE_3__["GlobalVars"]));
    };

    KOService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: KOService,
      factory: KOService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KOService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _globalVars__WEBPACK_IMPORTED_MODULE_3__["GlobalVars"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/providers/linije.service.ts":
  /*!*****************************************!*\
    !*** ./src/providers/linije.service.ts ***!
    \*****************************************/

  /*! exports provided: LinijeService */

  /***/
  function srcProvidersLinijeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LinijeService", function () {
      return LinijeService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _globalVars__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./globalVars */
    "./src/providers/globalVars.ts");

    var LinijeService = /*#__PURE__*/function () {
      function LinijeService(http, globalVars) {
        _classCallCheck(this, LinijeService);

        this.http = http;
        this.globalVars = globalVars;
      }

      _createClass(LinijeService, [{
        key: "getListaLinija",
        value: function getListaLinija(layer, ko) {
          var _this21 = this;

          var listaUrl = this.globalVars.baseURL + '/layers/linije';
          var searchstring = [];

          for (var i = 0; i < 3; i++) {
            if (layer && layer.filteri && layer.filteri[i] && layer.filteri[i].searchstring) {
              searchstring[i] = layer.filteri[i].searchstring;
            } else {
              searchstring[i] = '';
            }
          }

          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().append('layer', '' + layer.id).append('ko', '' + ko).append('searchstring0', searchstring[0]).append('searchstring1', searchstring[1]).append('searchstring2', searchstring[2]);
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Content-Type': 'application/x-www-form-urlencoded',
              // tslint:disable-next-line:object-literal-key-quotes
              'Accept': 'application/json',
              'Access-Control-Allow-Origin': '*'
            }),
            params: params
          };
          return this.http.get(this.globalVars.baseURL + '/layers/linije', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            return _this21.http.get(_this21.globalVars.baseURL1 + '/layers/linije', httpOptions);
          }));
        }
      }, {
        key: "pripadaKO",
        value: function pripadaKO(linija, ko) {
          var res = false;
          var coord = linija.coordinates[0];

          try {
            var rel = Math.abs(coord[0] - ko.centarx) + Math.abs(coord[1] - ko.centary);

            if (ko.idKO === 7) {
              if (rel && rel < 0.08) {
                res = true;
              }
            } else {
              if (rel && rel < 0.04) {
                res = true;
              }
            }
          } catch (e) {}

          return res;
        }
      }]);

      return LinijeService;
    }();

    LinijeService.ɵfac = function LinijeService_Factory(t) {
      return new (t || LinijeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_globalVars__WEBPACK_IMPORTED_MODULE_3__["GlobalVars"]));
    };

    LinijeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LinijeService,
      factory: LinijeService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LinijeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _globalVars__WEBPACK_IMPORTED_MODULE_3__["GlobalVars"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/providers/mlinije.service.ts":
  /*!******************************************!*\
    !*** ./src/providers/mlinije.service.ts ***!
    \******************************************/

  /*! exports provided: MLinijeService */

  /***/
  function srcProvidersMlinijeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MLinijeService", function () {
      return MLinijeService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _globalVars__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./globalVars */
    "./src/providers/globalVars.ts");

    var MLinijeService = /*#__PURE__*/function () {
      function MLinijeService(http, globalVars) {
        _classCallCheck(this, MLinijeService);

        this.http = http;
        this.globalVars = globalVars;
        this.filterUlica = '';
      }

      _createClass(MLinijeService, [{
        key: "getListaMLinija",
        value: function getListaMLinija(layer, ko) {
          var _this22 = this;

          var listaUrl = this.globalVars.baseURL + '/layers/linije';
          var searchstring = [];

          for (var i = 0; i < 3; i++) {
            if (layer && layer.filteri && layer.filteri[i] && layer.filteri[i].searchstring) {
              searchstring[i] = layer.filteri[i].searchstring;
            } else {
              searchstring[i] = '';
            }
          }

          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().append('layer', '' + layer.id).append('ko', '' + ko).append('searchstring0', searchstring[0]).append('searchstring1', searchstring[1]).append('searchstring2', searchstring[2]);
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Content-Type': 'application/x-www-form-urlencoded',
              // tslint:disable-next-line:object-literal-key-quotes
              'Accept': 'application/json',
              'Access-Control-Allow-Origin': '*'
            }),
            params: params
          };
          return this.http.get(this.globalVars.baseURL + '/layers/linije', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            return _this22.http.get(_this22.globalVars.baseURL1 + '/layers/linije', httpOptions);
          }));
        }
      }]);

      return MLinijeService;
    }();

    MLinijeService.ɵfac = function MLinijeService_Factory(t) {
      return new (t || MLinijeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_globalVars__WEBPACK_IMPORTED_MODULE_3__["GlobalVars"]));
    };

    MLinijeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: MLinijeService,
      factory: MLinijeService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MLinijeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _globalVars__WEBPACK_IMPORTED_MODULE_3__["GlobalVars"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/providers/poligoni.service.ts":
  /*!*******************************************!*\
    !*** ./src/providers/poligoni.service.ts ***!
    \*******************************************/

  /*! exports provided: PoligoniService */

  /***/
  function srcProvidersPoligoniServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PoligoniService", function () {
      return PoligoniService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _globalVars__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./globalVars */
    "./src/providers/globalVars.ts");

    var PoligoniService = /*#__PURE__*/function () {
      function PoligoniService(http, globalVars) {
        _classCallCheck(this, PoligoniService);

        this.http = http;
        this.globalVars = globalVars;
        this.httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/x-www-form-urlencoded',
            // tslint:disable-next-line:object-literal-key-quotes
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*'
          })
        };
      }

      _createClass(PoligoniService, [{
        key: "getListaPoligona",
        value: function getListaPoligona(layer, ko) {
          var _this23 = this;

          var listaUrl = this.globalVars.baseURL + '/layers/poligoni';
          var searchstring = [];

          for (var i = 0; i < 3; i++) {
            if (layer && layer.filteri && layer.filteri[i] && layer.filteri[i].searchstring) {
              searchstring[i] = layer.filteri[i].searchstring;
            } else {
              searchstring[i] = '';
            }
          }

          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().append('layer', '' + layer.id).append('ko', '' + ko).append('searchstring0', searchstring[0]).append('searchstring1', searchstring[1]).append('searchstring2', searchstring[2]);
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Content-Type': 'application/x-www-form-urlencoded',
              Accept: 'application/json',
              'Access-Control-Allow-Origin': '*'
            }),
            params: params
          }; // console.log(JSON.stringify(httpOptions));

          return this.http.get(this.globalVars.baseURL + '/layers/poligoni', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            return _this23.http.get(_this23.globalVars.baseURL1 + '/layers/poligoni', httpOptions);
          }));
        }
      }, {
        key: "pripadaKO",
        value: function pripadaKO(poligon, ko) {
          var res = false;
          var coord = poligon.geom.coordinates[0][0];

          try {
            var rel = Math.abs(coord[0] - ko.centarx) + Math.abs(coord[1] - ko.centary);

            if (ko.idKO === 7) {
              if (rel && rel < 0.08) {
                res = true;
              }
            } else {
              if (rel && rel < 0.04) {
                res = true;
              }
            }
          } catch (e) {}

          return res;
        }
      }]);

      return PoligoniService;
    }();

    PoligoniService.ɵfac = function PoligoniService_Factory(t) {
      return new (t || PoligoniService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_globalVars__WEBPACK_IMPORTED_MODULE_3__["GlobalVars"]));
    };

    PoligoniService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: PoligoniService,
      factory: PoligoniService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PoligoniService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _globalVars__WEBPACK_IMPORTED_MODULE_3__["GlobalVars"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/providers/rasveta.service.ts":
  /*!******************************************!*\
    !*** ./src/providers/rasveta.service.ts ***!
    \******************************************/

  /*! exports provided: RasvetaService */

  /***/
  function srcProvidersRasvetaServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RasvetaService", function () {
      return RasvetaService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _globalVars__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./globalVars */
    "./src/providers/globalVars.ts");

    var RasvetaService = /*#__PURE__*/function () {
      function RasvetaService(http, globalVars) {
        _classCallCheck(this, RasvetaService);

        this.http = http;
        this.globalVars = globalVars;
      }

      _createClass(RasvetaService, [{
        key: "getListaRasveteKO",
        value: function getListaRasveteKO(layer, ko) {
          var _this24 = this;

          var listaUrl = this.globalVars.baseURL + '/rasveta/listarasvete';
          var searchstring = [];

          for (var i = 0; i < 3; i++) {
            if (layer && layer.filteri && layer.filteri[i] && layer.filteri[i].searchstring) {
              searchstring[i] = layer.filteri[i].searchstring;
            } else {
              searchstring[i] = '';
            }
          }

          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().append('ko', '' + ko).append('searchstring0', searchstring[0]).append('searchstring1', searchstring[1]).append('searchstring2', searchstring[2]);
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Content-Type': 'application/x-www-form-urlencoded',
              Accept: 'application/json',
              'Access-Control-Allow-Origin': '*'
            }),
            params: params
          };
          return this.http.get(this.globalVars.baseURL + '/rasveta/listarasvete', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            return _this24.http.get(_this24.globalVars.baseURL1 + '/layers/listarasvete', httpOptions);
          }));
        }
      }, {
        key: "icon",
        value: function icon(kol, zoom) {
          if (kol == null || kol === 0) {
            if (zoom < 17) {
              return 'assets/icons/black_dot.png';
            } else {
              return 'assets/icons/stub_0.png';
            }
          } else {
            if (zoom < 17) {
              return 'assets/icons/yellow_dot.png';
            } else {
              switch (kol) {
                case 1:
                  return 'assets/icons/stub_1.png';

                case 2:
                  return 'assets/icons/stub_2.png';

                case 3:
                  return 'assets/icons/stub_3.png';

                case 4:
                  return 'assets/icons/stub_4.png';

                default:
                  return 'assets/icons/stub_0.png';
              }
            }
          }
        }
      }]);

      return RasvetaService;
    }();

    RasvetaService.ɵfac = function RasvetaService_Factory(t) {
      return new (t || RasvetaService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_globalVars__WEBPACK_IMPORTED_MODULE_3__["GlobalVars"]));
    };

    RasvetaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: RasvetaService,
      factory: RasvetaService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RasvetaService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _globalVars__WEBPACK_IMPORTED_MODULE_3__["GlobalVars"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/providers/tacke.service.ts":
  /*!****************************************!*\
    !*** ./src/providers/tacke.service.ts ***!
    \****************************************/

  /*! exports provided: TackeService */

  /***/
  function srcProvidersTackeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TackeService", function () {
      return TackeService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _globalVars__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./globalVars */
    "./src/providers/globalVars.ts");

    var TackeService = /*#__PURE__*/function () {
      function TackeService(http, globalVars) {
        _classCallCheck(this, TackeService);

        this.http = http;
        this.globalVars = globalVars;
      }

      _createClass(TackeService, [{
        key: "getListaTacaka",
        value: function getListaTacaka(layer, ko) {
          var _this25 = this;

          var listaUrl = this.globalVars.baseURL + '/layers/tacke';
          var searchstring = [];

          for (var i = 0; i < 3; i++) {
            if (layer && layer.filteri && layer.filteri[i] && layer.filteri[i].searchstring) {
              searchstring[i] = layer.filteri[i].searchstring;
            } else {
              searchstring[i] = '';
            }
          }

          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().append('layer', '' + layer.id).append('ko', '' + ko).append('searchstring0', searchstring[0]).append('searchstring1', searchstring[1]).append('searchstring2', searchstring[2]);
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Content-Type': 'application/x-www-form-urlencoded',
              // tslint:disable-next-line:object-literal-key-quotes
              'Accept': 'application/json',
              'Access-Control-Allow-Origin': '*'
            }),
            params: params
          };
          return this.http.get(this.globalVars.baseURL + '/layers/tacke', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            return _this25.http.get(_this25.globalVars.baseURL1 + '/layers/tacke', httpOptions);
          }));
        }
      }, {
        key: "pripadaKO",
        value: function pripadaKO(tacka, ko) {
          var res = false;

          try {
            var rel = Math.abs(tacka.geom.coordinates[0] - ko.centarx) + Math.abs(tacka.geom.coordinates[1] - ko.centary);

            if (ko.idKO === 7) {
              if (rel && rel < 0.08) {
                res = true;
              }
            } else {
              if (rel && rel < 0.04) {
                res = true;
              }
            }
          } catch (e) {}

          return res;
        }
      }]);

      return TackeService;
    }();

    TackeService.ɵfac = function TackeService_Factory(t) {
      return new (t || TackeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_globalVars__WEBPACK_IMPORTED_MODULE_3__["GlobalVars"]));
    };

    TackeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TackeService,
      factory: TackeService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TackeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _globalVars__WEBPACK_IMPORTED_MODULE_3__["GlobalVars"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\peko.roganovic\Desktop\Angular projects\gisapp-ang9\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map