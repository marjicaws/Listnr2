from rest_framework import serializers, fields
from .models import *
from django.contrib.auth.models import User



class ReviewSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Review
        fields = '__all__'

class SongSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Song
        fields = '__all__'



class UserSerializer(serializers.ModelSerializer):
    def create(self, validated_data):
        return User.objects.create_superuser(**validated_data)

    class Meta:
        model = User
        fields = ['username', 'password', 'email']


class ListnrSerializer(serializers.ModelSerializer):
    songs = SongSerializer(many=True)
    class Meta:
        model = Listnr
        fields = '__all__'


    def create(self, validated_data):
        songs_data = validated_data.pop('songs')
        musician = Listnr.objects.create(**validated_data)
        for song_data in songs_data:
            Song.objects.create(name=musician, **song_data)
            return musician


    def update(self, instance, validated_data):
        songs_data = validated_data.pop('songs')
        songs = (instance.songs).all()
        songs = list(songs)
        instance.name = validated_data.get('name', instance.name)
        instance.bio = validated_data.get('bio', instance.bio)
        instance.career = validated_data.get('career', instance.career)
        instance.save()

        for song_data in songs_data:
            song = songs.pop(0)
            song.title = song_data.get('title', song.title)
            song.image = song_data.get('image', song.image)
            song.audio = song_data.get('audio', song.audio)
            song.save() 
        return instance