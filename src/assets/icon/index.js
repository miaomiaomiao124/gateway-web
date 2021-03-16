import iconPicker from './iconPicker';

const install = function (Vue) {
    Vue.component(iconPicker.name, iconPicker);
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export {iconPicker}

export default {
    version: '0.4.9',
    install:install,
    iconPicker: iconPicker
}

