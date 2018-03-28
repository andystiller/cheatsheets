---
title: Drush cheatsheet
draft: false
layout: cheatsheet.html
---

This cheatsheet is not a complete list of drush commands. It is however some of the drush commands commonly used in the production and maintenance of a Drupal site.

Detailed information on Drush command can be found here:

* http://www.drushcommands.com
* http://drush.ws/

Items in [] are place holders for things like file paths, user names or drush aliases.

## Common Tasks

|Task                   |Command                           |Notes                                                    |
|-----------------------|----------------------------------|---------------------------------------------------------|
|Drop database          |`drush sql-drop`                  |Drop all tables in a given database                      |
|Dump database          |`drush sql-dump --gzip > [sql file]`|Dumps the database to the specified file in tar.gz format|
|Import Database        |`drush sqlc < [sql file]`         |Imports a SQL file using the sites settings              |
|Change Temporary Folder|`drush vset file_temporary_path /tmp`|Sets the temporary directory to /tmp                  |
|View a variable value  |`drush vget file_temporary_path`  |Shows the value of the temporary directory variable      |
|One time login         |`drush uli [username]`            |Normallly gives you and URL of http://default... need to copy the last part and add your URL|
|Clear all caches       |`drush cc all`                    |Used for Drupal 6 & 7                                    |
|Rebuild caches         |`drush cr`                        |Used for Drupal 8                                        |
|Show information on an extension|`drush pmi [extension]`  |
|Sanitize the current database|`drush sqlsan`              |Obscure email addresses and reset passwords              |
|Backup site            |`drush ard --destination=[back file destination] --tar-options="--exclude=.git --exclude=sites/default/files"`|Excludes the git and files folders.|
|Switch module to dev version|`drush dl [module] --dev`    |                                                         |
|Site Audit             |`drush aa --html --bootstrap > [report file]`|Create a report using the Site Audit drush module and output to bootstrap html.|

To import a databse directly from a gz file use the following command: `gunzip -c [database.gz path] | drush sqlc`

## Using Aliases

The following command uses drush alaises to change to the website directory. ```cd `drush dd @[alias]` ```

|Task                   |Command                           |Notes                                                    |
|-----------------------|----------------------------------|---------------------------------------------------------|
|List drush aliases     |`drush sa`                        |                                                         |
|Drop database          |`drush @[alias] sql-drop`         |Drop all tables in a given database                      |
