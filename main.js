"use strict";
var _a;
var p = new DejimonServices();
(_a = document.getElementById("submit")) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    var type = document.getElementById('type').value;
    var name = document.getElementById('name').value;
    var height = Number(document.getElementById('height').value);
    var weight = Number(document.getElementById('weight').value);
    if (type == '-1') {
        alert('please choose a dejimon type');
        return;
    }
    var abilitytr = '';
    if (type == 'yorkshire') {
        abilitytr = 'iceAbility';
    }
    else if (type == 'lean') {
        abilitytr = 'fireAbility';
    }
    else if (type == 'potbelly') {
        abilitytr = 'electricAbility';
    }
    var ability = Number(document.getElementById(abilitytr).value);
    var pig = {
        name,
        height,
        weight,
        type,
        ability
    };
    //error validation 
    var errorFields = [];
    if (!(/^[a-zA-Z\-]+$/.test(name))) {
        errorFields.push('name');
    }
    if (!(/^[1-9][0-9]*/.test(String(height)))) {
        errorFields.push('height');
    }
    if (!(/^[1-9][0-9]*/.test(String(weight)))) {
        errorFields.push('weight');
    }
    console.log(ability);
    if ((!(/^[1-9][0-9]*/.test(String(ability)))) || ((ability <= 0 || ability >= 100))) {
        errorFields.push('ability');
    }
    if (!errorFields.length) {
        p.add(pig);
        p.getAll();
        formReset();
        alert('Dejimons added successfully');
    }
    else {
        alert(`Information entered is not valid for ${errorFields.join(', ')}`);
    }
});
//reset the form
function formReset() {
    var resetForm = document.getElementById("myform");
    resetForm.reset();
}
