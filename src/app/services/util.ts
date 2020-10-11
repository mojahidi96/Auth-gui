import { FormGroup } from '@angular/forms';

export class UtilService {
    static markFormAsDirty(form: FormGroup) {
        let formControls = form.controls;
        let formControlProperties = Object.keys(form.controls);
        formControlProperties.forEach(control => {
            if (formControls[control]['controls']) {
                let formControlsLevel2 = formControls[control]['controls'];
                Object.keys(formControlsLevel2).forEach(innerControl => {
                    if (formControlsLevel2[innerControl]['controls']) {
                        let formControlsLevel3 = formControlsLevel2[innerControl]['controls'];
                        Object.keys(formControlsLevel3).forEach(inner2Control => {
                            if (formControlsLevel3[inner2Control] && !formControlsLevel3[inner2Control]['controls'])
                                formControlsLevel3[inner2Control].markAsDirty();
                        })
                    }
                    else {
                        formControlsLevel2[innerControl].markAsDirty();
                    }
                })
            } else {
                formControls[control].markAsDirty();
            }
        })
    }
}
