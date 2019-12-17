import Judge from './struct/judge'
import QBase from './struct/base'


export default class Q {
    classIns: QBase[]
    config: any
    constructor(config) {
        this.config = config;
    }
    dispatch(wrap, data: Question) {
        let instance, struct = data.struct_id;
        if (!(instance = this.classIns[struct])) {
            instance = this.classIns[struct] = new (getStruct(struct))(this.config);
            instance.setup();
        }
        instance.render(wrap, data);
    }

    render(wrap, data) {
        this.dispatch(wrap, data);
    }
}

function getStruct(struct: STRUCT) {
    switch (struct) {
        case 2:
            return Judge
    }
}