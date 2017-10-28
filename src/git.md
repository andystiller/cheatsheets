---
title: Git cheatsheet
draft: false
layout: cheatsheet.html
---
|Task                  |Command                  |Notes                                                          |
|----------------------|-------------------------|---------------------------------------------------------------|
|Clone a repository    |`git clone [repository]` |Initial checkout of a git repository                           |
|Check out a branch    |`git checkout [branch]`  |                                                               |
|Create a new banch    |`git checkout -b [branch]`|Creates and checkout a new branch                              |
|Delete branch         |`git branch -d [branch]` |Delete the local copy of the branch. Need to push the changes  |
|Push changes          |`git push origin :[branch]`|Pushes the changes to the remote origin                        |
|Prune local repository|`git remote prune origin`|Removes branches that are deleted on origin                    |
|Find remote origin	   |`git remote show origin` |Shows information about the orgin of the git repository        |
|Ignore file permission changes|git config core.fileMode false|Useful when files show as changed but haven't     |
|Merge branches (branch1 into current branch)|git merge --no-ff [branch1]|Merge and don't fast forward to keep the commit history|
|Create patch          |git format-patch master --stdout > [patch file]|                                         |
|Check patch           |git apply --check [patch file]|                                                          |	
|Apply patch           |git apply [patch file]   |                                                               |	

## To reset to origin/master

```
git fetch --all
git reset --hard origin/master
```
### Explanation:

git fetch downloads the latest from remote without trying to merge or rebase anything.

Then the git reset resets the master branch to what you just fetched. The –hard option changes all the files in your working tree to match the files in origin/master, so if you have any local changes, they will be lost. With or without –hard, any local commits that haven't been pushed will be lost.

## To reset to origin/dev

git fetch --all
git reset --hard origin/dev

Note:
    This will delete files that are not in git including.

