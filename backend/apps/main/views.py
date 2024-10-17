from . import models
from rest_framework import serializers, viewsets


class ToolSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.Tool
        fields = ['id', 'title', 'description', 'link']


class ToolViewSet(viewsets.ModelViewSet):
    queryset = models.Tool.objects.all()
    serializer_class = ToolSerializer
