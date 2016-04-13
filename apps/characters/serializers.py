from rest_framework import serializers

from .models import Event, HPCharacter


class EventSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Event
        fields = ('date', 'title', 'short_description', 'hp_character')


class CharacterSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = HPCharacter
        fields = ('full_name',)
