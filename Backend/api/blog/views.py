from django.http import request
from rest_framework import serializers
from rest_framework.generics import GenericAPIView, ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.mixins import CreateModelMixin, ListModelMixin
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import BlogPost
from .serializers import BlogSerializer
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from django.shortcuts import get_object_or_404


# class BlogView(APIView):
#     permission_classes = (IsAuthenticatedOrReadOnly,)

#     def get(self, request, pk):
#         if pk:
#             article = get_object_or_404(BlogPost.objects.all(), pk=pk)
#             serializer = BlogSerializer(article)
#             return Response({"blog": serializer.data})
#         # blogs = BlogPost.objects.all()
#         # serialized_blogs = BlogSerializer(blogs, many=True)
#         # return Response({"blogs": serialized_blogs.data})

#     # def post(self, request):
#     #     blog = request.data
#     #     serializer = BlogSerializer(data=blog)
#     #     # serializer.update('author', request.user)
#     #     if serializer.is_valid(raise_exception=True):
#     #         blog_saved = serializer.save()
#     #     return Response({"success": "Blog post '{}' created successfully".format(blog_saved.title)})

#     def put(self, request, pk):
#         saved_blog = get_object_or_404(BlogPost.objects.all(), pk=pk)
#         data = request.data.get('blog')
#         serializer = BlogSerializer(instance=saved_blog, data=data, partial=True)

#         if serializer.is_valid(raise_exception=True):
#             blog_saved = serializer.save()
#         return Response({"success": "Article '{}' updated successfully".format(blog_saved.title)})


#     def delete(self, request, pk):
#         # Get object with this pk
#         article = get_object_or_404(BlogPost.objects.all(), pk=pk)
#         article.delete()
#         return Response({"message": "Article with id `{}` has been deleted.".format(pk)},status=204)


# class BlogListView(APIView):
#     permission_classes = (IsAuthenticatedOrReadOnly,)

#     def get(self, request):
#         blogs = BlogPost.objects.all()
#         serialized_blogs = BlogSerializer(blogs, many=True)
#         return Response({"blogs": serialized_blogs.data})

#     def post(self, request):
#         blog = request.data.get('blog')
#         serializer = BlogSerializer(data=blog)
#         if serializer.is_valid(raise_exception=True):
#             blog_saved = serializer.save()
#         return Response({"success": "Blog post '{}' created successfully".format(blog_saved.title)})


class BlogView(ListCreateAPIView):
    queryset = BlogPost.objects.all()
    serializer_class = BlogSerializer

    def perform_create(self, serializer):
        author = self.request.user
        return serializer.save(author=author)


class SingleBlogView(RetrieveUpdateDestroyAPIView):
    queryset = BlogPost.objects.all()
    serializer_class = BlogSerializer