import Project from '../classes/Project.js'
import User from '../classes/User.js'

export const createProject = async (req, res) => {
	const { name, description, label } = req.body
	const token = req.headers.authorization
	const newProject = new Project({name, description, label, token})
	const response = await newProject.create()
	if (response.success === false) return res.status(400).json(response)
	res.json(response)
}

export const getProjects = async (req, res) => {
	const token = req.headers.authorization
	const getUserProjects = new User({})
	const response = await getUserProjects.getProjects(token)
	res.status(200).json(response)
}

export const deleteProject = async (req, res) => {
	const token = req.headers.authorization
	const name = req.params.id
	const newProject = new Project({token, name})
	const response = await newProject.delete()
	if (response.success === false) return res.status(400).json(response)
	res.json(response)
}

export const updateProject = async (req, res) => {
	const { name, description, label  } = req.body
	const projectToRemove = req.params.id
	const token = req.headers.authorization
	const newProject = new Project({name, description, label, token})
	const response = await newProject.update(projectToRemove)
	if (response.success === false) return res.status(400).json(response)
	res.json(response)
}

export const getProject = async (req, res) => {
	const name = req.params.project
	const token = req.headers.authorization
	const projectToFound = new Project({ name, token })
	const response = await projectToFound.getProject()
	if (response.success === false) return res.status(404).json(response)
	res.json(response)
}