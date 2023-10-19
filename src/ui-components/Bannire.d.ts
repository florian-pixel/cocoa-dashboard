/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ImageProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BannireOverridesProps = {
    Bannire?: PrimitiveOverrideProps<ViewProps>;
    "Bani\u00E8re-Dashboard"?: PrimitiveOverrideProps<ViewProps>;
    "[removal 1"?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type BannireProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: BannireOverridesProps | undefined | null;
}>;
export default function Bannire(props: BannireProps): React.ReactElement;
