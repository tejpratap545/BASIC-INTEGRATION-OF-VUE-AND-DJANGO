from .models import *
from rest_framework import serializers

class productSerializers(serializers.ModelSerializer):
    class Meta:
        model=products
        fields='__all__'
        def create(self,validated_data):
            return super().create(validated_data)
        def update(self,instance,validated_data):
            return super().update(instance,validated_data)
        
       
