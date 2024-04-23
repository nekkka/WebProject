from django.contrib import admin
from django.urls import path
from api.views import *

urlpatterns = [
    path('categories/<int:id>/', get_category_by_id),
    path('categories/<int:id>/products/', get_products_by_category),
    path('products/<int:id>/',get_products_by_id),
    path('products/top_four/', get_four_best_products)
    ]