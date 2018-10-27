from .models import Challenge, Hackathon, LogEvent
from django.contrib.auth.models import User
from rest_framework import serializers



class UserSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')

    def create(self, validated_data):
        user = User.objects.create_user(validated_data['username'], validated_data['email'], validated_data['password'])        
        user.set_password(validated_data['password'])
        user.save()

        return user


# class BlogPostSerializer(serializers.ModelSerializer):
#     user = serializers.StringRelatedField(many=False)

#     class Meta:
#         model = BlogPost
#         fields = ('id', 'user', 'date', 'body')
#         read_only_field = ['date']


#     def validate_body(self, value):
#         qs = BlogPost.objects.filter(body__iexact=value)
#         if qs.exists():
#             raise serializers.ValidationError("This blog post was already made")
#         return value


class HackathonSerializer(serializers.ModelSerializer):

    # owner = serializers.ReadOnlyField(source='owner.username') # ADD THIS LINE
    challenges = serializers.RelatedField(many=True, read_only=True)

    class Meta:
        model = Hackathon
        # fields = ('id', 'name', "owner", 'startDate', 'endDate')
        fields = ('id', 'name', 'startDate', 'endDate', 'challenges', 'participants', 'rating')

    def validate(self, data):
        try:
            rating = data['rating']
            if rating is not None:
                val = int(rating)
                if not (1 <= val <= 5):
                    raise serializers.ValidationError('Invalid rating. Should be 1-5')
        except KeyError:
            data['rating'] = None

        return data
        # read_only_fields = ('startDate', 'endDate')
    # def _user(self, obj):
    #     request = getattr(self.context, 'request', None)
    #     if request:
    #         return request.user


    # def create(self, validated_data):
    #     # a = CTF(name=validated_data['name'])
    #     # a.save()
    #     return Hackathon.objects.create(**validated_data)
        

class ChallengeSerializer(serializers.ModelSerializer):

    class Meta:
        model = Challenge
        fields = ('id', 'title', 'hackathon', 'solvers', 'type')



### EXAMPLE
# class SnippetSerializer(serializers.Serializer):
#     id = serializers.IntegerField(read_only=True)
#     title = serializers.CharField(required=False, allow_blank=True, max_length=100)
#     code = serializers.CharField(style={'base_template': 'textarea.html'})
#     linenos = serializers.BooleanField(required=False)
#     language = serializers.ChoiceField(choices=LANGUAGE_CHOICES, default='python')
#     style = serializers.ChoiceField(choices=STYLE_CHOICES, default='friendly')

    # def create(self, validated_data):
    #     """
    #     Create and return a new `Snippet` instance, given the validated data.
    #     """
    #     return Snippet.objects.create(**validated_data)

    # def update(self, instance, validated_data):
    #     """
    #     Update and return an existing `Snippet` instance, given the validated data.
    #     """
    #     instance.title = validated_data.get('title', instance.title)
    #     instance.code = validated_data.get('code', instance.code)
    #     instance.linenos = validated_data.get('linenos', instance.linenos)
    #     instance.language = validated_data.get('language', instance.language)
    #     instance.style = validated_data.get('style', instance.style)
    #     instance.save()
    #     return instance


class LogEventSerializer(serializers.ModelSerializer):

    class Meta:
        model = LogEvent
        fields = ('level', 'message')
        