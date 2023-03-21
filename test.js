
const chai = require('chai');
const expect = chai.expect;
function traduireTennis(point){
  let pointTennis = ''
  switch (point) {
    case '0': 
    pointTennis = 'love'; 
    break;
    case '1': 
    pointTennis = '15'; 
    break;}
return pointTennis
}
function donnerScore(pointFirst, pointSecond){
  let pointTennisFirst = traduireTennis(pointFirst)
  let pointTennisSecond = traduireTennis(pointSecond)

  return pointTennisFirst + '-' + pointTennisSecond
};
describe('Donner score',  () => {
    it('should return love-love at the begining', () => {
      const score = donnerScore('0','0');
      expect(score).to.equal('love-love');
    });

    it('should return 15-love when first wins point', () => {
      const score = donnerScore('1','0');
      expect(score).to.equal('15-love');
    });

    it('should return love-15 when second wins point', () => {
      const score = donnerScore('0','1');
      expect(score).to.equal('love-15');
    });
});