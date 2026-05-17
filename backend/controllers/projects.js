const Project = require('../models/Project')

exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ title: 1 })
    res.json(projects)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

exports.createProject = async (req, res) => {
  try {
    const project = new Project(req.body)
    await project.save()
    res.status(201).json(project)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

exports.updateProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })
    if (!project) return res.status(404).json({ error: 'Proyecto no encontrado' })
    res.json(project)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

exports.deleteProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id)
    if (!project) return res.status(404).json({ error: 'Proyecto no encontrado' })
    res.json({ message: 'Proyecto eliminado correctamente' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
