from django.shortcuts import render

# Create your views here.
from .models import products
from .serializers import productSerializers
from rest_framework.response import Response
from rest_framework import mixins
from rest_framework import generics
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_protect
from django.views.decorators.csrf import csrf_exempt 

class ProductDetail(mixins.ListModelMixin,
                  mixins.CreateModelMixin,
                  
                  mixins.RetrieveModelMixin,
                  mixins.UpdateModelMixin,
                  mixins.DestroyModelMixin,
                  generics.GenericAPIView):
    
    queryset=products.objects.all()
    serializer_class=productSerializers
    lookup_field = 'id'
    @method_decorator(csrf_exempt)
    def get(self, request, id=None):
        if id:
            return self.retrieve(request, id)
        else:
            return self.list(request)
    
    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)