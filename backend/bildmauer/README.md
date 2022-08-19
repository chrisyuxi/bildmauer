 # die Bildmauer

## 使用的技术
 - Django
 - Angular
 - redis
 - postgreSQL

 ## Steps:

### Installation

```console
python -m venv venv
pip install Django
django-admin startproject bildmauer
```

### Start

```console
python manage.py migrate
python manage.py runserver
python manage.py startapp pixelmauer
```

- add 'pixelmauer' to bildmauer.settings.py INSTALLED_APPS

### Add views
- implement pixelmauer.views.py and create todolist.urls.py
- add urls to bildmauer.urls.py

### Add templates
- add templates folder and file
- add "templates" to DIR in settings.py
- modify view: return render...

### Add models
- implement pixelmauser.models.py