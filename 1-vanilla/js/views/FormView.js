import View from './View.js';

const tag = '[FormView]'

// FormView 객체에 View 객체의 메소드를 추가
const FormView = Object.create(View)

FormView.setup = function (el) {
    // el 인자를 받도록 강제
    this.init(el)
    this.inputEl = el.querySelector('[type=text]')
    this.resetEl = el.querySelector('[type=reset]')
    this.showResetBtn(false)
}

FormView.showResetBtn = function (show = true) {
    this.resetEl.style.display = show ? 'block' : 'none';
}

export default FormView;