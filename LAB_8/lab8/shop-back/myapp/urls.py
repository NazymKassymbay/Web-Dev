from django.urls import path
from .views import ProductList, CategoryList, ProductDetail, CategoryDetail, CategoryProducts


urlpatterns = [
    path('products/', ProductList.as_view(), name="products-list"),
    path('products/<int:pk>/', ProductDetail.as_view(), name="product"),
    path('categories/', CategoryList.as_view(), name="category-list"),
    path('categories/<int:pk>/', CategoryDetail.as_view(), name="category"),
    path('categories/<int:pk>/products', CategoryProducts.as_view(), name="category-products"),
]