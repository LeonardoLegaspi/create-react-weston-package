#!/usr/bin/env node

const { execSync } = require('child_process')

const runCommand = (command) => {
	try {
		execSync(`${command}`, { stdio: 'inherit' })
	} catch (e) {
		console.log(`Failed to execute ${command}`, e)
		return false
	}
	return true
}

const repoName = process.argv[2] || 'create-react-weston'
const createFolder = `mkdir ${repoName}`
const moveToFolder = `cd ${repoName}`
const gitCheckoutCommand = `git clone https://github.com/LeonardoLegaspi/create-react-weston.git ${repoName}`
const installDepsCommand = `cd .\\${repoName}\\ && npm install`

console.log(`Cloning the repository`)

// const createFolderProject = runCommand(createFolder)
// if (!createFolderProject) process.exit(-1)

// const moveIntoFolder = runCommand(moveToFolder)
// if (!moveIntoFolder) process.exit(-1)

const checkedOut = runCommand(gitCheckoutCommand)
if (!checkedOut) process.exit(-1)

const installDependencies = runCommand(installDepsCommand)
if (!installDependencies) process.exit(-1)

console.log(`cd ${repoName} && npm start`)
