# -*- coding: utf-8 -*-
# Generated by Django 1.9.5 on 2016-04-13 14:08
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('characters', '0002_auto_20160413_1405'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='hpcharacter',
            name='date_of_birth',
        ),
    ]
