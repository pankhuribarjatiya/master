export class Restaurant {

  id: number;
  name: string;
  location: string;
  imageUrl: string;

  constructor(id, name, location, imageUrl = 'https://pbs.twimg.com/profile_images/990973421835071489/ZYY6dIm9_400x400.jpg') {
    this.id = id
    this.name = name
    this.location = location
    this.imageUrl = imageUrl
  }
}

