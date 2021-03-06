
const StorageUtils =  {
    localSetItem(key, val) {
        var value;
        if (typeof val == 'object') {
            value = 'o_' + JSON.stringify(val);
            localStorage.setItem(key, value);
        } else {
            value = 's_' + val;
            localStorage.setItem(key, value);
        }
    },
    localGetItem(key) {
        var value = localStorage.getItem(key);
        if (value) {
            if (value.indexOf('o') >= 0) {
                value = value.substring(2);
                value = JSON.parse(value);
            } else {
                value = value.substring(2);
            }
        }
        return value;
    },
    localRemoveItem(key) {
        localStorage.removeItem(key);
    },
    localRemoveAllItem() {
        localStorage.clear();
    }
}

export default StorageUtils;