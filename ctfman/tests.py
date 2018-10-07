from django.utils import timezone
from django.test import TestCase
from .models import Hackathon, Challenge
from rest_framework.test import APIClient, APITestCase
from rest_framework import status
from django.urls import reverse
from django.contrib.auth.models import User
from rest_framework import serializers
import json

class HackathonTestCase(APITestCase):
    def setUp(self):
        self.client = APIClient()

        self.user = User.objects.create(username="nerd")
        self.client.force_authenticate(user=self.user)
        # self.client.force_login(User.objects.get_or_create(username='johnvon')[0], backend=None)

        ## start with 2 hackathons in the db
        self.hackathon_data = {"name": 'CSAW2019', "rating": 2}
        self.response = self.client.post(
            reverse('Hackathon-list'),
            self.hackathon_data,
            format='json'
        )
        self.hackathon_data = {"name": 'CSAW2020', "rating": 2}
        self.response = self.client.post(
            reverse('Hackathon-list'),
            self.hackathon_data,
            format='json'
        )

    def test_authorization_is_enforced(self):
        """Test that the api has user authorization."""
        hackathon = Hackathon.objects.first()
        res = self.client.get(
            reverse('Hackathon-detail',
            kwargs={'pk': 1}), format="json"
         )
        self.assertEqual(res.status_code, status.HTTP_200_OK)

        self.client.logout()
        res = self.client.get(
            reverse('Hackathon-detail',
            kwargs={'pk': 1}), format="json"
         )
        self.assertEqual(res.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_model_can_create_a_hackathon(self):
        self.assertEqual(self.response.status_code, status.HTTP_201_CREATED)

    def test_api_can_get_a_hackathon(self):
        """Test the api can get a given hackathon."""
        hackathon = Hackathon.objects.first()
        response = self.client.get(
            reverse('Hackathon-detail',
            kwargs={'pk': hackathon.id}), format="json"
         )
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertContains(response, hackathon)

    def test_api_can_get_a_list_of_hackathons(self):
        """Test the api can get a given hackathon."""
        hackathon = Hackathon.objects.all()
        response = self.client.get(
            reverse('Hackathon-list'), format="json"
         )

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        # self.assertContains(response, hackathon)

    def test_api_can_update_hackathon(self):
        """Test the api can update a given hackathon."""
        change_hackathon = {'name': 'Another CTF', 'rating': 1}
        res = self.client.put(
            reverse('Hackathon-detail', kwargs={'pk': 1}),
            change_hackathon, format='json'
        )
        self.assertEqual(res.status_code, status.HTTP_200_OK )
        self.assertEqual(res.data['name'], "Another CTF")

    def test_api_validates_hackathon_rating(self):
        """Test the api validates the rating of hackathons. should be 1-5."""

        ## testing with a valid rating 
        change_hackathon = {'name': 'Another CTF', 'rating': 1}
        res = self.client.put(
            reverse('Hackathon-detail', kwargs={'pk': 1}),
            change_hackathon, format='json'
        )
        self.assertEqual(res.status_code, status.HTTP_200_OK)

        ## testing with an invalid rating
        change_hackathon = {'name': 'Another CTF', 'rating': 6}
        res = self.client.put(
            reverse('Hackathon-detail', kwargs={'pk': 1}),
            change_hackathon, format='json'
        )
        self.assertEqual(res.status_code, status.HTTP_400_BAD_REQUEST)


    def test_api_can_delete_hackathon(self):
        """Test the api can delete a hackathon."""
        hackathon = Hackathon.objects.last()
        response = self.client.delete(
            reverse('Hackathon-detail', kwargs={'pk': 1}),
            format='json',
            follow=True
            )
        self.assertEquals(response.status_code, status.HTTP_204_NO_CONTENT)

class ChallengeTestCase(APITestCase):
    def setUp(self):
        self.client = APIClient()
        self.hackathon = Hackathon.objects.create(
            name="CSAW2018"
        )
        self.hackathon1 = Hackathon.objects.create(
            name="CSAW2020"
        )
        self.user = User.objects.create(username="nerd")
        self.client.force_authenticate(user=self.user)
        # hackathon = Hackathon.objects.first()
        self.challenge = Challenge.objects.create(
            title="Hackme",
            remarks="None",
            hackathon=self.hackathon
        )
    def test_api_can_get_a_challenge(self): 
        res = self.client.get(reverse("Challenge-detail", kwargs={'pk': 1}),
            format='json',
            follow=True
        )
        self.assertEquals(res.status_code, status.HTTP_200_OK)
        
    def test_api_can_create_a_challenge(self):
        self.hackathon = Hackathon.objects.last()
        self.challenge_data = { "title": "HackMe", "remarks": "Nice reverse engineering challe", "hackathon": self.hackathon.id }
        response = self.client.post(
            reverse('Challenge-list'),
            self.challenge_data,
            format='json'
        )    
        self.assertEquals(response.status_code, status.HTTP_201_CREATED)

    def test_api_can_update_a_challenge(self):
        """Test the api can update a given hackathon."""
        self.hackathon = Hackathon.objects.last()
        change_challenge = {'title': 'single sign on challenge', 'hackathon': 1 }
        res = self.client.put(
            reverse('Challenge-detail', kwargs={'pk': 1}),
            change_challenge, format='json'
        )
        self.assertEqual(res.status_code, status.HTTP_200_OK)
        self.assertEqual(res.data['title'], "single sign on challenge")


    def test_api_can_delete_a_challenge(self):
        """Test the api can delete a challenge."""
        response = self.client.delete(
            reverse('Challenge-detail', kwargs={'pk': 1}),
            format='json',
            follow=True
            )
        self.assertEquals(response.status_code, status.HTTP_204_NO_CONTENT)

