from django.contrib import admin
from .models import LunchList
# Register your models here.
class CallLunchAdmin(admin.ModelAdmin):
    list = ('name', 'order', 'completed')

admin.site.register(LunchList, CallLunchAdmin)