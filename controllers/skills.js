const Skill = require('../models/skill');

module.exports = {
  index,
  show,
  new: newSkill,
  create,
  delete: deleteSkill,
  edit,
  update,
};

function update(req, res) {
  req.body.done = !!req.body.done;
  Skill.update(req.params.id, req.body);
  res.redirect(`/skills/${req.params.id}`);
}

function edit(req, res) {
  const skill = Skill.getOne(req.params.id);
  res.render('skills/edit', {
    title: 'Edit Skills',
    skill,
  });
}

function deleteSkill(req, res) {
  Skill.deleteOne(req.params.id);
  res.redirect('/skills');
}

function create(req, res) {
  const newSkillData = req.body;
  Skill.create(newSkillData);
  res.redirect('/skills');
}

function newSkill(req, res) {
  res.render('skills/add', { title: 'Add Skills' });
}

function show(req, res) {
  res.render('skills/show', {
    skill: Skill.getOne(req.params.id),
    title: 'Skills Details',
  });
}

function index(req, res) {
  res.render('skills/index', {
    skills: Skill.getAll(),
    title: 'All Skills',
  });
}
