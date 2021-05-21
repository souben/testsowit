from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('<int:plot_id>/', views.plot_details, name='details'),
    path('<int:plot_id>/add/', views.create, name='add')
]