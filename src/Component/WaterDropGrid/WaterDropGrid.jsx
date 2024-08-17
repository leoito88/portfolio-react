import { Box, Grid, GridItem } from "@chakra-ui/react";
import anime from "animejs";

const WaterDropGrid = () => {
  return (
    <Box
    position="absolute"
    display={["none","grid","grid","grid"]}
    top={[0,105,100,-150,-150]}
    left={[0,0,0,220,250]}
    width="100%"
    height="100%"
      // display="grid"
      placeContent="center"
      bg="transparent"
      px={0}
      py={0}
      zIndex={1}
    >
      <DotGrid />
    </Box>
  );
};

const GRID_WIDTH = 20;
const GRID_HEIGHT = 15;

const DotGrid = () => {
  const handleDotClick = (e) => {
    anime({
      targets: ".dot-point",
      scale: [
        { value: 1.35, easing: "easeOutSine", duration: 250 },
        { value: 1, easing: "easeInOutQuad", duration: 500 },
      ],
      translateY: [
        { value: -15, easing: "easeOutSine", duration: 250 },
        { value: 0, easing: "easeInOutQuad", duration: 500 },
      ],
      opacity: [
        { value: 1, easing: "easeOutSine", duration: 250 },
        { value: 0.5, easing: "easeInOutQuad", duration: 500 },
      ],
      delay: anime.stagger(100, {
        grid: [GRID_WIDTH, GRID_HEIGHT],
        from: e.target.dataset.index,
      }),
    });
  };

  const dots = [];
  let index = 0;

  for (let i = 0; i < GRID_WIDTH; i++) {
    for (let j = 0; j < GRID_HEIGHT; j++) {
      dots.push(
        <GridItem
          className="group"
          cursor="crosshair"
          rounded="full"
          p={2}
          transition="background-color 0.2s"
          _hover={{ bg: "green.200" }}
          data-index={index}
          key={`${i}-${j}`}
        >
          <Box
            className="dot-point"
            h={2}
            w={2}
            rounded="full"
            bgGradient="linear(to-b, green.700, green.400)"
            opacity={0.5}
            _groupHover={{
              bgGradient: "linear(to-b, indigo.600, white)",
            }}
            data-index={index}
          />
        </GridItem>
      );
      index++;
    }
  }

  return (
    <Grid
      onClick={handleDotClick}
      templateColumns={`repeat(${GRID_WIDTH}, 1fr)`}
      w="fit-content"
    >
      {dots}
    </Grid>
  );
};

export default WaterDropGrid;
