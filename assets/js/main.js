class User {
  constructor(lastName, firstName, age, work) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.work = work;
  }
}
function print() {

  var all = document.getElementById("table");
  const user = new User(
      document.getElementById('name').value,
      document.getElementById('fname').value,
      document.getElementById('age').value,
      document.getElementById('work').value,
  )
  if(user.firstName == '' ||user.lastName == ''||user.age == ''|| user.work == ''){
      return alert("please check your information");
  }
  var tr = document.createElement("tr");
  tr.className = 'trow';
  var td1 = document.createElement("td");
  var td2 = document.createElement("td");
  var td3 = document.createElement("td");
  var td4 = document.createElement("td");
  all.appendChild(tr);
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);

  td1.innerHTML = user.lastName;
  td2.innerHTML = user.firstName;
  td3.innerHTML = user.age;
  td4.innerHTML = user.work;
}
function deletes() {
  document.getElementById('fname').value = '';
  document.getElementById('lname').value = '';
  document.getElementById('birthday').value = '';
  document.getElementById('location').value = '';
  document.getElementById('phone').value = '';
  document.getElementById('address').value = '';
}
function sortByAge(){
  w3.sortHTML('#table', '.trow', 'td:nth-child(3)')
}
function sortByName(){
  w3.sortHTML('#table', '.trow', 'td:nth-child(1)')
}