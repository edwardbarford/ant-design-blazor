﻿import { domInfoHelper } from '../dom/exports'
import { manipulationHelper } from '../dom/manipulationHelper'

export class modalHelper {
  static focusDialog(selector: string, count: number = 0) {
    let ele = <HTMLElement>document.querySelector(selector);
    if (ele) {
      if (ele.hasAttribute("disabled")) {
        let htmlElement = <HTMLElement>document.activeElement;
        htmlElement?.blur();
      } else {
        setTimeout(() => {
          ele.focus();
          let curId = "#" + domInfoHelper.getActiveElement();
          if (curId !== selector) {
            if (count < 10) {
              this.focusDialog(selector, count + 1);
            }
          }
        }, 10);
      }
    }
  }

  static destroyAllDialog() {
    document.querySelectorAll(".ant-modal-root").forEach((e) => {
      let container = e.parentNode;
      if (container instanceof HTMLElement) {
        container.remove();
      }
    });
    manipulationHelper.enableBodyScroll(true);
  }
}