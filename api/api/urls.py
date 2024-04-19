"""
URL configuration for midnight api
"""
from django.contrib import admin
from django.urls import path
from .views import search_books

urlpatterns = [
    path('admin/', admin.site.urls),
    path('search-books/', search_books, name='search_books')
]
