"use strict";
(self["webpackChunkBama"] = self["webpackChunkBama"] || []).push([["default-src_app_views_admin-fax-settings_payment-means_payment-means_module_ts"],{

/***/ 40551:
/*!***************************************************!*\
  !*** ./src/app/blocks/models/credit-card-type.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreditCardType: () => (/* binding */ CreditCardType),
/* harmony export */   detectCreditCardType: () => (/* binding */ detectCreditCardType)
/* harmony export */ });
var CreditCardType;
(function (CreditCardType) {
  CreditCardType["Visa"] = "Visa";
  CreditCardType["MasterCard"] = "MasterCard";
  CreditCardType["AMEX"] = "AMEX";
  CreditCardType["DinersClub"] = "DinersClub";
  CreditCardType["Discover"] = "Discover";
  CreditCardType["JCB"] = "JCB";
  CreditCardType["UnionPay"] = "UnionPay";
  CreditCardType["Maestro"] = "Maestro";
  CreditCardType["Mir"] = "Mir";
  CreditCardType["Elo"] = "Elo";
  CreditCardType["Hipercard"] = "Hipercard";
  CreditCardType["RuPay"] = "RuPay";
  CreditCardType["CarteBancaire"] = "CarteBancaire";
  CreditCardType["Switch"] = "Switch";
  CreditCardType["Solo"] = "Solo";
  CreditCardType["Laser"] = "Laser";
  CreditCardType["CarteBleue"] = "CarteBleue";
  CreditCardType["CartaSi"] = "CartaSi";
  CreditCardType["Dankort"] = "Dankort";
  CreditCardType["Delta"] = "Delta";
  CreditCardType["VisaElectron"] = "VisaElectron";
  CreditCardType["Unknown"] = "";
})(CreditCardType || (CreditCardType = {}));
const cardTypeMapping = {
  visa: CreditCardType.Visa,
  visacard: CreditCardType.Visa,
  mastercard: CreditCardType.MasterCard,
  master: CreditCardType.MasterCard,
  amex: CreditCardType.AMEX,
  americanexpress: CreditCardType.AMEX,
  american: CreditCardType.AMEX,
  dinersclub: CreditCardType.DinersClub,
  diners: CreditCardType.DinersClub,
  discover: CreditCardType.Discover,
  jcb: CreditCardType.JCB,
  japancreditbureau: CreditCardType.JCB,
  unionpay: CreditCardType.UnionPay,
  chinaunionpay: CreditCardType.UnionPay,
  maestro: CreditCardType.Maestro,
  mir: CreditCardType.Mir,
  elo: CreditCardType.Elo,
  hipercard: CreditCardType.Hipercard,
  rupay: CreditCardType.RuPay,
  cartebancaire: CreditCardType.CarteBancaire,
  cb: CreditCardType.CarteBancaire,
  switch: CreditCardType.Switch,
  solo: CreditCardType.Solo,
  laser: CreditCardType.Laser,
  cartebleue: CreditCardType.CarteBleue,
  cartasi: CreditCardType.CartaSi,
  dankort: CreditCardType.Dankort,
  delta: CreditCardType.Delta,
  visaelectron: CreditCardType.VisaElectron,
  electron: CreditCardType.VisaElectron
};
function detectCreditCardType(cardType) {
  if (!cardType) return CreditCardType.Unknown;
  const normalizedCardType = cardType.toLowerCase().replace(/[-_\s]/g, '');
  return cardTypeMapping[normalizedCardType] || CreditCardType.Unknown;
}

/***/ }),

/***/ 28969:
/*!***************************************************************************************************************************!*\
  !*** ./src/app/views/admin-fax-settings/payment-means/credit-card-payment-method/credit-card-payment-method.component.ts ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreditCardPaymentMethodComponent: () => (/* binding */ CreditCardPaymentMethodComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _blocks_InterFAX_Models_admin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../blocks/InterFAX/Models/admin */ 82401);
/* harmony import */ var _blocks_models_credit_card_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../blocks/models/credit-card-type */ 40551);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../Bamba.Shared/src/fields/field.component */ 69689);
/* harmony import */ var _Bamba_Shared_src_directives_auto_focus_first_input_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../Bamba.Shared/src/directives/auto-focus-first-input.directive */ 15164);











function CreditCardPaymentMethodComponent_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainer"](0);
  }
}
function CreditCardPaymentMethodComponent_ng_template_12_div_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 21)(1, "app-field", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("valueChange", function CreditCardPaymentMethodComponent_ng_template_12_div_30_Template_app_field_valueChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r2.creditCard.ownerID, $event) || (ctx_r2.creditCard.ownerID = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("field", ctx_r2.fieldId);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("value", ctx_r2.creditCard.ownerID);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("fieldTabIndex", 1);
  }
}
function CreditCardPaymentMethodComponent_ng_template_12_ng_container_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainer"](0);
  }
}
function CreditCardPaymentMethodComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 11)(1, "div", 12)(2, "div", 3)(3, "div", 13)(4, "app-field", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("valueChange", function CreditCardPaymentMethodComponent_ng_template_12_Template_app_field_valueChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r2.creditCard.name, $event) || (ctx_r2.creditCard.name = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 13)(6, "app-field", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("valueChange", function CreditCardPaymentMethodComponent_ng_template_12_Template_app_field_valueChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r2.account.contactPhone, $event) || (ctx_r2.account.contactPhone = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 3)(8, "div", 13)(9, "div", 3)(10, "div", 16)(11, "app-field", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("valueChange", function CreditCardPaymentMethodComponent_ng_template_12_Template_app_field_valueChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r2.creditCard.number, $event) || (ctx_r2.creditCard.number = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 18)(13, "app-field", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("valueChange", function CreditCardPaymentMethodComponent_ng_template_12_Template_app_field_valueChange_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r2.creditCard.cardType, $event) || (ctx_r2.creditCard.cardType = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 13)(15, "app-field", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("valueChange", function CreditCardPaymentMethodComponent_ng_template_12_Template_app_field_valueChange_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r2.address.address1, $event) || (ctx_r2.address.address1 = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 3)(17, "div", 13)(18, "div", 3)(19, "div", 20)(20, "app-field", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("valueChange", function CreditCardPaymentMethodComponent_ng_template_12_Template_app_field_valueChange_20_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r2.creditCard.expirationMonth, $event) || (ctx_r2.creditCard.expirationMonth = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 21)(22, "app-field", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("valueChange", function CreditCardPaymentMethodComponent_ng_template_12_Template_app_field_valueChange_22_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r2.creditCard.expirationYear, $event) || (ctx_r2.creditCard.expirationYear = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 13)(24, "app-field", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("valueChange", function CreditCardPaymentMethodComponent_ng_template_12_Template_app_field_valueChange_24_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r2.address.address2, $event) || (ctx_r2.address.address2 = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 3)(26, "div", 13)(27, "div", 3)(28, "div", 20)(29, "app-field", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("valueChange", function CreditCardPaymentMethodComponent_ng_template_12_Template_app_field_valueChange_29_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r2.creditCard.cvv, $event) || (ctx_r2.creditCard.cvv = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, CreditCardPaymentMethodComponent_ng_template_12_div_30_Template, 2, 3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 13)(32, "div", 3)(33, "div", 20)(34, "app-field", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("valueChange", function CreditCardPaymentMethodComponent_ng_template_12_Template_app_field_valueChange_34_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r2.address.city, $event) || (ctx_r2.address.city = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "div", 21)(36, "app-field", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("valueChange", function CreditCardPaymentMethodComponent_ng_template_12_Template_app_field_valueChange_36_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r2.address.state, $event) || (ctx_r2.address.state = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](38, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "div", 13)(40, "div", 3)(41, "div", 20)(42, "app-field", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("valueChange", function CreditCardPaymentMethodComponent_ng_template_12_Template_app_field_valueChange_42_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r2.address.postalCode, $event) || (ctx_r2.address.postalCode = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "div", 21)(44, "app-field", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("valueChange", function CreditCardPaymentMethodComponent_ng_template_12_Template_app_field_valueChange_44_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r2.address.country, $event) || (ctx_r2.address.country = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "div", 24)(46, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](47, CreditCardPaymentMethodComponent_ng_template_12_ng_container_47_Template, 1, 0, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    const actionButtons_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("field", ctx_r2.fieldName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("value", ctx_r2.creditCard.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("fieldTabIndex", 1)("autocomplete", "cc-name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("field", ctx_r2.fieldPhoneNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("value", ctx_r2.account.contactPhone);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("fieldTabIndex", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("field", ctx_r2.fieldNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("value", ctx_r2.creditCard.number);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("maxLength", 19)("regex", ctx_r2.validator.digitsRegex)("fieldTabIndex", 1)("autocomplete", "cc-number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("field", ctx_r2.fieldType);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("value", ctx_r2.creditCard.cardType);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("fieldTabIndex", 1)("autocomplete", "cc-type")("valueMapper", ctx_r2.mapCreditCardType);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("field", ctx_r2.fieldAddress1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("value", ctx_r2.address.address1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("fieldTabIndex", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("field", ctx_r2.fieldExpMonth);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("value", ctx_r2.creditCard.expirationMonth);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("fieldTabIndex", 1)("autocomplete", "cc-exp-month")("valueMapper", ctx_r2.removeUnnecessaryZerosAndDigits);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("field", ctx_r2.fieldExpYear);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("value", ctx_r2.creditCard.expirationYear);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("fieldTabIndex", 1)("autocomplete", "cc-exp-year")("valueMapper", ctx_r2.removeUnnecessaryZerosAndDigits);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("field", ctx_r2.fieldAddress2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("value", ctx_r2.address.address2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("fieldTabIndex", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("field", ctx_r2.fieldCvv);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("value", ctx_r2.creditCard.cvv);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("maxLength", 4)("regex", ctx_r2.validator.digitsRegex)("fieldTabIndex", 1)("autocomplete", "off");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.accountRegistrationDetails == null ? null : ctx_r2.accountRegistrationDetails.country == null ? null : ctx_r2.accountRegistrationDetails.country.ownerIDRequired);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("field", ctx_r2.fieldCity);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("value", ctx_r2.address.city);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("fieldTabIndex", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("field", ctx_r2.fieldState);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("value", ctx_r2.address.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("fieldTabIndex", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("field", ctx_r2.fieldPostalCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("value", ctx_r2.address.postalCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("fieldTabIndex", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("field", ctx_r2.fieldCountry)("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("value", ctx_r2.address.country);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("fieldTabIndex", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", actionButtons_r5);
  }
}
function CreditCardPaymentMethodComponent_ng_template_14_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainer"](0);
  }
}
function CreditCardPaymentMethodComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "br")(4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 27)(6, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, CreditCardPaymentMethodComponent_ng_template_14_ng_container_15_Template, 1, 0, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    const actionButtons_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 7, "fax-account-properties.payment-method-cc-text"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r2.creditCard.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.creditCard.cardType);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("**** **** **** ", ctx_r2.creditCard.lastDigits, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", ctx_r2.creditCard.expirationMonth, "/", ctx_r2.creditCard.expirationYear, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", actionButtons_r5);
  }
}
function CreditCardPaymentMethodComponent_ng_template_16_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CreditCardPaymentMethodComponent_ng_template_16_button_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.onUpdateClicked());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "MainHeader.Update"), " ");
  }
}
function CreditCardPaymentMethodComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CreditCardPaymentMethodComponent_ng_template_16_button_1_Template, 3, 3, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r2.showEditView);
  }
}
class CreditCardPaymentMethodComponent {
  set accountRegistrationDetails(val) {
    this._accountRegistrationDetails = val;
    const cardTypes = this.getCardTypes(val.country);
    this.createFields(new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FixedDataSource(cardTypes));
  }
  get accountRegistrationDetails() {
    return this._accountRegistrationDetails;
  }
  set creditCard(val) {
    this._creditCard = new _blocks_InterFAX_Models_admin__WEBPACK_IMPORTED_MODULE_1__.CreditCard(val);
    this._creditCard.changed = true;
    this.creditCardChange.next(this._creditCard);
  }
  get creditCard() {
    return this._creditCard;
  }
  set address(val) {
    this._address = new _blocks_InterFAX_Models_admin__WEBPACK_IMPORTED_MODULE_1__.Address(val);
    this.addressChange.next(this._address);
  }
  get address() {
    return this._address;
  }
  constructor(translate, validator) {
    this.translate = translate;
    this.validator = validator;
    this.creditCardChange = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    this.addressChange = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    this.onCancel = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    this.onToggleEditCC = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter(false);
    this.showEditView = false;
    this.getCardTypes = context => {
      const options = new Array();
      options.push({
        name: this.translate.instant('fax-account-properties.select-value'),
        value: ''
      });
      for (const card of context.allowedCreditCards) {
        const translatedName = this.translate.instant(`fax-account-properties.cc-type-${card.toLowerCase()}`);
        options.push({
          name: translatedName == `fax-account-properties.cc-type-${card.toLowerCase()}` ? card : translatedName,
          value: card
        });
      }
      return options;
    };
    this.createFields = (cardTypes = null) => {
      const currentYear = new Date().getFullYear();
      const expirationMonths = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FixedDataSource(this.getOptionsFor(1, 12));
      const expirationYears = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FixedDataSource(this.getOptionsFor(currentYear, currentYear + 10));
      this.fieldName = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Text,
        label: this.translate.instant('fax-account-properties.cc-name'),
        placeholder: '',
        required: true
      });
      this.fieldNumber = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Text,
        label: this.translate.instant('fax-account-properties.cc-number'),
        placeholder: '',
        required: true
      });
      this.fieldType = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.List,
        label: this.translate.instant('fax-account-properties.cc-type'),
        placeholder: '',
        required: true,
        datasource: cardTypes
      });
      this.fieldExpMonth = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.List,
        label: this.translate.instant('fax-account-properties.cc-expiration-month'),
        placeholder: '',
        required: true,
        datasource: expirationMonths
      });
      this.fieldExpYear = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.List,
        label: this.translate.instant('fax-account-properties.cc-expiration-year'),
        placeholder: '',
        required: true,
        datasource: expirationYears
      });
      this.fieldCvv = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Text,
        label: this.translate.instant('fax-account-properties.cc-cvv'),
        placeholder: '',
        required: true
      });
      this.fieldId = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Text,
        label: this.translate.instant('fax-account-properties.cc-id'),
        placeholder: '',
        required: true
      });
      this.fieldAddress1 = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Text,
        label: this.translate.instant('fax-account-properties.address1'),
        placeholder: '',
        required: true
      });
      this.fieldAddress2 = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Text,
        label: this.translate.instant('fax-account-properties.address2'),
        placeholder: ''
      });
      this.fieldCity = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Text,
        label: this.translate.instant('fax-account-properties.city'),
        placeholder: '',
        required: true
      });
      this.fieldState = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Text,
        label: this.translate.instant('fax-account-properties.state'),
        placeholder: ''
      });
      this.fieldPostalCode = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Text,
        label: this.translate.instant('fax-account-properties.postal-code'),
        placeholder: '',
        required: true
      });
      this.fieldCountry = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Text,
        label: this.translate.instant('fax-account-properties.country'),
        placeholder: '',
        required: true
      });
      this.fieldPhoneNumber = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Text,
        label: this.translate.instant('contact-list.phoneNumber'),
        placeholder: this.translate.instant('contact-list.phoneNumber-placeholder'),
        required: true
      });
    };
    this.getOptionsFor = (start, end) => {
      const options = new Array();
      options.push({
        name: this.translate.instant('fax-account-properties.select-value'),
        value: ''
      });
      for (let index = start; index <= end; index++) {
        options.push({
          name: index.toString(),
          value: index.toString()
        });
      }
      return options;
    };
    this.onUpdateClicked = () => {
      this.toggleEditView(true);
    };
    this.onCancelClicked = () => {
      this.toggleEditView(false);
      this.onCancel.emit();
    };
    this.mapCreditCardType = value => {
      return (0,_blocks_models_credit_card_type__WEBPACK_IMPORTED_MODULE_2__.detectCreditCardType)(value);
    };
    this.removeUnnecessaryZerosAndDigits = value => {
      if (!value) return '';
      return Number(value).toString();
    };
  }
  ngOnInit() {
    if (!this.creditCard.valid || this.currentPaymentMeans !== shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.PaymentMethods.CC) {
      this.toggleEditView(true);
    }
    if (this.currentPaymentMeans !== shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.PaymentMethods.CC) {
      this.creditCard = new _blocks_InterFAX_Models_admin__WEBPACK_IMPORTED_MODULE_1__.CreditCard();
    }
  }
  toggleEditView(show) {
    this.showEditView = show;
    this.onToggleEditCC.emit(this.showEditView);
  }
  static {
    this.ɵfac = function CreditCardPaymentMethodComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CreditCardPaymentMethodComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.CharactersValidator));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: CreditCardPaymentMethodComponent,
      selectors: [["app-credit-card-payment-method"]],
      inputs: {
        currentPaymentMeans: "currentPaymentMeans",
        account: "account",
        accountRegistrationDetails: "accountRegistrationDetails",
        creditCard: "creditCard",
        address: "address"
      },
      outputs: {
        creditCardChange: "creditCardChange",
        addressChange: "addressChange",
        onCancel: "onCancel",
        onToggleEditCC: "onToggleEditCC"
      },
      decls: 18,
      vars: 9,
      consts: [["editCC", ""], ["viewCC", ""], ["actionButtons", ""], [1, "row"], [1, "col-12"], [1, "box-head--light-blue-bg", "mb-3"], [1, "fa", "fa-credit-card", "mr-2"], [1, "box-head__right-panel", "project-list-pages"], [1, "btn", 3, "click"], [1, "ml-3"], [4, "ngIf", "ngIfThen", "ngIfElse"], [1, "row", "mb-2"], [1, "col-8"], [1, "col-6"], ["appAutoFocusFirstInput", "", 3, "valueChange", "field", "value", "fieldTabIndex", "autocomplete"], [3, "valueChange", "field", "value", "fieldTabIndex"], [1, "col-8", "pr-0"], [3, "valueChange", "field", "value", "maxLength", "regex", "fieldTabIndex", "autocomplete"], [1, "col-4", "pl-0"], [3, "valueChange", "field", "value", "fieldTabIndex", "autocomplete", "valueMapper"], [1, "col-6", "pr-0"], [1, "col-6", "pl-0"], ["class", "col-6 pl-0", 4, "ngIf"], [3, "valueChange", "field", "disabled", "value", "fieldTabIndex"], [1, "row", "pr-2", "pt-2"], [4, "ngTemplateOutlet"], [1, "fas", "fa-check", "mr-2", 2, "color", "darkgreen"], [1, "credit-card", "ml-4"], [1, "credit-card-name", "credit-card-text", "card-width-overflow-text"], [1, "credit-card-type", "credit-card-text"], [1, "credit-card-number", "credit-card-text"], [1, "credit-card-expiry", "credit-card-text"], ["id", "card-view-action-button-container", 1, "ml-4", "mt-4"], [1, "d-flex", "flex-row-reverse"], ["class", "btn mb-2 ml-2", 3, "click", 4, "ngIf"], [1, "btn", "mb-2", "ml-2", 3, "click"]],
      template: function CreditCardPaymentMethodComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 3)(1, "div", 4)(2, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "i", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 7)(7, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CreditCardPaymentMethodComponent_Template_button_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.onCancelClicked());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](9, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, CreditCardPaymentMethodComponent_ng_container_11_Template, 1, 0, "ng-container", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, CreditCardPaymentMethodComponent_ng_template_12_Template, 48, 55, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"])(14, CreditCardPaymentMethodComponent_ng_template_14_Template, 16, 9, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"])(16, CreditCardPaymentMethodComponent_ng_template_16_Template, 2, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        }
        if (rf & 2) {
          const editCC_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](13);
          const viewCC_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 5, "fax-account-properties.payment-method-cc-header"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](9, 7, "fax-account-properties.change-payment-method"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showEditView)("ngIfThen", editCC_r7)("ngIfElse", viewCC_r8);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgTemplateOutlet, _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_3__.FieldComponent, _Bamba_Shared_src_directives_auto_focus_first_input_directive__WEBPACK_IMPORTED_MODULE_4__.AutoFocusFirstInputDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe],
      styles: ["@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400[_ngcontent-%COMP%];700&display=swap)[_ngcontent-%COMP%];[_ngcontent-%COMP%]:root {\n  --white: #ffffff;\n  --gray-05: #f1f3f3;\n  --gray-10: #e0e3e6;\n  --gray-20: #bfc6ce;\n  --gray-30: #9fa9b7;\n  --gray-40: #838fa0;\n  --gray-50: #6b7786;\n  --gray-60: #525c69;\n  --gray-70: #3d454f;\n  --gray-80: #252b31;\n  --gray-90: #16191d;\n  --gray-95: #0b0c0f;\n  --blue-05: #f0f6fe;\n  --blue-10: #e2eefd;\n  --blue-20: #bcd8fc;\n  --blue-30: #7eb1f4;\n  --blue-40: #4a8fea;\n  --blue-50: #2574db;\n  --blue-60: #0c5cc5;\n  --blue-70: #0049a9;\n  --blue-80: #003a86;\n  --blue-90: #002a61;\n  --blue-95: #001633;\n  --green-10: #e3fac3;\n  --green-30: #b9f467;\n  --green-50: #76ca02;\n  --green-70: #599900;\n  --green-80: #3c6600;\n  --green-90: #1f3600;\n  --red-10: #ffb7ce;\n  --red-30: #fa578b;\n  --red-50: #e60c51;\n  --red-70: #c2003d;\n  --red-80: #93002f;\n  --red-90: #63001f;\n  --yellow-10: #ffe3a6;\n  --yellow-30: #f9b625;\n  --yellow-50: #e39b00;\n  --yellow-70: #bb8000;\n  --yellow-80: #875c00;\n  --yellow-90: #523800;\n  --purple-10: #f3c6ff;\n  --purple-30: #dc73f9;\n  --purple-50: #bb30e2;\n  --purple-70: #910ab7;\n  --purple-80: #640080;\n  --purple-90: #380047;\n  --teal-10: #e1f9ff;\n  --teal-30: #9be5fa;\n  --teal-50: #5fcae7;\n  --teal-70: #36a6c5;\n  --teal-80: #1f7e98;\n  --teal-90: #12586b;\n  --gray-50-20: rgba(107, 119, 134, 0.2);\n  --blue-95-60: rgba(0, 22, 51, 0.6);\n  \n\n\n\n\n  --brand-primary-color: #2574db;\n  --brand-secondary-color: #e2eefd;\n  --header-height: 56px;\n  --vertical-nav-width: 215px;\n  --vertical-nav-submenu-width: 250px;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n.btn-primary[_ngcontent-%COMP%], \n.btn-primary[_ngcontent-%COMP%]:hover, \n.btn-primary[_ngcontent-%COMP%]:active, \n.btn-primary[_ngcontent-%COMP%]:visited {\n  background-color: var(--brand-primary-color) !important;\n  border-color: var(--brand-primary-color) !important;\n}\n\n.rtl[_ngcontent-%COMP%]   .ml-auto[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: auto !important;\n}\n.rtl[_ngcontent-%COMP%]   .mr-auto[_ngcontent-%COMP%] {\n  margin-right: initial !important;\n  margin-left: auto !important;\n}\n.rtl[_ngcontent-%COMP%]   .pr-0[_ngcontent-%COMP%] {\n  padding-right: initial !important;\n  padding-left: 0rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .pl-0[_ngcontent-%COMP%] {\n  padding-left: initial !important;\n  padding-right: 0rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .ml-0[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: 0rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .mr-0[_ngcontent-%COMP%] {\n  margin-right: initial !important;\n  margin-left: 0rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .pr-1[_ngcontent-%COMP%] {\n  padding-right: initial !important;\n  padding-left: 0.25rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .pl-1[_ngcontent-%COMP%] {\n  padding-left: initial !important;\n  padding-right: 0.25rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .ml-1[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: 0.25rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .mr-1[_ngcontent-%COMP%] {\n  margin-right: initial !important;\n  margin-left: 0.25rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .pr-2[_ngcontent-%COMP%] {\n  padding-right: initial !important;\n  padding-left: 0.5rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .pl-2[_ngcontent-%COMP%] {\n  padding-left: initial !important;\n  padding-right: 0.5rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .ml-2[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: 0.5rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .mr-2[_ngcontent-%COMP%] {\n  margin-right: initial !important;\n  margin-left: 0.5rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .pr-3[_ngcontent-%COMP%] {\n  padding-right: initial !important;\n  padding-left: 1rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .pl-3[_ngcontent-%COMP%] {\n  padding-left: initial !important;\n  padding-right: 1rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .ml-3[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: 1rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .mr-3[_ngcontent-%COMP%] {\n  margin-right: initial !important;\n  margin-left: 1rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .pr-4[_ngcontent-%COMP%] {\n  padding-right: initial !important;\n  padding-left: 1.5rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .pl-4[_ngcontent-%COMP%] {\n  padding-left: initial !important;\n  padding-right: 1.5rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .ml-4[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: 1.5rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .mr-4[_ngcontent-%COMP%] {\n  margin-right: initial !important;\n  margin-left: 1.5rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .pr-5[_ngcontent-%COMP%] {\n  padding-right: initial !important;\n  padding-left: 3rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .pl-5[_ngcontent-%COMP%] {\n  padding-left: initial !important;\n  padding-right: 3rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .ml-5[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: 3rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .mr-5[_ngcontent-%COMP%] {\n  margin-right: initial !important;\n  margin-left: 3rem !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-1[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 1 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-2[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 2 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-3[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 3 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-4[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 4 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-5[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 5 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-6[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 6 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-7[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 7 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-8[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 8 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-9[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 9 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-10[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 10 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-11[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 11 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .offset-12[_ngcontent-%COMP%] {\n  margin-left: initial !important;\n  margin-right: calc(100% * 12 / 12) !important;\n}\n.rtl[_ngcontent-%COMP%]   .text-right[_ngcontent-%COMP%] {\n  text-align: left !important;\n}\n.rtl[_ngcontent-%COMP%]   .text-left[_ngcontent-%COMP%] {\n  text-align: right !important;\n}\n\n.credit-card[_ngcontent-%COMP%] {\n  background: linear-gradient(100deg, var(--brand-primary-color), var(--brand-secondary-color));\n  box-shadow: 5px 5px 20px 0px rgba(0, 0, 0, 0.5);\n  width: 316.8px;\n  height: 201.6px;\n  border-radius: 9.6px;\n  padding: 20.16px;\n  position: relative;\n  text-transform: uppercase;\n  font-family: monospace;\n  letter-spacing: 1px;\n  font-size: 16.896px;\n}\n\n.credit-card-name[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 76.8px;\n  left: 20.16px;\n}\n\n.credit-card-number[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 38.4px;\n  left: 20.16px;\n  direction: ltr;\n}\n\n.card-width-overflow-text[_ngcontent-%COMP%] {\n  width: 276.48px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n.credit-card-expiry[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 7.68px;\n  right: 20.16px;\n}\n\n.credit-card-text[_ngcontent-%COMP%] {\n  mix-blend-mode: normal;\n  text-shadow: -2px 2px 4px rgba(0, 0, 0, 0.5), 1px -1px 0 rgba(255, 255, 255, 0.5);\n}\n\n.credit-card-type[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 20.16px;\n}\n\n#card-view-action-button-container[_ngcontent-%COMP%] {\n  width: 316.8px;\n}\n\n@media (min-width: 576px) {\n  .credit-card[_ngcontent-%COMP%] {\n    background: linear-gradient(100deg, var(--brand-primary-color), var(--brand-secondary-color));\n    box-shadow: 5px 5px 20px 0px rgba(0, 0, 0, 0.5);\n    width: 396px;\n    height: 252px;\n    border-radius: 12px;\n    padding: 25.2px;\n    position: relative;\n    text-transform: uppercase;\n    font-family: monospace;\n    letter-spacing: 1px;\n    font-size: 21.12px;\n  }\n  .credit-card-name[_ngcontent-%COMP%] {\n    position: absolute;\n    bottom: 96px;\n    left: 25.2px;\n  }\n  .credit-card-number[_ngcontent-%COMP%] {\n    position: absolute;\n    bottom: 48px;\n    left: 25.2px;\n    direction: ltr;\n  }\n  .card-width-overflow-text[_ngcontent-%COMP%] {\n    width: 345.6px;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    overflow: hidden;\n  }\n  .credit-card-expiry[_ngcontent-%COMP%] {\n    position: absolute;\n    bottom: 9.6px;\n    right: 25.2px;\n  }\n  .credit-card-text[_ngcontent-%COMP%] {\n    mix-blend-mode: normal;\n    text-shadow: -2px 2px 4px rgba(0, 0, 0, 0.5), 1px -1px 0 rgba(255, 255, 255, 0.5);\n  }\n  .credit-card-type[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 25.2px;\n  }\n  #card-view-action-button-container[_ngcontent-%COMP%] {\n    width: 396px;\n  }\n}\n@media (min-width: 768px) {\n  .credit-card[_ngcontent-%COMP%] {\n    background: linear-gradient(100deg, var(--brand-primary-color), var(--brand-secondary-color));\n    box-shadow: 5px 5px 20px 0px rgba(0, 0, 0, 0.5);\n    width: 475.2px;\n    height: 302.4px;\n    border-radius: 14.4px;\n    padding: 30.24px;\n    position: relative;\n    text-transform: uppercase;\n    font-family: monospace;\n    letter-spacing: 1px;\n    font-size: 25.344px;\n  }\n  .credit-card-name[_ngcontent-%COMP%] {\n    position: absolute;\n    bottom: 115.2px;\n    left: 30.24px;\n  }\n  .credit-card-number[_ngcontent-%COMP%] {\n    position: absolute;\n    bottom: 57.6px;\n    left: 30.24px;\n    direction: ltr;\n  }\n  .card-width-overflow-text[_ngcontent-%COMP%] {\n    width: 414.72px;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    overflow: hidden;\n  }\n  .credit-card-expiry[_ngcontent-%COMP%] {\n    position: absolute;\n    bottom: 11.52px;\n    right: 30.24px;\n  }\n  .credit-card-text[_ngcontent-%COMP%] {\n    mix-blend-mode: normal;\n    text-shadow: -2px 2px 4px rgba(0, 0, 0, 0.5), 1px -1px 0 rgba(255, 255, 255, 0.5);\n  }\n  .credit-card-type[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 30.24px;\n  }\n  #card-view-action-button-container[_ngcontent-%COMP%] {\n    width: 475.2px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uLy4uLy4uL0JhbWJhLlNoYXJlZC9zcmMvYXNzZXRzL2Nzcy9fdmFyaWFibGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3ZpZXdzL2FkbWluLWZheC1zZXR0aW5ncy9wYXltZW50LW1lYW5zL2NyZWRpdC1jYXJkLXBheW1lbnQtbWV0aG9kL2NyZWRpdC1jYXJkLXBheW1lbnQtbWV0aG9kLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL21peGlucy9fYnJlYWtwb2ludHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQ0FBQTtFQUNBLGtDQUFBO0VBQ0E7OztLQUFBO0VBSUEsOEJBQUE7RUFDQSxnQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtBQ0FGOztBREdBLDZFQUFBO0FBQ0EsNkVBQUE7QUFDQSw2RUFBQTtBQW1DQSw2RUFBQTtBQUNBLDZFQUFBO0FBQ0EsNkVBQUE7QUFFQTs7OztFQUlFLHVEQUFBO0VBQ0EsbURBQUE7QUNuQ0Y7O0FEMkRFO0VBQ0UsK0JBQUE7RUFDQSw2QkFBQTtBQ3hESjtBRDJERTtFQUNFLGdDQUFBO0VBQ0EsNEJBQUE7QUN6REo7QUQrREk7RUFDRSxpQ0FBQTtFQUNBLDZCQUFBO0FDN0ROO0FEZ0VJO0VBQ0UsZ0NBQUE7RUFDQSw4QkFBQTtBQzlETjtBRGlFSTtFQUNFLCtCQUFBO0VBQ0EsNkJBQUE7QUMvRE47QURrRUk7RUFDRSxnQ0FBQTtFQUNBLDRCQUFBO0FDaEVOO0FEK0NJO0VBQ0UsaUNBQUE7RUFDQSxnQ0FBQTtBQzdDTjtBRGdESTtFQUNFLGdDQUFBO0VBQ0EsaUNBQUE7QUM5Q047QURpREk7RUFDRSwrQkFBQTtFQUNBLGdDQUFBO0FDL0NOO0FEa0RJO0VBQ0UsZ0NBQUE7RUFDQSwrQkFBQTtBQ2hETjtBRCtCSTtFQUNFLGlDQUFBO0VBQ0EsK0JBQUE7QUM3Qk47QURnQ0k7RUFDRSxnQ0FBQTtFQUNBLGdDQUFBO0FDOUJOO0FEaUNJO0VBQ0UsK0JBQUE7RUFDQSwrQkFBQTtBQy9CTjtBRGtDSTtFQUNFLGdDQUFBO0VBQ0EsOEJBQUE7QUNoQ047QURlSTtFQUNFLGlDQUFBO0VBQ0EsNkJBQUE7QUNiTjtBRGdCSTtFQUNFLGdDQUFBO0VBQ0EsOEJBQUE7QUNkTjtBRGlCSTtFQUNFLCtCQUFBO0VBQ0EsNkJBQUE7QUNmTjtBRGtCSTtFQUNFLGdDQUFBO0VBQ0EsNEJBQUE7QUNoQk47QURESTtFQUNFLGlDQUFBO0VBQ0EsK0JBQUE7QUNHTjtBREFJO0VBQ0UsZ0NBQUE7RUFDQSxnQ0FBQTtBQ0VOO0FEQ0k7RUFDRSwrQkFBQTtFQUNBLCtCQUFBO0FDQ047QURFSTtFQUNFLGdDQUFBO0VBQ0EsOEJBQUE7QUNBTjtBRGpCSTtFQUNFLGlDQUFBO0VBQ0EsNkJBQUE7QUNtQk47QURoQkk7RUFDRSxnQ0FBQTtFQUNBLDhCQUFBO0FDa0JOO0FEZkk7RUFDRSwrQkFBQTtFQUNBLDZCQUFBO0FDaUJOO0FEZEk7RUFDRSxnQ0FBQTtFQUNBLDRCQUFBO0FDZ0JOO0FEWEk7RUFDRSwrQkFBQTtFQUNBLDRDQUFBO0FDYU47QURmSTtFQUNFLCtCQUFBO0VBQ0EsNENBQUE7QUNpQk47QURuQkk7RUFDRSwrQkFBQTtFQUNBLDRDQUFBO0FDcUJOO0FEdkJJO0VBQ0UsK0JBQUE7RUFDQSw0Q0FBQTtBQ3lCTjtBRDNCSTtFQUNFLCtCQUFBO0VBQ0EsNENBQUE7QUM2Qk47QUQvQkk7RUFDRSwrQkFBQTtFQUNBLDRDQUFBO0FDaUNOO0FEbkNJO0VBQ0UsK0JBQUE7RUFDQSw0Q0FBQTtBQ3FDTjtBRHZDSTtFQUNFLCtCQUFBO0VBQ0EsNENBQUE7QUN5Q047QUQzQ0k7RUFDRSwrQkFBQTtFQUNBLDRDQUFBO0FDNkNOO0FEL0NJO0VBQ0UsK0JBQUE7RUFDQSw2Q0FBQTtBQ2lETjtBRG5ESTtFQUNFLCtCQUFBO0VBQ0EsNkNBQUE7QUNxRE47QUR2REk7RUFDRSwrQkFBQTtFQUNBLDZDQUFBO0FDeUROO0FEckRFO0VBQ0UsMkJBQUE7QUN1REo7QURwREU7RUFDRSw0QkFBQTtBQ3NESjs7QUF6T0U7RUFDRSw2RkFBQTtFQUNBLCtDQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQTRPSjs7QUF6T0U7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FBNE9KOztBQXpPRTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FBNE9KOztBQXpPRTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUE0T0o7O0FBek9FO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQTRPSjs7QUF6T0U7RUFDRSxzQkFBQTtFQUNBLGlGQUFBO0FBNE9KOztBQXpPRTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtBQTRPSjs7QUF6T0U7RUFDRSxjQUFBO0FBNE9KOztBQ3pPSTtFRHRERjtJQUNFLDZGQUFBO0lBQ0EsK0NBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsZUFBQTtJQUNBLGtCQUFBO0lBQ0EseUJBQUE7SUFDQSxzQkFBQTtJQUNBLG1CQUFBO0lBQ0Esa0JBQUE7RUFtU0Y7RUFoU0E7SUFDRSxrQkFBQTtJQUNBLFlBQUE7SUFDQSxZQUFBO0VBa1NGO0VBL1JBO0lBQ0Usa0JBQUE7SUFDQSxZQUFBO0lBQ0EsWUFBQTtJQUNBLGNBQUE7RUFpU0Y7RUE5UkE7SUFDRSxjQUFBO0lBQ0EsbUJBQUE7SUFDQSx1QkFBQTtJQUNBLGdCQUFBO0VBZ1NGO0VBN1JBO0lBQ0Usa0JBQUE7SUFDQSxhQUFBO0lBQ0EsYUFBQTtFQStSRjtFQTVSQTtJQUNFLHNCQUFBO0lBQ0EsaUZBQUE7RUE4UkY7RUEzUkE7SUFDRSxrQkFBQTtJQUNBLGFBQUE7RUE2UkY7RUExUkE7SUFDRSxZQUFBO0VBNFJGO0FBQ0Y7QUMxUkk7RUR0REY7SUFDRSw2RkFBQTtJQUNBLCtDQUFBO0lBQ0EsY0FBQTtJQUNBLGVBQUE7SUFDQSxxQkFBQTtJQUNBLGdCQUFBO0lBQ0Esa0JBQUE7SUFDQSx5QkFBQTtJQUNBLHNCQUFBO0lBQ0EsbUJBQUE7SUFDQSxtQkFBQTtFQW1WRjtFQWhWQTtJQUNFLGtCQUFBO0lBQ0EsZUFBQTtJQUNBLGFBQUE7RUFrVkY7RUEvVUE7SUFDRSxrQkFBQTtJQUNBLGNBQUE7SUFDQSxhQUFBO0lBQ0EsY0FBQTtFQWlWRjtFQTlVQTtJQUNFLGVBQUE7SUFDQSxtQkFBQTtJQUNBLHVCQUFBO0lBQ0EsZ0JBQUE7RUFnVkY7RUE3VUE7SUFDRSxrQkFBQTtJQUNBLGVBQUE7SUFDQSxjQUFBO0VBK1VGO0VBNVVBO0lBQ0Usc0JBQUE7SUFDQSxpRkFBQTtFQThVRjtFQTNVQTtJQUNFLGtCQUFBO0lBQ0EsY0FBQTtFQTZVRjtFQTFVQTtJQUNFLGNBQUE7RUE0VUY7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2Fuczp3Z2h0QDMwMDs0MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuOnJvb3Qge1xyXG4gIC0td2hpdGU6ICNmZmZmZmY7XHJcbiAgLS1ncmF5LTA1OiAjZjFmM2YzO1xyXG4gIC0tZ3JheS0xMDogI2UwZTNlNjtcclxuICAtLWdyYXktMjA6ICNiZmM2Y2U7XHJcbiAgLS1ncmF5LTMwOiAjOWZhOWI3O1xyXG4gIC0tZ3JheS00MDogIzgzOGZhMDtcclxuICAtLWdyYXktNTA6ICM2Yjc3ODY7XHJcbiAgLS1ncmF5LTYwOiAjNTI1YzY5O1xyXG4gIC0tZ3JheS03MDogIzNkNDU0ZjtcclxuICAtLWdyYXktODA6ICMyNTJiMzE7XHJcbiAgLS1ncmF5LTkwOiAjMTYxOTFkO1xyXG4gIC0tZ3JheS05NTogIzBiMGMwZjtcclxuICAtLWJsdWUtMDU6ICNmMGY2ZmU7XHJcbiAgLS1ibHVlLTEwOiAjZTJlZWZkO1xyXG4gIC0tYmx1ZS0yMDogI2JjZDhmYztcclxuICAtLWJsdWUtMzA6ICM3ZWIxZjQ7XHJcbiAgLS1ibHVlLTQwOiAjNGE4ZmVhO1xyXG4gIC0tYmx1ZS01MDogIzI1NzRkYjtcclxuICAtLWJsdWUtNjA6ICMwYzVjYzU7XHJcbiAgLS1ibHVlLTcwOiAjMDA0OWE5O1xyXG4gIC0tYmx1ZS04MDogIzAwM2E4NjtcclxuICAtLWJsdWUtOTA6ICMwMDJhNjE7XHJcbiAgLS1ibHVlLTk1OiAjMDAxNjMzO1xyXG4gIC0tZ3JlZW4tMTA6ICNlM2ZhYzM7XHJcbiAgLS1ncmVlbi0zMDogI2I5ZjQ2NztcclxuICAtLWdyZWVuLTUwOiAjNzZjYTAyO1xyXG4gIC0tZ3JlZW4tNzA6ICM1OTk5MDA7XHJcbiAgLS1ncmVlbi04MDogIzNjNjYwMDtcclxuICAtLWdyZWVuLTkwOiAjMWYzNjAwO1xyXG4gIC0tcmVkLTEwOiAjZmZiN2NlO1xyXG4gIC0tcmVkLTMwOiAjZmE1NzhiO1xyXG4gIC0tcmVkLTUwOiAjZTYwYzUxO1xyXG4gIC0tcmVkLTcwOiAjYzIwMDNkO1xyXG4gIC0tcmVkLTgwOiAjOTMwMDJmO1xyXG4gIC0tcmVkLTkwOiAjNjMwMDFmO1xyXG4gIC0teWVsbG93LTEwOiAjZmZlM2E2O1xyXG4gIC0teWVsbG93LTMwOiAjZjliNjI1O1xyXG4gIC0teWVsbG93LTUwOiAjZTM5YjAwO1xyXG4gIC0teWVsbG93LTcwOiAjYmI4MDAwO1xyXG4gIC0teWVsbG93LTgwOiAjODc1YzAwO1xyXG4gIC0teWVsbG93LTkwOiAjNTIzODAwO1xyXG4gIC0tcHVycGxlLTEwOiAjZjNjNmZmO1xyXG4gIC0tcHVycGxlLTMwOiAjZGM3M2Y5O1xyXG4gIC0tcHVycGxlLTUwOiAjYmIzMGUyO1xyXG4gIC0tcHVycGxlLTcwOiAjOTEwYWI3O1xyXG4gIC0tcHVycGxlLTgwOiAjNjQwMDgwO1xyXG4gIC0tcHVycGxlLTkwOiAjMzgwMDQ3O1xyXG4gIC0tdGVhbC0xMDogI2UxZjlmZjtcclxuICAtLXRlYWwtMzA6ICM5YmU1ZmE7XHJcbiAgLS10ZWFsLTUwOiAjNWZjYWU3O1xyXG4gIC0tdGVhbC03MDogIzM2YTZjNTtcclxuICAtLXRlYWwtODA6ICMxZjdlOTg7XHJcbiAgLS10ZWFsLTkwOiAjMTI1ODZiO1xyXG4gIC0tZ3JheS01MC0yMDogcmdiYSgxMDcsIDExOSwgMTM0LCAwLjIpO1xyXG4gIC0tYmx1ZS05NS02MDogcmdiYSgwLCAyMiwgNTEsIDAuNik7XHJcbiAgLypcclxuICAgICAgICBicmFuZGluZ1xyXG5cclxuICAgICovXHJcbiAgLS1icmFuZC1wcmltYXJ5LWNvbG9yOiAjMjU3NGRiO1xyXG4gIC0tYnJhbmQtc2Vjb25kYXJ5LWNvbG9yOiAjZTJlZWZkO1xyXG4gIC0taGVhZGVyLWhlaWdodDogNTZweDtcclxuICAtLXZlcnRpY2FsLW5hdi13aWR0aDogMjE1cHg7XHJcbiAgLS12ZXJ0aWNhbC1uYXYtc3VibWVudS13aWR0aDogMjUwcHg7XHJcbn1cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVVwbGFuZCBVSSBUaGVtZS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiRncmF5LTA1OiAjZjFmM2YzO1xyXG4kZ3JheS0xMDogI2UwZTNlNjtcclxuJGdyYXktNTA6ICM2Yjc3ODY7XHJcbiRibHVlLTEwOiAjZTJlZWZkO1xyXG4kaG92ZXI6IHZhcigtLWJyYW5kLXNlY29uZGFyeS1jb2xvcik7IC8vI2NkZTJmNjtcclxuXHJcbiR1cGxhbmQtYmx1ZTogdmFyKC0tYnJhbmQtcHJpbWFyeS1jb2xvcik7XHJcbiR1cGxhbmQtcGFuZWwtYmFja2dyb3VuZDogdmFyKC0tYnJhbmQtc2Vjb25kYXJ5LWNvbG9yKTtcclxuXHJcbiR1cGxhbmQtcHJpbWFyeS1idG4tYmc6ICMyNTc0ZGI7IC8vIHZhcigtLWJsdWUtNTApXHJcblxyXG4kdXBsYW5kLWhlYWRlci1oZWlnaHQ6IHZhcigtLWhlYWRlci1oZWlnaHQpO1xyXG4kdXBsYW5kLXNlY29uZGFyeS1oZWFkZXItaGVpZ2h0OiA1NnB4O1xyXG5cclxuJHVwbGFuZC1ncmF5LWJhY2tncm91bmQ6ICRncmF5LTA1O1xyXG5cclxuJHVwbGFuZC1ib2R5LWNvbG9yOiAjMTUxNTE1O1xyXG4kdXBsYW5kLWdyZWVuOiAjM2M2NjAwOyAvLyB2YXIoLS1ncmVlbi04MClcclxuJHVwbGFuZC15ZWxsb3c6ICM4NzVjMDA7IC8vIHZhcigtLXllbGxvdy04MClcclxuJHVwbGFuZC1yZWQ6ICM5MzAwMmY7IC8vIHZhcigtLXJlZC04MClcclxuJHVwbGFuZC1saWdodC1ncmF5OiAjYmZjNmNlO1xyXG4kdXBsYW5kLWRhcmstYmx1ZTogIzBkNGE2MjtcclxuJHVwbGFuZC1saWdodDogI2ZmZjtcclxuJG9wZW4tc2FuczogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiR1cGxhbmQtYWN0aXZlLWJnOiAkdXBsYW5kLXByaW1hcnktYnRuLWJnO1xyXG4kdXBsYW5kLWlucHV0LWhlaWdodDogY2FsYygxLjVlbSArIDAuNzVyZW0gKyAycHgpO1xyXG4kdXBsYW5kLWlucHV0LWJ0bi1mb2N1cy13aWR0aDogMC4ycmVtO1xyXG4kdXBsYW5kLWlucHV0LWJ0bi1mb2N1cy1jb2xvcjogcmdiYSh2YXIoLS1icmFuZC1wcmltYXJ5LWNvbG9yKSwgMC44KTtcclxuJHVwbGFuZC1pbnB1dC1idG4tZm9jdXMtYm94LXNoYWRvdzogMCAwIDAgJHVwbGFuZC1pbnB1dC1idG4tZm9jdXMtd2lkdGggJHVwbGFuZC1pbnB1dC1idG4tZm9jdXMtY29sb3I7XHJcbiR1cGxhbmQtaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yOiAkdXBsYW5kLWlucHV0LWJ0bi1mb2N1cy1jb2xvcjtcclxuJHVwbGFuZC1hbGVydC1iZy1sZXZlbDogMDtcclxuJHVwbGFuZC1hbGVydC1ib3JkZXItbGV2ZWw6IDA7XHJcbiR1cGxhbmQtYWxlcnQtY29sb3ItbGV2ZWw6IDY7XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUJvb3RzdHJhcCBPdmVycmlkZXMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuLmJ0bi1wcmltYXJ5LFxyXG4uYnRuLXByaW1hcnk6aG92ZXIsXHJcbi5idG4tcHJpbWFyeTphY3RpdmUsXHJcbi5idG4tcHJpbWFyeTp2aXNpdGVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1icmFuZC1wcmltYXJ5LWNvbG9yKSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYnJhbmQtcHJpbWFyeS1jb2xvcikgIWltcG9ydGFudDtcclxufVxyXG5cclxuJGJvZHktY29sb3I6ICR1cGxhbmQtYm9keS1jb2xvcjtcclxuJGluZm86ICR1cGxhbmQtZGFyay1ibHVlO1xyXG4kcHJpbWFyeTogJHVwbGFuZC1wcmltYXJ5LWJ0bi1iZztcclxuJHN1Y2Nlc3M6ICR1cGxhbmQtZ3JlZW47XHJcbiRkYW5nZXI6ICR1cGxhbmQtcmVkO1xyXG4kd2FybmluZzogJHVwbGFuZC15ZWxsb3c7XHJcblxyXG4kYWxlcnQtYmctbGV2ZWw6ICR1cGxhbmQtYWxlcnQtYmctbGV2ZWw7XHJcbiRhbGVydC1ib3JkZXItbGV2ZWw6ICR1cGxhbmQtYWxlcnQtYm9yZGVyLWxldmVsO1xyXG4kYWxlcnQtY29sb3ItbGV2ZWw6ICR1cGxhbmQtYWxlcnQtY29sb3ItbGV2ZWw7XHJcbiRsaWdodDogJHVwbGFuZC1saWdodDtcclxuJGlucHV0LWhlaWdodDogJHVwbGFuZC1pbnB1dC1oZWlnaHQ7XHJcbiRpbnB1dC1jb2xvcjogIzQ5NTA1NztcclxuJGlucHV0LWJvcmRlci1jb2xvcjogJHVwbGFuZC1saWdodC1ncmF5O1xyXG4kYnRuLWJvcmRlci1yYWRpdXM6IDJweDtcclxuJGJ0bi1ib3JkZXItcmFkaXVzLWxnOiAycHg7XHJcbiRidG4tYm9yZGVyLXJhZGl1cy1zbTogMnB4O1xyXG4kYnRuLXBhZGRpbmcteDogMTZweDtcclxuJGJ0bi1wYWRkaW5nLXk6IDRweDtcclxuXHJcbi5ydGwge1xyXG4gIC5tbC1hdXRvIHtcclxuICAgIG1hcmdpbi1sZWZ0OiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5tci1hdXRvIHtcclxuICAgIG1hcmdpbi1yaWdodDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gICRzcGFjZXM6ICgwLCAwKSwgKDEsIDAuMjUpLCAoMiwgMC41KSwgKDMsIDEpLCAoNCwgMS41KSwgKDUsIDMpO1xyXG5cclxuICBAZWFjaCAkaSwgJHZhbHVlIGluICRzcGFjZXMge1xyXG4gICAgLnByLSN7JGl9IHtcclxuICAgICAgcGFkZGluZy1yaWdodDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6ICN7JHZhbHVlfXJlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5wbC0jeyRpfSB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAjeyR2YWx1ZX1yZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAubWwtI3skaX0ge1xyXG4gICAgICBtYXJnaW4tbGVmdDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6ICN7JHZhbHVlfXJlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5tci0jeyRpfSB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgICBtYXJnaW4tbGVmdDogI3skdmFsdWV9cmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAZm9yICRpIGZyb20gMSB0aHJvdWdoIDEyIHtcclxuICAgIC5vZmZzZXQtI3skaX0ge1xyXG4gICAgICBtYXJnaW4tbGVmdDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IGNhbGMoMTAwJSAqICgjeyRpfS8gMTIpKSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnRleHQtcmlnaHQge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnRleHQtbGVmdCB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4iLCJAaW1wb3J0ICdib290c3RyYXAvc2Nzcy9fZnVuY3Rpb25zJztcclxuQGltcG9ydCAnYm9vdHN0cmFwL3Njc3MvX3ZhcmlhYmxlcyc7XHJcbkBpbXBvcnQgJ2Jvb3RzdHJhcC9zY3NzL21peGlucy9fYnJlYWtwb2ludHMnO1xyXG5AaW1wb3J0ICcuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9CYW1iYS5TaGFyZWQvc3JjL2Fzc2V0cy9jc3MvdmFyaWFibGVzJztcclxuXHJcbkBtaXhpbiBjcmVkaXQtY2FyZC1zdHlsZXMoJG11bHRpcGxpZXIpIHtcclxuICAuY3JlZGl0LWNhcmQge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEwMGRlZywgJHVwbGFuZC1ibHVlLCAkdXBsYW5kLXBhbmVsLWJhY2tncm91bmQpO1xyXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICB3aWR0aDogNDEuMjUgKiAxOS4ycHggKiAkbXVsdGlwbGllcjtcclxuICAgIGhlaWdodDogMjYuMjUgKiAxOS4ycHggKiAkbXVsdGlwbGllcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEuMjUgKiAxOS4ycHggKiAkbXVsdGlwbGllcjtcclxuICAgIHBhZGRpbmc6IDAyLjYyNSAqIDE5LjJweCAqICRtdWx0aXBsaWVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgZm9udC1zaXplOiAyLjIgKiAxOS4ycHggKiAkbXVsdGlwbGllcjtcclxuICB9XHJcblxyXG4gIC5jcmVkaXQtY2FyZC1uYW1lIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMTAgKiAxOS4ycHggKiAkbXVsdGlwbGllcjtcclxuICAgIGxlZnQ6IDIuNjI1ICogMTkuMnB4ICogJG11bHRpcGxpZXI7XHJcbiAgfVxyXG5cclxuICAuY3JlZGl0LWNhcmQtbnVtYmVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogNSAqIDE5LjJweCAqICRtdWx0aXBsaWVyO1xyXG4gICAgbGVmdDogMi42MjUgKiAxOS4ycHggKiAkbXVsdGlwbGllcjtcclxuICAgIGRpcmVjdGlvbjogbHRyO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQtd2lkdGgtb3ZlcmZsb3ctdGV4dCB7XHJcbiAgICB3aWR0aDogKDQxLjI1ICogMTkuMnB4IC0gMiAqIDAyLjYyNSAqIDE5LjJweCkgKiAkbXVsdGlwbGllcjtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG5cclxuICAuY3JlZGl0LWNhcmQtZXhwaXJ5IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMSAqIDE5LjJweCAqICRtdWx0aXBsaWVyO1xyXG4gICAgcmlnaHQ6IDIuNjI1ICogMTkuMnB4ICogJG11bHRpcGxpZXI7XHJcbiAgfVxyXG5cclxuICAuY3JlZGl0LWNhcmQtdGV4dCB7XHJcbiAgICBtaXgtYmxlbmQtbW9kZTogbm9ybWFsO1xyXG4gICAgdGV4dC1zaGFkb3c6IC0ycHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNSksIDFweCAtMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG4gIH1cclxuXHJcbiAgLmNyZWRpdC1jYXJkLXR5cGUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDIuNjI1ICogMTkuMnB4ICogJG11bHRpcGxpZXI7XHJcbiAgfVxyXG5cclxuICAjY2FyZC12aWV3LWFjdGlvbi1idXR0b24tY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiA0MS4yNSAqIDE5LjJweCAqICRtdWx0aXBsaWVyO1xyXG4gIH1cclxufVxyXG5cclxuQGluY2x1ZGUgY3JlZGl0LWNhcmQtc3R5bGVzKCRtdWx0aXBsaWVyOiAwLjQpO1xyXG5cclxuQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cChzbSkge1xyXG4gIEBpbmNsdWRlIGNyZWRpdC1jYXJkLXN0eWxlcygkbXVsdGlwbGllcjogMC41KTtcclxufVxyXG5AaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKG1kKSB7XHJcbiAgQGluY2x1ZGUgY3JlZGl0LWNhcmQtc3R5bGVzKCRtdWx0aXBsaWVyOiAwLjYpO1xyXG59XHJcbiIsIi8vIEJyZWFrcG9pbnQgdmlld3BvcnQgc2l6ZXMgYW5kIG1lZGlhIHF1ZXJpZXMuXG4vL1xuLy8gQnJlYWtwb2ludHMgYXJlIGRlZmluZWQgYXMgYSBtYXAgb2YgKG5hbWU6IG1pbmltdW0gd2lkdGgpLCBvcmRlciBmcm9tIHNtYWxsIHRvIGxhcmdlOlxuLy9cbi8vICAgICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweClcbi8vXG4vLyBUaGUgbWFwIGRlZmluZWQgaW4gdGhlIGAkZ3JpZC1icmVha3BvaW50c2AgZ2xvYmFsIHZhcmlhYmxlIGlzIHVzZWQgYXMgdGhlIGAkYnJlYWtwb2ludHNgIGFyZ3VtZW50IGJ5IGRlZmF1bHQuXG5cbi8vIE5hbWUgb2YgdGhlIG5leHQgYnJlYWtwb2ludCwgb3IgbnVsbCBmb3IgdGhlIGxhc3QgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20pXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgJGJyZWFrcG9pbnQtbmFtZXM6ICh4cyBzbSBtZCBsZyB4bCkpXG4vLyAgICBtZFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cywgJGJyZWFrcG9pbnQtbmFtZXM6IG1hcC1rZXlzKCRicmVha3BvaW50cykpIHtcbiAgJG46IGluZGV4KCRicmVha3BvaW50LW5hbWVzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG4gIT0gbnVsbCBhbmQgJG4gPCBsZW5ndGgoJGJyZWFrcG9pbnQtbmFtZXMpLCBudGgoJGJyZWFrcG9pbnQtbmFtZXMsICRuICsgMSksIG51bGwpO1xufVxuXG4vLyBNaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBzbWFsbGVzdCAoZmlyc3QpIGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1taW4oc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA1NzZweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG1pbiAhPSAwLCAkbWluLCBudWxsKTtcbn1cblxuLy8gTWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgbGFyZ2VzdCAobGFzdCkgYnJlYWtwb2ludC5cbi8vIFRoZSBtYXhpbXVtIHZhbHVlIGlzIGNhbGN1bGF0ZWQgYXMgdGhlIG1pbmltdW0gb2YgdGhlIG5leHQgb25lIGxlc3MgMC4wMnB4XG4vLyB0byB3b3JrIGFyb3VuZCB0aGUgbGltaXRhdGlvbnMgb2YgYG1pbi1gIGFuZCBgbWF4LWAgcHJlZml4ZXMgYW5kIHZpZXdwb3J0cyB3aXRoIGZyYWN0aW9uYWwgd2lkdGhzLlxuLy8gU2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9tZWRpYXF1ZXJpZXMtNC8jbXEtbWluLW1heFxuLy8gVXNlcyAwLjAycHggcmF0aGVyIHRoYW4gMC4wMXB4IHRvIHdvcmsgYXJvdW5kIGEgY3VycmVudCByb3VuZGluZyBidWcgaW4gU2FmYXJpLlxuLy8gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzgyNjFcbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1heChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDc2Ny45OHB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG5leHQ6IGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQHJldHVybiBpZigkbmV4dCwgYnJlYWtwb2ludC1taW4oJG5leHQsICRicmVha3BvaW50cykgLSAuMDIsIG51bGwpO1xufVxuXG4vLyBSZXR1cm5zIGEgYmxhbmsgc3RyaW5nIGlmIHNtYWxsZXN0IGJyZWFrcG9pbnQsIG90aGVyd2lzZSByZXR1cm5zIHRoZSBuYW1lIHdpdGggYSBkYXNoIGluIGZyb250LlxuLy8gVXNlZnVsIGZvciBtYWtpbmcgcmVzcG9uc2l2ZSB1dGlsaXRpZXMuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeCh4cywgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiXCIgIChSZXR1cm5zIGEgYmxhbmsgc3RyaW5nKVxuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiLXNtXCJcbkBmdW5jdGlvbiBicmVha3BvaW50LWluZml4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gIEByZXR1cm4gaWYoYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cykgPT0gbnVsbCwgXCJcIiwgXCItI3skbmFtZX1cIik7XG59XG5cbi8vIE1lZGlhIG9mIGF0IGxlYXN0IHRoZSBtaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgd2lkZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtaW4ge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1lZGlhIG9mIGF0IG1vc3QgdGhlIG1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBsYXJnZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtYXgge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1lZGlhIHRoYXQgc3BhbnMgbXVsdGlwbGUgYnJlYWtwb2ludCB3aWR0aHMuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgYmV0d2VlbiB0aGUgbWluIGFuZCBtYXggYnJlYWtwb2ludHNcbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWJldHdlZW4oJGxvd2VyLCAkdXBwZXIsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJGxvd2VyLCAkYnJlYWtwb2ludHMpO1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkdXBwZXIsICRicmVha3BvaW50cyk7XG5cbiAgQGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWF4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGxvd2VyLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWluID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkdXBwZXIsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbi8vIE1lZGlhIGJldHdlZW4gdGhlIGJyZWFrcG9pbnQncyBtaW5pbXVtIGFuZCBtYXhpbXVtIHdpZHRocy5cbi8vIE5vIG1pbmltdW0gZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LCBhbmQgbm8gbWF4aW11bSBmb3IgdGhlIGxhcmdlc3Qgb25lLlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IG9ubHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQsIG5vdCB2aWV3cG9ydHMgYW55IHdpZGVyIG9yIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtb25seSgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG5cbiAgQGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWF4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 16333:
/*!*********************************************************************************************!*\
  !*** ./src/app/views/admin-fax-settings/payment-means/credit-card/credit-card.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreditCardComponent: () => (/* binding */ CreditCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _blocks_InterFAX_Models_admin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../blocks/InterFAX/Models/admin */ 82401);
/* harmony import */ var _blocks_models_credit_card_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../blocks/models/credit-card-type */ 40551);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../Bamba.Shared/src/fields/field.component */ 69689);










function CreditCardComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "app-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("valueChange", function CreditCardComponent_div_19_Template_app_field_valueChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.creditCard.ownerID, $event) || (ctx_r1.creditCard.ownerID = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("fieldChanged", function CreditCardComponent_div_19_Template_app_field_fieldChanged_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.fieldChanged());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("field", ctx_r1.fieldId);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("value", ctx_r1.creditCard.ownerID);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx_r1.enabled);
  }
}
class CreditCardComponent {
  constructor(translateService, validator) {
    this.translateService = translateService;
    this.validator = validator;
    this.cardDetailsChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.getOptionsFor = (start, end) => {
      const options = new Array();
      options.push({
        name: this.translateService.instant('fax-account-properties.select-value'),
        value: ''
      });
      for (let index = start; index <= end; index++) {
        options.push({
          name: index.toString(),
          value: index.toString()
        });
      }
      return options;
    };
    this.getCardTypeOptions = () => {
      const options = new Array();
      options.push({
        name: this.translateService.instant('fax-account-properties.select-value'),
        value: ''
      });
      for (const card of this.countryContext.allowedCreditCards) {
        const translatedName = this.translateService.instant(`fax-account-properties.cc-type-${card.toLowerCase()}`);
        options.push({
          name: translatedName == `fax-account-properties.cc-type-${card.toLowerCase()}` ? card : translatedName,
          value: card
        });
      }
      return options;
    };
    this.createFields = () => {
      const currentYear = new Date().getFullYear();
      const cardTypes = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FixedDataSource(this.getCardTypeOptions());
      const expirationMonths = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FixedDataSource(this.getOptionsFor(1, 12));
      const expirationYears = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FixedDataSource(this.getOptionsFor(currentYear, currentYear + 10));
      this.fieldNumber = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Text,
        label: this.translateService.instant('fax-account-properties.cc-number'),
        placeholder: '',
        required: true
      });
      this.fieldName = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Text,
        label: this.translateService.instant('fax-account-properties.cc-name'),
        placeholder: '',
        required: true
      });
      this.fieldType = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.List,
        label: this.translateService.instant('fax-account-properties.cc-type'),
        placeholder: '',
        required: true,
        datasource: cardTypes
      });
      this.fieldExpirationMonth = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.List,
        label: this.translateService.instant('fax-account-properties.cc-expiration-month'),
        placeholder: '',
        required: true,
        datasource: expirationMonths
      });
      this.fieldExpirationYear = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.List,
        label: this.translateService.instant('fax-account-properties.cc-expiration-year'),
        placeholder: '',
        required: true,
        datasource: expirationYears
      });
      this.fieldCVV = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Text,
        label: this.translateService.instant('fax-account-properties.cc-cvv'),
        placeholder: '',
        required: true
      });
      this.fieldId = new shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldDefinition({
        type: shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.MetaDataType.Text,
        label: this.translateService.instant('fax-account-properties.cc-id'),
        placeholder: '',
        required: true
      });
    };
    this.fieldChanged = () => {
      this.cardDetailsChanged.emit();
    };
    this.mapCreditCardType = value => {
      return (0,_blocks_models_credit_card_type__WEBPACK_IMPORTED_MODULE_2__.detectCreditCardType)(value);
    };
    this.removeUnnecessaryZerosAndDigits = value => {
      if (!value) return '';
      return Number(value).toString();
    };
  }
  ngOnInit() {
    this.createFields();
  }
  static {
    this.ɵfac = function CreditCardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CreditCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.CharactersValidator));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: CreditCardComponent,
      selectors: [["app-credit-card"]],
      inputs: {
        creditCard: "creditCard",
        enabled: "enabled",
        countryContext: "countryContext"
      },
      outputs: {
        cardDetailsChanged: "cardDetailsChanged"
      },
      decls: 20,
      vars: 32,
      consts: [[1, "fluid"], [1, "row"], [1, "col-6"], [3, "valueChange", "fieldChanged", "field", "value", "autocomplete", "disabled"], [3, "valueChange", "fieldChanged", "field", "value", "autocomplete", "valueMapper", "disabled"], [3, "valueChange", "fieldChanged", "field", "value", "autocomplete", "maxLength", "regex", "disabled"], ["class", "row", 4, "ngIf"], [3, "valueChange", "fieldChanged", "field", "value", "disabled"]],
      template: function CreditCardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "app-field", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("valueChange", function CreditCardComponent_Template_app_field_valueChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.creditCard.name, $event) || (ctx.creditCard.name = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("fieldChanged", function CreditCardComponent_Template_app_field_fieldChanged_3_listener() {
            return ctx.fieldChanged();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 1)(5, "div", 2)(6, "app-field", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("valueChange", function CreditCardComponent_Template_app_field_valueChange_6_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.creditCard.cardType, $event) || (ctx.creditCard.cardType = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("fieldChanged", function CreditCardComponent_Template_app_field_fieldChanged_6_listener() {
            return ctx.fieldChanged();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 1)(8, "div", 2)(9, "app-field", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("valueChange", function CreditCardComponent_Template_app_field_valueChange_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.creditCard.number, $event) || (ctx.creditCard.number = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("fieldChanged", function CreditCardComponent_Template_app_field_fieldChanged_9_listener() {
            return ctx.fieldChanged();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 1)(11, "div", 2)(12, "app-field", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("valueChange", function CreditCardComponent_Template_app_field_valueChange_12_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.creditCard.expirationMonth, $event) || (ctx.creditCard.expirationMonth = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("fieldChanged", function CreditCardComponent_Template_app_field_fieldChanged_12_listener() {
            return ctx.fieldChanged();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 1)(14, "div", 2)(15, "app-field", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("valueChange", function CreditCardComponent_Template_app_field_valueChange_15_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.creditCard.expirationYear, $event) || (ctx.creditCard.expirationYear = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("fieldChanged", function CreditCardComponent_Template_app_field_fieldChanged_15_listener() {
            return ctx.fieldChanged();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 1)(17, "div", 2)(18, "app-field", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("valueChange", function CreditCardComponent_Template_app_field_valueChange_18_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.creditCard.cvv, $event) || (ctx.creditCard.cvv = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("fieldChanged", function CreditCardComponent_Template_app_field_fieldChanged_18_listener() {
            return ctx.fieldChanged();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, CreditCardComponent_div_19_Template, 3, 3, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("field", ctx.fieldName);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("value", ctx.creditCard.name);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("autocomplete", "cc-name")("disabled", !ctx.enabled);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("field", ctx.fieldType);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("value", ctx.creditCard.cardType);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("autocomplete", "cc-type")("valueMapper", ctx.mapCreditCardType)("disabled", !ctx.enabled);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("field", ctx.fieldNumber);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("value", ctx.creditCard.number);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("autocomplete", "cc-number")("maxLength", 19)("regex", ctx.validator.digitsRegex)("disabled", !ctx.enabled);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("field", ctx.fieldExpirationMonth);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("value", ctx.creditCard.expirationMonth);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("autocomplete", "cc-exp-month")("valueMapper", ctx.removeUnnecessaryZerosAndDigits)("disabled", !ctx.enabled);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("field", ctx.fieldExpirationYear);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("value", ctx.creditCard.expirationYear);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("autocomplete", "cc-exp-year")("valueMapper", ctx.removeUnnecessaryZerosAndDigits)("disabled", !ctx.enabled);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("field", ctx.fieldCVV);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("value", ctx.creditCard.cvv);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("autocomplete", "off")("maxLength", 4)("regex", ctx.validator.digitsRegex)("disabled", !ctx.enabled);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.countryContext == null ? null : ctx.countryContext.ownerIDRequired);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _Bamba_Shared_src_fields_field_component__WEBPACK_IMPORTED_MODULE_3__.FieldComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 21617:
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/views/admin-fax-settings/payment-means/direct-debit-payment-method/direct-debit-payment-method.component.ts ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DirectDebitPaymentMethodComponent: () => (/* binding */ DirectDebitPaymentMethodComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _direct_debit_direct_debit_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../direct-debit/direct-debit.component */ 31295);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 77353);






function DirectDebitPaymentMethodComponent_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
  }
}
function DirectDebitPaymentMethodComponent_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
  }
}
function DirectDebitPaymentMethodComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 1, "fax-account-properties.payment-method-dd-configured"), " ");
  }
}
function DirectDebitPaymentMethodComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 1, "fax-account-properties.payment-method-dd-not-configured"), " ");
  }
}
function DirectDebitPaymentMethodComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16)(1, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DirectDebitPaymentMethodComponent_ng_template_19_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.startSetup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 1, "MainHeader.Update"));
  }
}
class DirectDebitPaymentMethodComponent extends _direct_debit_direct_debit_component__WEBPACK_IMPORTED_MODULE_0__.DirectDebitComponent {
  constructor() {
    super(...arguments);
    this.isDirectDebitConfigured = false;
    this.onCancel = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.onCancelClicked = () => this.onCancel.emit();
  }
  ngOnInit() {
    if (this.currentPaymentMeans !== shared_code_lib__WEBPACK_IMPORTED_MODULE_1__.PaymentMethods.DD) this.isDirectDebitConfigured = false;
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵDirectDebitPaymentMethodComponent_BaseFactory;
      return function DirectDebitPaymentMethodComponent_Factory(__ngFactoryType__) {
        return (ɵDirectDebitPaymentMethodComponent_BaseFactory || (ɵDirectDebitPaymentMethodComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](DirectDebitPaymentMethodComponent)))(__ngFactoryType__ || DirectDebitPaymentMethodComponent);
      };
    })();
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: DirectDebitPaymentMethodComponent,
      selectors: [["app-direct-debit-payment-method"]],
      inputs: {
        isDirectDebitConfigured: "isDirectDebitConfigured",
        currentPaymentMeans: "currentPaymentMeans"
      },
      outputs: {
        onCancel: "onCancel"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
      decls: 21,
      vars: 10,
      consts: [["isConfigured", ""], ["isNotConfigured", ""], ["actionButtons", ""], [1, "row"], [1, "col-12"], [1, "box-head--light-blue-bg", "mb-3"], [1, "fa", "fa-university", "mr-2"], [1, "box-head__right-panel", "project-list-pages"], [1, "btn", 3, "click"], ["id", "container-div", 1, "ml-3"], ["id", "inner-1"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["id", "inner-2"], [4, "ngTemplateOutlet"], [1, "fas", "fa-check", "mr-2", 2, "color", "darkgreen"], [1, "fas", "fa-times", "mr-2", 2, "color", "darkred"], [1, "d-flex", "flex-row-reverse", "mt-2"], [1, "btn", "mt-2", "ml-2", 3, "click"]],
      template: function DirectDebitPaymentMethodComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3)(1, "div", 4)(2, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 7)(7, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DirectDebitPaymentMethodComponent_Template_button_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.onCancelClicked());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 9)(11, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, DirectDebitPaymentMethodComponent_ng_container_12_Template, 1, 0, "ng-container", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, DirectDebitPaymentMethodComponent_ng_container_14_Template, 1, 0, "ng-container", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, DirectDebitPaymentMethodComponent_ng_template_15_Template, 4, 3, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"])(17, DirectDebitPaymentMethodComponent_ng_template_17_Template, 4, 3, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"])(19, DirectDebitPaymentMethodComponent_ng_template_19_Template, 4, 3, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        }
        if (rf & 2) {
          const isConfigured_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](16);
          const isNotConfigured_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](18);
          const actionButtons_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 6, "fax-account-properties.payment-method-dd-header"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 8, "fax-account-properties.change-payment-method"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isDirectDebitConfigured)("ngIfThen", isConfigured_r4)("ngIfElse", isNotConfigured_r5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", actionButtons_r6);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe],
      styles: ["#inner-1[_ngcontent-%COMP%], \n#inner-2[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n#container-div[_ngcontent-%COMP%] {\n  display: inline-grid;\n  grid-template-columns: 1fr, 1fr;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdmlld3MvYWRtaW4tZmF4LXNldHRpbmdzL3BheW1lbnQtbWVhbnMvZGlyZWN0LWRlYml0LXBheW1lbnQtbWV0aG9kL2RpcmVjdC1kZWJpdC1wYXltZW50LW1ldGhvZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxxQkFBQTtBQUNGOztBQUNBO0VBQ0Usb0JBQUE7RUFDQSwrQkFBQTtBQUVGIiwic291cmNlc0NvbnRlbnQiOlsiI2lubmVyLTEsXHJcbiNpbm5lci0yIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuI2NvbnRhaW5lci1kaXYge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyLCAxZnI7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 31295:
/*!***********************************************************************************************!*\
  !*** ./src/app/views/admin-fax-settings/payment-means/direct-debit/direct-debit.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DirectDebitComponent: () => (/* binding */ DirectDebitComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _blocks_InterFAX_Models_payment_methods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../blocks/InterFAX/Models/payment-methods */ 95943);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 77353);





class DirectDebitComponent {
  constructor() {
    this.onStartSetup = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.startSetup = () => {
      const config = new _blocks_InterFAX_Models_payment_methods__WEBPACK_IMPORTED_MODULE_1__.PaymentMethodConfigurations(shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.PaymentMethods.DD);
      config.configurations.push({
        key: 'PaymentGWType',
        value: 'GoCardless'
      });
      config.configurations.push({
        key: 'Description',
        value: 'Payment Method Setup'
      });
      this.onStartSetup.emit(config);
    };
  }
  static {
    this.ɵfac = function DirectDebitComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DirectDebitComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: DirectDebitComponent,
      selectors: [["app-direct-debit"]],
      outputs: {
        onStartSetup: "onStartSetup"
      },
      decls: 6,
      vars: 3,
      consts: [[1, "indented"], [1, "gocardless", "btn", "mt-3", "pl-2", "d-fles", "btn-primary", "indented", 3, "click"], [1, "text-capitalize"]],
      template: function DirectDebitComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "button", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DirectDebitComponent_Template_button_click_1_listener() {
            return ctx.startSetup();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " GoCardless ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 1, "payment-method.configure"));
        }
      },
      dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe],
      styles: [".indented[_ngcontent-%COMP%] {\n  padding-left: 35px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdmlld3MvYWRtaW4tZmF4LXNldHRpbmdzL3BheW1lbnQtbWVhbnMvZGlyZWN0LWRlYml0L2RpcmVjdC1kZWJpdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5kZW50ZWQge1xyXG4gIHBhZGRpbmctbGVmdDogMzVweDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 28254:
/*!********************************************************************************!*\
  !*** ./src/app/views/admin-fax-settings/payment-means/payment-means.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PaymentMeansModule: () => (/* binding */ PaymentMeansModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _blocks_page_page_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../blocks/page/page.module */ 13762);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 77353);
/* harmony import */ var _blocks_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../blocks/components/components.module */ 68876);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 48015);
/* harmony import */ var ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-perfect-scrollbar-portable */ 1248);
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-smart-modal */ 94500);
/* harmony import */ var _credit_card_credit_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./credit-card/credit-card.component */ 16333);
/* harmony import */ var _direct_debit_direct_debit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./direct-debit/direct-debit.component */ 31295);
/* harmony import */ var _credit_card_payment_method_credit_card_payment_method_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./credit-card-payment-method/credit-card-payment-method.component */ 28969);
/* harmony import */ var _direct_debit_payment_method_direct_debit_payment_method_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./direct-debit-payment-method/direct-debit-payment-method.component */ 21617);
/* harmony import */ var _paypal_payment_method_paypal_payment_method_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./paypal-payment-method/paypal-payment-method.component */ 39029);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 96623);














class PaymentMeansModule {
  static {
    this.ɵfac = function PaymentMeansModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PaymentMeansModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
      type: PaymentMeansModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule, _blocks_page_page_module__WEBPACK_IMPORTED_MODULE_1__.PageModule, _blocks_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_12__.PerfectScrollbarModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.IconsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.AutoFocusFirstInputModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.TabBarModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.CheckboxModule, ngx_smart_modal__WEBPACK_IMPORTED_MODULE_13__.NgxSmartModalModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.ModalHeaderModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.LabelModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](PaymentMeansModule, {
    declarations: [_credit_card_credit_card_component__WEBPACK_IMPORTED_MODULE_3__.CreditCardComponent, _direct_debit_direct_debit_component__WEBPACK_IMPORTED_MODULE_4__.DirectDebitComponent, _credit_card_payment_method_credit_card_payment_method_component__WEBPACK_IMPORTED_MODULE_5__.CreditCardPaymentMethodComponent, _direct_debit_payment_method_direct_debit_payment_method_component__WEBPACK_IMPORTED_MODULE_6__.DirectDebitPaymentMethodComponent, _paypal_payment_method_paypal_payment_method_component__WEBPACK_IMPORTED_MODULE_7__.PayPalPaymentMethodComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule, _blocks_page_page_module__WEBPACK_IMPORTED_MODULE_1__.PageModule, _blocks_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, ngx_perfect_scrollbar_portable__WEBPACK_IMPORTED_MODULE_12__.PerfectScrollbarModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.IconsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.FieldsModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.AutoFocusFirstInputModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.TabBarModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.CheckboxModule, ngx_smart_modal__WEBPACK_IMPORTED_MODULE_13__.NgxSmartModalModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.ModalHeaderModule, shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.LabelModule],
    exports: [_credit_card_credit_card_component__WEBPACK_IMPORTED_MODULE_3__.CreditCardComponent, _direct_debit_direct_debit_component__WEBPACK_IMPORTED_MODULE_4__.DirectDebitComponent, _credit_card_payment_method_credit_card_payment_method_component__WEBPACK_IMPORTED_MODULE_5__.CreditCardPaymentMethodComponent, _direct_debit_payment_method_direct_debit_payment_method_component__WEBPACK_IMPORTED_MODULE_6__.DirectDebitPaymentMethodComponent, _paypal_payment_method_paypal_payment_method_component__WEBPACK_IMPORTED_MODULE_7__.PayPalPaymentMethodComponent]
  });
})();

/***/ }),

/***/ 39029:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/views/admin-fax-settings/payment-means/paypal-payment-method/paypal-payment-method.component.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PayPalPaymentMethodComponent: () => (/* binding */ PayPalPaymentMethodComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var shared_code_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-code-lib */ 47989);
/* harmony import */ var _blocks_InterFAX_Models_payment_methods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../blocks/InterFAX/Models/payment-methods */ 95943);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 39191);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 77353);






const _c0 = a0 => ["fas", "mr-2", a0];
function PayPalPaymentMethodComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6)(1, "div", 7)(2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 10)(7, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PayPalPaymentMethodComponent_div_0_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.onCancelClicked());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 2, "fax-account-properties.payment-method-paypal-header"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 4, "fax-account-properties.change-payment-method"), " ");
  }
}
function PayPalPaymentMethodComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("color", ctx_r1.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c0, ctx_r1.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 4, ctx_r1.configMessage), " ");
  }
}
class PayPalPaymentMethodComponent {
  constructor() {
    this.showSetupMessage = true;
    this.showHeader = true;
    this.onCancel = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.onStartSetup = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.onCancelClicked = () => this.onCancel.emit();
    this.startSetup = () => {
      const config = new _blocks_InterFAX_Models_payment_methods__WEBPACK_IMPORTED_MODULE_1__.PaymentMethodConfigurations(shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.PaymentMethods.PayPal);
      this.onStartSetup.emit(config);
    };
  }
  ngOnInit() {
    this.color = this.currentPaymentMeans === shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.PaymentMethods.PayPal ? 'darkgreen' : 'darkred';
    this.icon = this.currentPaymentMeans === shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.PaymentMethods.PayPal ? 'fa-check' : 'fa-times';
    this.configMessage = `fax-account-properties.payment-method-paypal-${this.currentPaymentMeans === shared_code_lib__WEBPACK_IMPORTED_MODULE_0__.PaymentMethods.PayPal ? 'configured' : 'not-configured'}`;
  }
  static {
    this.ɵfac = function PayPalPaymentMethodComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PayPalPaymentMethodComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: PayPalPaymentMethodComponent,
      selectors: [["app-paypal-payment-method"]],
      inputs: {
        currentPaymentMeans: "currentPaymentMeans",
        showSetupMessage: "showSetupMessage",
        showHeader: "showHeader"
      },
      outputs: {
        onCancel: "onCancel",
        onStartSetup: "onStartSetup"
      },
      decls: 8,
      vars: 5,
      consts: [["class", "row", 4, "ngIf"], ["id", "container-div", 1, "ml-3"], ["id", "inner-1", 4, "ngIf"], ["id", "inner-2"], [1, "d-flex", "mt-2"], [1, "btn", "mt-2", "ml-2", 3, "click"], [1, "row"], [1, "col-12"], [1, "box-head--light-blue-bg", "mb-3"], [1, "fa", "fa-university", "mr-2"], [1, "box-head__right-panel", "project-list-pages"], [1, "btn", 3, "click"], ["id", "inner-1"], [3, "ngClass"]],
      template: function PayPalPaymentMethodComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, PayPalPaymentMethodComponent_div_0_Template, 10, 6, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, PayPalPaymentMethodComponent_div_2_Template, 5, 8, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PayPalPaymentMethodComponent_Template_button_click_5_listener() {
            return ctx.startSetup();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showHeader);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showSetupMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 3, "MainHeader.Update"));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=default-src_app_views_admin-fax-settings_payment-means_payment-means_module_ts.js.map