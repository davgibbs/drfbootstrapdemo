from django.shortcuts import render
from rest_framework import viewsets
from .serializers import EventSerializer, CharacterSerializer
from .models import Event, HPCharacter


def index(request):
    return render(request, "characters/index.html", {})
    #return HttpResponse("Hello, world. You're at the characters index.")


class EventViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    serializer_class = EventSerializer

    def get_queryset(self):
        """
        Optionally restricts the returned purchases to a given user,
        by filtering against a `hp_character_id` query parameter in the URL.
        """
        queryset = Event.objects.all()
        character_id = self.request.query_params.get('character_id', None)
        if character_id is not None:
            queryset = queryset.filter(hp_character__id=character_id)

        return queryset


class HPCharacterViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = HPCharacter.objects.all()
    serializer_class = CharacterSerializer
