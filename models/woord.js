const woordenschat = []

module.exports = class Woord {
    constructor(w, v) {
        this.woord = w;
        this.vertaling = v;
    }

    save() {
        woordenschat.push(this);
    }

    static fetchAll () {
        return woordenschat
    }
}