# Generated by Django 4.1 on 2022-08-18 22:23

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='bild',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('positionX', models.IntegerField(max_length=1024)),
                ('positionY', models.IntegerField(max_length=1024)),
                ('path', models.CharField(max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='pixel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('height', models.IntegerField(max_length=1024)),
                ('width', models.IntegerField(max_length=1024)),
                ('verfuegebar', models.BooleanField(default=True)),
            ],
        ),
    ]