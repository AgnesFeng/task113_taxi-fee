let expect = require("chai").expect;

const main = require('../main/main');

describe('taxi fee', function () {
    it('<=2km',function () {
        let input = 2;
        let time = 4;
        let result = main(input,time);
        expect(result).to.equal("总计：7元");
    });
    it('>2km,<=8km',function () {
        let input = 3.5;
        let time = 4;
        let result = main(input,time);
        expect(result).to.equal("总计：9元");
    });
    it('>8km',function () {
        let input = 34.44;
        let time = 4;
        let result = main(input,time);

        expect(result).to.equal("总计：43元");
    });
});
