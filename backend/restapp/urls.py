from django.urls import path
from django.urls import path, re_path
 
from . import views
 

urlpatterns = [
   
    path('productsdetail/',views.ProductDetail.as_view()),
    path('productsdetail/<int:id>',views.ProductDetail.as_view())
]
 