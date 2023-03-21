
const chai = require('chai');
const expect = chai.expect;
function donnerScore(points){
  if(points === '0-0') {
  return 'love-love';
  }
};
describe('Array',  () => {
    it('should return love love at the begining', () => {
      const points = '0-0';
      const score = donnerScore(points);
      expect(score).to.equal('love-love');
    });
});