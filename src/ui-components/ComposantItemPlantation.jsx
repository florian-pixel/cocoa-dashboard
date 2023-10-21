/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function ComposantItemPlantation(props) {
  const { pLANTATION, overrides, ...rest } = props;
  return (
    <View
      width="536px"
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
        width="262px"
        height="252px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="51.12%"
        right="0%"
        border="1px SOLID rgba(235,219,219,1)"
        borderRadius="0px 10px 10px 0px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Rectangle 2")}
      ></View>
      <Image
        width="51.12%"
        height="100%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="48.88%"
        border="1px SOLID rgba(235,219,219,1)"
        borderRadius="10px 0px 0px 10px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "0001 1")}
      ></Image>
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
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="8.33%"
        bottom="80.56%"
        left="53.73%"
        right="4.48%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={pLANTATION?.lib}
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
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="90.87%"
        bottom="2.38%"
        left="67.16%"
        right="1.49%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Dernier Scan : 12/10/2023"
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
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="33.33%"
        bottom="59.92%"
        left="53.73%"
        right="4.1%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Nombre de plants infectés : 60 / 200"
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
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="23.81%"
        bottom="69.44%"
        left="53.73%"
        right="24.44%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={`${"Superficie : "}${pLANTATION?.superficie}`}
        {...getOverrideProps(overrides, "Superficie : 22Km2")}
      ></Text>
      <Icon
        width="229px"
        height="0px"
        viewBox={{ minX: 0, minY: 0, width: 229, height: 1 }}
        paths={[
          {
            d: "M0 0L229 0L229 -1L0 -1L0 0Z",
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
        top="21.03%"
        bottom="78.97%"
        left="53.73%"
        right="3.54%"
        {...getOverrideProps(overrides, "Line 1")}
      ></Icon>
    </View>
  );
}
