import user1 from '../assets/images/user1.png';
import user2 from '../assets/images/user2.png';
import user3 from '../assets/images/user3.png';

export const CURRENT_USER = {
  id: 'me',
  name: 'Takumi',
  age: 28,
  image: user2, // Reusing for demo
  bio: 'Looking for a golf buddy to practice with on weekends!',
  bestScore: 92,
  golfExperience: '3 years',
  location: { lat: 35.6812, lng: 139.7671 } // Tokyo Station
};

export const USERS = [
  {
    id: '1',
    name: 'Eri',
    age: 24,
    image: user1,
    distance: '2.5km',
    bio: 'Golf beginner! Want to reach 100 within this year. Let practice together!',
    golfExperience: '1 year',
    bestScore: 108,
    tags: ['Beginner', 'Weekend', 'Tokyo'],
    practiceFrequency: 'Weekly'
  },
  {
    id: '2',
    name: 'Kenji',
    age: 32,
    image: user2,
    distance: '5.0km',
    bio: 'Serious about improving swing. Looking for stoic practice partners.',
    golfExperience: '5 years',
    bestScore: 82,
    tags: ['Serious', 'Morning', 'Chiba'],
    practiceFrequency: '2-3 times/week'
  },
  {
    id: '3',
    name: 'Sayaka',
    age: 29,
    image: user3,
    distance: '1.2km',
    bio: 'Love golf fashion and fun rounds. ⛳️',
    golfExperience: '2 years',
    bestScore: 95,
    tags: ['Fun', 'Fashion', 'Driving Range'],
    practiceFrequency: 'Monthly'
  },
  {
    id: '4',
    name: 'Hiro',
    age: 27,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    distance: '8km',
    bio: 'Just started golf last month. Need advice!',
    golfExperience: '1 month',
    bestScore: '-',
    tags: ['Newbie', 'After Work'],
    practiceFrequency: 'Weekly'
  },
  {
    id: '5',
    name: 'Yui',
    age: 26,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    distance: '12km',
    bio: 'Casual player. I like hitting balls at Lotte Kasai.',
    golfExperience: '4 years',
    bestScore: 89,
    tags: ['Casual', 'Beer'],
    practiceFrequency: 'Weekends'
  }
];

export const PLACES = [
  {
    id: 'p1',
    name: 'Lotte Kasai Golf',
    address: '3-1 Rinkaicho, Edogawa City, Tokyo',
    rating: 4.5,
    images: ['https://lh5.googleusercontent.com/p/AF1QipN...'], // Mock
    coords: { lat: 35.645, lng: 139.860 }
  },
  {
    id: 'p2',
    name: 'Meguro Golf Range',
    address: 'Meguro City, Tokyo',
    rating: 4.0,
    coords: { lat: 35.634, lng: 139.710 }
  }
];
