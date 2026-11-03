@echo off
rem Awesome News: council news from the work PC. Task Scheduler runs this (see the steps in council_news.py).
cd /d "%~dp0"
python council_news.py >> council-news-console.txt 2>&1
