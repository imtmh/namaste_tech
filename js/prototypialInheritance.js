let user = {
  name: "thiru",
  id: 20,
};

function printDetails(params) {
  console.log(this.name + " with id: " + this.id);
}
// user.f = printDetails;
// user.f();
let f = printDetails.bind(user);
f();

Function.prototype.tempBind = function (args) {
  let j = this;

  return function () {
    j.call(args);
  };
};
let d = printDetails.tempBind(user);
d();
