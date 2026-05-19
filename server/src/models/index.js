const dataStore = {
  users: [
    {
      id: 1,
      username: 'john_doe',
      email: 'john@example.com',
      name: 'John Doe',
      followers: [],
      following: [],
      createdAt: new Date().toISOString()
    },
    {
      id: 2,
      username: 'jane_doe',
      email: 'jane@example.com',
      name: 'Jane Doe',
      followers: [],
      following: [],
      createdAt: new Date().toISOString()
    }
  ],

  videos: [
    {
      id: 1,
      title: 'My First Video',
      description: 'This is my first video',
      url: 'https://example.com/video1.mp4',
      userId: 1,
      likes: [],
      createdAt: new Date().toISOString()
    },
    {
      id: 2,
      title: 'My Second Video',
      description: 'This is my second video',
      url: 'https://example.com/video2.mp4',
      userId: 2,
      likes: [],
      createdAt: new Date().toISOString()
    }
  ],

  comments: [
    {
      id: 1,
      text: 'Great video!',
      userId: 2,
      videoId: 1,
      likes: [],
      createdAt: new Date().toISOString()
    },
    {
      id: 2,
      text: 'Awesome content!',
      userId: 1,
      videoId: 2,
      likes: [],
      createdAt: new Date().toISOString()
    }
  ],

  nextIds: {
    users: 3,
    videos: 3,
    comments: 3
  }
};

module.exports = dataStore;