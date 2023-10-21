/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ComposantItemPlantationOverridesProps = {
    ComposantItemPlantation?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 2"?: PrimitiveOverrideProps<ViewProps>;
    "0001 1"?: PrimitiveOverrideProps<ImageProps>;
    "Nom de la plantation"?: PrimitiveOverrideProps<TextProps>;
    "Dernier Scan : 12/10/2023"?: PrimitiveOverrideProps<TextProps>;
    "Nombre de plants infect\u00E9s : 60 / 200"?: PrimitiveOverrideProps<TextProps>;
    "Superficie : 22Km2"?: PrimitiveOverrideProps<TextProps>;
    "Line 1"?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type ComposantItemPlantationProps = React.PropsWithChildren<Partial<ViewProps> & {
    pLANTATION?: any;
} & {
    overrides?: ComposantItemPlantationOverridesProps | undefined | null;
}>;
export default function ComposantItemPlantation(props: ComposantItemPlantationProps): React.ReactElement;
