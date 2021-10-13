from rest_framework import serializers
from .models import BlogPost


class BlogSerializer(serializers.ModelSerializer):

    class Meta:
        model = BlogPost
        fields = ('id', 'title', 'body', 'author', 'publish_date')
    # id = serializers.IntegerField(required=False)
    # title = serializers.CharField(max_length=120)
    # body = serializers.CharField()
    # publish_date = serializers.DateTimeField(format="%d-%m-%Y", required=False)
    # author = serializers.CharField(required=False)

    # def create(self, validated_data):
    #     return BlogPost.objects.create(**validated_data)

    # def update(self, instance, validated_data):
    #     instance.title = validated_data.get('title', instance.title)
    #     # instance.description = validated_data.get('description', instance.description)
    #     instance.body = validated_data.get('body', instance.body)
    #     instance.author = validated_data.get('author', instance.author)

    #     instance.save()
    #     return instance


