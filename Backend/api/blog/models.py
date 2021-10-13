from django.db import models
from django.contrib.auth.models import User

class BlogPost(models.Model):
    author = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    body = models.TextField()
    title = models.CharField(max_length=120)
    publish_date = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return self.title

