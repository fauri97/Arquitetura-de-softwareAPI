const persons = [];

exports.savePerson = function (p) {
  let id = 0;
  console.log(persons.length);
  if (persons.length > 0) {
    id = persons.length
  }
  const newPerson = {
    id: id,
    name: p.name,
    telephone: p.telephone,
    birth_date: p.birth_date
  }
  persons.push(newPerson);
  return newPerson;
};

exports.getPersons = function () {
  return persons;
};

exports.getAPerson = function (id) {
  if (persons.at(id) == undefined) {
    return { message: "Person not found" };
  } else {
    return persons.at(id);
  }
};
