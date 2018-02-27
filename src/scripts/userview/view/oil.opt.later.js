import { CSSPrefix } from './oil.view.config.js';
import { POIButtonSnippet } from './components/oil.poi.button.opt.later';
import { privacyPageSnippet } from './components/oil.privacy.page';
import { DATA_CONTEXT_YES_WHILE_LATER, DATA_CONTEXT_IGNORE_WHILE_LATER } from '../../core/core_constants.js';
import {
  isOilIgnore,
  getLabelLaterHeading,
  getLabelButtonYesSoi,
  getLabelLater,
  getLabelLaterStart,
  getLabelLaterEnd
} from './../userview_config.js';


const laterLabelSnippet = () => {
  let labelLater = getLabelLater();
  if(labelLater) {
    return labelLater;
  } else {
    return (`${getLabelLaterStart()} ${privacyPageSnippet()} ${getLabelLaterEnd()}`);
  }
};

/**
 * OIL Ignore or Close Button
 * Returned element is used to ignore Oil completely
 */
const OilIgnore = (oilIgnore) => {
  return oilIgnore === true ? (
    `
        <div class="${CSSPrefix}oil-close ${CSSPrefix}js-optignore" data-context="${DATA_CONTEXT_IGNORE_WHILE_LATER}" data-qa="oil-closeButton">
            <svg class="${CSSPrefix}oil-icon-close" width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                <g fill-rule="evenodd">
                    <path d="M.222 13.364L12.95.636l1.414 1.414L1.636 14.778z"/>
                    <path d="M1.636.636l12.728 12.728-1.414 1.414L.222 2.05z"/>
                </g>
            </svg>
        </div>
        `
  ) : '';
};


/**
 * Opt Later Template
 */
export function oilOptLaterTemplate() {
  return `
    <div class="${CSSPrefix}oil-content-overlay ${CSSPrefix}oil-opt-later" data-qa="oil-optlater">
        ${OilIgnore(isOilIgnore())}
        <div class="${CSSPrefix}oil-l-row ${CSSPrefix}oil-l-row--fixed-width">
            <div class="${CSSPrefix}oil-l-item">
                <div class="${CSSPrefix}oil-loi__heading">
                    ${getLabelLaterHeading()}
                </div>
                <p class="${CSSPrefix}oil-loi__intro-txt">
                    ${laterLabelSnippet()}
                </p>
            </div>
            <div class="${CSSPrefix}oil-l-item ${CSSPrefix}oil-l-item--stretch">
                ${POIButtonSnippet()}
                <button class="${CSSPrefix}oil-loi__btn-soi ${CSSPrefix}js-optin" data-context="${DATA_CONTEXT_YES_WHILE_LATER}" data-qa="oil-small-YesButton">
                    ${getLabelButtonYesSoi()}
                </button>
            </div>
        </div>
    </div>
`
}