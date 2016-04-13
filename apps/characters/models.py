from __future__ import unicode_literals

from django.db import models


class HPCharacter(models.Model):
    full_name = models.CharField(max_length=100, unique=True)

    def __unicode__(self):
        return self.full_name

    class Meta:
        verbose_name = 'Harry Potter Character'
        verbose_name_plural = 'Harry Potter Characters'


class Event(models.Model):
    date = models.DateField('date of event')
    title = models.CharField(max_length=100)
    short_description = models.CharField(max_length=300)
    hp_character = models.ForeignKey(HPCharacter, verbose_name='Character')  

    def __unicode__(self):
        return '{hp_character}-{title}'.format(hp_character=self.hp_character, title=self.title)

    class Meta:
        verbose_name = 'event'
        verbose_name_plural = 'events'
        unique_together = [['hp_character', 'title']]
