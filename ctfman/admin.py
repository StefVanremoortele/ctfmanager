from django.contrib import admin
from .models import Hackathon, Challenge, LogEvent


# @admin.register(BlogPost)
# class PostAdmin(admin.ModelAdmin):
#     list_display = ('user', 'date', 'body')
#     ordering = ['-date']

@admin.register(Hackathon)
class HackathonAdmin(admin.ModelAdmin):
    list_display = ('name', 'startDate', 'endDate')


@admin.register(Challenge)
class ChallengeAdmin(admin.ModelAdmin):
    list_display = ('title', 'remarks')


@admin.register(LogEvent)
class LogEventAdmin(admin.ModelAdmin):
    list_display = ('level', 'message')

