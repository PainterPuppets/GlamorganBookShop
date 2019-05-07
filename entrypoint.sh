python manage.py migrate
python manage.py runserver 0.0.0.0:8000
# uwsgi --http :8000 --module=config.wsgi:application