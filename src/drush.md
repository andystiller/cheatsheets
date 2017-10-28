---
title: Drush cheatsheet
draft: false
layout: cheatsheet.html
---

This cheatsheet is not a complete list of drush commands. It is however some of the drush commands commonly used in the production and maintenance of a Drupal site.

Items in [] are place holders for thinks like file paths, user names or drush aliases. 

|Task          |Command                           |Notes                                                    |
|-----------------------|----------------------------------|---------------------------------------------------------|
|Drop database          |drush sql-drop	                   |Drop all tables in a given database                      |
|Dump database          |drush sql-dump --gzip > [sql file]|Dumps the database to the specified file in tar.gz format|
|Import Database        |drush sqlc < [sql file]           |Imports a SQL file using the sites settings              |
|Change Temporary Folder|drush vset file_temporary_path /tmp|Sets the temporary directory to /tmp                    |
|View a variable value  |drush vget file_temporary_path    |Shows the value of the temporary directory variable      |
|One time login         |drush uli [username]              |Normallly gives you and URL of http://default... need to copy the last part and add your URL|
|Clear all caches	    |drush cc all                      |                                                         |
|Show information on an extension|	drush pmi [extension]  |
|Sanitize the current database|drush sqlsan                |Obscure email addresses and reset passwords              |
|Backup site            |drush ard --destination=[back file destination] --tar-options="--exclude=.git --exclude=sites/default/files"|Excludes the git and files folders.|
|Site Audit	            |drush aa --html --bootstrap > [report file]|Create a report using the Site Audit drush module and output to bootstrap html.|
|List drush aliases	    |drush sa	                       |                                                         |
|Switch module to dev version| drush dl [module] --dev     |                                                         |

To import a databse directly from a gz file use the following command: `gunzip -c [database.gz path] | drush sqlc` 

Information on Drush command can be found here:

    http://www.drushcommands.com
    http://drush.ws/

The Drush folder is /usr/share/php/drush/

The following command uses drush alaises to change to the website directory. cd `drush dd @[alias]`