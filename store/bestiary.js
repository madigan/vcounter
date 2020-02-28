const uuid = require('uuid/v4');

export const state = () => {
    list: []
};

export const mutations = {
    add(state, entry) {
        if (!entry.id) entry.id = uuid();
        state.list.push(entry);
    },
    remove(state, entry) {
        state.list = state.list.filter(e => e.id !== entry.id);
    },
    update(state, entry) {
        state.list.forEach(item => {
            if (item.id === entry.id) {
                Object.assign(item, entry);
            }
        });
    }
}