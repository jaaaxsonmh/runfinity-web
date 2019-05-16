import React, { Component } from "react";

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";

const items = [
  {
    id: 1,
    altText: "Broken here :( ",
    src:
      "https://scontent.fakl2-1.fna.fbcdn.net/v/t1.0-9/38255355_1843582002345195_1530270940322070528_n.jpg?_nc_cat=107&_nc_ht=scontent.fakl2-1.fna&oh=66122d1d09c352524af51bc4603895c9&oe=5CF90815",

    developerName: "Jessica Menzies",
    caption: "Dunedin, NZ",
    review:
      "I suffered from an injury to my ACL. I used Runfinity to track my speed and distance of my runs while i recovered from ACL reconstruction surgery. It has helped me immensely to keep track of my progress, and to also prove the doctor, pyhsio and my parents I am doing the exercise!"
  },
  {
    id: 2,
    altText: "Broken here :( ",
    src:
      "https://scontent.fakl2-1.fna.fbcdn.net/v/t1.0-9/12801535_980267182069423_4658091181829951622_n.jpg?_nc_cat=101&_nc_ht=scontent.fakl2-1.fna&oh=0dd225f6eff722be3543ac711dcc3d7d&oe=5D54C999",

    developerName: "James Eady",
    caption: "Devonport, Auckland",
    review:
      "Before joining the team I regularly ran but needed that extra motivation. Being able to work on Runfinity while also improving my fitness and finally gaining the motivation has turned it into a habit and combined my two interests into one. Running, and development. I am grateful for the amazing oppurtunity."
  },
  {
    id: 3,
    altText: "Broken here :( ",
    src:
      "https://scontent.fakl2-1.fna.fbcdn.net/v/t1.0-9/11707622_855938134460776_5866291193239323147_n.jpg?_nc_cat=104&_nc_ht=scontent.fakl2-1.fna&oh=db4e1c1301f25c9e17454a90e38e7f37&oe=5CF9434D",
    developerName: "Jack Hosking",
    caption: "Hibiscus Coast, Auckland",
    review:
      "I have able to focus on my health by using and testing the application, I love finding the issues and then presenting a solution to better our product throughout our development on Runfinity. I am forever thankful for chosing to continue Runfinity, I have combined development with exercise. "
  },
  {
    id: 4,
    altText: "Broken here :( ",
    src:
      "https://scontent.fakl2-1.fna.fbcdn.net/v/t1.0-9/31306752_1945203859117744_7753746270975426560_n.jpg?_nc_cat=100&_nc_ht=scontent.fakl2-1.fna&oh=7fb41832a5a14c560c581094a7b6e835&oe=5CF21FA7",
    developerName: "Nikita Pustovoi",
    caption: "Auckland CBD, NZ",
    review:
      "When we first started working on Runfinity I was not able to get up and walk away from my keyboard. I was really interested in kotlin and have since re-wrote over 100,000 lines of Java code into kotlin. I use Runfinity when I ride my bike to keep track of my exercise. Watch out for when we incorporate cycling in the future!"
  },
  {
    id: 5,
    altText: "Broken here :( ",
    src:
      "https://scontent.fakl2-1.fna.fbcdn.net/v/t1.0-9/42494606_10210344253082973_4193796442239795200_n.jpg?_nc_cat=102&_nc_ht=scontent.fakl2-1.fna&oh=0d22e69eb72a32ff18d288bedf812165&oe=5CEBE893",
    developerName: "Hayden Parkinson",
    caption: "Eden Terrace, Auckland",
    review:
      "I am good friends with the creators of Runfinity and have watched Runfinity be developed over the past year and a half. Gave my advice here and there and played with the User Interface to give them feedback. I don't like cardio exercises, but I hear they are going to be adding training programs for gym goers soon."
  }
];

export class Testimonials extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map(item => {
      return (
        <CarouselItem
          className="custom-tag"
          tag="div"
          key={item.id}
          onExiting={this.onExiting}
          onExited={this.onExited}
        >
          <div class="container">
            <p className="carousel-review"> {item.review} </p>
          </div>
          <img className="carousel-info" src={item.src} alt={item.altText} />
          <CarouselCaption
            className="text-orange"
            captionText={item.caption}
            captionHeader={item.developerName}
          />
        </CarouselItem>
      );
    });

    return (
      <div>
        <style>
          {`.custom-tag {
                max-width: 100%;
                height: 400px;
                background: white;

              }
            .text-orange {
              color: orange;
            }

            .text-black {
              color: black;
              margin-top: 10px;
            }
            .container {
              width: 600px;
            }
            .carousel-info {
              border: 3px solid orange;
              border-radius: 150px !important;
              height: 150px;
              padding: 0px;
              width: 150px;
            }

            .carousel-info {
              padding-top: 0px;
            }
              `}
        </style>
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators
            items={items}
            activeIndex={activeIndex}
            onClickHandler={this.goToIndex}
          />
          {slides}
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={this.previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={this.next}
          />
        </Carousel>
      </div>
    );
  }
}
