/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ComposantImageFeuilleOverridesProps = {
    ComposantImageFeuille?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    "Card Area"?: PrimitiveOverrideProps<FlexProps>;
    "Group 1"?: PrimitiveOverrideProps<FlexProps>;
    "Rectangle 1"?: PrimitiveOverrideProps<ViewProps>;
    Sain?: PrimitiveOverrideProps<TextProps>;
    "Text Group"?: PrimitiveOverrideProps<FlexProps>;
    "Nom d\u2019image"?: PrimitiveOverrideProps<TextProps>;
    "832 34th Ave, Seattle, WA 98122"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ComposantImageFeuilleProps = React.PropsWithChildren<Partial<FlexProps> & {
    pHOTO?: any;
} & {
    overrides?: ComposantImageFeuilleOverridesProps | undefined | null;
}>;
export default function ComposantImageFeuille(props: ComposantImageFeuilleProps): React.ReactElement;
