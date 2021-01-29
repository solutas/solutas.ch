/*****************************************************************************
 * Copyright (c) 2019-2021 SOLUTAS LLC, Switzerland. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use
 * this file except in compliance with the License. You may obtain a copy of the
 * License at http://www.apache.org/licenses/LICENSE-2.0
 * 
 * THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
 * WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
 * MERCHANTABLITY OR NON-INFRINGEMENT.
 * 
 * See the Apache Version 2.0 License for specific language governing permissions
 * and limitations under the License.
 ******************************************************************************/

return class TopNavigation {
  /**
   * inititalize top navigation with scrolled false
   */
  constructor() {
    console.log('TopNavigation called')
    this.scrolled = false
  }

  /**
   * open navigation on mobile and toggle hamburger menu
   */
  toggleNavigation() {
    this.hamburger.classList.toggle('open')
    this.navigation.classList.toggle('open')
  }

  /**
   * add background to header when scrolled
   */
  onScroll() {
    if (window.pageYOffset > 65) {
      if (!this.scrolled) {
        this.element.classList.add('top-header--scrolled')
        this.scrolled = true
      }
    } else {
      if (this.scrolled) {
        this.element.classList.remove('top-header--scrolled')
        this.scrolled = false
      }
    }
  }

  init(el) {
    this.element = el
    this.hamburger = this.element.querySelector('.hamburger')
    this.navigation = this.element.querySelector('.navbar-links')
    document.addEventListener('scroll', (e) => this.onScroll())
    this.onScroll()
  }
}
