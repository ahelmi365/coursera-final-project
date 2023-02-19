import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack>
      <VStack bg="#fff" borderRadius="12px">
        <Image
          src={imageSrc}
          alt={title}
          borderRadius="12px"
          objectFit="cover"
        />
        <VStack color="#000" alignItems="flex-start" pl="5">
          <Heading as="h2" size="md">
            {title}
          </Heading>
          <Text color="gray">{description}</Text>
          <Text>
            See more <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </Text>
        </VStack>
      </VStack>
    </VStack>
  );
};

export default Card;
