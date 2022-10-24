let { expect } = require("chai");
let { Repository } = require("./solution");

describe(`testing Repository`, () => {
  let instance = {};
  beforeEach(
    () =>
      (instance = new Repository({
        name: "string",
        age: "number",
        birthday: "object",
      }))
  );

  describe("testing count", () => {
    it(`instance.count == 0`, () => {
      expect(instance.count).to.equal(0);
    });
  });

  describe("testing .add()", () => {
    it(`valid obj passed as input: output`, () => {
      expect(instance.add({ name: "", age: 1, birthday: {} })).to.equal(0);
    });
  });

  describe(`testing .getId()`, () => {
    it(` ID - not present in the data collection `, () => {
      expect(() => instance.getId(1)).to.throw(
        "Entity with id: 1 does not exist!"
      );
    });
  });

  describe(`testing .update()`, () => {
    it(` ID - not present in the data collection`, () => {
      expect(() => instance.update(0, {})).to.throw(
        `Entity with id: 0 does not exist!`
      );
    });

    it(`when property is missing from input object `, () => {
      instance.add({ name: "", age: 0, birthday: {} });
      expect(() =>
        instance.update(0, { age: 1, birthday: { date: 0 } })
      ).to.throw("Property name is missing from the entity!");
    });

    it(`when input[name] is not a string`, () => {
      instance.add({ name: "", age: 0, birthday: {} });
      expect(() =>
        instance.update(0, { name: 0, age: 1, birthday: { date: 0 } })
      ).to.throw(TypeError);
    });
  });

  describe(`testing .del()`, () => {
    it(`deletes index properly`, () => {
      instance.add({ name: "", age: 1, birthday: {} });
      instance.add({ name: "", age: 1, birthday: {} });
      instance.del(1);
      expect(instance.data.has(1)).to.equal(false);
    });

    it(`throws on index which does not exist in the collection`, () => {
      expect(() => instance.del(-1)).to.throw(
        `Entity with id: -1 does not exist!`
      );
    });
  });
});

//--------------------------

// describe("Tests …", () => {
//     let properties = {
//         name: "string",
//         age: "number",
//         birthday: "object"
//     };
//     let correctEntity1 = {
//         name: "Pesho",
//         age: 22,
//         birthday: new Date(1998, 0, 7)
//     };
//     let correctEntity2 = {
//         name: "Emi",
//         age: 22,
//         birthday: new Date(1998, 0, 7)
//     };
//     let wrongEntity1 = {
//         name1: "Pesho",
//         age: 22,
//         birthday: new Date(1998, 0, 7)
//     };
//     let wrongEntity2 = {
//         name: 22,
//         age: 22,
//         birthday: new Date(1998, 0, 7)
//     };
//     let wrongEntity3 = {
//         name: "Pesho",
//         age1: 22,
//         birthday: new Date(1998, 0, 7)
//     };
//     let wrongEntity4 = {
//         name: 'Pesho',
//         age: '22',
//         birthday: new Date(1998, 0, 7)
//     };
//     let wrongEntity5 = {
//         name: "Pesho",
//         age: 22,
//         birthday1: new Date(1998, 0, 7)
//     };
//     let wrongEntity6 = {
//         name: 'Pesho',
//         age: 22,
//         birthday: 22,
//     };
//     let rep;
//     let validEntity = {
//         name: "Pesho",
//         age: 22,
//         birthday: new Date(1998, 0, 7)
//     };
//     beforeEach(() => rep = new Repository(properties));
//     it('constructor', () => {
//         assert.deepEqual(rep.props, properties, 'Prop object not created');
//         assert.typeOf(rep.data, 'Map', 'Map data not created');
//     });
//     it('count', () => {
//         assert(rep.count === 0, 'Empty rep')
//         rep.add(correctEntity1);
//         assert(rep.count === 1, 'Rep with 1 entity')
//     });
//     it('add', () => {
//         assert(rep.add(correctEntity1) === 0, 'First entity added');
//         assert(rep.data.get(0) === correctEntity1, 'Entity added to data');
//         assert(rep.add(correctEntity2) === 1, 'Second entity added');
//         assert(rep.data.get(1) === correctEntity2, 'Entity added to data');

//         assert.throws(() => rep.add(wrongEntity1), Error, 'Property name is missing from the entity!');
//         assert.throws(() => rep.add(wrongEntity2), TypeError, 'Property name is not of correct type!');

//         assert.throws(() => rep.add(wrongEntity3), Error, 'Property age is missing from the entity!');
//         assert.throws(() => rep.add(wrongEntity4), TypeError, 'Property age is not of correct type!');

//         assert.throws(() => rep.add(wrongEntity5), Error, 'Property birthday is missing from the entity!');
//         assert.throws(() => rep.add(wrongEntity6), TypeError, 'Property birthday is not of correct type!');
//     });
//     it('getId', () => {
//         assert.throw(() => rep.getId(0), 'Entity with id: 0 does not exist!');
//         rep.add(correctEntity1);
//         assert(rep.getId(0) === correctEntity1, 'First entity added')
//         assert.throw(() => rep.getId(-1), 'Entity with id: -1 does not exist!');
//         assert.throw(() => rep.getId(1), 'Entity with id: 1 does not exist!');
//         assert.throw(() => rep.getId(1.5), 'Entity with id: 1.5 does not exist!');
//     });
//     it('update', () => {
//         assert.throws(() => rep.update(0, correctEntity1), Error, 'Entity with id: 0 does not exist!');
//         rep.add(correctEntity1);

//         assert.throws(() => rep.update(0, wrongEntity1), Error, 'Property name is missing from the entity!');
//         assert.throws(() => rep.update(0, wrongEntity2), TypeError, 'Property name is not of correct type!');

//         assert.throws(() => rep.update(0, wrongEntity3), Error, 'Property age is missing from the entity!');
//         assert.throws(() => rep.update(0, wrongEntity4), TypeError, 'Property age is not of correct type!');

//         assert.throws(() => rep.update(0, wrongEntity5), Error, 'Property birthday is missing from the entity!');
//         assert.throws(() => rep.update(0, wrongEntity6), TypeError, 'Property birthday is not of correct type!');

//         assert.deepEqual(rep.getId(0), correctEntity1, 'First entity incorrectly updated with new value');

//         rep.update(0, correctEntity2);
//         assert.equal(rep.getId(0), correctEntity2, 'First entity updated with new value');
//     });
//     it('del', () => {
//         assert.throw(() => rep.del(0), 'Entity with id: 0 does not exist!');
//         rep.add(correctEntity1);
//         rep.add(correctEntity2);
//         assert(rep.count === 2, 'entities added');
//         rep.del(0);
//         assert(rep.count === 1, 'first entity deleted');
//         assert(rep.getId(1) === correctEntity2, 'id not affected')
//         rep.del(1);
//         assert(rep.count === 0, 'first entity deleted');
//         assert.throw(() => rep.del(0), 'Entity with id: 0 does not exist!');
//         assert.throw(() => rep.del(-1), 'Entity with id: -1 does not exist!');
//         assert.throw(() => rep.del(1.5), 'Entity with id: 1.5 does not exist!');
//         assert.throw(() => rep.del('test'), 'Entity with id: test does not exist!');
//     });
// });

// //-------------------------------------------
// describe("Repository Tests", () => {
//     describe("constructor(props) test", () => {
//         it("should work properly", () => {
//             let info = {
//                 name: "Pesho",
//                 age: 22,
//                 birthday: new Date(1998, 0, 7)
//             }
//             let repo = new Repository(info);

//             expect(repo).instanceOf(Repository);
//             expect(typeof repo).to.equal('object');
//             expect(repo.props).to.deep.equal({
//                 name: "Pesho",
//                 age: 22,
//                 birthday: new Date(1998, 0, 7)
//             });
//             expect(repo.count).to.equal(0);
//             expect(repo.data).to.deep.equal(new Map);
//             expect(repo.nextId()).to.equal(0);
//         });
//     });

//     describe("add(entity) test", () => {
//         it("should throw if some data is missing", () => {
//             let properties = {
//                 name: "string",
//                 age: "number",
//                 birthday: "object"
//             };
//             let repo = new Repository(properties);

//             let entity = {
//                 // name: "Pesho",
//                 age: 22,
//                 birthday: new Date(1998, 0, 7)
//             };

//             expect(() => repo.add(entity)).to.throw(`Property name is missing from the entity!`);

//             let entity2 = {
//                 name: "Pesho",
//                 // age: 22,
//                 birthday: new Date(1998, 0, 7)
//             };

//             expect(() => repo.add(entity2)).to.throw(`Property age is missing from the entity!`);

//         });

//         it("should throw if data type is not correct", () => {
//             let properties = {
//                 name: "string",
//                 age: "number",
//                 birthday: "object"
//             };
//             let repo = new Repository(properties);

//             let entity = {
//                 name: ['Pesho'],
//                 age: 22,
//                 birthday: new Date(1998, 0, 7)
//             };

//             expect(() => repo.add(entity)).to.throw('Property name is not of correct type!');

//             let entity2 = {
//                 name: 'Pesho',
//                 age: '22',
//                 birthday: new Date(1998, 0, 7)
//             };
//             expect(() => repo.add(entity2)).to.throw('Property age is not of correct type!');

//             let entity3 = {
//                 name: 'Pesho',
//                 age: 22,
//                 birthday: ''
//             };
//             expect(() => repo.add(entity3)).to.throw('Property birthday is not of correct type!');
//         });

//         it("should return proper id", () => {
//             let properties = {
//                 name: "string",
//                 age: "number",
//                 birthday: "object"
//             };
//             let repo = new Repository(properties);

//             let entity = {
//                 name: 'Pesho',
//                 age: 22,
//                 birthday: new Date(1998, 0, 7)
//             };

//             expect(repo.add(entity)).to.equal(0);
//             expect(repo.add(entity)).to.equal(1);

//             let info = repo.data.get(0);

//             expect(info).to.deep.equal({ name: 'Pesho', age: 22, birthday: new Date(1998, 0, 7) });
//         });
//     });

//     describe('getId(id)', () => {
//         it('should return person\'s info', () => {
//             let properties = {
//                 name: "string",
//                 age: "number",
//                 birthday: "object"
//             };
//             let repo = new Repository(properties);

//             let entity = {
//                 name: 'Pesho',
//                 age: 22,
//                 birthday: new Date(1998, 0, 7)
//             };

//             expect(repo.add(entity)).to.equal(0);
//             expect(repo.add(entity)).to.equal(1);

//             expect(repo.getId(0)).to.deep.equal({ name: 'Pesho', age: 22, "birthday": new Date(1998, 0, 7) });
//             expect(repo.getId(1)).to.deep.equal({ name: 'Pesho', age: 22, "birthday": new Date(1998, 0, 7) });
//         });

//         it('should throw if no such id', () => {
//             let properties = {
//                 name: "string",
//                 age: "number",
//                 birthday: "object"
//             };
//             let repo = new Repository(properties);

//             let entity = {
//                 name: 'Pesho',
//                 age: 22,
//                 birthday: new Date(1998, 0, 7)
//             };

//             expect(repo.add(entity)).to.equal(0);

//             expect(() => { repo.getId(1) }).to.throw('Entity with id: 1 does not exist!');
//         });
//     });

//     describe('update(id, newEntity)', () => {
//         it('should update person\'s info', () => {
//             let properties = {
//                 name: "string",
//                 age: "number",
//                 birthday: "object"
//             };
//             let repo = new Repository(properties);

//             let entity = {
//                 name: 'Pesho',
//                 age: 22,
//                 birthday: new Date(1998, 0, 7)
//             };
//             let newEntity = {
//                 name: 'Gosho',
//                 age: 22,
//                 birthday: new Date(1998, 0, 7)
//             };

//             expect(repo.add(entity)).to.equal(0);
//             repo.update(0, newEntity);
//             expect(repo.getId(0)).to.deep.equal({ name: 'Gosho', age: 22, "birthday": new Date(1998, 0, 7) });
//         });

//         it('should throw if no such id', () => {
//             let properties = {
//                 name: "string",
//                 age: "number",
//                 birthday: "object"
//             };
//             let repo = new Repository(properties);

//             let entity = {
//                 name: 'Pesho',
//                 age: 22,
//                 birthday: new Date(1998, 0, 7)
//             };
//             let newEntity = {
//                 name: 'Pesho',
//                 age: '22',
//                 birthday: new Date(1998, 0, 7)
//             };

//             expect(repo.add(entity)).to.equal(0);

//             expect(() => { repo.update(1, newEntity) }).to.throw('Entity with id: 1 does not exist!');
//         });

//         it("should throw if some data is missing", () => {
//             let properties = {
//                 name: "string",
//                 age: "number",
//                 birthday: "object"
//             };
//             let repo = new Repository(properties);

//             let entity = {
//                 name: "Pesho",
//                 age: 22,
//                 birthday: new Date(1998, 0, 7)
//             };
//             let newEntity = {
//                 // name: 'Pesho',
//                 age: '22',
//                 birthday: new Date(1998, 0, 7)
//             };

//             repo.add(entity);

//             expect(() => repo.add(newEntity)).to.throw(`Property name is missing from the entity!`);
//         });

//         it("should throw if data type is not correct", () => {
//             let properties = {
//                 name: "string",
//                 age: "number",
//                 birthday: "object"
//             };
//             let repo = new Repository(properties);

//             let entity = {
//                 name: 'Pesho',
//                 age: 22,
//                 birthday: new Date(1998, 0, 7)
//             };
//             let newEntity = {
//                 name: 'Pesho',
//                 age: '22',
//                 birthday: new Date(1998, 0, 7)
//             };
//             expect(repo.add(entity)).to.equal(0);
//             expect(() => repo.update(0, newEntity)).to.throw('Property age is not of correct type!')

//             let newEntity2 = {
//                 name: 'Pesho',
//                 age: 22,
//                 birthday: undefined
//             };
//             expect(() => repo.update(0, newEntity2)).to.throw('Property birthday is not of correct type!')

//         });

//         it('should throw if no such id', () => {
//             let properties = {
//                 name: "string",
//                 age: "number",
//                 birthday: "object"
//             };
//             let repo = new Repository(properties);

//             let entity = {
//                 name: 'Pesho',
//                 age: 22,
//                 birthday: new Date(1998, 0, 7)
//             };

//             expect(repo.add(entity)).to.equal(0);

//             expect(() => { repo.getId(1) }).to.throw('Entity with id: 1 does not exist!');
//         });
//     });

//     describe('del(id)', () => {
//         it('should delete person\'s info', () => {
//             let properties = {
//                 name: "string",
//                 age: "number",
//                 birthday: "object"
//             };
//             let repo = new Repository(properties);

//             let entity = {
//                 name: 'Pesho',
//                 age: 22,
//                 birthday: new Date(1998, 0, 7)
//             };
//             let newEntity = {
//                 name: 'Gosho',
//                 age: 22,
//                 birthday: new Date(1998, 0, 7)
//             };

//             expect(repo.add(entity)).to.equal(0);
//             expect(repo.add(newEntity)).to.equal(1);
//             repo.del(1);
//             expect(repo.getId(0)).to.deep.equal({ name: 'Pesho', age: 22, "birthday": new Date(1998, 0, 7) });
//             expect(() => { repo.getId(1) }).to.throw('Entity with id: 1 does not exist!');
//         });

//         it("Should delete the entity at the given index", function () {
//             let properties = {
//                 name: "string",
//                 age: "number",
//                 birthday: "object"
//             };
//             let repo = new Repository(properties);

//             let entity = {
//                 name: 'Pesho',
//                 age: 22,
//                 birthday: new Date(1998, 0, 7)
//             };
//             repo.add(entity);
//             repo.add(entity);
//             repo.del(0);

//             expect(repo.count).to.equal(1);
//             let info = repo.data.get(1);

//             expect(info).to.deep.equal({ name: 'Pesho', age: 22, birthday: new Date(1998, 0, 7) });
//             expect(repo.data.get(0)).to.be.undefined;

//         });

//         it('should throw if no such id', () => {
//             let properties = {
//                 name: "string",
//                 age: "number",
//                 birthday: "object"
//             };
//             let repo = new Repository(properties);

//             let entity = {
//                 name: 'Pesho',
//                 age: 22,
//                 birthday: new Date(1998, 0, 7)
//             };

//             expect(repo.add(entity)).to.equal(0);

//             expect(() => { repo.del(1) }).to.throw('Entity with id: 1 does not exist!');
//             expect(() => { repo.del(-1) }).to.throw('Entity with id: -1 does not exist!');
//         });
//     });
// });
