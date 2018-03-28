---
title: Git cheatsheet
draft: false
layout: cheatsheet.html
colours: git-red
---
## Initial set-up

Obtain and install Git following the instructions at http://git-scm.com

### Configure user information for all local repositories

Set the name you want attached to your commit transactions
`git config --global user.name "[name]"`

Set the email you want attached to your commit transactions
`git config --global user.email "[email address]"`

Enables helpful colorization of command line output
`git config --global color.ui auto`

## Common Tasks

### Creating and downloading a repository

Change directory to the place where you want to create your repository.
`git init [project-name]` Creates a new local repository with the specified name.

Alternatively you can got to [GitHub](https://github.com) or [Bitbucket](https://bitbucket.org/) and create the repository online.

To start using a remote repository it needs to be clone locally.
`git clone [repository]`   Downloads a repository and its entire version history.

### Working with the files

|Task                          |Command                         |Notes                                                    |
|------------------------------|--------------------------------|---------------------------------------------------------|
|Ignore file permission changes|`git config core.fileMode false`|Useful when files show as changed but haven't.           |
|Check for modified files      |`git status`                    |Lists all new or modified files to be committed          |
|Add a file to the repository  |`git add [file]`                |Adds a Snapshot of the file to "staging" for versioning. |
|Unstange a file               |`git reset [file]`              |Unstages the file, but preserve its contents.            |
|Delete a file                 |`git rm [file]`                 |Deletes the file from the working directory and stages the deletion.|
|Move or rename a file         |`git mv [file-original] [file-renamed]`|Changes the file name and prepares it for commit  |
|Show changes                  |`git diff`                      |Shows all file differences not yet staged                |
|Show staged changes           |`git diff --staged`             |Shows file differences between staging and the last file version|
|Show version history          |`git log`                       |Lists version history for the current branch             |
|Show history of a file        |`git log --follow [file]`       |Lists version history for a file, including renames      |


### Branching

|Task                  |Command                    |Notes                                                          |
|----------------------|---------------------------|---------------------------------------------------------------|
|Check out a branch    |`git checkout [branch]`    |                                                               |
|Create a new branch   |`git checkout -b [branch]` |Creates and checkout a new branch                              |
|Delete branch         |`git branch -d [branch]`   |Delete the local copy of the branch. Need to push the changes  |
|Push changes          |`git push origin :[branch]`|Pushes the changes to the remote origin                        |
|Merge branches (branch1 into current branch)|`git merge --no-ff [branch1]`|Merge and don't fast forward to keep the commit history|
|Check the changes between branches|`git diff [first-branch]...[second-branch]`|                                   |

### Pushing a pulling changes to a from a remote repository

|Task                  |Command                        |Notes                                                          |
|----------------------|-------------------------------|---------------------------------------------------------------|
|Prune local repository|`git remote prune origin`      |Removes branches that are deleted on origin                    |
|Find remote origin    |`git remote show origin`       |Shows information about the origin of the git repository       |
|Get changes from remote repository|`git fetch [bookmark]`|Downloads all history from the remote repository            |
|Merge Changes         |`git merge [bookmark]/[branch]`|Combines bookmark’s branch into current local branch           |
|Push changes.         |`git push [alias] [branch]`    |Uploads all local branch commits to GitHub                     |
|Get all changes       |`git pull`                     |Downloads bookmark history and incorporates changes            |
|Get chagnes for a brnach|`git pull  [alias] [branch]` |Downloads history for a remote branch and incorporates changes |

### Patches

|Task                  |Command                    |Notes                                                          |
|----------------------|---------------------------|---------------------------------------------------------------|
|Create patch          |`git format-patch master --stdout > [patch file]`|                                         |
|Check patch           |`git apply --check [patch file]`|                                                          |
|Apply patch           |`git apply [patch file]`   |                                                               |

## To reset to origin/master

```
git fetch --all
git reset --hard origin/master
```

Note:
    This will delete files that are not in git.

### Explanation

git fetch downloads the latest from remote without trying to merge or re-base anything.

Then the git reset resets the master branch to what you just fetched. The --hard option changes all the files in your working tree to match the files in origin/master, so if you have any local changes, they will be lost. With or without --hard, any local commits that haven't been pushed will be lost.
