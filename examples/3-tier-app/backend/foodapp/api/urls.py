from django.urls import path
from .views import get_foods, orders

urlpatterns = [
    path('foods/', get_foods),
    path('orders/', orders),
]