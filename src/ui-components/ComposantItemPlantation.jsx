/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, Text, View } from "@aws-amplify/ui-react";
export default function ComposantItemPlantation(props) {
  const { plantation, overrides, ...rest } = props;
  return (
    <View
      width="280px"
      height="252px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "ComposantItemPlantation")}
      {...rest}
    >
      <View
        width="280px"
        height="252px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        border="1px SOLID rgba(235,219,219,1)"
        borderRadius="0px 10px 10px 0px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Rectangle 2")}
      ></View>
      <Text
        fontFamily="Roboto"
        fontSize="24px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="28.125px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="245px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="8.33%"
        bottom="80.56%"
        left="2.86%"
        right="9.64%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={plantation?.lib}
        {...getOverrideProps(overrides, "Nom de la plantation")}
      ></Text>
      <Text
        fontFamily="Lato"
        fontSize="14px"
        fontWeight="400"
        color="rgba(0,0,0,0.5)"
        lineHeight="16.80000114440918px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="190.67px"
        height="14px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="86.11%"
        bottom="8.33%"
        left="2.99%"
        right="28.92%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={plantation?.updatedAt}
        {...getOverrideProps(overrides, "Dernier Scan : 12/10/2023")}
      ></Text>
      <Text
        fontFamily="Lato"
        fontSize="14px"
        fontWeight="400"
        color="rgba(0,0,0,0.5)"
        lineHeight="16.80000114440918px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="257.01px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="40.08%"
        bottom="53.17%"
        left="2.99%"
        right="5.22%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={plantation?.nombreInfectes}
        {...getOverrideProps(
          overrides,
          "Nombre de plants infect\u00E9s : 60 / 200"
        )}
      ></Text>
      <Text
        fontFamily="Lato"
        fontSize="14px"
        fontWeight="400"
        color="rgba(0,0,0,0.5)"
        lineHeight="16.80000114440918px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="132.69px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="31.35%"
        bottom="61.9%"
        left="2.99%"
        right="49.63%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={plantation?.superficie}
        {...getOverrideProps(overrides, "Superficie : 22Km2")}
      ></Text>
      <Icon
        width="218px"
        height="0px"
        viewBox={{ minX: 0, minY: 0, width: 218, height: 1 }}
        paths={[
          {
            d: "M0 0L218 0L218 -1L0 -1L0 0Z",
            stroke: "rgba(0,0,0,0.5)",
            fillRule: "nonzero",
            strokeWidth: 1,
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="24.6%"
        bottom="75.4%"
        left="2.86%"
        right="19.29%"
        {...getOverrideProps(overrides, "Line 1")}
      ></Icon>
    </View>
  );
}
