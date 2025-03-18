"use strict";
(self["webpackChunkBama"] = self["webpackChunkBama"] || []).push([["src_app_views_admin-workflow-step-cost_admin-workflow-step-cost_module_ts"],{

/***/ 52603:
/*!*******************************************************************************************!*\
  !*** ./src/app/views/admin-workflow-step-cost/admin-workflow-step-cost-routing.module.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminWorkflowStepCostRoutingModule: () => (/* binding */ AdminWorkflowStepCostRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 41099);
/* harmony import */ var _admin_workflow_step_cost_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-workflow-step-cost.component */ 33595);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 96623);




const routes = [{
  path: 'create',
  component: _admin_workflow_step_cost_component__WEBPACK_IMPORTED_MODULE_0__.AdminWorkflowStepCostComponent,
  data: {
    type: 'create'
  },
  pathMatch: 'full'
}, {
  path: ':workflowcostid',
  component: _admin_workflow_step_cost_component__WEBPACK_IMPORTED_MODULE_0__.AdminWorkflowStepCostComponent,
  data: {
    type: 'properties'
  },
  pathMatch: 'full'
}];
class AdminWorkflowStepCostRoutingModule {
  static {
    this.ɵfac = function AdminWorkflowStepCostRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AdminWorkflowStepCostRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AdminWorkflowStepCostRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AdminWorkflowStepCostRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 33595:
/*!**************************************************************************************!*\
  !*** ./src/app/views/admin-workflow-step-cost/admin-workflow-step-cost.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminWorkflowStepCostComponent: () => (/* binding */ AdminWorkflowStepCostComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 36421);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 11640);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _blocks_core_log__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../blocks/core/log */ 46415);
/* harmony import */ var _blocks_models_workflow_step_page_license_cost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../blocks/models/workflow-step-page-license-cost */ 43466);
/* harmony import */ var _blocks_services_errors_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../blocks/services/errors.service */ 34326);
/* harmony import */ var _blocks_services_hydra_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../blocks/services/hydra-api.service */ 11070);
/* harmony import */ var _blocks_services_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../blocks/services/models */ 34158);
/* harmony import */ var _blocks_services_spinner_state_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../blocks/services/spinner-state.service */ 9202);
/* harmony import */ var _blocks_models_marketing_blurb__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../blocks/models/marketing-blurb */ 70684);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 41099);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-toastr */ 34942);
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-smart-modal */ 94500);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _blocks_page_secondary_header_secondary_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../blocks/page/secondary-header/secondary-header.component */ 33657);
/* harmony import */ var _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../Bamba.Shared/src/fields/field.component */ 69689);
/* harmony import */ var _Bamba_Shared_src_directives_auto_focus_first_input_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../Bamba.Shared/src/directives/auto-focus-first-input.directive */ 15164);
/* harmony import */ var ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-perfect-scrollbar-portable */ 1248);
/* harmony import */ var _Bamba_Shared_src_directives_auto_update_perfect_scroll_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../Bamba.Shared/src/directives/auto-update-perfect-scroll.directive */ 81687);



























const _c0 = () => ({
  suppressScrollY: false
});
const _c1 = () => ({
  suppressScrollY: false,
  scrollXMarginOffset: 2,
  scrollYMarginOffset: 2
});
function AdminWorkflowStepCostComponent_div_4_ng_container_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "li", 24)(2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 25)(5, "app-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("valueChange", function AdminWorkflowStepCostComponent_div_4_ng_container_35_Template_app_field_valueChange_5_listener($event) {
      const index_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r3).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.onCostTypeChanged($event, index_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "div", 25)(7, "app-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("valueChange", function AdminWorkflowStepCostComponent_div_4_ng_container_35_Template_app_field_valueChange_7_listener($event) {
      const index_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r3).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.onCostValueChanged($event, index_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AdminWorkflowStepCostComponent_div_4_ng_container_35_Template_i_click_8_listener() {
      const index_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r3).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.onDeleteCost(index_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const cost_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r1.getBrandName(cost_r5.brandID, cost_r5.dealerID));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("field", ctx_r1.CreateField("", true, ctx_r1.MetaDataType.List, ctx_r1.costTypesDataSource))("value", cost_r5.baseCostType == null ? null : cost_r5.baseCostType.toString());
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("field", ctx_r1.CreateField("", true, ctx_r1.MetaDataType.Decimal))("value", cost_r5.baseCostValue == null ? null : cost_r5.baseCostValue.toString());
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate1"]("id", "btnDeleteDomain", cost_r5.brandID, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](9, 8, "Common.Remove"));
  }
}
function AdminWorkflowStepCostComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 6)(1, "div", 7, 0)(3, "app-field", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayListener"]("valueChange", function AdminWorkflowStepCostComponent_div_4_Template_app_field_valueChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayBindingSet"](ctx_r1.workflowStepPageLicenseCost.workflowStepDisplayName, $event) || (ctx_r1.workflowStepPageLicenseCost.workflowStepDisplayName = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "app-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayListener"]("valueChange", function AdminWorkflowStepCostComponent_div_4_Template_app_field_valueChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayBindingSet"](ctx_r1.baseCostType, $event) || (ctx_r1.baseCostType = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "app-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayListener"]("valueChange", function AdminWorkflowStepCostComponent_div_4_Template_app_field_valueChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayBindingSet"](ctx_r1.baseCostValue, $event) || (ctx_r1.baseCostValue = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "div", 10)(7, "div", 11)(8, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "div", 13)(12, "div", 14)(13, "div", 15)(14, "app-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayListener"]("valueChange", function AdminWorkflowStepCostComponent_div_4_Template_app_field_valueChange_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayBindingSet"](ctx_r1.newCostBrand, $event) || (ctx_r1.newCostBrand = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("valueChange", function AdminWorkflowStepCostComponent_div_4_Template_app_field_valueChange_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.onNewCostValueChanged());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "div", 16)(16, "app-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayListener"]("valueChange", function AdminWorkflowStepCostComponent_div_4_Template_app_field_valueChange_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayBindingSet"](ctx_r1.newCostTypeString, $event) || (ctx_r1.newCostTypeString = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("valueChange", function AdminWorkflowStepCostComponent_div_4_Template_app_field_valueChange_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.onNewCostValueChanged());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](17, "div", 17)(18, "app-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayListener"]("valueChange", function AdminWorkflowStepCostComponent_div_4_Template_app_field_valueChange_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayBindingSet"](ctx_r1.newCostValueString, $event) || (ctx_r1.newCostValueString = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("valueChange", function AdminWorkflowStepCostComponent_div_4_Template_app_field_valueChange_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.onNewCostValueChanged());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](19, "div", 18)(20, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AdminWorkflowStepCostComponent_div_4_Template_button_click_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.onAddCost());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](23, "div", 20)(24, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](26, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](27, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](29, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](30, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](32, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](33, "ul", 22, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](35, AdminWorkflowStepCostComponent_div_4_ng_container_35_Template, 10, 10, "ng-container", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const panelScroll_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](2);
    const tabScroll_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](34);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("perfectScrollbar", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](34, _c0))("autoUpdatePerfectScroll", panelScroll_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("field", ctx_r1.stepDisplayNameField);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayProperty"]("value", ctx_r1.workflowStepPageLicenseCost.workflowStepDisplayName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("field", ctx_r1.costTypeField);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayProperty"]("value", ctx_r1.baseCostType);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("field", ctx_r1.costValueField);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayProperty"]("value", ctx_r1.baseCostValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](10, 24, "admin-workflow-step-cost.brand-overrides"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("field", ctx_r1.CreateField("", true, ctx_r1.MetaDataType.List, ctx_r1.brandsDataSource));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayProperty"]("value", ctx_r1.newCostBrand);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("field", ctx_r1.CreateField("", true, ctx_r1.MetaDataType.List, ctx_r1.costTypesDataSource));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayProperty"]("value", ctx_r1.newCostTypeString);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("field", ctx_r1.CreateField("", true, ctx_r1.MetaDataType.Decimal));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayProperty"]("value", ctx_r1.newCostValueString);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", !ctx_r1.newCostBrand || !ctx_r1.newCostTypeString || ctx_r1.newCostValue < 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](22, 26, "admin-workflow-step-cost.add-brand-override"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](26, 28, "admin-workflow-step-cost.brand"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](29, 30, "admin-workflow-step-cost.base-cost-type"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](32, 32, "admin-workflow-step-cost.base-cost-value"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("perfectScrollbar", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](35, _c1))("autoUpdatePerfectScroll", tabScroll_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r1.workflowStepPageLicenseCost.brandOverrides);
  }
}
class AdminWorkflowStepCostComponent {
  get baseCostType() {
    return this.workflowStepPageLicenseCost?.baseCostType.toString();
  }
  set baseCostType(val) {
    this.workflowStepPageLicenseCost.baseCostType = Number(val);
  }
  get baseCostValue() {
    return this.workflowStepPageLicenseCost?.baseCostValue.toString();
  }
  set baseCostValue(val) {
    this.workflowStepPageLicenseCost.baseCostValue = Number(val);
  }
  get newCostTypeString() {
    if (this.newCostType == null) return '';
    return this.newCostType.toString();
  }
  set newCostTypeString(val) {
    if (val == null) {
      this.newCostType = null;
      return;
    }
    this.newCostType = Number(val);
  }
  get newCostValueString() {
    return this.newCostValue?.toString() ?? '0';
  }
  set newCostValueString(val) {
    if (!val) {
      this.newCostValue = 0;
      return;
    }
    this.newCostValue = Number(val);
  }
  constructor(translateService, router, route, hydraApi, toastr, errorsService, spinner, ngxSmartModalService) {
    this.translateService = translateService;
    this.router = router;
    this.route = route;
    this.hydraApi = hydraApi;
    this.toastr = toastr;
    this.errorsService = errorsService;
    this.spinner = spinner;
    this.ngxSmartModalService = ngxSmartModalService;
    this.rightControls = [];
    this.brandsDataSource = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FixedDataSource();
    this.costTypesDataSource = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FixedDataSource();
    this.allBrands = [];
    this.MetaDataType = shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType;
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_13__.Subscription();
    this.createButtons = () => {
      this.saveButton = new _blocks_services_models__WEBPACK_IMPORTED_MODULE_5__.Control(this.onSave, 'Save', 'btn btn-primary btn-minwidth', '', '', 'btn', false);
      this.cancelButton = new _blocks_services_models__WEBPACK_IMPORTED_MODULE_5__.Control(this.onCancel, 'Cancel', 'btn btn-light btn-minwidth', '', '', 'btn', false);
      this.rightControls.push(this.saveButton);
      this.rightControls.push(this.cancelButton);
      this.saveButton.setTranslation(this.translateService.instant('Common.Save'));
      this.cancelButton.setTranslation(this.translateService.instant('Common.Cancel'));
    };
    this.createFields = () => {
      this.stepDisplayNameField = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Text,
        label: this.translateService.instant('admin-workflow-step-cost.step-name'),
        placeholder: this.translateService.instant('admin-workflow-step-cost.step-name'),
        required: true
      });
      const options = [{
        name: this.translateService.instant('admin-workflow-step-cost.constant'),
        value: '0'
      }, {
        name: this.translateService.instant('admin-workflow-step-cost.multiplier'),
        value: '1'
      }];
      this.costTypeField = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.List,
        label: this.translateService.instant('admin-workflow-step-cost.type'),
        placeholder: this.translateService.instant('admin-workflow-step-cost.type'),
        datasource: new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FixedDataSource(options),
        required: true
      });
      this.costValueField = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Decimal,
        label: this.translateService.instant('admin-workflow-step-cost.value'),
        placeholder: this.translateService.instant('admin-workflow-step-cost.value'),
        required: true
      });
    };
    this.loadItems = () => {
      if (this.routeData.type !== 'properties') return;
      this.spinner.show(this.translateService.instant('admin-workflow-step-cost.loading-item'), document.body);
      this.hydraApi.getWorkflowStepCost(this.routeParams.workflowcostid, this.workflowStepCostLoaded, this.loadingWorkflowStepCostFailed);
    };
    this.workflowStepCostLoaded = loadedItem => {
      this.workflowStepPageLicenseCost = loadedItem;
      this.spinner.hide(this.translateService.instant('admin-workflow-step-cost.loading-item'));
    };
    this.loadingWorkflowStepCostFailed = error => {
      this.toastr.error(this.translateService.instant('admin-workflow-step-cost.loading-item-failed'));
      _blocks_core_log__WEBPACK_IMPORTED_MODULE_1__.Log.error('admin-workflow-step-cost.loading-item-failed', error);
      this.spinner.hide(this.translateService.instant('admin-workflow-step-cost.loading-item'));
    };
    this.brandsLoaded = apiResult => {
      if (!apiResult.success) {
        this.brandsLoadfailed(apiResult.errors);
        return;
      }
      this.allBrands = apiResult.object.map(item => new _blocks_models_marketing_blurb__WEBPACK_IMPORTED_MODULE_7__.BrandInfo(item));
      this.createBrandsList();
      this.spinner.hide(this.translateService.instant('admin-marketing-blurb.loading-brands'));
    };
    this.brandsLoadfailed = err => {
      this.toastr.error(this.translateService.instant('admin-workflow-step-cost.brands-load-failed'));
      _blocks_core_log__WEBPACK_IMPORTED_MODULE_1__.Log.error('AdminWorkflowStepCostComponent.brandsLoadfailed', err);
      this.spinner.hide(this.translateService.instant('admin-marketing-blurb.loading-brands'));
    };
    this.CreateField = (label, required = false, type = shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Text, datasource = null) => {
      return new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: type,
        label: label ? this.translateService.instant(label) : '',
        placeholder: label ? this.translateService.instant(label) : '',
        required: required,
        datasource: datasource
      });
    };
    this.onAddCost = () => {
      if (!this.newCostBrand) return;
      const brandParts = this.newCostBrand.split(':');
      const newBrandOverride = new _blocks_models_workflow_step_page_license_cost__WEBPACK_IMPORTED_MODULE_2__.BrandOverride({
        brandID: brandParts[0],
        dealerID: brandParts.length > 1 ? brandParts[1] : null,
        baseCostType: this.newCostType,
        baseCostValue: this.newCostValue
      });
      this.workflowStepPageLicenseCost.brandOverrides.push(newBrandOverride);
      this.resetFields();
    };
    this.resetFields = () => {
      this.createBrandsList();
      this.newCostBrand = '';
      this.newCostValueString = '';
      this.newCostTypeString = null;
      this.onNewCostValueChanged();
    };
    this.onDeleteCost = index => {
      if (!this.workflowStepPageLicenseCost?.brandOverrides) return;
      this.workflowStepPageLicenseCost.brandOverrides.splice(index, 1);
      this.createBrandsList();
    };
    this.onCostTypeChanged = (val, index) => {
      if (!this.workflowStepPageLicenseCost?.brandOverrides) return;
      if (index >= this.workflowStepPageLicenseCost.brandOverrides.length) return;
      this.workflowStepPageLicenseCost.brandOverrides[index].baseCostType = Number(val);
    };
    this.onCostValueChanged = (val, index) => {
      if (!this.workflowStepPageLicenseCost?.brandOverrides) return;
      if (index >= this.workflowStepPageLicenseCost.brandOverrides.length) return;
      this.workflowStepPageLicenseCost.brandOverrides[index].baseCostValue = Number(val);
    };
    this.getBrandName = (brandId, dealerId) => {
      return this.allBrands.find(x => x.brandId === brandId && x.dealerId === dealerId)?.name;
    };
    this.createBrandsList = () => {
      const options = [];
      this.allBrands.forEach(brand => {
        if (this.workflowStepPageLicenseCost.brandOverrides.findIndex(x => x.brandID === brand.brandId && x.dealerID === brand.dealerId) !== -1) return;
        const value = brand.dealerId ? `${brand.brandId}:${brand.dealerId}` : brand.brandId;
        options.push({
          name: brand.name,
          value: value
        });
      });
      this.brandsDataSource.updateOptions(options);
    };
    this.onNewCostValueChanged = () => {
      if (!this.saveButton) return;
      this.saveButton.isDisabled = !!this.newCostBrand || this.newCostType !== null || !!this.newCostValue;
    };
    this.onSave = () => {
      if (this.workflowStepPageLicenseCost.id) {
        this.hydraApi.updateWorkflowStepCost(this.workflowStepPageLicenseCost, this.savedSuccessfully, this.saveFailed);
      } else {
        this.hydraApi.createWorkflowStepCost(this.workflowStepPageLicenseCost, this.savedSuccessfully, this.saveFailed);
      }
      this.spinner.showSavingSpinner();
    };
    this.savedSuccessfully = result => {
      if (result.success) {
        this.toastr.success(this.translateService.instant('admin-workflow-step-cost.saved'));
        this.returnToGrid();
      } else {
        this.errorsService.showErrorsModal(result.errors, 'admin-workflow-step-cost.validation-errors');
      }
      this.spinner.hide();
    };
    this.saveFailed = error => {
      this.toastr.error(this.translateService.instant('admin-workflow-step-cost.save-failed'));
      _blocks_core_log__WEBPACK_IMPORTED_MODULE_1__.Log.error('admin-workflow-step-cost.save-failed', error);
      this.spinner.hide();
    };
    this.onCancel = () => {
      this.returnToGrid();
    };
    this.returnToGrid = () => {
      this.router.navigateByUrl('settings/BambaAdministratorApplication/BambaAdministratorApplication-Upland.Bamba.Application.Settings.WorkflowStepPageLicenseCosts');
    };
  }
  ngOnInit() {
    this.createButtons();
    this.createFields();
    this.loadBrands();
    this.costTypesDataSource = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.EnumDataSource(_blocks_models_workflow_step_page_license_cost__WEBPACK_IMPORTED_MODULE_2__.WorkflowStepCostType, 'WorkflowStepCostTypeEnum', this.translateService);
    this.subscriptions.add((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.combineLatest)([this.route.params, this.route.data]).subscribe(([params, data]) => {
      this.routeParams = params;
      this.routeData = data;
      if (this.routeData.type == 'create') {
        this.workflowStepPageLicenseCost = new _blocks_models_workflow_step_page_license_cost__WEBPACK_IMPORTED_MODULE_2__.WorkflowStepPageLicenseCost({
          workflowStepClassName: '',
          workflowStepDisplayName: '',
          baseCostType: _blocks_models_workflow_step_page_license_cost__WEBPACK_IMPORTED_MODULE_2__.WorkflowStepCostType.Constant,
          baseCostValue: 0,
          dateCreatedUTC: new Date(new Date().toUTCString()),
          dateModifiedUTC: new Date(new Date().toUTCString())
        });
      } else {
        this.loadItems();
      }
    }));
  }
  loadBrands() {
    this.spinner.show(this.translateService.instant('admin-marketing-blurb.loading-brands'), document.documentElement);
    this.hydraApi.getBrands(this.brandsLoaded, this.brandsLoadfailed);
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  static {
    this.ɵfac = function AdminWorkflowStepCostComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AdminWorkflowStepCostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_blocks_services_hydra_api_service__WEBPACK_IMPORTED_MODULE_4__.HydraApiService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_17__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_blocks_services_errors_service__WEBPACK_IMPORTED_MODULE_3__.ErrorsService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_blocks_services_spinner_state_service__WEBPACK_IMPORTED_MODULE_6__.SpinnerStateService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](ngx_smart_modal__WEBPACK_IMPORTED_MODULE_18__.NgxSmartModalService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
      type: AdminWorkflowStepCostComponent,
      selectors: [["app-admin-workflow-step-cost"]],
      decls: 5,
      vars: 5,
      consts: [["panelScroll", "ngxPerfectScrollbar"], ["tabScroll", "ngxPerfectScrollbar"], ["appAutoFocusFirstInput", "", 1, "admin-workflow-step-cost", "project-list-dashboard-body", "d-flex", "flex-column", "container-fluid"], [3, "headerText", "rightControls"], ["id", "spinnerPanel", 1, "container-fluid", "col", "h-100"], ["class", "panel row m-0", 4, "ngIf"], [1, "panel", "row", "m-0"], ["fxFlex", "auto", 1, "col-xl-3", "col-l-4", "col-md-5", "col-sm-6", "properties-panel", "properties-panel-h", 3, "perfectScrollbar", "autoUpdatePerfectScroll"], [3, "valueChange", "field", "value", "disabled"], [3, "valueChange", "field", "value"], [1, "col-xl-9", "col-l-9", "col-m-8", "col-md-7", "col-sm-6", "d-flex", "flex-column", "overflow-auto", "mh-100", "p-0"], [1, "panel-wrapper", "vcenter"], [1, "col", "panel-header"], [1, "col", "pt-3", "d-flex", "flex-column"], [1, "d-flex", "pb-3", "align-items-end"], [1, "col-3", "pl-0", "pr-2"], [1, "col-3", "pr-2", "pl-2"], [1, "col-3", "pr-0", "pl-2", "pr-2"], [1, "d-flex", "align-items-center", "mt-3", "col-3", "pl-3", "pr-0", 2, "margin-bottom", "5px"], ["id", "btnAddBrandOverride", "type", "button", 1, "btn", "btn-secondary", "btn-min-width", 3, "click", "disabled"], ["_ngcontent-ng-c3486778590", "", 1, "panel-header", "d-flex", "pl-0", "pr-0", "pb-2", "align-items-end", "pt-2"], [1, "col", "col-3"], ["fxFlex", "auto", 1, "list-group", "list-group-flush", "col", 3, "perfectScrollbar", "autoUpdatePerfectScroll"], [4, "ngFor", "ngForOf"], [1, "list-group-item", "d-flex", "align-items-center", "pl-0", "pr-0"], [1, "col-3", "pr-0"], [1, "icomoon-delete", "cursor-pointer", "ml-auto", 3, "click", "id", "title"]],
      template: function AdminWorkflowStepCostComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "app-secondary-header", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](4, AdminWorkflowStepCostComponent_div_4_Template, 36, 36, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("headerText", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 3, "admin-workflow-step-cost.header-text"))("rightControls", ctx.rightControls);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.workflowStepPageLicenseCost);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _blocks_page_secondary_header_secondary_header_component__WEBPACK_IMPORTED_MODULE_8__.SecondaryHeaderComponent, _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_9__.FieldComponent, _Bamba_Shared_src_directives_auto_focus_first_input_directive__WEBPACK_IMPORTED_MODULE_10__.AutoFocusFirstInputDirective, ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_20__.PerfectScrollbarDirective, _Bamba_Shared_src_directives_auto_update_perfect_scroll_directive__WEBPACK_IMPORTED_MODULE_11__.AutoUpdatePerfectScrollDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslatePipe],
      styles: ["@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400[_ngcontent-%COMP%];700&display=swap)[_ngcontent-%COMP%];[_ngcontent-%COMP%]:root {\n  --white: #ffffff;\n  --gray-05: #f1f3f3;\n  --gray-10: #e0e3e6;\n  --gray-20: #bfc6ce;\n  --gray-30: #9fa9b7;\n  --gray-40: #838fa0;\n  --gray-50: #6b7786;\n  --gray-60: #525c69;\n  --gray-70: #3d454f;\n  --gray-80: #252b31;\n  --gray-90: #16191d;\n  --gray-95: #0b0c0f;\n  --blue-05: #f0f6fe;\n  --blue-10: #e2eefd;\n  --blue-20: #bcd8fc;\n  --blue-30: #7eb1f4;\n  --blue-40: #4a8fea;\n  --blue-50: #2574db;\n  --blue-60: #0c5cc5;\n  --blue-70: #0049a9;\n  --blue-80: #003a86;\n  --blue-90: #002a61;\n  --blue-95: #001633;\n  --green-10: #e3fac3;\n  --green-30: #b9f467;\n  --green-50: #76ca02;\n  --green-70: #599900;\n  --green-80: #3c6600;\n  --green-90: #1f3600;\n  --red-10: #ffb7ce;\n  --red-30: #fa578b;\n  --red-50: #e60c51;\n  --red-70: #c2003d;\n  --red-80: #93002f;\n  --red-90: #63001f;\n  --yellow-10: #ffe3a6;\n  --yellow-30: #f9b625;\n  --yellow-50: #e39b00;\n  --yellow-70: #bb8000;\n  --yellow-80: #875c00;\n  --yellow-90: #523800;\n  --purple-10: #f3c6ff;\n  --purple-30: #dc73f9;\n  --purple-50: #bb30e2;\n  --purple-70: #910ab7;\n  --purple-80: #640080;\n  --purple-90: #380047;\n  --teal-10: #e1f9ff;\n  --teal-30: #9be5fa;\n  --teal-50: #5fcae7;\n  --teal-70: #36a6c5;\n  --teal-80: #1f7e98;\n  --teal-90: #12586b;\n  --gray-50-20: rgba(107, 119, 134, 0.2);\n  --blue-95-60: rgba(0, 22, 51, 0.6);\n  \n\n\n\n\n  --brand-primary-color: #2574db;\n  --brand-secondary-color: #e2eefd;\n  --header-height: 56px;\n  --vertical-nav-width: 215px;\n  --vertical-nav-submenu-width: 250px;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n.btn-primary[_ngcontent-%COMP%], \n.btn-primary[_ngcontent-%COMP%]:hover, \n.btn-primary[_ngcontent-%COMP%]:active, \n.btn-primary[_ngcontent-%COMP%]:visited {\n  background-color: var(--brand-primary-color) !important;\n  border-color: var(--brand-primary-color) !important;\n}\n\n.rtl[_ngcontent-%COMP%]   .ml-auto[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: auto !important;\n}\n.rtl[_ngcontent-%COMP%]   .mr-auto[_ngcontent-%COMP%] {\n  margin-right: initial !important;\n  margin-left: auto !important;\n}\n.rtl[_ngcontent-%COMP%]   .pr-0[_ngcontent-%COMP%] {\n  padding-right: initial !important;\n  padding-left: 0rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .pl-0[_ngcontent-%COMP%] {\n  padding-left: initial !important;\n  padding-right: 0rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .ml-0[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: 0rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .mr-0[_ngcontent-%COMP%] {\n  margin-right: initial !important;\n  margin-left: 0rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .pr-1[_ngcontent-%COMP%] {\n  padding-right: initial !important;\n  padding-left: 0.25rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .pl-1[_ngcontent-%COMP%] {\n  padding-left: initial !important;\n  padding-right: 0.25rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .ml-1[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: 0.25rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .mr-1[_ngcontent-%COMP%] {\n  margin-right: initial !important;\n  margin-left: 0.25rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .pr-2[_ngcontent-%COMP%] {\n  padding-right: initial !important;\n  padding-left: 0.5rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .pl-2[_ngcontent-%COMP%] {\n  padding-left: initial !important;\n  padding-right: 0.5rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .ml-2[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: 0.5rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .mr-2[_ngcontent-%COMP%] {\n  margin-right: initial !important;\n  margin-left: 0.5rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .pr-3[_ngcontent-%COMP%] {\n  padding-right: initial !important;\n  padding-left: 1rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .pl-3[_ngcontent-%COMP%] {\n  padding-left: initial !important;\n  padding-right: 1rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .ml-3[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: 1rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .mr-3[_ngcontent-%COMP%] {\n  margin-right: initial !important;\n  margin-left: 1rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .pr-4[_ngcontent-%COMP%] {\n  padding-right: initial !important;\n  padding-left: 1.5rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .pl-4[_ngcontent-%COMP%] {\n  padding-left: initial !important;\n  padding-right: 1.5rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .ml-4[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: 1.5rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .mr-4[_ngcontent-%COMP%] {\n  margin-right: initial !important;\n  margin-left: 1.5rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .pr-5[_ngcontent-%COMP%] {\n  padding-right: initial !important;\n  padding-left: 3rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .pl-5[_ngcontent-%COMP%] {\n  padding-left: initial !important;\n  padding-right: 3rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .ml-5[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: 3rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .mr-5[_ngcontent-%COMP%] {\n  margin-right: initial !important;\n  margin-left: 3rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-1[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 1 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-2[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 2 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-3[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 3 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-4[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 4 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-5[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 5 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-6[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 6 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-7[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 7 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-8[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 8 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-9[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 9 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-10[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 10 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-11[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 11 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-12[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 12 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .text-right[_ngcontent-%COMP%] {\n  text-align: left !important;\n}\n.rtl[_ngcontent-%COMP%]   .text-left[_ngcontent-%COMP%] {\n  text-align: right !important;\n}\n\n.admin-workflow-step-cost[_ngcontent-%COMP%] {\n  line-height: 1.4em;\n  margin-bottom: 15px;\n  height: 100%;\n  position: relative;\n}\n.admin-workflow-step-cost.min-h-fit-content[_ngcontent-%COMP%], \n.admin-workflow-step-cost[_ngcontent-%COMP%]   .min-h-fit-content[_ngcontent-%COMP%] {\n  min-height: fit-content !important;\n}\n.admin-workflow-step-cost[_ngcontent-%COMP%]   .secondary-header[_ngcontent-%COMP%] {\n  margin-left: 0 !important;\n  margin-bottom: 15px !important;\n}\n.admin-workflow-step-cost[_ngcontent-%COMP%]   .secondary-header[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  position: static !important;\n}\n.admin-workflow-step-cost[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%] {\n  border-radius: 2px;\n  border: solid 1px #cfcfcf;\n}\n.admin-workflow-step-cost[_ngcontent-%COMP%]   .properties-panel[_ngcontent-%COMP%] {\n  padding-top: 15px;\n  background-color: var(--brand-secondary-color);\n  border-right: solid 1px #cfcfcf;\n}\n.admin-workflow-step-cost[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%] {\n  background-color: #f1f3f3;\n  border-bottom: solid 1px #cfcfcf;\n  padding: 15px;\n}\n.admin-workflow-step-cost[_ngcontent-%COMP%]   .cursor-pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.properties-panel-h[_ngcontent-%COMP%] {\n  position: relative;\n  height: calc(100vh - var(--header-height) - 85px) !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uLy4uLy4uL0JhbWJhLlNoYXJlZC9zcmMvYXNzZXRzL2Nzcy9fdmFyaWFibGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3ZpZXdzL2FkbWluLXdvcmtmbG93LXN0ZXAtY29zdC9hZG1pbi13b3JrZmxvdy1zdGVwLWNvc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0NBQUE7RUFDQSxrQ0FBQTtFQUNBOzs7S0FBQTtFQUlBLDhCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7QUNBRjs7QURHQSw2RUFBQTtBQUNBLDZFQUFBO0FBQ0EsNkVBQUE7QUFtQ0EsNkVBQUE7QUFDQSw2RUFBQTtBQUNBLDZFQUFBO0FBRUE7Ozs7RUFJRSx1REFBQTtFQUNBLG1EQUFBO0FDbkNGOztBRDJERTtFQUNFLCtCQUFBO0VBQ0EsNkJBQUE7QUN4REo7QUQyREU7RUFDRSxnQ0FBQTtFQUNBLDRCQUFBO0FDekRKO0FEK0RJO0VBQ0UsaUNBQUE7RUFDQSw2QkFBQTtBQzdETjtBRGdFSTtFQUNFLGdDQUFBO0VBQ0EsOEJBQUE7QUM5RE47QURpRUk7RUFDRSwrQkFBQTtFQUNBLDZCQUFBO0FDL0ROO0FEa0VJO0VBQ0UsZ0NBQUE7RUFDQSw0QkFBQTtBQ2hFTjtBRCtDSTtFQUNFLGlDQUFBO0VBQ0EsZ0NBQUE7QUM3Q047QURnREk7RUFDRSxnQ0FBQTtFQUNBLGlDQUFBO0FDOUNOO0FEaURJO0VBQ0UsK0JBQUE7RUFDQSxnQ0FBQTtBQy9DTjtBRGtESTtFQUNFLGdDQUFBO0VBQ0EsK0JBQUE7QUNoRE47QUQrQkk7RUFDRSxpQ0FBQTtFQUNBLCtCQUFBO0FDN0JOO0FEZ0NJO0VBQ0UsZ0NBQUE7RUFDQSxnQ0FBQTtBQzlCTjtBRGlDSTtFQUNFLCtCQUFBO0VBQ0EsK0JBQUE7QUMvQk47QURrQ0k7RUFDRSxnQ0FBQTtFQUNBLDhCQUFBO0FDaENOO0FEZUk7RUFDRSxpQ0FBQTtFQUNBLDZCQUFBO0FDYk47QURnQkk7RUFDRSxnQ0FBQTtFQUNBLDhCQUFBO0FDZE47QURpQkk7RUFDRSwrQkFBQTtFQUNBLDZCQUFBO0FDZk47QURrQkk7RUFDRSxnQ0FBQTtFQUNBLDRCQUFBO0FDaEJOO0FEREk7RUFDRSxpQ0FBQTtFQUNBLCtCQUFBO0FDR047QURBSTtFQUNFLGdDQUFBO0VBQ0EsZ0NBQUE7QUNFTjtBRENJO0VBQ0UsK0JBQUE7RUFDQSwrQkFBQTtBQ0NOO0FERUk7RUFDRSxnQ0FBQTtFQUNBLDhCQUFBO0FDQU47QURqQkk7RUFDRSxpQ0FBQTtFQUNBLDZCQUFBO0FDbUJOO0FEaEJJO0VBQ0UsZ0NBQUE7RUFDQSw4QkFBQTtBQ2tCTjtBRGZJO0VBQ0UsK0JBQUE7RUFDQSw2QkFBQTtBQ2lCTjtBRGRJO0VBQ0UsZ0NBQUE7RUFDQSw0QkFBQTtBQ2dCTjtBRFhJO0VBQ0UsK0JBQUE7RUFDQSw0Q0FBQTtBQ2FOO0FEZkk7RUFDRSwrQkFBQTtFQUNBLDRDQUFBO0FDaUJOO0FEbkJJO0VBQ0UsK0JBQUE7RUFDQSw0Q0FBQTtBQ3FCTjtBRHZCSTtFQUNFLCtCQUFBO0VBQ0EsNENBQUE7QUN5Qk47QUQzQkk7RUFDRSwrQkFBQTtFQUNBLDRDQUFBO0FDNkJOO0FEL0JJO0VBQ0UsK0JBQUE7RUFDQSw0Q0FBQTtBQ2lDTjtBRG5DSTtFQUNFLCtCQUFBO0VBQ0EsNENBQUE7QUNxQ047QUR2Q0k7RUFDRSwrQkFBQTtFQUNBLDRDQUFBO0FDeUNOO0FEM0NJO0VBQ0UsK0JBQUE7RUFDQSw0Q0FBQTtBQzZDTjtBRC9DSTtFQUNFLCtCQUFBO0VBQ0EsNkNBQUE7QUNpRE47QURuREk7RUFDRSwrQkFBQTtFQUNBLDZDQUFBO0FDcUROO0FEdkRJO0VBQ0UsK0JBQUE7RUFDQSw2Q0FBQTtBQ3lETjtBRHJERTtFQUNFLDJCQUFBO0FDdURKO0FEcERFO0VBQ0UsNEJBQUE7QUNzREo7O0FBN09BO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQWdQRjtBQTlPRTs7RUFFRSxrQ0FBQTtBQWdQSjtBQTdPRTtFQUNFLHlCQUFBO0VBQ0EsOEJBQUE7QUErT0o7QUE3T0k7RUFDRSwyQkFBQTtBQStPTjtBQTNPRTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7QUE2T0o7QUExT0U7RUFDRSxpQkFBQTtFQUNBLDhDRGtEc0I7RUNqRHRCLCtCQUFBO0FBNE9KO0FBek9FO0VBQ0UseUJEc0NNO0VDckNOLGdDQUFBO0VBQ0EsYUFBQTtBQTJPSjtBQXhPRTtFQUNFLGVBQUE7QUEwT0o7O0FBdE9BO0VBQ0Usa0JBQUE7RUFDQSw0REFBQTtBQXlPRiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2Fuczp3Z2h0QDMwMDs0MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuOnJvb3Qge1xyXG4gIC0td2hpdGU6ICNmZmZmZmY7XHJcbiAgLS1ncmF5LTA1OiAjZjFmM2YzO1xyXG4gIC0tZ3JheS0xMDogI2UwZTNlNjtcclxuICAtLWdyYXktMjA6ICNiZmM2Y2U7XHJcbiAgLS1ncmF5LTMwOiAjOWZhOWI3O1xyXG4gIC0tZ3JheS00MDogIzgzOGZhMDtcclxuICAtLWdyYXktNTA6ICM2Yjc3ODY7XHJcbiAgLS1ncmF5LTYwOiAjNTI1YzY5O1xyXG4gIC0tZ3JheS03MDogIzNkNDU0ZjtcclxuICAtLWdyYXktODA6ICMyNTJiMzE7XHJcbiAgLS1ncmF5LTkwOiAjMTYxOTFkO1xyXG4gIC0tZ3JheS05NTogIzBiMGMwZjtcclxuICAtLWJsdWUtMDU6ICNmMGY2ZmU7XHJcbiAgLS1ibHVlLTEwOiAjZTJlZWZkO1xyXG4gIC0tYmx1ZS0yMDogI2JjZDhmYztcclxuICAtLWJsdWUtMzA6ICM3ZWIxZjQ7XHJcbiAgLS1ibHVlLTQwOiAjNGE4ZmVhO1xyXG4gIC0tYmx1ZS01MDogIzI1NzRkYjtcclxuICAtLWJsdWUtNjA6ICMwYzVjYzU7XHJcbiAgLS1ibHVlLTcwOiAjMDA0OWE5O1xyXG4gIC0tYmx1ZS04MDogIzAwM2E4NjtcclxuICAtLWJsdWUtOTA6ICMwMDJhNjE7XHJcbiAgLS1ibHVlLTk1OiAjMDAxNjMzO1xyXG4gIC0tZ3JlZW4tMTA6ICNlM2ZhYzM7XHJcbiAgLS1ncmVlbi0zMDogI2I5ZjQ2NztcclxuICAtLWdyZWVuLTUwOiAjNzZjYTAyO1xyXG4gIC0tZ3JlZW4tNzA6ICM1OTk5MDA7XHJcbiAgLS1ncmVlbi04MDogIzNjNjYwMDtcclxuICAtLWdyZWVuLTkwOiAjMWYzNjAwO1xyXG4gIC0tcmVkLTEwOiAjZmZiN2NlO1xyXG4gIC0tcmVkLTMwOiAjZmE1NzhiO1xyXG4gIC0tcmVkLTUwOiAjZTYwYzUxO1xyXG4gIC0tcmVkLTcwOiAjYzIwMDNkO1xyXG4gIC0tcmVkLTgwOiAjOTMwMDJmO1xyXG4gIC0tcmVkLTkwOiAjNjMwMDFmO1xyXG4gIC0teWVsbG93LTEwOiAjZmZlM2E2O1xyXG4gIC0teWVsbG93LTMwOiAjZjliNjI1O1xyXG4gIC0teWVsbG93LTUwOiAjZTM5YjAwO1xyXG4gIC0teWVsbG93LTcwOiAjYmI4MDAwO1xyXG4gIC0teWVsbG93LTgwOiAjODc1YzAwO1xyXG4gIC0teWVsbG93LTkwOiAjNTIzODAwO1xyXG4gIC0tcHVycGxlLTEwOiAjZjNjNmZmO1xyXG4gIC0tcHVycGxlLTMwOiAjZGM3M2Y5O1xyXG4gIC0tcHVycGxlLTUwOiAjYmIzMGUyO1xyXG4gIC0tcHVycGxlLTcwOiAjOTEwYWI3O1xyXG4gIC0tcHVycGxlLTgwOiAjNjQwMDgwO1xyXG4gIC0tcHVycGxlLTkwOiAjMzgwMDQ3O1xyXG4gIC0tdGVhbC0xMDogI2UxZjlmZjtcclxuICAtLXRlYWwtMzA6ICM5YmU1ZmE7XHJcbiAgLS10ZWFsLTUwOiAjNWZjYWU3O1xyXG4gIC0tdGVhbC03MDogIzM2YTZjNTtcclxuICAtLXRlYWwtODA6ICMxZjdlOTg7XHJcbiAgLS10ZWFsLTkwOiAjMTI1ODZiO1xyXG4gIC0tZ3JheS01MC0yMDogcmdiYSgxMDcsIDExOSwgMTM0LCAwLjIpO1xyXG4gIC0tYmx1ZS05NS02MDogcmdiYSgwLCAyMiwgNTEsIDAuNik7XHJcbiAgLypcclxuICAgICAgICBicmFuZGluZ1xyXG5cclxuICAgICovXHJcbiAgLS1icmFuZC1wcmltYXJ5LWNvbG9yOiAjMjU3NGRiO1xyXG4gIC0tYnJhbmQtc2Vjb25kYXJ5LWNvbG9yOiAjZTJlZWZkO1xyXG4gIC0taGVhZGVyLWhlaWdodDogNTZweDtcclxuICAtLXZlcnRpY2FsLW5hdi13aWR0aDogMjE1cHg7XHJcbiAgLS12ZXJ0aWNhbC1uYXYtc3VibWVudS13aWR0aDogMjUwcHg7XHJcbn1cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVVwbGFuZCBVSSBUaGVtZS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiRncmF5LTA1OiAjZjFmM2YzO1xyXG4kZ3JheS0xMDogI2UwZTNlNjtcclxuJGdyYXktNTA6ICM2Yjc3ODY7XHJcbiRibHVlLTEwOiAjZTJlZWZkO1xyXG4kaG92ZXI6IHZhcigtLWJyYW5kLXNlY29uZGFyeS1jb2xvcik7IC8vI2NkZTJmNjtcclxuXHJcbiR1cGxhbmQtYmx1ZTogdmFyKC0tYnJhbmQtcHJpbWFyeS1jb2xvcik7XHJcbiR1cGxhbmQtcGFuZWwtYmFja2dyb3VuZDogdmFyKC0tYnJhbmQtc2Vjb25kYXJ5LWNvbG9yKTtcclxuXHJcbiR1cGxhbmQtcHJpbWFyeS1idG4tYmc6ICMyNTc0ZGI7IC8vIHZhcigtLWJsdWUtNTApXHJcblxyXG4kdXBsYW5kLWhlYWRlci1oZWlnaHQ6IHZhcigtLWhlYWRlci1oZWlnaHQpO1xyXG4kdXBsYW5kLXNlY29uZGFyeS1oZWFkZXItaGVpZ2h0OiA1NnB4O1xyXG5cclxuJHVwbGFuZC1ncmF5LWJhY2tncm91bmQ6ICRncmF5LTA1O1xyXG5cclxuJHVwbGFuZC1ib2R5LWNvbG9yOiAjMTUxNTE1O1xyXG4kdXBsYW5kLWdyZWVuOiAjM2M2NjAwOyAvLyB2YXIoLS1ncmVlbi04MClcclxuJHVwbGFuZC15ZWxsb3c6ICM4NzVjMDA7IC8vIHZhcigtLXllbGxvdy04MClcclxuJHVwbGFuZC1yZWQ6ICM5MzAwMmY7IC8vIHZhcigtLXJlZC04MClcclxuJHVwbGFuZC1saWdodC1ncmF5OiAjYmZjNmNlO1xyXG4kdXBsYW5kLWRhcmstYmx1ZTogIzBkNGE2MjtcclxuJHVwbGFuZC1saWdodDogI2ZmZjtcclxuJG9wZW4tc2FuczogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiR1cGxhbmQtYWN0aXZlLWJnOiAkdXBsYW5kLXByaW1hcnktYnRuLWJnO1xyXG4kdXBsYW5kLWlucHV0LWhlaWdodDogY2FsYygxLjVlbSArIDAuNzVyZW0gKyAycHgpO1xyXG4kdXBsYW5kLWlucHV0LWJ0bi1mb2N1cy13aWR0aDogMC4ycmVtO1xyXG4kdXBsYW5kLWlucHV0LWJ0bi1mb2N1cy1jb2xvcjogcmdiYSh2YXIoLS1icmFuZC1wcmltYXJ5LWNvbG9yKSwgMC44KTtcclxuJHVwbGFuZC1pbnB1dC1idG4tZm9jdXMtYm94LXNoYWRvdzogMCAwIDAgJHVwbGFuZC1pbnB1dC1idG4tZm9jdXMtd2lkdGggJHVwbGFuZC1pbnB1dC1idG4tZm9jdXMtY29sb3I7XHJcbiR1cGxhbmQtaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yOiAkdXBsYW5kLWlucHV0LWJ0bi1mb2N1cy1jb2xvcjtcclxuJHVwbGFuZC1hbGVydC1iZy1sZXZlbDogMDtcclxuJHVwbGFuZC1hbGVydC1ib3JkZXItbGV2ZWw6IDA7XHJcbiR1cGxhbmQtYWxlcnQtY29sb3ItbGV2ZWw6IDY7XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUJvb3RzdHJhcCBPdmVycmlkZXMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuLmJ0bi1wcmltYXJ5LFxyXG4uYnRuLXByaW1hcnk6aG92ZXIsXHJcbi5idG4tcHJpbWFyeTphY3RpdmUsXHJcbi5idG4tcHJpbWFyeTp2aXNpdGVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1icmFuZC1wcmltYXJ5LWNvbG9yKSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYnJhbmQtcHJpbWFyeS1jb2xvcikgIWltcG9ydGFudDtcclxufVxyXG5cclxuJGJvZHktY29sb3I6ICR1cGxhbmQtYm9keS1jb2xvcjtcclxuJGluZm86ICR1cGxhbmQtZGFyay1ibHVlO1xyXG4kcHJpbWFyeTogJHVwbGFuZC1wcmltYXJ5LWJ0bi1iZztcclxuJHN1Y2Nlc3M6ICR1cGxhbmQtZ3JlZW47XHJcbiRkYW5nZXI6ICR1cGxhbmQtcmVkO1xyXG4kd2FybmluZzogJHVwbGFuZC15ZWxsb3c7XHJcblxyXG4kYWxlcnQtYmctbGV2ZWw6ICR1cGxhbmQtYWxlcnQtYmctbGV2ZWw7XHJcbiRhbGVydC1ib3JkZXItbGV2ZWw6ICR1cGxhbmQtYWxlcnQtYm9yZGVyLWxldmVsO1xyXG4kYWxlcnQtY29sb3ItbGV2ZWw6ICR1cGxhbmQtYWxlcnQtY29sb3ItbGV2ZWw7XHJcbiRsaWdodDogJHVwbGFuZC1saWdodDtcclxuJGlucHV0LWhlaWdodDogJHVwbGFuZC1pbnB1dC1oZWlnaHQ7XHJcbiRpbnB1dC1jb2xvcjogIzQ5NTA1NztcclxuJGlucHV0LWJvcmRlci1jb2xvcjogJHVwbGFuZC1saWdodC1ncmF5O1xyXG4kYnRuLWJvcmRlci1yYWRpdXM6IDJweDtcclxuJGJ0bi1ib3JkZXItcmFkaXVzLWxnOiAycHg7XHJcbiRidG4tYm9yZGVyLXJhZGl1cy1zbTogMnB4O1xyXG4kYnRuLXBhZGRpbmcteDogMTZweDtcclxuJGJ0bi1wYWRkaW5nLXk6IDRweDtcclxuXHJcbi5ydGwge1xyXG4gIC5tbC1hdXRvIHtcclxuICAgIG1hcmdpbi1sZWZ0OiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5tci1hdXRvIHtcclxuICAgIG1hcmdpbi1yaWdodDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gICRzcGFjZXM6ICgwLCAwKSwgKDEsIDAuMjUpLCAoMiwgMC41KSwgKDMsIDEpLCAoNCwgMS41KSwgKDUsIDMpO1xyXG5cclxuICBAZWFjaCAkaSwgJHZhbHVlIGluICRzcGFjZXMge1xyXG4gICAgLnByLSN7JGl9IHtcclxuICAgICAgcGFkZGluZy1yaWdodDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6ICN7JHZhbHVlfXJlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5wbC0jeyRpfSB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAjeyR2YWx1ZX1yZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAubWwtI3skaX0ge1xyXG4gICAgICBtYXJnaW4tbGVmdDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6ICN7JHZhbHVlfXJlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5tci0jeyRpfSB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgICBtYXJnaW4tbGVmdDogI3skdmFsdWV9cmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAZm9yICRpIGZyb20gMSB0aHJvdWdoIDEyIHtcclxuICAgIC5vZmZzZXQtI3skaX0ge1xyXG4gICAgICBtYXJnaW4tbGVmdDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IGNhbGMoMTAwJSAqICgjeyRpfS8gMTIpKSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnRleHQtcmlnaHQge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnRleHQtbGVmdCB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4iLCJAaW1wb3J0ICcuLy4uLy4uLy4uLy4uLy4uLy4uL0JhbWJhLlNoYXJlZC9zcmMvYXNzZXRzL2Nzcy92YXJpYWJsZXMnO1xyXG5cclxuLmFkbWluLXdvcmtmbG93LXN0ZXAtY29zdCB7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNGVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgJi5taW4taC1maXQtY29udGVudCxcclxuICAubWluLWgtZml0LWNvbnRlbnQge1xyXG4gICAgbWluLWhlaWdodDogZml0LWNvbnRlbnQgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5zZWNvbmRhcnktaGVhZGVyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4ICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgLnNlY3Rpb24taGVhZGVyIHtcclxuICAgICAgcG9zaXRpb246IHN0YXRpYyAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnBhbmVsIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIGJvcmRlcjogc29saWQgMXB4ICNjZmNmY2Y7XHJcbiAgfVxyXG5cclxuICAucHJvcGVydGllcy1wYW5lbCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR1cGxhbmQtcGFuZWwtYmFja2dyb3VuZDtcclxuICAgIGJvcmRlci1yaWdodDogc29saWQgMXB4ICNjZmNmY2Y7XHJcbiAgfVxyXG5cclxuICAucGFuZWwtaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR1cGxhbmQtZ3JheS1iYWNrZ3JvdW5kO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNjZmNmY2Y7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgLmN1cnNvci1wb2ludGVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbi5wcm9wZXJ0aWVzLXBhbmVsLWgge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSB2YXIoLS1oZWFkZXItaGVpZ2h0KSAtIDg1cHgpICFpbXBvcnRhbnQ7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 73274:
/*!***********************************************************************************!*\
  !*** ./src/app/views/admin-workflow-step-cost/admin-workflow-step-cost.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminWorkflowStepCostModule: () => (/* binding */ AdminWorkflowStepCostModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-smart-modal */ 94500);
/* harmony import */ var ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-perfect-scrollbar-portable */ 1248);
/* harmony import */ var _admin_workflow_step_cost_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-workflow-step-cost-routing.module */ 52603);
/* harmony import */ var _blocks_page_page_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../blocks/page/page.module */ 13762);
/* harmony import */ var _blocks_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../blocks/components/components.module */ 68876);
/* harmony import */ var _admin_workflow_step_cost_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-workflow-step-cost.component */ 33595);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 96623);










class AdminWorkflowStepCostModule {
  static {
    this.ɵfac = function AdminWorkflowStepCostModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AdminWorkflowStepCostModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
      type: AdminWorkflowStepCostModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _admin_workflow_step_cost_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminWorkflowStepCostRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule, _blocks_page_page_module__WEBPACK_IMPORTED_MODULE_1__.PageModule, _blocks_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.FieldsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.AutoFocusFirstInputModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.CheckboxModule, ngx_smart_modal__WEBPACK_IMPORTED_MODULE_8__.NgxSmartModalModule, ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_9__.PerfectScrollbarModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.AutoUpdatePerfectScrollModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AdminWorkflowStepCostModule, {
    declarations: [_admin_workflow_step_cost_component__WEBPACK_IMPORTED_MODULE_3__.AdminWorkflowStepCostComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _admin_workflow_step_cost_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminWorkflowStepCostRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule, _blocks_page_page_module__WEBPACK_IMPORTED_MODULE_1__.PageModule, _blocks_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.FieldsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.AutoFocusFirstInputModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.CheckboxModule, ngx_smart_modal__WEBPACK_IMPORTED_MODULE_8__.NgxSmartModalModule, ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_9__.PerfectScrollbarModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_4__.AutoUpdatePerfectScrollModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_views_admin-workflow-step-cost_admin-workflow-step-cost_module_ts.js.map