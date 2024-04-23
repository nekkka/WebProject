from django.http import JsonResponse
from django.shortcuts import render

from api.models import *

def get_products_by_category(request, category_id):
    products = Product.objects.filter(category_id=category_id)
    products_json = [product.to_json() for product in products]
    return JsonResponse(products_json, safe=False)

def get_categories(request):
    categories = Category.objects.all()
    categories_json = [{'id': category.id, 'name': category.name} for category in categories]
    return JsonResponse(categories_json, safe=False)

def get_category_by_id(request, category_id):
    try:
        category = Category.objects.get(id=category_id)
        category_json = {'id': category.id, 'name': category.name}
        return JsonResponse(category_json, safe=False)
    except Category.DoesNotExist:
        return JsonResponse({'error': 'Category not found'}, status=404)

def get_products_by_id(request, product_id):
    try:
        product = Product.objects.get(id=product_id)
        product_json = {
            'id': product.id,
            'name': product.name,
            'description': product.description,
            'price': product.price,
            'category': {'id': product.category.id, 'name': product.category.name}
        }
        return JsonResponse(product_json, safe=False)
    except Product.DoesNotExist:
        return JsonResponse({'error': 'Product not found'}, status=404)

def get_four_best_products(request):
    products = Product.objects.order_by('-rating')[:4]
    products_json = [{
        'id': product.id,
        'name': product.name,
        'description': product.description,
        'price': product.price,
        'category': {'id': product.category.id, 'name': product.category.name}
    } for product in products]
    return JsonResponse(products_json, safe=False)