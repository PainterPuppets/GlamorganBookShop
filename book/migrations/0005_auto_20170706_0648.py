# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2017-07-06 06:48
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('book', '0004_book_image_url'),
    ]

    operations = [
        migrations.AlterField(
            model_name='book',
            name='price',
            field=models.FloatField(),
        ),
    ]