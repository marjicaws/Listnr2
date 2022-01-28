from rest_framework import serializers
from .models import Listnr, Song, Review

class ListnrSerializer(serializers.ModelSerializer):

    class Meta:
        model = Listnr
        fields = '__all__'

class SongSerializer(serializers.ModelSerializer):
    
    

    class Meta:
        model = Song
        fields = '__all__'

class ReviewSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Review
        fields = '__all__'