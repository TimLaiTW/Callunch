from rest_framework import serializers
from .models import LunchList

class CallLunchSerializer(serializers.ModelSerializer):
    class Meta:
        model = LunchList
        fields = ('id' ,'name', 'order', 'completed')