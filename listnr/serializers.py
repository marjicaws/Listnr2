from rest_framework import serializers
from .models import Listnr, Song, Review

class ListnrSerializer(serializers.ModelSerializer):
    songs = serializers.StringRelatedField(many=True)


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

class UserSerializer(serializers.ModelSerializer):
    def create(self, validated_data):
        return User.objects.create_superuser(**validated_data)

    class Meta:
        model = User
        fields = ['username', 'password', 'email']