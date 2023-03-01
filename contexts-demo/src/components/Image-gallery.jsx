import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useFlags } from 'launchdarkly-react-client-sdk';
import { mountainWest, pacificNorthwest, westCoast, midWest, southRegion, northEast, midAtlantic, europe, asiaPacific, africa, southAmerica } from '../img-data/Image-data';

export default function MasonryImageList() {
const {region} = useFlags();

// code for mountain west
 if (region == "mountainWest") {
  return (
    <Box sx={{ width: 900, height: 300, overflowY: 'scroll' }}>
      <ImageList variant="masonry" cols={5} gap={8}>
        {mountainWest.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
        </ImageList>
    </Box>
  );
}
//code for pacific northwest
if (region == "pacificNorthwest") {
    return (
    <Box sx={{ width: 900, height: 300, overflowY: 'scroll' }}>
        <ImageList variant="masonry" cols={5} gap={8}>
        {pacificNorthwest.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
        </ImageList>
    </Box>
    );
}
// code for the west coast
if (region == "westCoast") {
    return (
    <Box sx={{ width: 900, height: 300, overflowY: 'scroll' }}>
        <ImageList variant="masonry" cols={5} gap={8}>
        {westCoast.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
        </ImageList>
    </Box>
    );
}
// code for the midwest region
if (region == "midWest") {
    return (
    <Box sx={{ width: 900, height: 300, overflowY: 'scroll' }}>
        <ImageList variant="masonry" cols={5} gap={8}>
        {midWest.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
        </ImageList>
    </Box>
    );
}
// code for the north east region
if (region == "northEast") {
    return (
    <Box sx={{ width: 900, height: 300, overflowY: 'scroll' }}>
        <ImageList variant="masonry" cols={5} gap={8}>
        {northEast.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
        </ImageList>
    </Box>
    );
}
// code for the Mid Atlantic Region
if (region == "midAtlantic") {
    return (
    <Box sx={{ width: 900, height: 300, overflowY: 'scroll' }}>
        <ImageList variant="masonry" cols={5} gap={8}>
        {midAtlantic.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
        </ImageList>
    </Box>
    );
}
// code for the south region
if (region == "southRegion") {
    return (
    <Box sx={{ width: 900, height: 300, overflowY: 'scroll' }}>
        <ImageList variant="masonry" cols={5} gap={8}>
        {southRegion.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
        </ImageList>
    </Box>
    );
}
//code for the European region
if (region == "europe") {
    return (
    <Box sx={{ width: 900, height: 300, overflowY: 'scroll' }}>
        <ImageList variant="masonry" cols={5} gap={8}>
        {europe.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
        </ImageList>
    </Box>
    );
}
// code of the APAC region
if (region == "asiaPacific") {
    return (
    <Box sx={{ width: 900, height: 300, overflowY: 'scroll' }}>
        <ImageList variant="masonry" cols={5} gap={8}>
        {asiaPacific.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
        </ImageList>
    </Box>
    );
}
// code for the African region
if (region == "africa") {
    return (
    <Box sx={{ width: 900, height: 300, overflowY: 'scroll' }}>
        <ImageList variant="masonry" cols={5} gap={8}>
        {africa.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
        </ImageList>
    </Box>
    );
}

// code for the African region
if (region == "southAmerica") {
    return (
    <Box sx={{ width: 900, height: 300, overflowY: 'scroll' }}>
        <ImageList variant="masonry" cols={5} gap={8}>
        {southAmerica.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
        </ImageList>
    </Box>
    );
}
}