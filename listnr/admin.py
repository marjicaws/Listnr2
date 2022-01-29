from django.contrib import admin
from .models import Listnr, Song, Review
# Register your models here.
admin.site.register(Listnr)
admin.site.register(Song)
admin.site.register(Review)