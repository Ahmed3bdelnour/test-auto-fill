"use strict";
(self["webpackChunkBama"] = self["webpackChunkBama"] || []).push([["common"],{

/***/ 70684:
/*!**************************************************!*\
  !*** ./src/app/blocks/models/marketing-blurb.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Blurb: () => (/* binding */ Blurb),
/* harmony export */   BrandInfo: () => (/* binding */ BrandInfo),
/* harmony export */   BrandLink: () => (/* binding */ BrandLink),
/* harmony export */   BrandType: () => (/* binding */ BrandType),
/* harmony export */   MarketingBlurb: () => (/* binding */ MarketingBlurb),
/* harmony export */   State: () => (/* binding */ State),
/* harmony export */   UserBlurbInfo: () => (/* binding */ UserBlurbInfo)
/* harmony export */ });
var BrandType;
(function (BrandType) {
  BrandType[BrandType["UIC"] = 0] = "UIC";
  BrandType[BrandType["IFX"] = 1] = "IFX";
})(BrandType || (BrandType = {}));
var State;
(function (State) {
  State[State["New"] = 0] = "New";
  State[State["Approved"] = 1] = "Approved";
})(State || (State = {}));
class BrandLink {
  constructor() {
    this.brandType = BrandType.UIC;
  }
}
class BrandInfo extends BrandLink {
  constructor(initializer = null) {
    super();
    if (initializer) {
      this.brandId = initializer.brandId;
      this.dealerId = initializer.dealerId;
      this.brandType = initializer.brandType;
      this.name = initializer.name;
      this.image = initializer.image;
    }
  }
}
class Blurb {
  constructor(init = null) {
    this.details = init ? init.details : '';
    this.summary = init ? init.summary : '';
    this.learnMoreLink = init ? init.learnMoreLink : '';
  }
}
class MarketingBlurb {
  constructor(mb = null) {
    this.brandLinks = [];
    this.blurbs = [new Blurb()];
    if (mb) {
      this.id = mb.id;
      this.name = mb.name;
      this.state = mb.state;
      this.release = mb.release;
      this.brandLinks = mb.brandLinks ? mb.brandLinks : [];
      this.blurbs = mb.blurbs ? mb.blurbs : [new Blurb()];
      this.dateCreatedUTC = mb.dateCreatedUTC;
      this.dateModifiedUTC = mb.dateModifiedUTC;
    }
  }
  serializable() {
    return {
      id: this.id,
      name: this.name,
      state: this.state,
      release: this.release,
      brandLinks: this.brandLinks,
      blurbs: this.blurbs,
      dateCreatedUTC: this.dateCreatedUTC,
      dateModifiedUTC: this.dateModifiedUTC
    };
  }
}
class UserBlurbInfo {}

/***/ }),

/***/ 10593:
/*!******************************************************!*\
  !*** ./src/app/blocks/models/workflow-datasource.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WorkflowStepsDataSource: () => (/* binding */ WorkflowStepsDataSource),
/* harmony export */   WorkflowsDataSource: () => (/* binding */ WorkflowsDataSource)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 63150);

class WorkflowsDataSource {
  constructor(workflows, sort = true) {
    this.workflows = workflows;
    this.sort = sort;
    this.changed = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
  }
  setWorkflows(workflows) {
    this.workflows = workflows;
    // this.changed.publish();
  }
  getItems(startsWith, currentValue, successCallBack, failureCallBack) {
    let items = new Array();
    for (let workflow of this.workflows) {
      const item = {
        name: workflow.name,
        value: workflow.id
      };
      items.push(item);
    }
    if (this.sort) items = items.sort((x, y) => x.name.localeCompare(y.name));
    successCallBack(items);
  }
}
class WorkflowStepsDataSource {
  constructor(moveToWorkflow, workflows) {
    this.moveToWorkflow = moveToWorkflow;
    this.workflows = workflows;
    this.changed = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
  }
  getItems(startsWith, currentValue, successCallBack, failureCallBack) {
    const items = new Array();
    const selectedWorkflow = this.workflows.find(w => w.id === this.moveToWorkflow.selectedWorkflowId);
    if (selectedWorkflow) {
      this.steps = selectedWorkflow.workflowSteps;
      const sortedSteps = selectedWorkflow.workflowSteps.sort((x, y) => x.name.localeCompare(y.name));
      for (let step of sortedSteps) {
        const item = {
          name: step.name,
          value: step.id
        };
        items.push(item);
      }
    }
    successCallBack(items);
  }
}

/***/ }),

/***/ 13884:
/*!********************************************************************************!*\
  !*** ./src/app/views/admin-olc/shared/services/olc-template-styles.service.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OlcTemplateStylesService: () => (/* binding */ OlcTemplateStylesService)
/* harmony export */ });
/* harmony import */ var _models_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/template */ 33923);
/* harmony import */ var _templates_template_editor_utils_olc_ted_public_utilities_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../templates/template-editor/utils/olc-ted-public-utilities.utils */ 49183);
/* harmony import */ var _blocks_components_html_editor_styles_utils_inline_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../blocks/components/html-editor/styles-utils/inline-styles */ 69425);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 96623);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 77353);






class OlcTemplateStylesService {
  constructor(translateService) {
    this.translateService = translateService;
    this.defaultOlcStyles = [new _models_template__WEBPACK_IMPORTED_MODULE_0__.TemplateStyle({
      id: (0,_templates_template_editor_utils_olc_ted_public_utilities_utils__WEBPACK_IMPORTED_MODULE_1__.uniqueID)(),
      name: this.translateService.instant('admin-olc-custom-styles.p-title'),
      element: 'p',
      elementType: _models_template__WEBPACK_IMPORTED_MODULE_0__.StyleType.Block,
      classes: null,
      inlineStyles: []
    }), new _models_template__WEBPACK_IMPORTED_MODULE_0__.TemplateStyle({
      id: (0,_templates_template_editor_utils_olc_ted_public_utilities_utils__WEBPACK_IMPORTED_MODULE_1__.uniqueID)(),
      name: this.translateService.instant('admin-olc-custom-styles.h1-title'),
      element: 'h1',
      elementType: _models_template__WEBPACK_IMPORTED_MODULE_0__.StyleType.Block,
      classes: null,
      inlineStyles: []
    }), new _models_template__WEBPACK_IMPORTED_MODULE_0__.TemplateStyle({
      id: (0,_templates_template_editor_utils_olc_ted_public_utilities_utils__WEBPACK_IMPORTED_MODULE_1__.uniqueID)(),
      name: this.translateService.instant('admin-olc-custom-styles.h2-title'),
      element: 'h2',
      elementType: _models_template__WEBPACK_IMPORTED_MODULE_0__.StyleType.Block,
      classes: null,
      inlineStyles: []
    }), new _models_template__WEBPACK_IMPORTED_MODULE_0__.TemplateStyle({
      id: (0,_templates_template_editor_utils_olc_ted_public_utilities_utils__WEBPACK_IMPORTED_MODULE_1__.uniqueID)(),
      name: this.translateService.instant('admin-olc-custom-styles.h3-title'),
      element: 'h3',
      elementType: _models_template__WEBPACK_IMPORTED_MODULE_0__.StyleType.Block,
      classes: null,
      inlineStyles: []
    }), new _models_template__WEBPACK_IMPORTED_MODULE_0__.TemplateStyle({
      id: (0,_templates_template_editor_utils_olc_ted_public_utilities_utils__WEBPACK_IMPORTED_MODULE_1__.uniqueID)(),
      name: this.translateService.instant('admin-olc-custom-styles.h4-title'),
      element: 'h4',
      elementType: _models_template__WEBPACK_IMPORTED_MODULE_0__.StyleType.Block,
      classes: '',
      inlineStyles: []
    })];
  }
  getOlcTemplateStyles(template, customStyles) {
    let templateStyles = [...this.defaultOlcStyles];
    const templatePredefinedStyles = template ? template.templateStyles.map(s => {
      s.id = (0,_templates_template_editor_utils_olc_ted_public_utilities_utils__WEBPACK_IMPORTED_MODULE_1__.uniqueID)();
      return s;
    }) : [];
    templatePredefinedStyles.forEach(s => {
      if (s.elementType === _models_template__WEBPACK_IMPORTED_MODULE_0__.StyleType.None) {
        templateStyles.push(s);
        return;
      }
      const isDuplicate = this.isDuplicateStyle(s);
      if (isDuplicate) return;
      templateStyles.push(s);
    });
    if (customStyles.length) {
      templateStyles = [...templateStyles, new _models_template__WEBPACK_IMPORTED_MODULE_0__.TemplateStyle({
        id: (0,_templates_template_editor_utils_olc_ted_public_utilities_utils__WEBPACK_IMPORTED_MODULE_1__.uniqueID)(),
        name: this.translateService.instant('admin-olc-custom-styles.custom-styles-separator-title'),
        element: null,
        elementType: _models_template__WEBPACK_IMPORTED_MODULE_0__.StyleType.None,
        classes: null,
        inlineStyles: []
      })];
      customStyles.forEach(cs => {
        if (cs.elementType === _models_template__WEBPACK_IMPORTED_MODULE_0__.StyleType.None) {
          templateStyles.push(cs);
          return;
        }
        const isDuplicate = this.isDuplicateStyle(cs);
        if (isDuplicate) return;
        templateStyles.push(cs);
      });
    }
    return templateStyles;
  }
  isDuplicateStyle(s) {
    const defaultStyle = this.defaultOlcStyles.find(d => this.styleMatches(d, s));
    return !!defaultStyle;
  }
  styleMatches(s, elementToCompare) {
    const tagName = elementToCompare.element.replace(/\s/g, '').toLocaleLowerCase();
    const classes = elementToCompare.classes?.replace(/\s/g, '').toLocaleLowerCase();
    const style = (0,_blocks_components_html_editor_styles_utils_inline_styles__WEBPACK_IMPORTED_MODULE_2__.mapInlineStylesToString)(elementToCompare.inlineStyles).replace(/\s/g, '').toLocaleLowerCase();
    const styleTagName = s.element.replace(/\s/g, '').toLocaleLowerCase();
    const styleClasses = s.classes?.replace(/\s/g, '').toLocaleLowerCase();
    const inlineStylesString = (0,_blocks_components_html_editor_styles_utils_inline_styles__WEBPACK_IMPORTED_MODULE_2__.mapInlineStylesToString)(s.inlineStyles).replace(/\s/g, '').toLocaleLowerCase();
    const equalTagName = !tagName && !styleTagName || tagName === styleTagName;
    const equalClasses = !classes && !styleClasses || classes === styleClasses;
    const equalStyles = !style && !inlineStylesString || style === inlineStylesString;
    return equalTagName && equalClasses && equalStyles;
  }
  static {
    this.ɵfac = function OlcTemplateStylesService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || OlcTemplateStylesService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: OlcTemplateStylesService,
      factory: OlcTemplateStylesService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 49183:
/*!***************************************************************************************************!*\
  !*** ./src/app/views/admin-olc/templates/template-editor/utils/olc-ted-public-utilities.utils.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   angle: () => (/* binding */ angle),
/* harmony export */   uniqueID: () => (/* binding */ uniqueID)
/* harmony export */ });
/**
 * Generate a unique ID.
 *
 * @returns A unique ID.
 */
const uniqueID = () => {
  function chr4() {
    return Math.random().toString(16).slice(-4);
  }
  return chr4() + chr4() + '-' + chr4() + '-' + chr4() + '-' + chr4() + '-' + chr4() + chr4() + chr4();
};
/**
 * Generate an Angle.
 *
 * @param {Number} cx In relation to the DOM top x position of the box.
 * @param {Number} cy In relation to the DOM top y position of the box.
 * @param {Number} ex In relation to the DOM bottom x position of the box.
 * @param {Number} ey In relation to the DOM bottom y position of the box.
 * @returns Angle formulated from co-ordinates passed into the function.
 */
const angle = (cx, cy, ex, ey) => {
  var dy = ey - cy;
  var dx = ex - cx;
  var theta = Math.atan2(dy, dx); // range (-PI, PI]
  theta *= 180 / Math.PI; // rads to degree, range (-180, 180]
  if (theta < 0) theta = 360 + theta; // range [0, 360)
  theta = (theta + 90) % 360; // subtract 90 degree since we are grabbing from the top.
  return theta;
};

/***/ })

}]);
//# sourceMappingURL=common.js.map