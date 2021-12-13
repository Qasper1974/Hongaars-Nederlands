const fs = require('fs');
const path = require('path');


module.exports = class Woord {
    constructor(w, v, l) {
        this.woord = w,
        this.vertaling = v,
        this.les = l
    }

    save() {
        const p = path.join(path.dirname(require.main.filename), 'data', 'woordenschat.json');
    
        fs.readFile(p, (err, fileContent) => {
            let woords = [];
            if(!err) {
                woords = JSON.parse(fileContent);
            }
            woords.push(this);
            
            fs.writeFile(p, JSON.stringify(woords), (err) => {
                console.log(err);
            });
        });
    }

    static fetchAll (cb) {       
         
        const p = path.join(path.dirname(require.main.filename), 'data', 'woordenschat.json');
    
        fs.readFile(p, (err, fileContent) => {
            if (err) {
                cb([]);
            };
            cb(JSON.parse(fileContent));
        });
    };
};