from rest_framework import viewsets
from .serializers import ListnrSerializer, SongSerializer, ReviewSerializer
from .models import Song, Review, Listnr


class ListnrViewSet(viewsets.ModelViewSet):
    queryset = Listnr.objects.all()
    serializer_class = ListnrSerializer

class SongViewSet(viewsets.ModelViewSet):
    queryset = Song.objects.all()
    serializer_class = SongSerializer

class ReviewViewSet(viewsets.ModelViewSet):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer

# Create your views here.


