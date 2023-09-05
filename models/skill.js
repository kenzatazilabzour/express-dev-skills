const skills = [
  { id: 125223, skill: 'JavaScript', done: true },
  { id: 127904, skill: 'react.js', done: false },
  { id: 139608, skill: 'Node.js', done: false },
];

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
  update,
};

function update(id, updatedSkills) {
  id = parseInt(id);
  const skillToUpdate = skills.find(skill => skill.id === id);
  if (skillToUpdate) {
    Object.assign(skillToUpdate, updatedSkills);
  }
}

function deleteOne(id) {
  id = parseInt(id);
  const idx = skills.findIndex(skill => skill.id === id);
  if (idx !== -1) {
    skills.splice(idx, 1);
  }
}

function create(newSkill) {
  newSkill.id = Date.now() % 1000000;
  newSkill.done = false;
  skills.push(newSkill);
}

function getOne(id) {
  id = parseInt(id);
  return skills.find(skill => skill.id === id);
}

function getAll() {
  return skills;
}
