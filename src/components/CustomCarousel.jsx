import Carousel from 'react-bootstrap/Carousel';


export function CustomCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDmAJFYmSAxtXPeN-nWPNMk1kSrvsex3IiIw&s' style={{height:"40vw",width:"100vw"}}  text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN_XXSyurR9URFgpCWIxupleNhqa9AtkkaJw&s' style={{height:"40vw",width:"100vw"}} text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src='https://w0.peakpx.com/wallpaper/145/497/HD-wallpaper-lonely-tree-grass-shadow-sky-clouds-tree-green-nature-hill-field-blue.jpg' style={{height:"40vw",width:"100vw"}} text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

