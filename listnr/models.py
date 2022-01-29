from django.db import models

# Create your models here.

class Listnr(models.Model):
    name = models.CharField(max_length=256)
    bio = models.CharField(max_length=400, default='A Music Lover!')
    career = models.CharField(max_length=200, default='Full-time Listnr')
    
    def __str__(self):
        return self.name
    
class Song(models.Model):
    title = models.CharField(max_length=256)
    image = models.CharField(max_length=300, blank=True)
    audio = models.CharField(max_length=300)
    listnr = models.ForeignKey(Listnr, on_delete=models.CASCADE, related_name='songs'  )

    def __str__(self):
        return self.title

class Review(models.Model):
    review = models.CharField(max_length=300)
    review_title = models.CharField(max_length=256)
    song = models.ForeignKey(Song, on_delete=models.CASCADE, related_name='reviews')
    listnr = models.ForeignKey(Listnr, on_delete=models.CASCADE, related_name='reviews')
    likes = models.IntegerField()
    mix_error = models.BooleanField(default=False)
    recording_error = models.BooleanField(default=False)
    writing_changes = models.BooleanField(default=False)

    def __str__(self):
        return self.rev_title

