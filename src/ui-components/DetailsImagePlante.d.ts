/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DetailsImagePlanteOverridesProps = {
    DetailsImagePlante?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 3"?: PrimitiveOverrideProps<ViewProps>;
    "0001 2"?: PrimitiveOverrideProps<ImageProps>;
    "Image Name"?: PrimitiveOverrideProps<TextProps>;
    Commentaire?: PrimitiveOverrideProps<TextProps>;
    "Group 1"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 1"?: PrimitiveOverrideProps<ViewProps>;
    Sain?: PrimitiveOverrideProps<TextProps>;
    "Scann\u00E9 le 12/03/2014 17h14"?: PrimitiveOverrideProps<TextProps>;
    "Agent Op\u00E9rateur :"?: PrimitiveOverrideProps<TextProps>;
    "Coulibaly Aboubacar"?: PrimitiveOverrideProps<TextProps>;
    "Line 2"?: PrimitiveOverrideProps<IconProps>;
    "Rectangle 4"?: PrimitiveOverrideProps<ViewProps>;
    "Group 2"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 5"?: PrimitiveOverrideProps<ViewProps>;
    Envoyer?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type DetailsImagePlanteProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: DetailsImagePlanteOverridesProps | undefined | null;
}>;
export default function DetailsImagePlante(props: DetailsImagePlanteProps): React.ReactElement;
