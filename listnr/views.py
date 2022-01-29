from rest_framework import viewsets , permissions
from .serializers import ListnrSerializer, SongSerializer, ReviewSerializer
from .models import Song, Review, Listnr


class ListnrViewSet(viewsets.ModelViewSet):
    queryset = Listnr.objects.all()
    serializer_class = ListnrSerializer
    permission_classes= [permissions.IsAuthenticatedOrReadOnly]


class SongViewSet(viewsets.ModelViewSet):
    queryset = Song.objects.all()
    serializer_class = SongSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

class ReviewViewSet(viewsets.ModelViewSet):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]




