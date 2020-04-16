from django.urls import path
from django.urls import path, re_path
 
from . import views
 
from rest_framework.authtoken.views import obtain_auth_token 
from rest_framework_jwt.views import obtain_jwt_token, refresh_jwt_token
urlpatterns = [
   
    path('productsdetail/',views.ProductDetail.as_view()),
    path('productsdetail/<int:id>',views.ProductDetail.as_view()),
   path('auth/obtain_auth_token/', obtain_auth_token, name='api_token_auth'),

   path('auth/obtain_token/', obtain_jwt_token),
  path('auth/refresh_token/', refresh_jwt_token),
]
 