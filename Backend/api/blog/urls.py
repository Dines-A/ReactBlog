from . import views
from django.urls import path

urlpatterns = [
    path('', views.BlogView.as_view()),
    path('<int:pk>', views.SingleBlogView.as_view()),
]