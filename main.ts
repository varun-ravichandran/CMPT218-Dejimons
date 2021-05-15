var p = new DejimonServices();

document.getElementById("submit")?.addEventListener('click', function () {
    var type = (<HTMLInputElement>document.getElementById('type')).value;
    var name = (<HTMLInputElement>document.getElementById('name')).value;
    var height = Number((<HTMLInputElement>document.getElementById('height')).value);
    var weight = Number((<HTMLInputElement>document.getElementById('weight')).value);
    
    if(type=='-1'){
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
    var ability = Number((<HTMLInputElement>document.getElementById(abilitytr)).value);

    var pig = {
        name,
        height,
        weight,
        type,
        ability
    }

    //error validation 
    var errorFields = [];
    if(!(/^[a-zA-Z\-]+$/.test(name))){
        errorFields.push('name');
    }
    if(!(/^[1-9][0-9]*/.test(String(height)))){
        errorFields.push('height');
    }
    if(!(/^[1-9][0-9]*/.test(String(weight)))){
        errorFields.push('weight');
    }
    console.log(ability);
    if((!(/^[1-9][0-9]*/.test(String(ability)))) || ((ability <= 0 || ability >= 100))){
            errorFields.push('ability');
    }

    if (!errorFields.length) {
        p.add(pig);
        p.getAll();
        formReset();
        alert('Dejimons added successfully');
    }
    else {
        alert(`Information entered is not valid for ${errorFields.join(', ')}`)
    }
})

//reset the form
function formReset() {
    var resetForm = <HTMLFormElement>document.getElementById("myform");
    resetForm.reset();
}


