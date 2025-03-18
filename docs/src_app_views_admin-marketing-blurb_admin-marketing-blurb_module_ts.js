"use strict";
(self["webpackChunkBama"] = self["webpackChunkBama"] || []).push([["src_app_views_admin-marketing-blurb_admin-marketing-blurb_module_ts"],{

/***/ 1325:
/*!*************************************************************************************!*\
  !*** ./src/app/views/admin-marketing-blurb/admin-marketing-blurb-routing.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminMarketingBlurbRoutingModule: () => (/* binding */ AdminMarketingBlurbRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 41099);
/* harmony import */ var _admin_marketing_blurb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-marketing-blurb.component */ 52337);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 96623);




const routes = [{
  path: 'duplicate/:id',
  component: _admin_marketing_blurb_component__WEBPACK_IMPORTED_MODULE_0__.AdminMarketingBlurbComponent,
  data: {
    type: 'duplicate'
  },
  pathMatch: 'full'
}, {
  path: 'create',
  component: _admin_marketing_blurb_component__WEBPACK_IMPORTED_MODULE_0__.AdminMarketingBlurbComponent,
  data: {
    type: 'create'
  },
  pathMatch: 'full'
}, {
  path: ':id',
  component: _admin_marketing_blurb_component__WEBPACK_IMPORTED_MODULE_0__.AdminMarketingBlurbComponent,
  data: {
    type: 'properties'
  },
  pathMatch: 'full'
}];
class AdminMarketingBlurbRoutingModule {
  static {
    this.ɵfac = function AdminMarketingBlurbRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AdminMarketingBlurbRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AdminMarketingBlurbRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AdminMarketingBlurbRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 52337:
/*!********************************************************************************!*\
  !*** ./src/app/views/admin-marketing-blurb/admin-marketing-blurb.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminMarketingBlurbComponent: () => (/* binding */ AdminMarketingBlurbComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 36421);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 11640);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _blocks_core_log__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../blocks/core/log */ 46415);
/* harmony import */ var _blocks_models_marketing_blurb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../blocks/models/marketing-blurb */ 70684);
/* harmony import */ var _blocks_services_errors_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../blocks/services/errors.service */ 34326);
/* harmony import */ var _blocks_services_hydra_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../blocks/services/hydra-api.service */ 11070);
/* harmony import */ var _blocks_services_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../blocks/services/models */ 34158);
/* harmony import */ var _blocks_services_spinner_state_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../blocks/services/spinner-state.service */ 9202);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 41099);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-toastr */ 34942);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _blocks_page_secondary_header_secondary_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../blocks/page/secondary-header/secondary-header.component */ 33657);
/* harmony import */ var _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../Bamba.Shared/src/fields/field.component */ 69689);
/* harmony import */ var _Bamba_Shared_src_directives_auto_focus_first_input_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../Bamba.Shared/src/directives/auto-focus-first-input.directive */ 15164);
/* harmony import */ var ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-perfect-scrollbar-portable */ 1248);
/* harmony import */ var _Bamba_Shared_src_directives_auto_update_perfect_scroll_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../Bamba.Shared/src/directives/auto-update-perfect-scroll.directive */ 81687);
/* harmony import */ var _Bamba_Shared_src_form_tab_bar_tab_bar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../Bamba.Shared/src/form/tab-bar/tab-bar.component */ 82649);
/* harmony import */ var _blocks_components_created_modified_created_modified_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../blocks/components/created-modified/created-modified.component */ 60622);
/* harmony import */ var _blurbs_blurbs_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./blurbs/blurbs.component */ 64482);
/* harmony import */ var _brand_list_brand_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./brand-list/brand-list.component */ 73250);





























const _c0 = () => ({
  suppressScrollY: false
});
function AdminMarketingBlurbComponent_div_4_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "app-blurbs", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("marketingBlurb", ctx_r1.MarketingBlurb);
  }
}
function AdminMarketingBlurbComponent_div_4_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "app-brand-list", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("marketingBlurb", ctx_r1.MarketingBlurb)("spinner", ctx_r1.spinner);
  }
}
function AdminMarketingBlurbComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 6)(1, "div", 7, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](3, "app-created-modified", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "div", 9)(5, "div", 10)(6, "app-field", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayListener"]("valueChange", function AdminMarketingBlurbComponent_div_4_Template_app_field_valueChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayBindingSet"](ctx_r1.MarketingBlurb.name, $event) || (ctx_r1.MarketingBlurb.name = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "div", 9)(8, "div", 10)(9, "app-field", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayListener"]("valueChange", function AdminMarketingBlurbComponent_div_4_Template_app_field_valueChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayBindingSet"](ctx_r1.MarketingBlurb.release, $event) || (ctx_r1.MarketingBlurb.release = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](10, "div", 12)(11, "app-tab-bar", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("tabSelected", function AdminMarketingBlurbComponent_div_4_Template_app_tab_bar_tabSelected_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.activateTab($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](12, "div", 14, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](14, AdminMarketingBlurbComponent_div_4_div_14_Template, 2, 1, "div", 15)(15, AdminMarketingBlurbComponent_div_4_div_15_Template, 2, 2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const sideScroll_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](2);
    const tabScroll_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](13);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("perfectScrollbar", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction0"](14, _c0))("autoUpdatePerfectScroll", sideScroll_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("id", ctx_r1.MarketingBlurb.id)("createdDate", ctx_r1.MarketingBlurb.dateCreatedUTC)("modifiedDate", ctx_r1.MarketingBlurb.dateModifiedUTC);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("field", ctx_r1.fieldName);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayProperty"]("value", ctx_r1.MarketingBlurb.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("field", ctx_r1.fieldRelease);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayProperty"]("value", ctx_r1.MarketingBlurb.release);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("tabs", ctx_r1.tabs);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("perfectScrollbar", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction0"](15, _c0))("autoUpdatePerfectScroll", tabScroll_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", "blurbs" == ctx_r1.activeTab);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", "brands" == ctx_r1.activeTab);
  }
}
class AdminMarketingBlurbComponent {
  constructor(translate, router, route, hydraApi, toastr, errorsService, spinner, cdr) {
    this.translate = translate;
    this.router = router;
    this.route = route;
    this.hydraApi = hydraApi;
    this.toastr = toastr;
    this.errorsService = errorsService;
    this.spinner = spinner;
    this.cdr = cdr;
    this.rightControls = [];
    this.tabs = [];
    this.activeTab = 'blurbs';
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_16__.Subscription();
    this.createButtons = () => {
      this.saveButton = new _blocks_services_models__WEBPACK_IMPORTED_MODULE_5__.Control(this.onSave, 'Save', 'btn btn-primary btn-minwidth', '', '', 'btn', false);
      this.cancelButton = new _blocks_services_models__WEBPACK_IMPORTED_MODULE_5__.Control(this.onCancel, 'Cancel', 'btn btn-light btn-minwidth', '', '', 'btn', false);
      this.rightControls.push(this.saveButton);
      this.rightControls.push(this.cancelButton);
      this.saveButton.setTranslation(this.translate.instant('Common.Save'));
      this.cancelButton.setTranslation(this.translate.instant('Common.Cancel'));
    };
    this.createFields = () => {
      this.fieldName = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Text,
        label: this.translate.instant('admin-marketing-blurb.name'),
        placeholder: this.translate.instant('admin-marketing-blurb.name-placeholder'),
        required: true
      });
      this.fieldRelease = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.List,
        label: this.translate.instant('admin-marketing-blurb.release'),
        placeholder: this.translate.instant('admin-marketing-blurb.release-placeholder'),
        required: true,
        datasource: new VersionDataSource(this.hydraApi)
      });
    };
    this.onSave = () => {
      if (this.MarketingBlurb.id) {
        this.hydraApi.updateMarketingBlurb(this.MarketingBlurb, this.MarketingBlurbSaved, this.MarketingBlurbSaveFailed);
      } else {
        this.hydraApi.createMarketingBlurb(this.MarketingBlurb, this.MarketingBlurbSaved, this.MarketingBlurbSaveFailed);
      }
      this.spinner.showSavingSpinner();
    };
    this.MarketingBlurbSaved = result => {
      if (result.success) {
        this.toastr.success(this.translate.instant('admin-marketing-blurb.saved'));
        this.returnToGrid();
      } else {
        this.errorsService.showErrorsModal(result.errors, 'admin-marketing-blurb.validation-errors');
      }
      this.spinner.hide();
    };
    this.MarketingBlurbSaveFailed = error => {
      this.toastr.error(this.translate.instant('admin-marketing-blurb.save-failed'));
      _blocks_core_log__WEBPACK_IMPORTED_MODULE_1__.Log.error('admin-marketing-blurb.save-failed', error);
      this.spinner.hide();
    };
    this.onCancel = () => {
      this.returnToGrid();
    };
    this.returnToGrid = () => {
      this.router.navigateByUrl('product/settings/BambaAdministratorApplication/BambaAdministratorApplication-Upland.Bamba.Application.Settings.MarketingBlurbs');
    };
    this.MarketingBlurbLoaded = ApiResult => {
      if (this.routeData.type === 'duplicate') {
        ApiResult.object.name = `${this.translate.instant('Admin.CopyOf')} ${ApiResult.object.name}`;
        ApiResult.object.id = '';
      }
      this.MarketingBlurb = new _blocks_models_marketing_blurb__WEBPACK_IMPORTED_MODULE_2__.MarketingBlurb({
        ...ApiResult.object
      });
      this.cdr.markForCheck();
      this.spinner.hide();
    };
    this.MarketingBlurbFailed = error => {
      this.toastr.error(this.translate.instant('admin-marketing-blurb.load-failed'));
      _blocks_core_log__WEBPACK_IMPORTED_MODULE_1__.Log.error('admin-marketing-blurb.load-failed', error);
      this.spinner.hide();
    };
    this.loadItems = () => {
      if (this.routeData.type === 'properties' || this.routeData.type === 'duplicate') {
        this.spinner.show(this.translate.instant('admin-marketing-blurb.loading-marketing-blurb'), document.body);
        this.hydraApi.getMarketingBlurb(this.routeParams.id, this.MarketingBlurbLoaded, this.MarketingBlurbFailed);
      }
    };
    this.activateTab = view => {
      this.activeTab = view;
    };
  }
  ngOnInit() {
    this.subscriptions.add((0,rxjs__WEBPACK_IMPORTED_MODULE_17__.combineLatest)([this.route.params, this.route.data]).subscribe(([params, data]) => {
      this.routeParams = params;
      this.routeData = data;
      if (this.routeData.type == 'create') {
        this.MarketingBlurb = new _blocks_models_marketing_blurb__WEBPACK_IMPORTED_MODULE_2__.MarketingBlurb({
          id: '',
          name: '',
          state: 0,
          release: '',
          brandLinks: [],
          blurbs: [new _blocks_models_marketing_blurb__WEBPACK_IMPORTED_MODULE_2__.Blurb()],
          dateCreatedUTC: new Date(),
          dateModifiedUTC: new Date()
        });
      } else {
        this.loadItems();
      }
    }));
    this.createButtons();
    this.createFields();
    this.createTabs();
  }
  createTabs() {
    this.tabs.push(new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Tab('blurbs', this.translate.instant('admin-marketing-blurb.blurbs')));
    this.tabs.push(new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.Tab('brands', this.translate.instant('admin-marketing-blurb.brands')));
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  static {
    this.ɵfac = function AdminMarketingBlurbComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AdminMarketingBlurbComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_19__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_19__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_blocks_services_hydra_api_service__WEBPACK_IMPORTED_MODULE_4__.HydraApiService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_20__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_blocks_services_errors_service__WEBPACK_IMPORTED_MODULE_3__.ErrorsService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_blocks_services_spinner_state_service__WEBPACK_IMPORTED_MODULE_6__.SpinnerStateService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_15__.ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({
      type: AdminMarketingBlurbComponent,
      selectors: [["app-admin-marketing-blurb"]],
      decls: 5,
      vars: 5,
      consts: [["sideScroll", "ngxPerfectScrollbar"], ["tabScroll", "ngxPerfectScrollbar"], ["appAutoFocusFirstInput", "", 1, "admin-marketing-blurb", "project-list-dashboard-body", "d-flex", "flex-column", "min-h-fit-content"], [3, "headerText", "rightControls"], ["id", "spinnerPanel", 1, "container-fluid", "col", "h-100"], ["class", "panel row m-0", 4, "ngIf"], [1, "panel", "row", "m-0"], ["fxFlex", "auto", "appAutoFocusFirstInput", "", 1, "col-12", "col-md-3", "properties-panel", "properties-panel-h", 3, "perfectScrollbar", "autoUpdatePerfectScroll"], [3, "id", "createdDate", "modifiedDate"], [1, "row"], [1, "col"], [3, "valueChange", "field", "value"], [1, "col-12", "col-md-9", "panel", "p-0", "border-bottom-0", "d-flex", "flex-column"], [3, "tabSelected", "tabs"], ["fxFlex", "auto", 1, "tab-content", "content-padding", "pr-3", "tab-h", 3, "perfectScrollbar", "autoUpdatePerfectScroll"], ["class", "h-100 w-100", 4, "ngIf"], [1, "h-100", "w-100"], [3, "marketingBlurb"], [1, "h-100", "w-100", 3, "marketingBlurb", "spinner"]],
      template: function AdminMarketingBlurbComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "app-secondary-header", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](2, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](4, AdminMarketingBlurbComponent_div_4_Template, 16, 16, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("headerText", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](2, 3, "admin-marketing-blurb.header-text"))("rightControls", ctx.rightControls);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.MarketingBlurb);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.NgIf, _blocks_page_secondary_header_secondary_header_component__WEBPACK_IMPORTED_MODULE_7__.SecondaryHeaderComponent, _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_8__.FieldComponent, _Bamba_Shared_src_directives_auto_focus_first_input_directive__WEBPACK_IMPORTED_MODULE_9__.AutoFocusFirstInputDirective, ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_22__.PerfectScrollbarDirective, _Bamba_Shared_src_directives_auto_update_perfect_scroll_directive__WEBPACK_IMPORTED_MODULE_10__.AutoUpdatePerfectScrollDirective, _Bamba_Shared_src_form_tab_bar_tab_bar_component__WEBPACK_IMPORTED_MODULE_11__.TabBarComponent, _blocks_components_created_modified_created_modified_component__WEBPACK_IMPORTED_MODULE_12__.CreatedModifiedComponent, _blurbs_blurbs_component__WEBPACK_IMPORTED_MODULE_13__.BlurbsComponent, _brand_list_brand_list_component__WEBPACK_IMPORTED_MODULE_14__.BrandListComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslatePipe],
      styles: ["@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap);:root {\n  --white: #ffffff;\n  --gray-05: #f1f3f3;\n  --gray-10: #e0e3e6;\n  --gray-20: #bfc6ce;\n  --gray-30: #9fa9b7;\n  --gray-40: #838fa0;\n  --gray-50: #6b7786;\n  --gray-60: #525c69;\n  --gray-70: #3d454f;\n  --gray-80: #252b31;\n  --gray-90: #16191d;\n  --gray-95: #0b0c0f;\n  --blue-05: #f0f6fe;\n  --blue-10: #e2eefd;\n  --blue-20: #bcd8fc;\n  --blue-30: #7eb1f4;\n  --blue-40: #4a8fea;\n  --blue-50: #2574db;\n  --blue-60: #0c5cc5;\n  --blue-70: #0049a9;\n  --blue-80: #003a86;\n  --blue-90: #002a61;\n  --blue-95: #001633;\n  --green-10: #e3fac3;\n  --green-30: #b9f467;\n  --green-50: #76ca02;\n  --green-70: #599900;\n  --green-80: #3c6600;\n  --green-90: #1f3600;\n  --red-10: #ffb7ce;\n  --red-30: #fa578b;\n  --red-50: #e60c51;\n  --red-70: #c2003d;\n  --red-80: #93002f;\n  --red-90: #63001f;\n  --yellow-10: #ffe3a6;\n  --yellow-30: #f9b625;\n  --yellow-50: #e39b00;\n  --yellow-70: #bb8000;\n  --yellow-80: #875c00;\n  --yellow-90: #523800;\n  --purple-10: #f3c6ff;\n  --purple-30: #dc73f9;\n  --purple-50: #bb30e2;\n  --purple-70: #910ab7;\n  --purple-80: #640080;\n  --purple-90: #380047;\n  --teal-10: #e1f9ff;\n  --teal-30: #9be5fa;\n  --teal-50: #5fcae7;\n  --teal-70: #36a6c5;\n  --teal-80: #1f7e98;\n  --teal-90: #12586b;\n  --gray-50-20: rgba(107, 119, 134, 0.2);\n  --blue-95-60: rgba(0, 22, 51, 0.6);\n  /*\n        branding\n\n    */\n  --brand-primary-color: #2574db;\n  --brand-secondary-color: #e2eefd;\n  --header-height: 56px;\n  --vertical-nav-width: 215px;\n  --vertical-nav-submenu-width: 250px;\n}\n\n/*--------------------------------------------------------------------------*/\n/*---------------------------Upland UI Theme--------------------------------*/\n/*--------------------------------------------------------------------------*/\n/*--------------------------------------------------------------------------*/\n/*--------------------------Bootstrap Overrides-----------------------------*/\n/*--------------------------------------------------------------------------*/\n.btn-primary,\n.btn-primary:hover,\n.btn-primary:active,\n.btn-primary:visited {\n  background-color: var(--brand-primary-color) !important;\n  border-color: var(--brand-primary-color) !important;\n}\n\n.rtl .ml-auto {\n  margin-left: initial !important;\n  margin-right: auto !important;\n}\n.rtl .mr-auto {\n  margin-right: initial !important;\n  margin-left: auto !important;\n}\n.rtl .pr-0 {\n  padding-right: initial !important;\n  padding-left: 0rem !important;\n}\n.rtl .pl-0 {\n  padding-left: initial !important;\n  padding-right: 0rem !important;\n}\n.rtl .ml-0 {\n  margin-left: initial !important;\n  margin-right: 0rem !important;\n}\n.rtl .mr-0 {\n  margin-right: initial !important;\n  margin-left: 0rem !important;\n}\n.rtl .pr-1 {\n  padding-right: initial !important;\n  padding-left: 0.25rem !important;\n}\n.rtl .pl-1 {\n  padding-left: initial !important;\n  padding-right: 0.25rem !important;\n}\n.rtl .ml-1 {\n  margin-left: initial !important;\n  margin-right: 0.25rem !important;\n}\n.rtl .mr-1 {\n  margin-right: initial !important;\n  margin-left: 0.25rem !important;\n}\n.rtl .pr-2 {\n  padding-right: initial !important;\n  padding-left: 0.5rem !important;\n}\n.rtl .pl-2 {\n  padding-left: initial !important;\n  padding-right: 0.5rem !important;\n}\n.rtl .ml-2 {\n  margin-left: initial !important;\n  margin-right: 0.5rem !important;\n}\n.rtl .mr-2 {\n  margin-right: initial !important;\n  margin-left: 0.5rem !important;\n}\n.rtl .pr-3 {\n  padding-right: initial !important;\n  padding-left: 1rem !important;\n}\n.rtl .pl-3 {\n  padding-left: initial !important;\n  padding-right: 1rem !important;\n}\n.rtl .ml-3 {\n  margin-left: initial !important;\n  margin-right: 1rem !important;\n}\n.rtl .mr-3 {\n  margin-right: initial !important;\n  margin-left: 1rem !important;\n}\n.rtl .pr-4 {\n  padding-right: initial !important;\n  padding-left: 1.5rem !important;\n}\n.rtl .pl-4 {\n  padding-left: initial !important;\n  padding-right: 1.5rem !important;\n}\n.rtl .ml-4 {\n  margin-left: initial !important;\n  margin-right: 1.5rem !important;\n}\n.rtl .mr-4 {\n  margin-right: initial !important;\n  margin-left: 1.5rem !important;\n}\n.rtl .pr-5 {\n  padding-right: initial !important;\n  padding-left: 3rem !important;\n}\n.rtl .pl-5 {\n  padding-left: initial !important;\n  padding-right: 3rem !important;\n}\n.rtl .ml-5 {\n  margin-left: initial !important;\n  margin-right: 3rem !important;\n}\n.rtl .mr-5 {\n  margin-right: initial !important;\n  margin-left: 3rem !important;\n}\n.rtl .offset-1 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 1 / 12) !important;\n}\n.rtl .offset-2 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 2 / 12) !important;\n}\n.rtl .offset-3 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 3 / 12) !important;\n}\n.rtl .offset-4 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 4 / 12) !important;\n}\n.rtl .offset-5 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 5 / 12) !important;\n}\n.rtl .offset-6 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 6 / 12) !important;\n}\n.rtl .offset-7 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 7 / 12) !important;\n}\n.rtl .offset-8 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 8 / 12) !important;\n}\n.rtl .offset-9 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 9 / 12) !important;\n}\n.rtl .offset-10 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 10 / 12) !important;\n}\n.rtl .offset-11 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 11 / 12) !important;\n}\n.rtl .offset-12 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 12 / 12) !important;\n}\n.rtl .text-right {\n  text-align: left !important;\n}\n.rtl .text-left {\n  text-align: right !important;\n}\n\n.admin-marketing-blurb {\n  line-height: 1.4em;\n  margin-bottom: 15px;\n  height: 100%;\n  position: relative;\n}\n.admin-marketing-blurb.min-h-fit-content,\n.admin-marketing-blurb .min-h-fit-content {\n  min-height: fit-content !important;\n}\n.admin-marketing-blurb .columns-list {\n  border-radius: 5px;\n  background-color: #c3e3ff;\n}\n.admin-marketing-blurb .cursor-pointer {\n  cursor: pointer;\n}\n.admin-marketing-blurb .list-group {\n  border-top: 2px solid #dee2e6;\n}\n.admin-marketing-blurb .secondary-header {\n  margin-left: 0 !important;\n  margin-bottom: 15px !important;\n}\n.admin-marketing-blurb .secondary-header .section-header {\n  position: static !important;\n}\n.admin-marketing-blurb .panel {\n  border-radius: 2px;\n  border: solid 1px #cfcfcf;\n}\n.admin-marketing-blurb .properties-panel {\n  padding-top: 15px;\n  background-color: var(--brand-secondary-color);\n  border-right: solid 1px #cfcfcf;\n}\n.admin-marketing-blurb .validator-panel {\n  padding-left: 20px;\n}\n.admin-marketing-blurb .properties-panel-separator {\n  width: 95%;\n  margin-left: auto;\n  margin-right: auto;\n}\n.admin-marketing-blurb .panel-header {\n  background-color: #f1f3f3;\n  border-bottom: solid 1px #cfcfcf;\n  padding: 15px;\n}\n.admin-marketing-blurb .panel-wrapper {\n  width: 100%;\n  border-radius: 2px;\n}\n.admin-marketing-blurb .color-preview,\n.admin-marketing-blurb .image-preview {\n  width: 24px;\n  height: 24px;\n}\n\n.tab-h {\n  position: relative;\n  height: calc(100vh - var(--header-height) - 55px - 85px) !important;\n}\n\n.properties-panel-h {\n  position: relative;\n  height: calc(100vh - var(--header-height) - 85px) !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uLy4uLy4uL0JhbWJhLlNoYXJlZC9zcmMvYXNzZXRzL2Nzcy9fdmFyaWFibGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3ZpZXdzL2FkbWluLW1hcmtldGluZy1ibHVyYi9hZG1pbi1tYXJrZXRpbmctYmx1cmIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0NBQUE7RUFDQSxrQ0FBQTtFQUNBOzs7S0FBQTtFQUlBLDhCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7QUNBRjs7QURHQSw2RUFBQTtBQUNBLDZF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O0VBQ0EsYUFBQTtBQXNPSjtBQW5PRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQXFPSjtBQWxPRTs7RUFFRSxXQUFBO0VBQ0EsWUFBQTtBQW9PSjs7QUFqT0E7RUFDRSxrQkFBQTtFQUNBLG1FQUFBO0FBb09GOztBQWpPQTtFQUNFLGtCQUFBO0VBQ0EsNERBQUE7QUFvT0YiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnM6d2dodEAzMDA7NDAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcclxuXHJcbjpyb290IHtcclxuICAtLXdoaXRlOiAjZmZmZmZmO1xyXG4gIC0tZ3JheS0wNTogI2YxZjNmMztcclxuICAtLWdyYXktMTA6ICNlMGUzZTY7XHJcbiAgLS1ncmF5LTIwOiAjYmZjNmNlO1xyXG4gIC0tZ3JheS0zMDogIzlmYTliNztcclxuICAtLWdyYXktNDA6ICM4MzhmYTA7XHJcbiAgLS1ncmF5LTUwOiAjNmI3Nzg2O1xyXG4gIC0tZ3JheS02MDogIzUyNWM2OTtcclxuICAtLWdyYXktNzA6ICMzZDQ1NGY7XHJcbiAgLS1ncmF5LTgwOiAjMjUyYjMxO1xyXG4gIC0tZ3JheS05MDogIzE2MTkxZDtcclxuICAtLWdyYXktOTU6ICMwYjBjMGY7XHJcbiAgLS1ibHVlLTA1OiAjZjBmNmZlO1xyXG4gIC0tYmx1ZS0xMDogI2UyZWVmZDtcclxuICAtLWJsdWUtMjA6ICNiY2Q4ZmM7XHJcbiAgLS1ibHVlLTMwOiAjN2ViMWY0O1xyXG4gIC0tYmx1ZS00MDogIzRhOGZlYTtcclxuICAtLWJsdWUtNTA6ICMyNTc0ZGI7XHJcbiAgLS1ibHVlLTYwOiAjMGM1Y2M1O1xyXG4gIC0tYmx1ZS03MDogIzAwNDlhOTtcclxuICAtLWJsdWUtODA6ICMwMDNhODY7XHJcbiAgLS1ibHVlLTkwOiAjMDAyYTYxO1xyXG4gIC0tYmx1ZS05NTogIzAwMTYzMztcclxuICAtLWdyZWVuLTEwOiAjZTNmYWMzO1xyXG4gIC0tZ3JlZW4tMzA6ICNiOWY0Njc7XHJcbiAgLS1ncmVlbi01MDogIzc2Y2EwMjtcclxuICAtLWdyZWVuLTcwOiAjNTk5OTAwO1xyXG4gIC0tZ3JlZW4tODA6ICMzYzY2MDA7XHJcbiAgLS1ncmVlbi05MDogIzFmMzYwMDtcclxuICAtLXJlZC0xMDogI2ZmYjdjZTtcclxuICAtLXJlZC0zMDogI2ZhNTc4YjtcclxuICAtLXJlZC01MDogI2U2MGM1MTtcclxuICAtLXJlZC03MDogI2MyMDAzZDtcclxuICAtLXJlZC04MDogIzkzMDAyZjtcclxuICAtLXJlZC05MDogIzYzMDAxZjtcclxuICAtLXllbGxvdy0xMDogI2ZmZTNhNjtcclxuICAtLXllbGxvdy0zMDogI2Y5YjYyNTtcclxuICAtLXllbGxvdy01MDogI2UzOWIwMDtcclxuICAtLXllbGxvdy03MDogI2JiODAwMDtcclxuICAtLXllbGxvdy04MDogIzg3NWMwMDtcclxuICAtLXllbGxvdy05MDogIzUyMzgwMDtcclxuICAtLXB1cnBsZS0xMDogI2YzYzZmZjtcclxuICAtLXB1cnBsZS0zMDogI2RjNzNmOTtcclxuICAtLXB1cnBsZS01MDogI2JiMzBlMjtcclxuICAtLXB1cnBsZS03MDogIzkxMGFiNztcclxuICAtLXB1cnBsZS04MDogIzY0MDA4MDtcclxuICAtLXB1cnBsZS05MDogIzM4MDA0NztcclxuICAtLXRlYWwtMTA6ICNlMWY5ZmY7XHJcbiAgLS10ZWFsLTMwOiAjOWJlNWZhO1xyXG4gIC0tdGVhbC01MDogIzVmY2FlNztcclxuICAtLXRlYWwtNzA6ICMzNmE2YzU7XHJcbiAgLS10ZWFsLTgwOiAjMWY3ZTk4O1xyXG4gIC0tdGVhbC05MDogIzEyNTg2YjtcclxuICAtLWdyYXktNTAtMjA6IHJnYmEoMTA3LCAxMTksIDEzNCwgMC4yKTtcclxuICAtLWJsdWUtOTUtNjA6IHJnYmEoMCwgMjIsIDUxLCAwLjYpO1xyXG4gIC8qXHJcbiAgICAgICAgYnJhbmRpbmdcclxuXHJcbiAgICAqL1xyXG4gIC0tYnJhbmQtcHJpbWFyeS1jb2xvcjogIzI1NzRkYjtcclxuICAtLWJyYW5kLXNlY29uZGFyeS1jb2xvcjogI2UyZWVmZDtcclxuICAtLWhlYWRlci1oZWlnaHQ6IDU2cHg7XHJcbiAgLS12ZXJ0aWNhbC1uYXYtd2lkdGg6IDIxNXB4O1xyXG4gIC0tdmVydGljYWwtbmF2LXN1Ym1lbnUtd2lkdGg6IDI1MHB4O1xyXG59XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1VcGxhbmQgVUkgVGhlbWUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4kZ3JheS0wNTogI2YxZjNmMztcclxuJGdyYXktMTA6ICNlMGUzZTY7XHJcbiRncmF5LTUwOiAjNmI3Nzg2O1xyXG4kYmx1ZS0xMDogI2UyZWVmZDtcclxuJGhvdmVyOiB2YXIoLS1icmFuZC1zZWNvbmRhcnktY29sb3IpOyAvLyNjZGUyZjY7XHJcblxyXG4kdXBsYW5kLWJsdWU6IHZhcigtLWJyYW5kLXByaW1hcnktY29sb3IpO1xyXG4kdXBsYW5kLXBhbmVsLWJhY2tncm91bmQ6IHZhcigtLWJyYW5kLXNlY29uZGFyeS1jb2xvcik7XHJcblxyXG4kdXBsYW5kLXByaW1hcnktYnRuLWJnOiAjMjU3NGRiOyAvLyB2YXIoLS1ibHVlLTUwKVxyXG5cclxuJHVwbGFuZC1oZWFkZXItaGVpZ2h0OiB2YXIoLS1oZWFkZXItaGVpZ2h0KTtcclxuJHVwbGFuZC1zZWNvbmRhcnktaGVhZGVyLWhlaWdodDogNTZweDtcclxuXHJcbiR1cGxhbmQtZ3JheS1iYWNrZ3JvdW5kOiAkZ3JheS0wNTtcclxuXHJcbiR1cGxhbmQtYm9keS1jb2xvcjogIzE1MTUxNTtcclxuJHVwbGFuZC1ncmVlbjogIzNjNjYwMDsgLy8gdmFyKC0tZ3JlZW4tODApXHJcbiR1cGxhbmQteWVsbG93OiAjODc1YzAwOyAvLyB2YXIoLS15ZWxsb3ctODApXHJcbiR1cGxhbmQtcmVkOiAjOTMwMDJmOyAvLyB2YXIoLS1yZWQtODApXHJcbiR1cGxhbmQtbGlnaHQtZ3JheTogI2JmYzZjZTtcclxuJHVwbGFuZC1kYXJrLWJsdWU6ICMwZDRhNjI7XHJcbiR1cGxhbmQtbGlnaHQ6ICNmZmY7XHJcbiRvcGVuLXNhbnM6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4kdXBsYW5kLWFjdGl2ZS1iZzogJHVwbGFuZC1wcmltYXJ5LWJ0bi1iZztcclxuJHVwbGFuZC1pbnB1dC1oZWlnaHQ6IGNhbGMoMS41ZW0gKyAwLjc1cmVtICsgMnB4KTtcclxuJHVwbGFuZC1pbnB1dC1idG4tZm9jdXMtd2lkdGg6IDAuMnJlbTtcclxuJHVwbGFuZC1pbnB1dC1idG4tZm9jdXMtY29sb3I6IHJnYmEodmFyKC0tYnJhbmQtcHJpbWFyeS1jb2xvciksIDAuOCk7XHJcbiR1cGxhbmQtaW5wdXQtYnRuLWZvY3VzLWJveC1zaGFkb3c6IDAgMCAwICR1cGxhbmQtaW5wdXQtYnRuLWZvY3VzLXdpZHRoICR1cGxhbmQtaW5wdXQtYnRuLWZvY3VzLWNvbG9yO1xyXG4kdXBsYW5kLWlucHV0LWZvY3VzLWJvcmRlci1jb2xvcjogJHVwbGFuZC1pbnB1dC1idG4tZm9jdXMtY29sb3I7XHJcbiR1cGxhbmQtYWxlcnQtYmctbGV2ZWw6IDA7XHJcbiR1cGxhbmQtYWxlcnQtYm9yZGVyLWxldmVsOiAwO1xyXG4kdXBsYW5kLWFsZXJ0LWNvbG9yLWxldmVsOiA2O1xyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1Cb290c3RyYXAgT3ZlcnJpZGVzLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbi5idG4tcHJpbWFyeSxcclxuLmJ0bi1wcmltYXJ5OmhvdmVyLFxyXG4uYnRuLXByaW1hcnk6YWN0aXZlLFxyXG4uYnRuLXByaW1hcnk6dmlzaXRlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnJhbmQtcHJpbWFyeS1jb2xvcikgIWltcG9ydGFudDtcclxuICBib3JkZXItY29sb3I6IHZhcigtLWJyYW5kLXByaW1hcnktY29sb3IpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiRib2R5LWNvbG9yOiAkdXBsYW5kLWJvZHktY29sb3I7XHJcbiRpbmZvOiAkdXBsYW5kLWRhcmstYmx1ZTtcclxuJHByaW1hcnk6ICR1cGxhbmQtcHJpbWFyeS1idG4tYmc7XHJcbiRzdWNjZXNzOiAkdXBsYW5kLWdyZWVuO1xyXG4kZGFuZ2VyOiAkdXBsYW5kLXJlZDtcclxuJHdhcm5pbmc6ICR1cGxhbmQteWVsbG93O1xyXG5cclxuJGFsZXJ0LWJnLWxldmVsOiAkdXBsYW5kLWFsZXJ0LWJnLWxldmVsO1xyXG4kYWxlcnQtYm9yZGVyLWxldmVsOiAkdXBsYW5kLWFsZXJ0LWJvcmRlci1sZXZlbDtcclxuJGFsZXJ0LWNvbG9yLWxldmVsOiAkdXBsYW5kLWFsZXJ0LWNvbG9yLWxldmVsO1xyXG4kbGlnaHQ6ICR1cGxhbmQtbGlnaHQ7XHJcbiRpbnB1dC1oZWlnaHQ6ICR1cGxhbmQtaW5wdXQtaGVpZ2h0O1xyXG4kaW5wdXQtY29sb3I6ICM0OTUwNTc7XHJcbiRpbnB1dC1ib3JkZXItY29sb3I6ICR1cGxhbmQtbGlnaHQtZ3JheTtcclxuJGJ0bi1ib3JkZXItcmFkaXVzOiAycHg7XHJcbiRidG4tYm9yZGVyLXJhZGl1cy1sZzogMnB4O1xyXG4kYnRuLWJvcmRlci1yYWRpdXMtc206IDJweDtcclxuJGJ0bi1wYWRkaW5nLXg6IDE2cHg7XHJcbiRidG4tcGFkZGluZy15OiA0cHg7XHJcblxyXG4ucnRsIHtcclxuICAubWwtYXV0byB7XHJcbiAgICBtYXJnaW4tbGVmdDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAubXItYXV0byB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAkc3BhY2VzOiAoMCwgMCksICgxLCAwLjI1KSwgKDIsIDAuNSksICgzLCAxKSwgKDQsIDEuNSksICg1LCAzKTtcclxuXHJcbiAgQGVhY2ggJGksICR2YWx1ZSBpbiAkc3BhY2VzIHtcclxuICAgIC5wci0jeyRpfSB7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAjeyR2YWx1ZX1yZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAucGwtI3skaX0ge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgICAgcGFkZGluZy1yaWdodDogI3skdmFsdWV9cmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLm1sLSN7JGl9IHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAjeyR2YWx1ZX1yZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAubXItI3skaX0ge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgICAgbWFyZ2luLWxlZnQ6ICN7JHZhbHVlfXJlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCAxMiB7XHJcbiAgICAub2Zmc2V0LSN7JGl9IHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiBjYWxjKDEwMCUgKiAoI3skaX0vIDEyKSkgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC50ZXh0LXJpZ2h0IHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC50ZXh0LWxlZnQge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuIiwiQGltcG9ydCAnLi8uLi8uLi8uLi8uLi8uLi8uLi9CYW1iYS5TaGFyZWQvc3JjL2Fzc2V0cy9jc3MvdmFyaWFibGVzJztcclxuXHJcbi5hZG1pbi1tYXJrZXRpbmctYmx1cmIge1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjRlbTtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICYubWluLWgtZml0LWNvbnRlbnQsXHJcbiAgLm1pbi1oLWZpdC1jb250ZW50IHtcclxuICAgIG1pbi1oZWlnaHQ6IGZpdC1jb250ZW50ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuY29sdW1ucy1saXN0IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjM2UzZmY7XHJcbiAgfVxyXG5cclxuICAuY3Vyc29yLXBvaW50ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgLmxpc3QtZ3JvdXAge1xyXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNkZWUyZTY7XHJcbiAgfVxyXG5cclxuICAuc2Vjb25kYXJ5LWhlYWRlciB7XHJcbiAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweCAhaW1wb3J0YW50O1xyXG5cclxuICAgIC5zZWN0aW9uLWhlYWRlciB7XHJcbiAgICAgIHBvc2l0aW9uOiBzdGF0aWMgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5wYW5lbCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjY2ZjZmNmO1xyXG4gIH1cclxuXHJcbiAgLnByb3BlcnRpZXMtcGFuZWwge1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdXBsYW5kLXBhbmVsLWJhY2tncm91bmQ7XHJcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCAjY2ZjZmNmO1xyXG4gIH1cclxuXHJcbiAgLnZhbGlkYXRvci1wYW5lbCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAucHJvcGVydGllcy1wYW5lbC1zZXBhcmF0b3Ige1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLnBhbmVsLWhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdXBsYW5kLWdyYXktYmFja2dyb3VuZDtcclxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjY2ZjZmNmO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICB9XHJcblxyXG4gIC5wYW5lbC13cmFwcGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIH1cclxuXHJcbiAgLmNvbG9yLXByZXZpZXcsXHJcbiAgLmltYWdlLXByZXZpZXcge1xyXG4gICAgd2lkdGg6IDI0cHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgfVxyXG59XHJcbi50YWItaCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIHZhcigtLWhlYWRlci1oZWlnaHQpIC0gNTVweCAtIDg1cHgpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wcm9wZXJ0aWVzLXBhbmVsLWgge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSB2YXIoLS1oZWFkZXItaGVpZ2h0KSAtIDg1cHgpICFpbXBvcnRhbnQ7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
      encapsulation: 2
    });
  }
}
class VersionDataSource extends shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FixedDataSource {
  constructor(hydraApiService) {
    super();
    this.hydraApiService = hydraApiService;
    this.versionsLoaded = result => {
      if (!result.success) return;
      const options = new Array();
      result.object.forEach(version => {
        options.push({
          name: version,
          value: version
        });
      });
      this.successCallBack(options);
    };
    this.failed = err => {
      this.failureCallBack(err);
    };
  }
  getItems(startsWith, currentValue, successCallBack, failureCallBack) {
    this.successCallBack = successCallBack;
    this.failureCallBack = failureCallBack;
    this.hydraApiService.getMarketingBlurbsJiraVersions(this.versionsLoaded, this.failed);
  }
}

/***/ }),

/***/ 88820:
/*!*****************************************************************************!*\
  !*** ./src/app/views/admin-marketing-blurb/admin-marketing-blurb.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminMarketingBlurbModule: () => (/* binding */ AdminMarketingBlurbModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-smart-modal */ 94500);
/* harmony import */ var ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-perfect-scrollbar-portable */ 1248);
/* harmony import */ var _blocks_page_page_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../blocks/page/page.module */ 13762);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 23949);
/* harmony import */ var _admin_marketing_blurb_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-marketing-blurb-routing.module */ 1325);
/* harmony import */ var _admin_marketing_blurb_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-marketing-blurb.component */ 52337);
/* harmony import */ var _blurbs_blurbs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blurbs/blurbs.component */ 64482);
/* harmony import */ var _blurbs_blurb_blurb_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blurbs/blurb/blurb.component */ 69175);
/* harmony import */ var _brand_list_brand_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./brand-list/brand-list.component */ 73250);
/* harmony import */ var _blocks_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../blocks/components/components.module */ 68876);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 96623);














class AdminMarketingBlurbModule {
  static {
    this.ɵfac = function AdminMarketingBlurbModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AdminMarketingBlurbModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
      type: AdminMarketingBlurbModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _admin_marketing_blurb_routing_module__WEBPACK_IMPORTED_MODULE_2__.AdminMarketingBlurbRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule, _blocks_page_page_module__WEBPACK_IMPORTED_MODULE_0__.PageModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.FieldsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.AutoFocusFirstInputModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.CheckboxModule, ngx_smart_modal__WEBPACK_IMPORTED_MODULE_11__.NgxSmartModalModule, ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_12__.PerfectScrollbarModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.AutoUpdatePerfectScrollModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.TabBarModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.ModalHeaderModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_13__.DragDropModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.LabelModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.ErrorsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.DualPicklistModule, _blocks_components_components_module__WEBPACK_IMPORTED_MODULE_7__.ComponentsModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AdminMarketingBlurbModule, {
    declarations: [_admin_marketing_blurb_component__WEBPACK_IMPORTED_MODULE_3__.AdminMarketingBlurbComponent, _blurbs_blurbs_component__WEBPACK_IMPORTED_MODULE_4__.BlurbsComponent, _blurbs_blurb_blurb_component__WEBPACK_IMPORTED_MODULE_5__.BlurbComponent, _brand_list_brand_list_component__WEBPACK_IMPORTED_MODULE_6__.BrandListComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _admin_marketing_blurb_routing_module__WEBPACK_IMPORTED_MODULE_2__.AdminMarketingBlurbRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule, _blocks_page_page_module__WEBPACK_IMPORTED_MODULE_0__.PageModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.FieldsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.AutoFocusFirstInputModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.CheckboxModule, ngx_smart_modal__WEBPACK_IMPORTED_MODULE_11__.NgxSmartModalModule, ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_12__.PerfectScrollbarModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.AutoUpdatePerfectScrollModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.TabBarModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.ModalHeaderModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_13__.DragDropModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.LabelModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.ErrorsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.DualPicklistModule, _blocks_components_components_module__WEBPACK_IMPORTED_MODULE_7__.ComponentsModule]
  });
})();

/***/ }),

/***/ 69175:
/*!*****************************************************************************!*\
  !*** ./src/app/views/admin-marketing-blurb/blurbs/blurb/blurb.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlurbComponent: () => (/* binding */ BlurbComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _blocks_models_marketing_blurb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../blocks/models/marketing-blurb */ 70684);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../Bamba.Shared/src/fields/field.component */ 69689);
/* harmony import */ var _Bamba_Shared_src_directives_auto_focus_first_input_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../Bamba.Shared/src/directives/auto-focus-first-input.directive */ 15164);
/* harmony import */ var _Bamba_Shared_src_form_label_label_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../Bamba.Shared/src/form/label/label.component */ 38861);










function BlurbComponent_i_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BlurbComponent_i_16_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.deleteBlurb());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 1, "admin-marketing-blurb.remove"));
  }
}
class BlurbComponent {
  constructor(translate) {
    this.translate = translate;
    this.onRemoveBlurb = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
  }
  ngOnInit() {
    this.createFields();
  }
  createFields() {
    this.summaryField = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
      type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Text,
      label: 'blurb-summary',
      hideLabel: true,
      placeholder: this.translate.instant('admin-marketing-blurb.blurb-summary-placeholder'),
      required: true
    });
    this.detailsField = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
      type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.LargeText,
      label: 'blurb-details',
      hideLabel: true,
      placeholder: this.translate.instant('admin-marketing-blurb.blurb-details-placeholder'),
      required: true
    });
    this.learnMoreLinkField = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
      type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Text,
      label: 'blurb-learn-more-link',
      hideLabel: true,
      placeholder: this.translate.instant('admin-marketing-blurb.blurb-learn-more-link-placeholder'),
      required: true
    });
  }
  deleteBlurb() {
    this.onRemoveBlurb.emit(this.index);
  }
  static {
    this.ɵfac = function BlurbComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || BlurbComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: BlurbComponent,
      selectors: [["app-blurb"]],
      inputs: {
        blurb: "blurb",
        index: "index",
        hideRemove: "hideRemove"
      },
      outputs: {
        onRemoveBlurb: "onRemoveBlurb"
      },
      decls: 17,
      vars: 17,
      consts: [["appAutoFocusFirstInput", "", 1, "blurb", 3, "id"], [1, "row"], [1, "col-10p", "summary-label"], [3, "text", "localize", "required"], [1, "col-md-7"], [3, "valueChange", "field", "value"], ["class", "icon-cancel-circle item-delete", 3, "title", "click", 4, "ngIf"], [1, "icon-cancel-circle", "item-delete", 3, "click", "title"]],
      template: function BlurbComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "app-label", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 4)(5, "app-field", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("valueChange", function BlurbComponent_Template_app_field_valueChange_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.blurb.summary, $event) || (ctx.blurb.summary = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 1)(7, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "app-label", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 4)(10, "app-field", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("valueChange", function BlurbComponent_Template_app_field_valueChange_10_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.blurb.details, $event) || (ctx.blurb.details = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 1)(12, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "app-label", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 4)(15, "app-field", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("valueChange", function BlurbComponent_Template_app_field_valueChange_15_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.blurb.learnMoreLink, $event) || (ctx.blurb.learnMoreLink = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, BlurbComponent_i_16_Template, 2, 3, "i", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("id", "blurb-" + ctx.index);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("text", "admin-marketing-blurb.blurb-summary-label")("localize", true)("required", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("field", ctx.summaryField);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("value", ctx.blurb.summary);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("text", "admin-marketing-blurb.blurb-details-label")("localize", true)("required", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("field", ctx.detailsField);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("value", ctx.blurb.details);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("text", "admin-marketing-blurb.blurb-link-label")("localize", true)("required", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("field", ctx.learnMoreLinkField);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("value", ctx.blurb.learnMoreLink);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.hideRemove);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_2__.FieldComponent, _Bamba_Shared_src_directives_auto_focus_first_input_directive__WEBPACK_IMPORTED_MODULE_3__.AutoFocusFirstInputDirective, _Bamba_Shared_src_form_label_label_component__WEBPACK_IMPORTED_MODULE_4__.LabelComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe],
      styles: [".blurb {\n  position: relative;\n  padding: 10px 10px 10px 25px;\n}\n.blurb .summary-label {\n  align-self: center;\n}\n.blurb .summary-label label {\n  margin-bottom: 0px !important;\n}\n.blurb .criteria-label {\n  padding-right: 5px;\n  padding-left: 15px;\n}\n.blurb .item-delete {\n  transition: 0.25s color;\n  font-size: 15px;\n  color: #555;\n  cursor: pointer;\n  position: absolute;\n  top: 5px;\n  right: 5px;\n}\n.blurb .item-delete:hover {\n  color: #e10012;\n  transition: 0.25s color;\n}\n.blurb .col-10p {\n  width: 0 0 10%;\n  max-width: 10%;\n  position: relative;\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdmlld3MvYWRtaW4tbWFya2V0aW5nLWJsdXJiL2JsdXJicy9ibHVyYi9ibHVyYi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsNEJBQUE7QUFDRjtBQUNFO0VBQ0Usa0JBQUE7QUFDSjtBQUFJO0VBQ0UsNkJBQUE7QUFFTjtBQUVFO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQUFKO0FBR0U7RUFDRSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7QUFESjtBQUdJO0VBQ0UsY0FBQTtFQUNBLHVCQUFBO0FBRE47QUFLRTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUhKIiwic291cmNlc0NvbnRlbnQiOlsiLmJsdXJiIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMjVweDtcclxuXHJcbiAgLnN1bW1hcnktbGFiZWwge1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgbGFiZWwge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jcml0ZXJpYS1sYWJlbCB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgfVxyXG5cclxuICAuaXRlbS1kZWxldGUge1xyXG4gICAgdHJhbnNpdGlvbjogMC4yNXMgY29sb3I7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBjb2xvcjogIzU1NTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNXB4O1xyXG4gICAgcmlnaHQ6IDVweDtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgY29sb3I6ICNlMTAwMTI7XHJcbiAgICAgIHRyYW5zaXRpb246IDAuMjVzIGNvbG9yO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNvbC0xMHAge1xyXG4gICAgd2lkdGg6IDAgMCAxMCU7XHJcbiAgICBtYXgtd2lkdGg6IDEwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 64482:
/*!************************************************************************!*\
  !*** ./src/app/views/admin-marketing-blurb/blurbs/blurbs.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlurbsComponent: () => (/* binding */ BlurbsComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 23949);
/* harmony import */ var ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-perfect-scrollbar-portable */ 1248);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _blocks_models_marketing_blurb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../blocks/models/marketing-blurb */ 70684);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _blurb_blurb_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blurb/blurb.component */ 69175);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 77353);











const _c0 = () => ({});
function BlurbsComponent_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6)(1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "app-blurb", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onRemoveBlurb", function BlurbsComponent_div_6_div_1_Template_app_blurb_onRemoveBlurb_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.removeBlurb($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const blurb_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("id", "gripper-" + i_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("blurb", blurb_r4)("index", i_r5)("hideRemove", ctx_r1.marketingBlurb.blurbs.length <= 1);
  }
}
function BlurbsComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("cdkDropListDropped", function BlurbsComponent_div_6_Template_div_cdkDropListDropped_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.moveItem($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, BlurbsComponent_div_6_div_1_Template, 4, 4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("perfectScrollbar", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](2, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.marketingBlurb.blurbs);
  }
}
class BlurbsComponent {
  constructor(delay) {
    this.delay = delay;
    this.errors = [];
  }
  ngOnInit() {
    this.errors = [];
  }
  addNewblurb() {
    this.marketingBlurb.blurbs.push(new _blocks_models_marketing_blurb__WEBPACK_IMPORTED_MODULE_1__.Blurb());
    this.delay.execute(() => this.directiveRef.scrollToBottom(0, 100), 10);
  }
  removeBlurb(index) {
    if (this.marketingBlurb.blurbs.length <= 1) return;
    this.marketingBlurb.blurbs.splice(index, 1);
    this.directiveRef.update();
  }
  moveItem(event) {
    (0,_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__.moveItemInArray)(this.marketingBlurb.blurbs, event.previousIndex, event.currentIndex);
  }
  static {
    this.ɵfac = function BlurbsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || BlurbsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.DelayService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: BlurbsComponent,
      selectors: [["app-blurbs"]],
      viewQuery: function BlurbsComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_5__.PerfectScrollbarDirective, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.directiveRef = _t.first);
        }
      },
      inputs: {
        marketingBlurb: "marketingBlurb"
      },
      decls: 7,
      vars: 7,
      consts: [[1, "blurbs-container", "h-100"], [1, "buttons-group"], ["id", "add-blurb-btn", 1, "btn", "btn-secondary", "add-blurb-btn", 3, "click", "title"], ["class", "blurbs-list", "cdkDropList", "", 3, "perfectScrollbar", "cdkDropListDropped", 4, "ngIf"], ["cdkDropList", "", 1, "blurbs-list", 3, "cdkDropListDropped", "perfectScrollbar"], ["class", "blurb-box", "cdkDrag", "", 4, "ngFor", "ngForOf"], ["cdkDrag", "", 1, "blurb-box"], [1, "blurb-container"], ["cdkDragHandle", "", 1, "icomoon-grip-small", "gripper-icon", 3, "id"], [3, "onRemoveBlurb", "blurb", "index", "hideRemove"]],
      template: function BlurbsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BlurbsComponent_Template_button_click_2_listener() {
            return ctx.addNewblurb();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, BlurbsComponent_div_6_Template, 2, 3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 3, "admin-marketing-blurb.add-blurb"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 5, "admin-marketing-blurb.add-blurb"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.marketingBlurb && ctx.marketingBlurb.blurbs && ctx.marketingBlurb.blurbs.length);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_5__.PerfectScrollbarDirective, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__.CdkDropList, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__.CdkDrag, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__.CdkDragHandle, _blurb_blurb_component__WEBPACK_IMPORTED_MODULE_2__.BlurbComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe],
      styles: ["@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap);:root {\n  --white: #ffffff;\n  --gray-05: #f1f3f3;\n  --gray-10: #e0e3e6;\n  --gray-20: #bfc6ce;\n  --gray-30: #9fa9b7;\n  --gray-40: #838fa0;\n  --gray-50: #6b7786;\n  --gray-60: #525c69;\n  --gray-70: #3d454f;\n  --gray-80: #252b31;\n  --gray-90: #16191d;\n  --gray-95: #0b0c0f;\n  --blue-05: #f0f6fe;\n  --blue-10: #e2eefd;\n  --blue-20: #bcd8fc;\n  --blue-30: #7eb1f4;\n  --blue-40: #4a8fea;\n  --blue-50: #2574db;\n  --blue-60: #0c5cc5;\n  --blue-70: #0049a9;\n  --blue-80: #003a86;\n  --blue-90: #002a61;\n  --blue-95: #001633;\n  --green-10: #e3fac3;\n  --green-30: #b9f467;\n  --green-50: #76ca02;\n  --green-70: #599900;\n  --green-80: #3c6600;\n  --green-90: #1f3600;\n  --red-10: #ffb7ce;\n  --red-30: #fa578b;\n  --red-50: #e60c51;\n  --red-70: #c2003d;\n  --red-80: #93002f;\n  --red-90: #63001f;\n  --yellow-10: #ffe3a6;\n  --yellow-30: #f9b625;\n  --yellow-50: #e39b00;\n  --yellow-70: #bb8000;\n  --yellow-80: #875c00;\n  --yellow-90: #523800;\n  --purple-10: #f3c6ff;\n  --purple-30: #dc73f9;\n  --purple-50: #bb30e2;\n  --purple-70: #910ab7;\n  --purple-80: #640080;\n  --purple-90: #380047;\n  --teal-10: #e1f9ff;\n  --teal-30: #9be5fa;\n  --teal-50: #5fcae7;\n  --teal-70: #36a6c5;\n  --teal-80: #1f7e98;\n  --teal-90: #12586b;\n  --gray-50-20: rgba(107, 119, 134, 0.2);\n  --blue-95-60: rgba(0, 22, 51, 0.6);\n  /*\n        branding\n\n    */\n  --brand-primary-color: #2574db;\n  --brand-secondary-color: #e2eefd;\n  --header-height: 56px;\n  --vertical-nav-width: 215px;\n  --vertical-nav-submenu-width: 250px;\n}\n\n/*--------------------------------------------------------------------------*/\n/*---------------------------Upland UI Theme--------------------------------*/\n/*--------------------------------------------------------------------------*/\n/*--------------------------------------------------------------------------*/\n/*--------------------------Bootstrap Overrides-----------------------------*/\n/*--------------------------------------------------------------------------*/\n.btn-primary,\n.btn-primary:hover,\n.btn-primary:active,\n.btn-primary:visited {\n  background-color: var(--brand-primary-color) !important;\n  border-color: var(--brand-primary-color) !important;\n}\n\n.rtl .ml-auto {\n  margin-left: initial !important;\n  margin-right: auto !important;\n}\n.rtl .mr-auto {\n  margin-right: initial !important;\n  margin-left: auto !important;\n}\n.rtl .pr-0 {\n  padding-right: initial !important;\n  padding-left: 0rem !important;\n}\n.rtl .pl-0 {\n  padding-left: initial !important;\n  padding-right: 0rem !important;\n}\n.rtl .ml-0 {\n  margin-left: initial !important;\n  margin-right: 0rem !important;\n}\n.rtl .mr-0 {\n  margin-right: initial !important;\n  margin-left: 0rem !important;\n}\n.rtl .pr-1 {\n  padding-right: initial !important;\n  padding-left: 0.25rem !important;\n}\n.rtl .pl-1 {\n  padding-left: initial !important;\n  padding-right: 0.25rem !important;\n}\n.rtl .ml-1 {\n  margin-left: initial !important;\n  margin-right: 0.25rem !important;\n}\n.rtl .mr-1 {\n  margin-right: initial !important;\n  margin-left: 0.25rem !important;\n}\n.rtl .pr-2 {\n  padding-right: initial !important;\n  padding-left: 0.5rem !important;\n}\n.rtl .pl-2 {\n  padding-left: initial !important;\n  padding-right: 0.5rem !important;\n}\n.rtl .ml-2 {\n  margin-left: initial !important;\n  margin-right: 0.5rem !important;\n}\n.rtl .mr-2 {\n  margin-right: initial !important;\n  margin-left: 0.5rem !important;\n}\n.rtl .pr-3 {\n  padding-right: initial !important;\n  padding-left: 1rem !important;\n}\n.rtl .pl-3 {\n  padding-left: initial !important;\n  padding-right: 1rem !important;\n}\n.rtl .ml-3 {\n  margin-left: initial !important;\n  margin-right: 1rem !important;\n}\n.rtl .mr-3 {\n  margin-right: initial !important;\n  margin-left: 1rem !important;\n}\n.rtl .pr-4 {\n  padding-right: initial !important;\n  padding-left: 1.5rem !important;\n}\n.rtl .pl-4 {\n  padding-left: initial !important;\n  padding-right: 1.5rem !important;\n}\n.rtl .ml-4 {\n  margin-left: initial !important;\n  margin-right: 1.5rem !important;\n}\n.rtl .mr-4 {\n  margin-right: initial !important;\n  margin-left: 1.5rem !important;\n}\n.rtl .pr-5 {\n  padding-right: initial !important;\n  padding-left: 3rem !important;\n}\n.rtl .pl-5 {\n  padding-left: initial !important;\n  padding-right: 3rem !important;\n}\n.rtl .ml-5 {\n  margin-left: initial !important;\n  margin-right: 3rem !important;\n}\n.rtl .mr-5 {\n  margin-right: initial !important;\n  margin-left: 3rem !important;\n}\n.rtl .offset-1 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 1 / 12) !important;\n}\n.rtl .offset-2 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 2 / 12) !important;\n}\n.rtl .offset-3 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 3 / 12) !important;\n}\n.rtl .offset-4 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 4 / 12) !important;\n}\n.rtl .offset-5 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 5 / 12) !important;\n}\n.rtl .offset-6 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 6 / 12) !important;\n}\n.rtl .offset-7 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 7 / 12) !important;\n}\n.rtl .offset-8 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 8 / 12) !important;\n}\n.rtl .offset-9 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 9 / 12) !important;\n}\n.rtl .offset-10 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 10 / 12) !important;\n}\n.rtl .offset-11 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 11 / 12) !important;\n}\n.rtl .offset-12 {\n  margin-left: initial !important;\n  margin-right: calc(100% * 12 / 12) !important;\n}\n.rtl .text-right {\n  text-align: left !important;\n}\n.rtl .text-left {\n  text-align: right !important;\n}\n\n.buttons-group {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  padding: 0 10px 15px 10px;\n  height: 45px;\n}\n.buttons-group .add-blurb-btn {\n  margin-inline-end: 10px;\n}\n\n.blurbs-list {\n  position: relative;\n  width: 100%;\n  height: calc(100% - 45px);\n}\n\n.blurb-box {\n  border: 1px solid #cfcfcf;\n  margin-bottom: 10px;\n  margin-right: 15px;\n  margin-left: 15px;\n}\n\n.blurb-container {\n  position: relative;\n}\n.blurb-container .gripper-icon {\n  position: absolute;\n  top: 13px;\n  left: 0;\n  width: 25px;\n  height: 25px;\n  font-size: 1.4rem;\n  text-align: center;\n  z-index: 10;\n  cursor: move;\n}\n\n.blurb-box.cdk-drag-preview {\n  border-radius: 0;\n  border: 1px dashed #2574db;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.blurb-box.cdk-drag-placeholder {\n  opacity: 0;\n}\n\n.blurb-box.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.blurbs-list.cdk-drop-list-dragging .blurb-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.test-field-container {\n  width: calc(100% - 175px);\n  padding-inline-end: 10px;\n}\n\n.test-field {\n  width: calc(100% - 75px);\n}\n.test-field .field {\n  margin-bottom: 0 !important;\n}\n\n.test-field-label {\n  width: 70px;\n}\n.test-field-label label {\n  margin-bottom: 0;\n  margin-top: 7px;\n}\n\n.test-blurbs-container {\n  align-items: center;\n  margin-bottom: 15px;\n}\n\n.format-result-table-container {\n  position: relative;\n  height: 200px;\n  margin-bottom: 15px;\n}\n\ntable.format-result-table {\n  border-collapse: collapse;\n  width: 100%;\n}\ntable.format-result-table td,\ntable.format-result-table th {\n  text-align: left;\n  padding: 8px;\n  font-size: 12px;\n}\ntable.format-result-table th {\n  font-weight: 500;\n  color: black;\n  background: #f1f3f3;\n  border-bottom: 2px solid #dee2e6;\n}\ntable.format-result-table td {\n  color: #656565;\n  border-bottom: 1px solid #dee2e6;\n}\n\n.formatted-value-label,\n.formatted-value {\n  font-size: 12px;\n}\n\n.formatted-value-label {\n  margin-inline-end: 10px;\n}\n\n.formatted-value {\n  font-weight: bold;\n  color: #93002f;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uLy4uLy4uL0JhbWJhLlNoYXJlZC9zcmMvYXNzZXRzL2Nzcy9fdmFyaWFibGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3ZpZXdzL2FkbWluLW1hcmtldGluZy1ibHVyYi9ibHVyYnMvYmx1cmJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNDQUFBO0VBQ0Esa0NBQUE7RUFDQTs7O0tBQUE7RUFJQSw4QkFBQTtFQUNBLGdDQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0FDQUY7O0FER0EsNkVBQUE7QUFDQSw2RUFBQTtBQUNB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c0RBQUE7QUE4T0Y7O0FBM09BO0VBQ0Usc0RBQUE7QUE4T0Y7O0FBM09BO0VBQ0UseUJBQUE7RUFDQSx3QkFBQTtBQThPRjs7QUEzT0E7RUFDRSx3QkFBQTtBQThPRjtBQTdPRTtFQUNFLDJCQUFBO0FBK09KOztBQTNPQTtFQUNFLFdBQUE7QUE4T0Y7QUE3T0U7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUErT0o7O0FBM09BO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtBQThPRjs7QUEzT0E7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQThPRjs7QUEzT0E7RUFDRSx5QkFBQTtFQUNBLFdBQUE7QUE4T0Y7QUE1T0U7O0VBRUUsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQThPSjtBQTNPRTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7QUE2T0o7QUExT0U7RUFDRSxjQUFBO0VBQ0EsZ0NBQUE7QUE0T0o7O0FBeE9BOztFQUVFLGVBQUE7QUEyT0Y7O0FBeE9BO0VBQ0UsdUJBQUE7QUEyT0Y7O0FBeE9BO0VBQ0UsaUJBQUE7RUFDQSxjRHBDVztBQytRYiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2Fuczp3Z2h0QDMwMDs0MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuOnJvb3Qge1xyXG4gIC0td2hpdGU6ICNmZmZmZmY7XHJcbiAgLS1ncmF5LTA1OiAjZjFmM2YzO1xyXG4gIC0tZ3JheS0xMDogI2UwZTNlNjtcclxuICAtLWdyYXktMjA6ICNiZmM2Y2U7XHJcbiAgLS1ncmF5LTMwOiAjOWZhOWI3O1xyXG4gIC0tZ3JheS00MDogIzgzOGZhMDtcclxuICAtLWdyYXktNTA6ICM2Yjc3ODY7XHJcbiAgLS1ncmF5LTYwOiAjNTI1YzY5O1xyXG4gIC0tZ3JheS03MDogIzNkNDU0ZjtcclxuICAtLWdyYXktODA6ICMyNTJiMzE7XHJcbiAgLS1ncmF5LTkwOiAjMTYxOTFkO1xyXG4gIC0tZ3JheS05NTogIzBiMGMwZjtcclxuICAtLWJsdWUtMDU6ICNmMGY2ZmU7XHJcbiAgLS1ibHVlLTEwOiAjZTJlZWZkO1xyXG4gIC0tYmx1ZS0yMDogI2JjZDhmYztcclxuICAtLWJsdWUtMzA6ICM3ZWIxZjQ7XHJcbiAgLS1ibHVlLTQwOiAjNGE4ZmVhO1xyXG4gIC0tYmx1ZS01MDogIzI1NzRkYjtcclxuICAtLWJsdWUtNjA6ICMwYzVjYzU7XHJcbiAgLS1ibHVlLTcwOiAjMDA0OWE5O1xyXG4gIC0tYmx1ZS04MDogIzAwM2E4NjtcclxuICAtLWJsdWUtOTA6ICMwMDJhNjE7XHJcbiAgLS1ibHVlLTk1OiAjMDAxNjMzO1xyXG4gIC0tZ3JlZW4tMTA6ICNlM2ZhYzM7XHJcbiAgLS1ncmVlbi0zMDogI2I5ZjQ2NztcclxuICAtLWdyZWVuLTUwOiAjNzZjYTAyO1xyXG4gIC0tZ3JlZW4tNzA6ICM1OTk5MDA7XHJcbiAgLS1ncmVlbi04MDogIzNjNjYwMDtcclxuICAtLWdyZWVuLTkwOiAjMWYzNjAwO1xyXG4gIC0tcmVkLTEwOiAjZmZiN2NlO1xyXG4gIC0tcmVkLTMwOiAjZmE1NzhiO1xyXG4gIC0tcmVkLTUwOiAjZTYwYzUxO1xyXG4gIC0tcmVkLTcwOiAjYzIwMDNkO1xyXG4gIC0tcmVkLTgwOiAjOTMwMDJmO1xyXG4gIC0tcmVkLTkwOiAjNjMwMDFmO1xyXG4gIC0teWVsbG93LTEwOiAjZmZlM2E2O1xyXG4gIC0teWVsbG93LTMwOiAjZjliNjI1O1xyXG4gIC0teWVsbG93LTUwOiAjZTM5YjAwO1xyXG4gIC0teWVsbG93LTcwOiAjYmI4MDAwO1xyXG4gIC0teWVsbG93LTgwOiAjODc1YzAwO1xyXG4gIC0teWVsbG93LTkwOiAjNTIzODAwO1xyXG4gIC0tcHVycGxlLTEwOiAjZjNjNmZmO1xyXG4gIC0tcHVycGxlLTMwOiAjZGM3M2Y5O1xyXG4gIC0tcHVycGxlLTUwOiAjYmIzMGUyO1xyXG4gIC0tcHVycGxlLTcwOiAjOTEwYWI3O1xyXG4gIC0tcHVycGxlLTgwOiAjNjQwMDgwO1xyXG4gIC0tcHVycGxlLTkwOiAjMzgwMDQ3O1xyXG4gIC0tdGVhbC0xMDogI2UxZjlmZjtcclxuICAtLXRlYWwtMzA6ICM5YmU1ZmE7XHJcbiAgLS10ZWFsLTUwOiAjNWZjYWU3O1xyXG4gIC0tdGVhbC03MDogIzM2YTZjNTtcclxuICAtLXRlYWwtODA6ICMxZjdlOTg7XHJcbiAgLS10ZWFsLTkwOiAjMTI1ODZiO1xyXG4gIC0tZ3JheS01MC0yMDogcmdiYSgxMDcsIDExOSwgMTM0LCAwLjIpO1xyXG4gIC0tYmx1ZS05NS02MDogcmdiYSgwLCAyMiwgNTEsIDAuNik7XHJcbiAgLypcclxuICAgICAgICBicmFuZGluZ1xyXG5cclxuICAgICovXHJcbiAgLS1icmFuZC1wcmltYXJ5LWNvbG9yOiAjMjU3NGRiO1xyXG4gIC0tYnJhbmQtc2Vjb25kYXJ5LWNvbG9yOiAjZTJlZWZkO1xyXG4gIC0taGVhZGVyLWhlaWdodDogNTZweDtcclxuICAtLXZlcnRpY2FsLW5hdi13aWR0aDogMjE1cHg7XHJcbiAgLS12ZXJ0aWNhbC1uYXYtc3VibWVudS13aWR0aDogMjUwcHg7XHJcbn1cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVVwbGFuZCBVSSBUaGVtZS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiRncmF5LTA1OiAjZjFmM2YzO1xyXG4kZ3JheS0xMDogI2UwZTNlNjtcclxuJGdyYXktNTA6ICM2Yjc3ODY7XHJcbiRibHVlLTEwOiAjZTJlZWZkO1xyXG4kaG92ZXI6IHZhcigtLWJyYW5kLXNlY29uZGFyeS1jb2xvcik7IC8vI2NkZTJmNjtcclxuXHJcbiR1cGxhbmQtYmx1ZTogdmFyKC0tYnJhbmQtcHJpbWFyeS1jb2xvcik7XHJcbiR1cGxhbmQtcGFuZWwtYmFja2dyb3VuZDogdmFyKC0tYnJhbmQtc2Vjb25kYXJ5LWNvbG9yKTtcclxuXHJcbiR1cGxhbmQtcHJpbWFyeS1idG4tYmc6ICMyNTc0ZGI7IC8vIHZhcigtLWJsdWUtNTApXHJcblxyXG4kdXBsYW5kLWhlYWRlci1oZWlnaHQ6IHZhcigtLWhlYWRlci1oZWlnaHQpO1xyXG4kdXBsYW5kLXNlY29uZGFyeS1oZWFkZXItaGVpZ2h0OiA1NnB4O1xyXG5cclxuJHVwbGFuZC1ncmF5LWJhY2tncm91bmQ6ICRncmF5LTA1O1xyXG5cclxuJHVwbGFuZC1ib2R5LWNvbG9yOiAjMTUxNTE1O1xyXG4kdXBsYW5kLWdyZWVuOiAjM2M2NjAwOyAvLyB2YXIoLS1ncmVlbi04MClcclxuJHVwbGFuZC15ZWxsb3c6ICM4NzVjMDA7IC8vIHZhcigtLXllbGxvdy04MClcclxuJHVwbGFuZC1yZWQ6ICM5MzAwMmY7IC8vIHZhcigtLXJlZC04MClcclxuJHVwbGFuZC1saWdodC1ncmF5OiAjYmZjNmNlO1xyXG4kdXBsYW5kLWRhcmstYmx1ZTogIzBkNGE2MjtcclxuJHVwbGFuZC1saWdodDogI2ZmZjtcclxuJG9wZW4tc2FuczogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiR1cGxhbmQtYWN0aXZlLWJnOiAkdXBsYW5kLXByaW1hcnktYnRuLWJnO1xyXG4kdXBsYW5kLWlucHV0LWhlaWdodDogY2FsYygxLjVlbSArIDAuNzVyZW0gKyAycHgpO1xyXG4kdXBsYW5kLWlucHV0LWJ0bi1mb2N1cy13aWR0aDogMC4ycmVtO1xyXG4kdXBsYW5kLWlucHV0LWJ0bi1mb2N1cy1jb2xvcjogcmdiYSh2YXIoLS1icmFuZC1wcmltYXJ5LWNvbG9yKSwgMC44KTtcclxuJHVwbGFuZC1pbnB1dC1idG4tZm9jdXMtYm94LXNoYWRvdzogMCAwIDAgJHVwbGFuZC1pbnB1dC1idG4tZm9jdXMtd2lkdGggJHVwbGFuZC1pbnB1dC1idG4tZm9jdXMtY29sb3I7XHJcbiR1cGxhbmQtaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yOiAkdXBsYW5kLWlucHV0LWJ0bi1mb2N1cy1jb2xvcjtcclxuJHVwbGFuZC1hbGVydC1iZy1sZXZlbDogMDtcclxuJHVwbGFuZC1hbGVydC1ib3JkZXItbGV2ZWw6IDA7XHJcbiR1cGxhbmQtYWxlcnQtY29sb3ItbGV2ZWw6IDY7XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUJvb3RzdHJhcCBPdmVycmlkZXMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuLmJ0bi1wcmltYXJ5LFxyXG4uYnRuLXByaW1hcnk6aG92ZXIsXHJcbi5idG4tcHJpbWFyeTphY3RpdmUsXHJcbi5idG4tcHJpbWFyeTp2aXNpdGVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1icmFuZC1wcmltYXJ5LWNvbG9yKSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYnJhbmQtcHJpbWFyeS1jb2xvcikgIWltcG9ydGFudDtcclxufVxyXG5cclxuJGJvZHktY29sb3I6ICR1cGxhbmQtYm9keS1jb2xvcjtcclxuJGluZm86ICR1cGxhbmQtZGFyay1ibHVlO1xyXG4kcHJpbWFyeTogJHVwbGFuZC1wcmltYXJ5LWJ0bi1iZztcclxuJHN1Y2Nlc3M6ICR1cGxhbmQtZ3JlZW47XHJcbiRkYW5nZXI6ICR1cGxhbmQtcmVkO1xyXG4kd2FybmluZzogJHVwbGFuZC15ZWxsb3c7XHJcblxyXG4kYWxlcnQtYmctbGV2ZWw6ICR1cGxhbmQtYWxlcnQtYmctbGV2ZWw7XHJcbiRhbGVydC1ib3JkZXItbGV2ZWw6ICR1cGxhbmQtYWxlcnQtYm9yZGVyLWxldmVsO1xyXG4kYWxlcnQtY29sb3ItbGV2ZWw6ICR1cGxhbmQtYWxlcnQtY29sb3ItbGV2ZWw7XHJcbiRsaWdodDogJHVwbGFuZC1saWdodDtcclxuJGlucHV0LWhlaWdodDogJHVwbGFuZC1pbnB1dC1oZWlnaHQ7XHJcbiRpbnB1dC1jb2xvcjogIzQ5NTA1NztcclxuJGlucHV0LWJvcmRlci1jb2xvcjogJHVwbGFuZC1saWdodC1ncmF5O1xyXG4kYnRuLWJvcmRlci1yYWRpdXM6IDJweDtcclxuJGJ0bi1ib3JkZXItcmFkaXVzLWxnOiAycHg7XHJcbiRidG4tYm9yZGVyLXJhZGl1cy1zbTogMnB4O1xyXG4kYnRuLXBhZGRpbmcteDogMTZweDtcclxuJGJ0bi1wYWRkaW5nLXk6IDRweDtcclxuXHJcbi5ydGwge1xyXG4gIC5tbC1hdXRvIHtcclxuICAgIG1hcmdpbi1sZWZ0OiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5tci1hdXRvIHtcclxuICAgIG1hcmdpbi1yaWdodDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gICRzcGFjZXM6ICgwLCAwKSwgKDEsIDAuMjUpLCAoMiwgMC41KSwgKDMsIDEpLCAoNCwgMS41KSwgKDUsIDMpO1xyXG5cclxuICBAZWFjaCAkaSwgJHZhbHVlIGluICRzcGFjZXMge1xyXG4gICAgLnByLSN7JGl9IHtcclxuICAgICAgcGFkZGluZy1yaWdodDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6ICN7JHZhbHVlfXJlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5wbC0jeyRpfSB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAjeyR2YWx1ZX1yZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAubWwtI3skaX0ge1xyXG4gICAgICBtYXJnaW4tbGVmdDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6ICN7JHZhbHVlfXJlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5tci0jeyRpfSB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgICBtYXJnaW4tbGVmdDogI3skdmFsdWV9cmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAZm9yICRpIGZyb20gMSB0aHJvdWdoIDEyIHtcclxuICAgIC5vZmZzZXQtI3skaX0ge1xyXG4gICAgICBtYXJnaW4tbGVmdDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IGNhbGMoMTAwJSAqICgjeyRpfS8gMTIpKSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnRleHQtcmlnaHQge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnRleHQtbGVmdCB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4iLCJAaW1wb3J0ICcuLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0JhbWJhLlNoYXJlZC9zcmMvYXNzZXRzL2Nzcy92YXJpYWJsZXMnO1xyXG5cclxuLmJ1dHRvbnMtZ3JvdXAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDAgMTBweCAxNXB4IDEwcHg7XHJcbiAgaGVpZ2h0OiA0NXB4O1xyXG5cclxuICAuYWRkLWJsdXJiLWJ0biB7XHJcbiAgICBtYXJnaW4taW5saW5lLWVuZDogMTBweDtcclxuICB9XHJcbn1cclxuXHJcbi5ibHVyYnMtbGlzdCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogY2FsYygxMDAlIC0gNDVweCk7XHJcbn1cclxuXHJcbi5ibHVyYi1ib3gge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZmNmY2Y7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbn1cclxuXHJcbi5ibHVyYi1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgLmdyaXBwZXItaWNvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEzcHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgY3Vyc29yOiBtb3ZlO1xyXG4gIH1cclxufVxyXG5cclxuLmJsdXJiLWJveC5jZGstZHJhZy1wcmV2aWV3IHtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIGJvcmRlcjogMXB4IGRhc2hlZCAjMjU3NGRiO1xyXG4gIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxufVxyXG5cclxuLmJsdXJiLWJveC5jZGstZHJhZy1wbGFjZWhvbGRlciB7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLmJsdXJiLWJveC5jZGstZHJhZy1hbmltYXRpbmcge1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcclxufVxyXG5cclxuLmJsdXJicy1saXN0LmNkay1kcm9wLWxpc3QtZHJhZ2dpbmcgLmJsdXJiLWJveDpub3QoLmNkay1kcmFnLXBsYWNlaG9sZGVyKSB7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xyXG59XHJcblxyXG4udGVzdC1maWVsZC1jb250YWluZXIge1xyXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAxNzVweCk7XHJcbiAgcGFkZGluZy1pbmxpbmUtZW5kOiAxMHB4O1xyXG59XHJcblxyXG4udGVzdC1maWVsZCB7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDc1cHgpO1xyXG4gIC5maWVsZCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4udGVzdC1maWVsZC1sYWJlbCB7XHJcbiAgd2lkdGg6IDcwcHg7XHJcbiAgbGFiZWwge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIG1hcmdpbi10b3A6IDdweDtcclxuICB9XHJcbn1cclxuXHJcbi50ZXN0LWJsdXJicy1jb250YWluZXIge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLmZvcm1hdC1yZXN1bHQtdGFibGUtY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG50YWJsZS5mb3JtYXQtcmVzdWx0LXRhYmxlIHtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICB0ZCxcclxuICB0aCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuXHJcbiAgdGgge1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGJhY2tncm91bmQ6ICNmMWYzZjM7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2RlZTJlNjtcclxuICB9XHJcblxyXG4gIHRkIHtcclxuICAgIGNvbG9yOiAjNjU2NTY1O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWUyZTY7XHJcbiAgfVxyXG59XHJcblxyXG4uZm9ybWF0dGVkLXZhbHVlLWxhYmVsLFxyXG4uZm9ybWF0dGVkLXZhbHVlIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5mb3JtYXR0ZWQtdmFsdWUtbGFiZWwge1xyXG4gIG1hcmdpbi1pbmxpbmUtZW5kOiAxMHB4O1xyXG59XHJcblxyXG4uZm9ybWF0dGVkLXZhbHVlIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogJGRhbmdlcjtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 73250:
/*!********************************************************************************!*\
  !*** ./src/app/views/admin-marketing-blurb/brand-list/brand-list.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BrandListComponent: () => (/* binding */ BrandListComponent)
/* harmony export */ });
/* harmony import */ var _blocks_models_marketing_blurb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../blocks/models/marketing-blurb */ 70684);
/* harmony import */ var _blocks_services_hydra_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../blocks/services/hydra-api.service */ 11070);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _Bamba_Shared_src_directives_auto_focus_first_input_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/directives/auto-focus-first-input.directive */ 15164);
/* harmony import */ var _Bamba_Shared_src_modal_dual_picklist_dual_picklist_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../Bamba.Shared/src/modal/dual-picklist/dual-picklist.component */ 49320);









function BrandListComponent_app_dual_picklist_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-dual-picklist", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("currentChange", function BrandListComponent_app_dual_picklist_0_Template_app_dual_picklist_currentChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.currentChanged($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " [listName]=\"'admin-marketing-blurb.brands' | translate\" [sortSelectedItems]=\"true\" [allowOrderSelectedItems]=\"false\">\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("available", ctx_r1.available)("current", ctx_r1.current)("displayField", "name")("iconType", "image")("iconField", "image");
  }
}
class BrandListComponent {
  constructor(translate, hydraApi) {
    this.translate = translate;
    this.hydraApi = hydraApi;
    this.show = false;
    this.available = [];
    this.current = [];
    this.failed = err => {
      console.log('failed', err);
      this.spinner.hide();
    };
    this.currentChanged = items => {
      this.marketingBlurb.brandLinks = [];
      for (let item of items) {
        this.marketingBlurb.brandLinks.push(item);
      }
    };
    this.loaded = apiResult => {
      if (apiResult.success) {
        this.available = apiResult.object.map(item => {
          const brandInfo = new _blocks_models_marketing_blurb__WEBPACK_IMPORTED_MODULE_0__.BrandInfo(item);
          brandInfo.image = brandInfo.brandType == _blocks_models_marketing_blurb__WEBPACK_IMPORTED_MODULE_0__.BrandType.UIC ? 'assets/img/uic.svg' : 'assets/img/ifx.svg';
          return brandInfo;
        });
        this.current = this.available.filter(r => this.marketingBlurb.brandLinks.some(ri => ri.brandId == r.brandId && ri.brandType == r.brandType && ri.dealerId == r.dealerId));
        this.show = true;
        this.spinner.hide();
      } else {
        this.failed(apiResult.errors);
      }
    };
  }
  ngOnInit() {
    this.loadBrands();
  }
  loadBrands() {
    this.spinner.show(this.translate.instant('admin-marketing-blurb.loading-brands'), document.body);
    this.hydraApi.getBrands(this.loaded, this.failed);
  }
  static {
    this.ɵfac = function BrandListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || BrandListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_blocks_services_hydra_api_service__WEBPACK_IMPORTED_MODULE_1__.HydraApiService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: BrandListComponent,
      selectors: [["app-brand-list"]],
      inputs: {
        marketingBlurb: "marketingBlurb",
        spinner: "spinner"
      },
      decls: 1,
      vars: 1,
      consts: [["appAutoFocusFirstInput", "", "class", "max-height", 3, "available", "current", "displayField", "iconType", "iconField", "currentChange", 4, "ngIf"], ["appAutoFocusFirstInput", "", 1, "max-height", 3, "currentChange", "available", "current", "displayField", "iconType", "iconField"]],
      template: function BrandListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, BrandListComponent_app_dual_picklist_0_Template, 2, 5, "app-dual-picklist", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.show);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _Bamba_Shared_src_directives_auto_focus_first_input_directive__WEBPACK_IMPORTED_MODULE_2__.AutoFocusFirstInputDirective, _Bamba_Shared_src_modal_dual_picklist_dual_picklist_component__WEBPACK_IMPORTED_MODULE_3__.DualPicklistComponent],
      styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
      encapsulation: 2
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_views_admin-marketing-blurb_admin-marketing-blurb_module_ts.js.map