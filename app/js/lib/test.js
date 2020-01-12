var earth = {
  isRound: true,
  numberFromSun: 3
}

function add(a,b,c) {
 return a+b+c;
}

function getUserInfo() {
  return fetch("https://randomuser.me/api/")
    .then(handleError)
    .then((res) => {
      return res;
    });
    // .then(handleError)
    //
    // });
    // .then((res) => {
    //   console.log(res);
    // });

};

// throw error if response not ok
function handleError(res) {
  if(!res.ok) {
    throw Error(res.status);
  }
  return res;
};

describe("Earth", function() {
  it("is round", function() {
    expect(earth.isRound).toBe(true)
  });
  it("is the third planet from the sun", function() {
    expect(earth.numberFromSun).toBe(3);
  });

});

describe("Jasmine Matchers", function() {
     it("allows for === and deep equality", function() {
       expect(1+1).toBe(2);
       expect([1,2,3]).toEqual([1,2,3]);
     });
     it("allows for easy precision checking", function() {
       expect(3.1415).toBeCloseTo(3.14,2);
     });
     it("allows for easy truthy / falsey checking", function() {
       expect(0).toBeFalsy();
       expect([]).toBeTruthy();
     });
     it("allows for easy type checking", function() {
       expect([]).toEqual(jasmine.any(Array));
       expect(function(){}).toEqual(jasmine.any(Function));
     });
     it("allows for checking contents of an object", function() {
       expect([1,2,3]).toContain(1);
       expect({name:'Des', job:'Web Dev'}).toEqual(jasmine.objectContaining({name:'Des'}));
     });
   });

describe("add",function() {
 var addSpy, result;
 beforeEach(function() {
   addSpy = spyOn(window, "add").and.callThrough();
   result = addSpy(1,2,3);
 });
 it("add can have params tested", function() {
   expect(addSpy).toHaveBeenCalled();
   expect(addSpy.calls.count()).toBe(1);
   expect(addSpy).toHaveBeenCalledWith(1,2,3);
   expect(result).toBe(6);
 });
});

//clock with simple setTimeout
describe("a simple setTimeout", function() {
  var sampleFn;
  beforeEach(function() {
    sampleFn = jasmine.createSpy("sampleFunction");
    jasmine.clock().install();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it("is only invoked after 1000 milliseconds", function() {
    setTimeout(function() {
      sampleFn();
    }, 1000);
    jasmine.clock().tick(999);
    expect(sampleFn).not.toHaveBeenCalled();
    jasmine.clock().tick(1);
    expect(sampleFn).toHaveBeenCalled();
  });
});


// Async Tests
describe("#getUserInfo", function() {
  it("returns the json data", function(done) { //need to pass done functionto the callback when testing async code or timeout will occur.
    getUserInfo().then(function(data) {
      console.log(data);
      expect(data.ok).toBe(true);
      done();
    });
  });
});
