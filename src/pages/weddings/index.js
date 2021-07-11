import { Box } from "@chakra-ui/react"
import { GrFormNext } from "@react-icons/all-files/gr/GrFormNext"
import { GrFormPrevious } from "@react-icons/all-files/gr/GrFormPrevious"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import SlideShow from "../../components/slideshow"
import "../../components/styles/slide.scss"

const Weddings = ({ location }) => {
  /* console.log(location) */
  return (
    <Box className="text-center container" mt={20} w="100vw">
      {/*slideshow properties:
    - autoPlay => can be ture, false (default: false)
    - activeSlideDuration => can be in milliseconds (default: 3000)
    - interactionMode => can be:
    (swipe => change slides by swiping to right or left) or
    (hover => pause a slide on hover)
    (default is swipe)
    - alignCaption => can be center, left, right (default: center)
    - alignIndicators => can be center, left, right (default: center)
    - indicatorsColor => allows you to change the indicators color (default: #fff) 
    - useRightLeftTriangles => can be true or false (defalut: false) 
    - rightTriangleColor or leftTriangleColor => set the background color of the right and the left triangles (default: #fff)
    - rightIcon or leftIcon => set the right or left icon (it can be "svg" or "fontawesome icon") if you want to change the color use inline styles on the icon as follow:
    (for svg) =>  style={{fill: "#000"}} defalut is black
    (for fontawesome) => style={{color: "#000"}} default is black (don't forget to add fontawesome to your project) */}
      {/* <h3>React Slide show</h3> */}
      <SlideShow
        autoPlay={true}
        activeSlideDuration={9000}
        interactionMode="swipe"
        alignCaption="center"
        alignIndicators="center"
        indicatorsColor="#fff"
        useRightLeftTriangles={true}
        rightTriangleColor="#fff0"
        leftTriangleColor="#fff0"
        rightIcon={<GrFormNext />}
        leftIcon={<GrFormPrevious />}
      >
        <div>
          <StaticImage
            src="https://res.cloudinary.com/nottherealalanturing/image/upload/q_66/v1625840795/assets/weddings/wedding_3_p3svuw.webp"
            alt="contact"
            layout="constrained"
            aspectRatio={3}
            objectPosition="bottom"
            objectFit="scale-down"
          />
          <div className="carousel-caption">
            <h3 className="carousel-caption-title">Frist title</h3>
            <p className="carousel-caption-subtitle">First subtitle</p>
          </div>
        </div>
        <div>
          <StaticImage
            src="https://res.cloudinary.com/nottherealalanturing/image/upload/q_70/v1625838453/assets/weddings/wedding_13_n7vbz2.webp"
            alt="contact"
            layout="constrained"
            aspectRatio={3}
          />
          <div className="carousel-caption">
            <h3 className="carousel-caption-title">Second title</h3>
            <p className="carousel-caption-subtitle">Second subtitle</p>
          </div>
        </div>
      </SlideShow>
    </Box>
  )
}

export default Weddings
