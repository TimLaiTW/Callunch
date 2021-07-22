from django.shortcuts import render
from .serializers import CallLunchSerializer 
from rest_framework import viewsets      
from .models import LunchList                 

class CallLunchView(viewsets.ModelViewSet):  
    serializer_class = CallLunchSerializer   
    queryset = LunchList.objects.all() 