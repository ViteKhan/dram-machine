import { Box, SkeletonText } from '@chakra-ui/react';

export const Speaker = () => {
  return (
    <Box w={'100px'} m={'5px 0 20px 0'}>
      <SkeletonText mt={'2px'} noOfLines={1} speed={0} skeletonHeight={1} startColor={'darkBg'}/>
      <SkeletonText mt={'2px'} noOfLines={1} speed={0} skeletonHeight={1} startColor={'darkBg'}/>
      <SkeletonText mt={'2px'} noOfLines={1} speed={0} skeletonHeight={1} startColor={'darkBg'}/>
      <SkeletonText mt={'2px'} noOfLines={1} speed={0} skeletonHeight={1} startColor={'darkBg'}/>
      <SkeletonText mt={'2px'} noOfLines={1} speed={0} skeletonHeight={1} startColor={'darkBg'}/>
      <SkeletonText mt={'2px'} noOfLines={1} speed={0} skeletonHeight={1} startColor={'darkBg'}/>
      <SkeletonText mt={'2px'} noOfLines={1} speed={0} skeletonHeight={1} startColor={'darkBg'}/>
      <SkeletonText mt={'2px'} noOfLines={1} speed={0} skeletonHeight={1} startColor={'darkBg'}/>
    </Box>
  );
};